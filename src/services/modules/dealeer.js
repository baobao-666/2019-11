import request from '@/utils/request'

// 经销商城市列表
export let getCityId=(carId)=>{
    return request(`/v2-dealer-alllist.html`,{params:{carId:carId,cityId:'201'}})
}

//获取低价数据
export let getFrom =(SerialID)=>{
    console.log(SerialID,11111)
    return request('/v2-car-getInfoAndListById.html',{params:{SerialID}})
}