import Vue from 'vue'
import Dialog from './create-task-dialog'

function createDialog (propsData, callback) {
  const DialogConstruct = Vue.extend(Dialog)
  return new DialogConstruct({
    el: document.createElement('div'),
    methods: {
      submit: callback
    },
    propsData
  })
}

export default {
  create (opts, callback) {
    console.log('create')
    const tmpDialog = createDialog(opts, callback)
    document.body.appendChild(tmpDialog.$el)
    tmpDialog.toggle()
    return tmpDialog
  }
}
