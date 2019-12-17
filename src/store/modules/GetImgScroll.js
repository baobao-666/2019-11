import { getIdImgList,getImageTypeList } from "@/services/index";

let state={
   ImgScrollflag:false , //滚动条组件显示隐藏
   ImgScrollList:[],
   imgList: [], //分类图片列表
   imageTypeList: [], //分类图片列表
   colorId: 0, // 车系颜色id
   carId: 0, // 车款id
   ImageID: "", //分类id
   SerialID: "", //车系id
   colorName: '', //颜色名称
   Count: 0, //总数据
   Page: 1, //分页 当前页 给默认值
   PageSize: 30, //每页数量 给默认值
   Current: "",
   showImageSwiper:false
}

let mutations={
    setImgFlag(state,payload){
    // 设置显示隐藏
     state.ImgScrollflag=payload
    },
    setImgScrollList(state,data){
       state.ImgScrollList=data
    },
    setSerialID(state, payload) {
        state.SerialID = payload
    },
    // 修改图片分类id
    setImageId(state, payload) {
        state.ImageID = payload;
    },
    // 改变颜色id
    setColorId(state, payload) {
        state.colorName = payload.Name;
        state.colorId = payload.ColorId;
    },
    // 改变车系id
    setCarId(state, payload) {
        state.carId = payload;
    },
    // 修改当前分页
    setPage(state, payload) {
        state.Page = payload;
    },
    // 设置图片总数
    setCount(state, payload) {
        state.Count = payload;
    },
    // 设置当前轮播的图片下标
    setCurrent(state, payload) {
        state.Current = payload;
    },
    // 图片列表
    setImageTypeList(state, payload) {
        state.Count = payload.Count;
        // 实现上拉加载
        if (state.page == 1) {
            state.imageTypeList = payload.List;
        } else {
            state.imageTypeList = state.imageTypeList.concat(payload.List);
        }
    },
    setShowImageSwiper(state,payload){
       state.showImageSwipera=payload
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

   async getImageTypeList({ commit, state }, payload) {
    //接收四个参数SerialID，ImageID，Page，PageSize
    if (payload) {
        commit('setPage', payload);
    }
    let params = {
        SerialID: state.SerialID,
        ImageID: state.ImageID,
        Page: state.Page,
        PageSize: state.PageSize
    }
    let res = await getImageTypeList(params);
    let { Count, List } = res.data;
    commit('setImageTypeList', { Count, List });
}
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}