import {getcityList,getcityOneList} from '@/services/index'

const state={
    automatic:"北京",
    cityList:[],
    cityOneList:[],
    cityFlag:false,
    cityblock: false,
}
const mutations={
    setAll(state,CityList){
        state.cityList=CityList
    },
    setOne(state,CityOneList){
        state.cityOneList=CityOneList
    },
    setCityFlag(state,FlagState){
      state.cityFlag=FlagState
     },
    setAutomatic(state,Cityname){
       state.automatic=Cityname
    },
    setcityblock(state,BlockState){
        state.cityblock=BlockState
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