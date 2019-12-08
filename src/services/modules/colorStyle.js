// 图片样式数据处理
import request from '@/utils/request'

export let getAllColor=(id)=>{
        if(typeof id==="number"){
                console.log(id);
                
                return request('/v2-car-getImageList.html',{params:{SerialID:id}})
        }
        if(typeof id==="object"){
                
                console.log(Number(id.id));
                console.log(id.SireID);
                if(id.SireID&&id.id){
                        return request('/v2-car-getImageList.html',{params:{SerialID:Number(id.id),ColorID:id.SireID}})
                }
        }
}