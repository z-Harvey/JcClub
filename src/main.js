// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import wx from 'wx'

import Toast from './components/assembly/Toast'
import ModalInfo from './components/assembly/ModalInfo'
import Check from './components/assembly/Check'
import linkage from './components/assembly/linkage'
import Global from './components/Global'
import api from './components/api'

Vue.component('Toast', Toast)
Vue.component('ModalInfo', ModalInfo)
Vue.component('Check', Check)
Vue.component('linkage', linkage)

// axios.defaults.baseURL = 'http://192.168.0.160:8000'
Vue.prototype.$wx = wx
Vue.prototype.Global = Global
Vue.prototype.api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {}
})
