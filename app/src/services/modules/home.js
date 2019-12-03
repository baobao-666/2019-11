import request from '@/utils/request'

export let getMasterAllList=()=>{
    return  request('/v2-car-getMasterBrandList.html')
}
export let getdrawerList=(id)=>{
    return request('/v2-car-getMakeListByMasterBrandId.html',{params:{MasterID:id}})
}