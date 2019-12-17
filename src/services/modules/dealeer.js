import request from '@/utils/request'

// 经销商城市列表
export let getCityId=({carId,cityId})=>{
    return request(`/v2-dealer-alllist.html`,{params:{carId,cityId}})
}

//获取低价数据
export let getFrom =(SerialID)=>{
    return request('/v2-car-getInfoAndListById.html',{params:{SerialID}})
}