import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import creareLogger from 'vuex/dist/logger';
import home from './modules/home'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    deamerList: []
  },
  mutations: {
    setList(state, data) {
      state.deamerList=data
    },
  
  },
  actions: {
    getdeam({ commit }, id) {
      Axios.get(
        "https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html",
        { params: { MasterID: id } }
      ).then(res => {
        if (res.data.code === 1) {
          console.log("弹框数据",res.data.msg);
          commit('setList',res.data.data);
        }
      });
    }
  },
  modules: {
    home
  },
  plugins:[creareLogger()]
});
