import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 挂载全局axios
import axios from 'axios';
Vue.prototype.$http=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
