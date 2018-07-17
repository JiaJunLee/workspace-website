<template>
  <div class="content" :class="[content_background]">
    <!--<button style="position: absolute; top: 0; left: 0; z-index: 9999" @click="test">test button</button>-->
    <div class="content-shadow"></div>
    <div class="container-box">
      <div class="container">
        <div class="logo-icon"></div>
        <transition name="slide-fade" mode="out-in">
          <div v-if="status === 'login'" key="box1">
            <div class="text-title">登录</div>
            <miracles-text-field name="电子邮件、用户名" :error-msg="errorMsg" v-model="username" @enter="findUser"></miracles-text-field>
            <miracles-button :loading="loading" icon_size="small" type="activity" class="login-button" @click="findUser">下一步</miracles-button>
            <div class="reg-tips">没有帐户?</div>
            <div class="reg-tips reg-tips-button" @click="toRegister">创建一个!</div>
          </div>
          <div v-else-if="status === 'authorization'">
            <div class="text-title">你好,</div>
            <div class="text-title-little">{{ username }}</div>
            <miracles-text-field name="密码" :error-msg="errorMsg" :value="password" v-model="password" type="password" @enter="authentication"></miracles-text-field>
            <miracles-button :loading="loading" icon_size="small" type="activity" class="login-button" @click="authentication">登 录</miracles-button>
            <miracles-button icon_size="small" class="back-button" @click="back">返 回</miracles-button>
            <div class="reg-tips">忘记密码?</div>
            <div class="reg-tips reg-tips-button">找回密码!</div>
          </div>
          <div v-else-if="status === 'register'">
            <div class="text-title">创建账户</div>
            <miracles-text-field name="电子邮件" :error-msg="errorMsg" v-model="username" @enter="checkUser"></miracles-text-field>
            <miracles-button :loading="loading" icon_size="small" type="activity" class="register-button" @click="checkUser">下一步</miracles-button>
            <miracles-button icon_size="small" class="back-button" @click="back">返 回</miracles-button>
          </div>
          <div v-else-if="status === 'create'">
            <div class="text-title">创建密码</div>
            <div class="text-title-little">{{ username }}</div>
            <miracles-text-field name="姓名" :error-msg="errorMsg" v-model="name"></miracles-text-field>
            <miracles-text-field name="密码" v-model="password" type="password"></miracles-text-field>
            <miracles-text-field name="确认密码" v-model="confirmPassword" type="password" focusStyle="warning" @enter="register"></miracles-text-field>
            <miracles-file-input @change="fileChange">选取用户头像</miracles-file-input>
            <miracles-button :loading="loading" icon_size="small" type="activity" class="login-button" @click="register">创 建 WorkSpace 账 户</miracles-button>
            <miracles-button icon_size="small" class="back-button" @click="back">返 回</miracles-button>
            <div class="reg-tip-box">
              <div class="reg-tips">选择“下一步”即表示你同意</div>
              <div class="reg-tips reg-tips-button">WorkSpace 服务协议</div>
              <div class="reg-tips">和</div>
              <div class="reg-tips reg-tips-button">隐私和 Cookie 声明。</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="footer">
      <span class="footer-span">©2018 Workspace</span>
      <span class="footer-span">使用条款</span>
      <span class="footer-span">隐私和 cookie</span>
      <span class="footer-span footer-more">· · ·</span>
    </div>
  </div>
</template>

<script>
import './index.scss'
export default {
  name: 'login',
  data () {
    return {
      backgroundCount: 3,
      currentBackgroundIndex: 1,
      name: '',
      file: null,
      username: '',
      password: '',
      confirmPassword: '',
      errorMsg: '',
      loading: false,
      status: 'login'
    }
  },
  computed: {
    content_background () {
      return 'content-bg-' + this.$data.currentBackgroundIndex
    }
  },
  methods: {
    fileChange (file) {
      this.$data.file = file
    },
    todoWithoutLoading (event) {
      if (!this.$data.loading) {
        event()
      }
    },
    findUser () {
      this.todoWithoutLoading(() => {
        if (this.$data.username.trim() === '') {
          this.$data.errorMsg = '请输入有效格式的电子邮件地址'
        } else {
          this.$data.errorMsg = ''
          this.$data.loading = true
          this.$api.find_user({
            'username': this.$data.username
          }).then((response) => {
            if (response['result_code'] === this.$api.USER_CODE.USER_NOT_FOUND) {
              this.$data.errorMsg = '用户不存在'
            } else if (response['result_code'] === this.$api.USER_CODE.USER_EXISTS) {
              this.$data.errorMsg = ''
              this.$data.status = 'authorization'
            }
            this.$data.loading = false
          }).catch(() => {
            this.$data.errorMsg = '服务异常'
            this.$data.loading = false
          })
        }
      })
    },
    authentication () {
      this.todoWithoutLoading(() => {
        if (this.$data.password.trim() === '') {
          this.$data.errorMsg = '密码不能为空'
        } else {
          this.$data.errorMsg = ''
          this.$data.loading = true
          this.$api.authentication({
            'username': this.$data.username,
            'password': this.$data.password
          }).then((response) => {
            this.$data.loading = false
            this.$store.state.userEntity = response['user_information']
            this.$store.state.teams = response['teams']
            console.log('[workspace-website] user login success')
            this.$router.push('/dashboard')
          }).catch((error) => {
            if (error instanceof Error) {
              this.$dialog.create({message: '服务异常'})
            } else {
              this.$dialog.create({message: '登录失败'})
            }
            this.$data.loading = false
          })
        }
      })
    },
    checkUser () {
      this.todoWithoutLoading(() => {
        if (this.$data.username.trim() === '') {
          this.$data.errorMsg = '请输入有效格式的电子邮件地址'
        } else {
          this.$data.errorMsg = ''
          this.$data.loading = true
          this.$api.find_user({
            'username': this.$data.username
          }).then((response) => {
            if (response['result_code'] === this.$api.USER_CODE.USER_NOT_FOUND) {
              this.$data.errorMsg = ''
              this.$data.status = 'create'
            } else if (response['result_code'] === this.$api.USER_CODE.USER_EXISTS) {
              this.$data.errorMsg = '用户已存在'
            }
            this.$data.loading = false
          }).catch(() => {
            this.$data.errorMsg = '服务异常'
            this.$data.loading = false
          })
        }
      })
    },
    register () {
      this.todoWithoutLoading(() => {
        if (this.$data.name.trim() === '') {
          this.$data.errorMsg = '请输入姓名'
        } else if (this.$data.password.trim() === '') {
          this.$data.errorMsg = '请输入密码'
        } else if (this.$data.password.trim().length < 7) {
          this.$data.errorMsg = '账户密码不能小于7位'
        } else if (this.$data.password.trim() !== this.$data.confirmPassword.trim()) {
          this.$data.errorMsg = '密码输入不同,请重新输入'
        } else if (this.$data.file === null) {
          this.$dialog.create({message: '请选择用户头像'})
        } else {
          this.$data.errorMsg = ''
          this.$data.loading = true
          this.$api.upload(this.$data.file).then((response) => {
            let fileId = response['file_source']['id']
            if (fileId !== undefined) {
              this.$api.register({
                'name': this.$data.name,
                'username': this.$data.username,
                'password': this.$data.password,
                'icon_file_id': fileId
              }).then((response) => {
                this.$data.loading = false
                console.log('[workspace-server] user register success')
                this.authentication()
              }).catch((error) => {
                if (error instanceof Error) {
                  this.$dialog.create({message: '服务异常'})
                } else {
                  this.$dialog.create({message: '注册失败'})
                }
                this.$data.loading = false
              })
            } else {
              this.$data.loading = false
              this.$dialog.create({message: '头像上传失败'})
            }
          }).catch(() => {
            this.$data.loading = false
            this.$dialog.create({message: '注册失败'})
          })
        }
      })
    },
    test () {
      this.$createTaskDialog.create({}, (task) => {
        console.log(task)
      })
      // this.$message('这是一条消息提示')
      // this.$api.test({}, this).then((response) => {
      //   console.log(response)
      // }).catch((error) => {
      //   console.log('ERROR:' + error['exception_information'])
      // })
    },
    clear () {
      this.$data.username = ''
      this.$data.password = ''
      this.$data.confirmPassword = ''
      this.$data.errorMsg = ''
    },
    back () {
      this.clear()
      this.$data.status = 'login'
    },
    toRegister () {
      this.$data.errorMsg = ''
      this.$data.status = 'register'
    }
  },
  created () {
    setInterval(() => {
      if (++this.$data.currentBackgroundIndex > this.$data.backgroundCount) {
        this.$data.currentBackgroundIndex = 1
      }
    }, 10000)
  }
}
</script>
