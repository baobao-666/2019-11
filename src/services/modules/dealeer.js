import request from '@/utils/request'

// 经销商城市列表
export let getCityId=(carId)=>{
    return request(`/v2-dealer-alllist.html`,{params:{carId:carId,cityId:'201'}})
}

// 获取表单页数据
// export let getFrom =(SerialID)=>{
//     return request('v2-car-getInfoAndListById.html',{params:{SerialID:this.$route.query.SerialID}})
// }