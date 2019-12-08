// 图片样式数据处理
import request from '@/utils/request'

export let getAllColor=(id)=>{
                return request('/v2-car-getImageList.html',{params:{SerialID:id}})
        // if(typeof id==="object"){
        //         console.log(id.id);
        //         console.log(id.SireID);
        //         if(id.SireID&&id.id){
        //                 return request('/v2-car-getImageList.html',{params:{SerialID:id.SireID,ColorID:Number(id.id)}})
        //         }
        // }
}