import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deamerList: [],
    drawerflag:false
  },
  mutations: {
    setList(state, data) {
      console.log(data);
      
      state.deamerList=data
    },
    setFlag(state,data){
      state.drawerflag=data
    }
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
  modules: {}
});
