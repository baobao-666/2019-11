<template>
    <div class="wrap_img">
    
    <div v-for="(item,index) in items.List" :key="index" class="wrap_item">
        <div v-if="index===0" :style="{backgroundImage:'url('+item.Url+')'}" class="wrap_" >
            <div class="title">
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
    components:{

    }
}
</script>
<style scoped lang="scss">

.wrap_item{
    width: 2.4rem;
    height: 2.4rem;
    margin-left: .07rem;
    margin-bottom: .06rem;
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
            margin-bottom: .2rem;
            color:#fff;
            }
       }
}
</style>