import request from '@/utils/request'

export let getcityList=()=>{
        return request('/v1-city-alllist.html')
}
export let getcityOneList=(id)=>{
    return request('/v1-city-alllist.html',{params:{provinceid:id}})
} 
