import request from '@/utils/request'

// 获取图片数据
export let getCartMessSort=(id)=>{
    return request('/v2-car-getInfoAndListById.html',{ params:{SerialID:id} })
}

// 获取车颜色数据
export let getCartColorList=(id)=>{
    return request('/v2-car-getModelImageYearColor.html',{ params:{SerialID:id} })
}

