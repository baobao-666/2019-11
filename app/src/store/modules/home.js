import {getMasterAllList,getdrawerList} from '@/services/index'


const state={
   allList: [],
   arr:[],
   list:[],
   drawerflag:false,
   deamerList: []
}
const  mutations={
     setAllList(state, payload) {
         state.allList=  payload
      },
      setArr(state,data) {
        let arr = ["#"];
        data.forEach((item, index) => {
          let flag = arr.findIndex((ele, index) => {
            return ele === item.Spelling.slice(0, 1);
          });
          if (flag === -1) {
            arr.push(item.Spelling.slice(0, 1));
          }
        });
        state.arr = arr;
      },
      setList(state,data) {
        let newarr = state.arr;
        let newList = newarr.slice(1).map((ele, index) => {
          return {
            title: ele,
            children: data.filter((item, index) => {
              return item.Spelling.slice(0, 1) === ele;
            })
          };
        });
        state.list = newList;
      },
      setFlag(state,data){
        state.drawerflag=data
      },
      setdrawerList(state, data) {
        state.deamerList=data
      },
}

const actions={
    async getMasterAllList({commit},payload){
        let res=await getMasterAllList()     
        await commit("setAllList",res.data)
        await commit("setArr",res.data)
        await commit("setList",res.data)
    },
    async getdrawerList({commit},payload){
       let res =await getdrawerList(payload)
       await commit("setdrawerList",res.data)
   
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}