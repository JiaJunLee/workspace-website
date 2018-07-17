// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import WorkSpaceApplication from './WorkSpaceApplcation'
import router from './router'
import { Message, DatePicker, TimeSelect, TimePicker, Switch, Input, Menu, Submenu, MenuItem, MenuItemGroup, Breadcrumb, BreadcrumbItem, Popover, RadioGroup, RadioButton } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import MiraclesUI from './components/index'
import WorkspaceUI from './workspace-components/index'
import WorkspaceAPI from './workspace-api'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(MiraclesUI)
Vue.use(WorkspaceUI)
Vue.prototype.$api = WorkspaceAPI

// element-ui
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Popover)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.prototype.$message = Message

const store = new Vuex.Store({
  state: {
    userEntity: null,
    teams: null,
    projects: null,
    taskLists: null
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#workspace-application',
  router,
  store,
  components: { WorkSpaceApplication },
  template: '<WorkSpaceApplication/>'
})
