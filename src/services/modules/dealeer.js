import request from '@/utils/request'

export let getCityId=(carId)=>{
    console.log(carId)
    return request(`/v2-dealer-alllist.html`,{params:{carId:carId,cityId:'201'}})
}
