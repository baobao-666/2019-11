import { getIdImgList } from "@/services/index";

let state={
   ImgScrollflag:false , //滚动条组件显示隐藏
   ImgScrollList:[]
}

let mutations={
    setImgFlag(state,payload){
    // 设置显示隐藏
     state.ImgScrollflag=payload
    },
    setImgScrollList(state,data){
       state.ImgScrollList=data
    }
}

let actions={
   async getIdImgList({commit},objId){
     let res=await getIdImgList(objId)
     console.log(res);
     if(res.code===1){
         commit("setImgScrollList",res.data)
     }
     
   }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}