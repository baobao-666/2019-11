import { getIdImgList,grtImageTypeList } from "@/services/index";

let state={
   ImgScrollflag:false , //滚动条组件显示隐藏
   ImgScrollList:[],  //请求图片数据
   CarId:"", //车款ID
   colorID:"", //颜色id
   SerialID:"", //车系id
   ImageID:"",//分类id
   imagelist:[],//分类图片列表
   current:0,//轮播当前图片
   count:'' ,//当前分类图片总数
   page:1,//当前分页
   PageSize:30//每页数量
}

let mutations={
    setImgFlag(state,payload){
    // 设置显示隐藏
     state.ImgScrollflag=payload
    },
    setImgScrollList(state,data){
       state.ImgScrollList=data
    },
    // 设置serialId
    setSeriaId(state,payload){
       state.SerialID=payload
    },
    // 设置颜色id
    setColorId(state,payload){
       state.colorID=payload
    },
    // 修改点击分类图标`    ·
    setImageId(state,payload){
       state.ImageID=payload
    },
    // 详细数据的修改
    setImageList(state,payload){
        state.count=payload.Count;
        payload.ImageID && (state.ImageID=payload.ImageID);
        if(state.page==1){
          state.imagelist=payload.List;
        }else{
          state.imagelist=state.imagelist.concat(payload.List);
        }
    },
    // 修改分页
    setPage(state,payload){
        state.page=payload
    },
    // 设置当前轮播的图片下标
    setCurrent(state,payload){
        state.current=payload
    }

}

let actions={
//   请求全部id
   async getIdImgList({commit},objId){
     let res=await getIdImgList(objId)
     if(res.code===1){
         commit("setImgScrollList",res.data)
     }
   },
   async grtImageTypeList({commit,state},payload){
       if(payload){
           commit("setPage",payload);
       }
    let params={
        SerialID:state.SerialID,
        ImageID:state.ImageID,
        Page:state.Page,
        PageSize:state.PageSize
    }
    let res = await  getImageTypeList(params)
    console.log("res.. ..",res);
    let { Count,List  }=res.data.data
    commit("setImageList",{Count,List})
     
   }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}