// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import wx from 'wx'

import Toast from './components/assembly/Toast' // 弹窗组件
import imgMask from './components/assembly/imgMask' // 查看大图组件
import sort from './components/assembly/sort' // 筛选组件
import ModalInfo from './components/assembly/ModalInfo' // 客户主页，查看更多组件
import Check from './components/assembly/Check' // 无联动选择
import linkage from './components/assembly/linkage' // 二级联动选择

import Global from './components/Global' // 全局常量
import api from './components/api' // api接口

Vue.component('Toast', Toast)
Vue.component('imgMask', imgMask)
Vue.component('ModalInfo', ModalInfo)
Vue.component('Check', Check)
Vue.component('linkage', linkage)
Vue.component('sort', sort)

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
