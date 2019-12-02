import {getMasterAllList} from '@/services/index'


const state={
   allList: []
}
const  mutations={
    setAllList(state, payload) {
        console.log(payload);
        state.allList=payload
      }
}

const actions={
    async getMasterAllList({commit},payload){
        let res=await getMasterAllList()
        commit("setAllList",res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}