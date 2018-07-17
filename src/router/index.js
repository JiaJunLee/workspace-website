import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index/index'
import buttonDemo from '../pages/miracles/button/index'
import dialogDemo from '../pages/miracles/dialog/index'
import loadingDemo from '../pages/miracles/loading/index'
import globalLoadingDemo from '../pages/miracles/global_loading'
import layoutDemo from '../pages/miracles/layout'
import textFieldDemo from '../pages/miracles/text-field'
import uploadDemo from '../pages/miracles/upload/upload'

import overviewDemo from '../pages/workspace-component-test/overview'
import imageboxDemo from '../pages/workspace-component-test/imagebox'
import cryptoDemo from '../pages/workspace-component-test/crypto'

import loginPage from '../pages/workspace/login'
import dashboardPage from '../pages/workspace/dashboard'
import dashboardHomePage from '../pages/workspace/dashboard/home'
import dashboardProjectPage from '../pages/workspace/dashboard/project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'miracles_demo',
      component: index
    },
    {
      path: '/miracles/button',
      name: 'button_demo',
      component: buttonDemo
    },
    {
      path: '/miracles/dialog',
      name: 'dialog_demo',
      component: dialogDemo
    },
    {
      path: '/miracles/loading',
      name: 'loading_demo',
      component: loadingDemo
    },
    {
      path: '/miracles/global_loading',
      name: 'global_loading_demo',
      component: globalLoadingDemo
    },
    {
      path: '/miracles/layout',
      name: 'layout_demo',
      component: layoutDemo
    },
    {
      path: '/miracles/text-field',
      name: 'text-field_demo',
      component: textFieldDemo
    },
    {
      path: '/workspace-test/overview',
      name: 'overview_demo',
      component: overviewDemo
    },
    {
      path: '/workspace-test/imagebox',
      name: 'imagebox_demo',
      component: imageboxDemo
    },
    {
      path: '/workspace-test/upload',
      name: 'upload_demo',
      component: uploadDemo
    },
    {
      path: '/workspace-test/crypto',
      name: 'crypto_demo',
      component: cryptoDemo
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboardPage,
      children: [
        {
          path: '',
          name: 'home',
          component: dashboardHomePage
        },
        {
          path: '/project',
          name: 'project',
          component: dashboardProjectPage
        }
      ]
    }
  ]
})
