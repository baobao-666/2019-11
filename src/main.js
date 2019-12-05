import './app.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 icon图标右箭头
import './icon/iconAl/iconfont.css'


// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.5,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575213655581&di=46043a5239cd48e6eb760318c7cb062a&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F84%2F03573c641836bd2.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575213695818&di=e9b0c97cbe032fe0ef29f8cd95c4c0c3&imgtype=0&src=http%3A%2F%2Fimg.yxad.cn%2Fimages%2F20190303%2Fc03014e09d1349c9bdd687f94f96fbe1.gif',
})

// elementui 库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 挂载全局axios
import axios from 'axios';
Vue.prototype.$http=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
