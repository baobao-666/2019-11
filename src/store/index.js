import Vue from "vue";
import Vuex from "vuex";
import creareLogger from 'vuex/dist/logger';
Vue.use(Vuex);


// 列表类数据
import home from './modules/home'

// 详情页数据
import mess from './modules/mess'





export default new Vuex.Store({
 
  modules: {
    home,
    mess
  },
  plugins:[creareLogger()]
});
