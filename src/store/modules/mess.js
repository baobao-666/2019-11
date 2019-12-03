import {getcityList} from '@/services/index'

const state={
    automatic:"北京",
    cityList:[]
}
const mutations={
    setAll(state,data){
        state.cityList=data
    }
}

const actions={
  async  getcityList({commit},id){
      let res= await getcityList()
      console.log(res);
      commit("setAll",res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}