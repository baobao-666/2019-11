import request from '@/utils/request'

export let getCartMessSort=(id)=>{
    return request('/v2-car-getInfoAndListById.html',{ params:{SerialID:id} })
}