import request from '@/utils/request'


// 根据图片id来渲染scroll数据  传入 SerialID 车系ID 和图片ID ImageID
export let  getIdImgList=(obj)=>{
    return request('/v2-car-getCategoryImageList.html',{params:{SerialID:obj.SerialID,ImageID:obj.ImageID}})
}

// 获取图片分类列表
export let getImageTypeList = (params) => {
    return request("/v2-car-getCategoryImageList.html", { params })
}