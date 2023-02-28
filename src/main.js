import Vue from 'vue'
import App from './App.vue'

import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'

//因为对axios进行了二次封装，因此不需要这样使用
// import axios from 'axios'
// Vue.prototype.axios = axios  //挂载到原型，可以在全局上使用
import service from './service.js'
Vue.prototype.service = service 

import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
