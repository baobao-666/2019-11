// 图片样式数据处理
import request from '@/utils/request'

export let getAllColor=(id)=>{
                return request('/v2-car-getImageList.html',{params:{SerialID:id}})
}
export let getColorList=(id)=>{
           if(id.id && id.SireID){
                return request('/v2-car-getImageList.html',{params:{SerialID:id.SireID,ColorID:id.id}})
           }
}
export let getStyleList=(id)=>{
        console.log(id.car_id);
        if(id.car_id && id.SireID){
                return request('/v2-car-getImageList.html',{params:{SerialID:id.SireID,CarId:id.car_id}})
        }
}
      

