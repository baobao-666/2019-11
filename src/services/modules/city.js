import request from '@/utils/request'

export let getdrawerList=()=>{
    return request('/v1-city-alllist.html')
}
