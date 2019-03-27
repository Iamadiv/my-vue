// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import iView from 'iview'
import 'element-ui/lib/theme-chalk/index.css'
import 'iview/dist/styles/iview.css'
import './iview/my-iview.css'
import echarts from 'echarts'
import Vuex from 'vuex'
import {store} from './vuex/store'
// import Mock from './mock'
require('./mock.js');

import Resource from 'vue-resource'
Vue.use(Resource)


Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(iView)
// Vue.use(Mock)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   store:store,
  components: { App },
  template: '<App/>'
})
