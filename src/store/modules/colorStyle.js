import {getAllColor,getCartColorList,getColorList,getStyleList} from '@/services/index'


const  state={
    ColorList:[],//全部数据图片
    StyleFlag:false,
    ColorFlag:false,
    Color:[],//颜色数据
    AllColor:[],
    ColorKey:[],
    Style:[],//样式数据
    CurIndex:0,
    CurInd:0,
    ColorInner:"颜色",
    styleInner:"款式"
}
const  mutations={
    // 设置全部数据
    setColorList(state,data){
        state.ColorList=data.map((item,index)=>{
            item.List.map((ele,index)=>{
                ele.Url=ele.Url.replace('{0}',3)
                return ele.Url
            })
            return item
        })    
    },
    setWareHouseStyle(state,flag){
        state.StyleFlag=flag
    },
    setWareHouseColor(state,flag){
        state.ColorFlag=flag
    },
    setColorKey(state,data){
        state.AllColor=data
        state.ColorKey=Object.keys(data)
        state.Color=state.AllColor[state.ColorKey[state.CurIndex]]
    },
    setColor(state,index){
        state.CurIndex=index
        state.Color=state.AllColor[state.ColorKey[state.CurIndex]]
    },
    setID(state,index){
      state.CurInd=index
    },
    setColorInner(state,inner){
        state.ColorInner=inner
    },
    setStyleInner(state,inner){
        state.styleInner=inner
    }
}

const actions={
    // 获取全部图片数据
     async getAllColor({commit},id){
        let res=await getAllColor(id)
        if(res.code===1){
          commit("setColorList",res.data)
        }
      },
    // 获取全部颜色数据
    async getCartColorList({commit},id){
            let res= await getCartColorList(id);
            if(res.code===1){ 
                commit("setColorKey",res.data)
              }
    },
    // 根据传来的样式或颜色筛选图片列表
    async getColorList({commit},id){
        let res = await getColorList(id)
        if(res.code===1){
            commit("setColorList",res.data)
          }
    },
    async getStyleList({commit},id){
        let res = await getStyleList(id)
        if(res.code===1){
            commit("setColorList",res.data)
          }
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}