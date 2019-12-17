import './app.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible/flexible.js"

// 引入 icon图标
import './icon/icon/iconfont.css'


// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.5,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575213655581&di=46043a5239cd48e6eb760318c7cb062a&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F84%2F03573c641836bd2.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
  loading: 'http://www.kedo.gov.cn/upload/resources/image/2015/11/03/144653551630115504.gif'
})


import vant from "vant"
import 'vant/lib/index.css'
Vue.use(vant)

// 引入自定义指令
// import "@/directions/strixky"

Vue.config.productionTip = false

new Vue({
  router,
  store,   
  render: h => h(App)
}).$mount('#app')
