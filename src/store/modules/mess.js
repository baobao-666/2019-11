import {getcityList,getcityOneList} from '@/services/index'

const state={
    automatic:"北京",
    cityList:[],
    cityOneList:[],
    cityFlag:false
}
const mutations={
    setAll(state,data){
        state.cityList=data
    },
    setOne(state,data){
        state.cityOneList=data
    }
}

const actions={
  async  getcityList({commit},id){
        let res= await getcityList()
        console.log(res);
        commit("setAll",res.data)
},
 async getcityOneList({commit},id){
    let res= await getcityOneList(id)
    commit("setOne",res.data)
}
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}