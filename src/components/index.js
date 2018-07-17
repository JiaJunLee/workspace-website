import '../style/font.scss'

// components
import './miracles-button/miracles-button.scss'
import './miracles-button-group/miracles-button-group.scss'
import './miracles-loading/miracles-loading.scss'
import './miracles-dialog/miracles-dialog.scss'
import './miracles-text-field/miracles-text-field.scss'
import './miracles-file-input/miracles-file-input.scss'

import Button from './miracles-button/miracles-button'
import ButtonGroup from './miracles-button-group/miracles-button-group'
import Loading from './miracles-loading/miracles-loading'
import DialogComponent from './miracles-dialog/miracles-dialog'
import Dialog from './miracles-dialog/index'
import TextField from './miracles-text-field/miracles-text-field'
import FileInput from './miracles-file-input/miracles-file-input'

// layout
import './layout/miracles-container/miracles-container.scss'
import './layout/miracles-col-md/miracles-col-md.scss'

import Container from './layout/miracles-container/miracles-container'
import Col from './layout/miracles-col-md/miracles-col-md'

const MiracleComponents = [
  Button, ButtonGroup, Loading, TextField, DialogComponent, FileInput,
  Container, Col
]

const initializeLoadingComponent = function (Vue) {
  const LoadingConstruct = Vue.extend(Loading)
  const globalLoadingComponent = new LoadingConstruct({
    el: document.createElement('div')
  })
  document.body.appendChild(globalLoadingComponent.$el)
  Vue.prototype.$loading = globalLoadingComponent
}

const install = function (Vue) {
  MiracleComponents.map(component => Vue.component(component.name, component))
  initializeLoadingComponent(Vue)
  Vue.prototype.$dialog = Dialog
}

if (typeof window !== 'undefined' && window.Vue) { install(window.Vue) }

const MiraclesUI = {
  install,
  ...MiracleComponents
}

export default MiraclesUI
