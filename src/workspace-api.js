import Axios from 'axios'
import qs from 'qs'
import JSEncrypt from 'jsencrypt'

Axios.defaults.timeout = 5000
Axios.defaults.baseURL = 'https://localhost:444'
Axios.defaults.withCredentials = true

let initialize = false
let RSAEncrypt = new JSEncrypt()
let RSA_MAX_SIZE = parseInt('50')

function clearLocal (keyName) {
  localStorage.removeItem(keyName)
}

function localIsEmpty (keyName) {
  return localStorage.getItem(keyName) === null || localStorage.getItem(keyName) === undefined
}

function wait (ms, params) {
  return new Promise(resolve => { setTimeout(() => { resolve(params) }, ms) })
}

function initializePublicKey (params) {
  return new Promise((resolve, reject) => {
    if (!initialize) {
      clearLocal('public_key')
      clearLocal('public_key_timestamp')
      Axios.post('/public_key').then(
        (response) => {
          console.log('[workspace-website] Initialize RSA public key complete.')
          localStorage.setItem('public_key', response.data.workspace_content.public_key)
          localStorage.setItem('public_key_timestamp', new Date().getTime())
          RSAEncrypt.setPublicKey(localStorage.getItem('public_key'))
          publicKeyUpdateService()
          initialize = true
          resolve(params)
        }
      ).catch(response => {
        reject(response)
      })
    } else {
      resolve(params)
    }
  })
}

function baseUpload (file) {
  return new Promise((resolve, reject) => {
    let param = new FormData()
    param.append('file', file, file.name)
    Axios.post('/source/upload', param, {type: 'file'}).then((response) => {
      resolve(response.data['workspace_content'])
    }).catch((error) => {
      reject(error)
    })
  })
}

function requestHandler (params) {
  return new Promise((resolve, reject) => {
    Axios({method: params['method'], url: params['url'], data: params['params'], withCredentials: true})
      .then((response) => {
        if (response === undefined) {
          reject(new Error('Network error'))
        } else if (response.data['workspace_content']['status_code'] === undefined) {
          reject(new Error('Can not resolve response content'))
        } else {
          switch (response.data['workspace_content']['status_code']) {
            case WORKSPACE_STATUS.SUCCESS:
              resolve(response.data['workspace_content'])
              break
            case WORKSPACE_STATUS.FAIL:
              let exceptionCode = response.data['workspace_content']['result_code']
              if ((exceptionCode === SERVER_EXCEPTION.ACCESS_DENIED || exceptionCode === SERVER_EXCEPTION.ACCESS_RESTRICTED) && params['vue']) {
                params['vue'].$dialog.create({ message: response.data['workspace_content']['exception_information'] })
              } else {
                reject(response.data['workspace_content'])
              }
              break
          }
        }
      })
      .catch(() => {
        reject(new Error('Service unavailable'))
      })
  })
}

function request (delay, requestParams) {
  return new Promise((resolve, reject) => {
    wait(delay, requestParams)
      .then(initializePublicKey)
      .then(requestHandler)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function refreshPublicKey () {
  request(0, {url: '/public_key', method: 'post', params: {}})
    .then((response) => {
      localStorage.setItem('public_key', response.public_key)
      localStorage.setItem('public_key_timestamp', new Date().getTime())
      RSAEncrypt.setPublicKey(localStorage.getItem('public_key'))
    })
    .catch((error) => {
      console.log('[workspace-website] Update Public Key Failed!\nDetails:\n' + error)
    })
}

function publicKeyUpdateService () {
  setInterval(() => {
    if (localIsEmpty('public_key_timestamp') || (new Date().getTime() - localStorage.getItem('public_key_timestamp')) > (60 * 1000 * 60)) {
      console.log('[workspace-website] Updating RSA public key ...')
      refreshPublicKey()
    }
  }, (60 * 1000 * 20))
}

function getParts (data) {
  let blockSize = parseInt(data.length / RSA_MAX_SIZE)
  blockSize = data.length % RSA_MAX_SIZE === 0 ? blockSize : blockSize + 1
  let parts = new Array(blockSize)
  for (let i = 0; i < blockSize; i++) {
    let endIndex
    if (i === (blockSize - 1)) {
      endIndex = data.length
    } else {
      endIndex = (i + 1) * RSA_MAX_SIZE
    }
    parts[i] = data.substring(i * RSA_MAX_SIZE, endIndex)
  }
  return parts
}

function encryptData (data) {
  if (RSAEncrypt == null) {
    return null
  }
  let parts = getParts(data)
  for (let i = 0; i < parts.length; i++) {
    let temp = RSAEncrypt.encrypt(parts[i])
    parts[i] = temp
  }
  return parts
}

Axios.interceptors.request.use((config) => {
  if (config.method === 'post' && config.type !== 'file') {
    if (config.data !== null && config.data !== undefined) {
      config.data = {
        JSON_CONTENT: encryptData(JSON.stringify(config.data))
      }
      config.data = qs.stringify(config.data, { arrayFormat: 'repeat' })
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

let DEFAULT_DELAY_TIME = 600

let WORKSPACE_STATUS = {
  SUCCESS: 200,
  FAIL: 300
}

let SERVER_EXCEPTION = {
  ACCESS_DENIED: 1005,
  ACCESS_RESTRICTED: 1006
}

let USER_CODE = {
  USER_EXISTS: 1020,
  USER_NOT_FOUND: 1021,
  USER_DISABLE: 1022,
  USER_VALIDATE_FAIL: 1023
}

export default {
  find_user (params, vue = null) {
    return request(DEFAULT_DELAY_TIME, {url: '/user/find', method: 'post', params: params, 'vue': vue})
  },
  authentication (params, vue = null) {
    return request(DEFAULT_DELAY_TIME, {url: '/user/authentication', method: 'post', params: params, 'vue': vue})
  },
  register (params, vue = null) {
    return request(DEFAULT_DELAY_TIME, {url: '/user/register', method: 'post', params: params, 'vue': vue})
  },
  all_project_templates (params = {}, vue = null) {
    return request(DEFAULT_DELAY_TIME, {url: '/project-template/all', method: 'post', params: params, 'vue': vue})
  },
  test (params, vue = null) {
    return request(DEFAULT_DELAY_TIME, {url: '/user/test', method: 'post', params: params, 'vue': vue})
  },
  upload (file) {
    return baseUpload(file)
  },
  all_projects (params, vue = null) {
    return request(DEFAULT_DELAY_TIME, {url: '/project/find-all', method: 'post', params: params, 'vue': vue})
  },
  create_project (params, vue = null) {
    return request(DEFAULT_DELAY_TIME, {url: '/project/create', method: 'post', params: params, 'vue': vue})
  },
  all_task_lists (params, vue = null) {
    return request(DEFAULT_DELAY_TIME, {url: '/task-list/find-all', method: 'post', params: params, 'vue': vue})
  },
  create_task (params, vue = null) {
    return request(DEFAULT_DELAY_TIME, {url: '/task/create', method: 'post', params: params, 'vue': vue})
  },
  all_tasks (params, vue = null) {
    return request(0, {url: '/task/find-all', method: 'post', params: params, 'vue': vue})
  },
  search (params, vue = null) {
    return request(DEFAULT_DELAY_TIME, {url: '/search/hanlp', method: 'post', params: params, 'vue': vue})
  },
  WORKSPACE_STATUS,
  USER_CODE
}
