import request from '@/utils/request'

export let getMasterAllList=()=>{
    return  request('/v2-car-getMasterBrandList.html')
}