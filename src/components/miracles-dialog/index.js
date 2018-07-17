import Vue from 'vue'
import Dialog from './miracles-dialog'

function createDialog (propsData) {
  const DialogConstruct = Vue.extend(Dialog)
  return new DialogConstruct({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  create (opts) {
    const tmpDialog = createDialog(opts)
    document.body.appendChild(tmpDialog.$el)
    tmpDialog.toggle()
    return tmpDialog
  }
}
