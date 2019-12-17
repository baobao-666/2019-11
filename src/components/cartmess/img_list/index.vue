<template>
    <div class="wrap_img">
    
    <div v-for="(item,index) in items.List" :key="index" class="wrap_item">
        <div v-if="index===0" :style="{backgroundImage:'url('+item.Url+')'}" class="wrap_"   >
            <div class="title" @click="ImgTabulate(items.Id)" >
                <div class="titles">
                   <p>{{items.Name}}</p>
                   <p>{{items.Count}}></p>
                </div>
            </div>
        </div>
        <div v-else :style="{backgroundImage:'url('+item.Url+')'}" class="wrap_" ></div>
    </div>
  
   </div>
</template>
<script>

// GetImgScroll
    import {mapMutations, mapActions} from 'vuex';

export default {
    props:{
        // 父传子参数
        items:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        ...mapMutations({
            setImgFlag:"GetImgScroll/setImgFlag",
            setImageId:"GetImgScroll/setImageId"
        }),
        ...mapActions({
            getIdImgList:"GetImgScroll/getIdImgList"
        }),
        // 点击图片加载更多图片 传id
        ImgTabulate(id){
            console.log(id);
            this.getIdImgList({SerialID:this.$route.query.id,ImageID:id})
            this.setImgFlag(true)
            this.setImageId(id)
        }
    }
}
</script>
<style scoped lang="scss">

.wrap_item{
    width: 120px;
    height: 120px;
    margin-left: 3px;
    margin-bottom: 2px;
    float: left;
}
 .wrap_{
     width: 100%;
     height: 100%;
     background-size: cover;
     background-position: center;
       .title{
           width: 100%;
           height: 100%;
           background: rgba($color: #fff, $alpha: .3);
           display: flex;
           justify-content: center;
           align-items: center;
           p{
            margin-bottom: 10px;
            color:#fff;
            }
       }
}
</style>