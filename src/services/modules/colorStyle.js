// 图片样式数据处理
import request from '@/utils/request'

export let getAllColor=(id)=>{
        return request('/v2-car-getImageList.html',{params:{SerialID:id}})
}