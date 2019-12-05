import {getAllColor} from '@/services/index'


const  state={
    ColorList:[],//全部数据
    title:[ //上边路由跳转
        {
            text:"全部颜色",
             path:'/cartmess/cartcolor', 
        },
         {
            text:"全部款式",
            path:'/cartmess/cartstyle',
        }
    ]
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
    }
}

const actions={
    // 获取全部数据
     async getAllColor({commit},id){
        let res=await getAllColor(id)
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