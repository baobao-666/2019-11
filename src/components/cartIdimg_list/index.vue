<template>
    <div class="wrap_scroll" >
     <SlotImgCode  
      ref="scroll"
      :data="value"
      :pullDomnRefresh="pullDownRefreshObj"
      @pullingDown="onPullingDown"
      @pullingUp="onPullingUp"
     >
       <div class="container_scroll">
           <li v-for="(item,index) in ImgScrollList.List" :key="index" :style="{backgroundImage:'url('+item.Url.replace('{0}',item.LowSize)+')'}"></li>
       </div>
     </SlotImgCode>

    </div>
</template>

<script>

// 加载better-scroll 
import BScroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'

import SlotImgCode from './slotImg'

export default {
    components:{
       SlotImgCode
    },
    computed:{
        ...mapState({
            ImgScrollList:state=>state.GetImgScroll.ImgScrollList
        })
    },
    methods:{
        ...mapActions({
            grtImageTypeList:"GetImgScroll/grtImageTypeList"
        })
    }
}
</script>
<style scoped lang="scss">
.wrap_scroll{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: #fff;
    overflow-y: scroll;
}
.container_scroll{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
       width: 2.44rem;
       height: 2.44rem;
       margin-bottom: .25em;
       background-size: cover;
       background-position: center;
    }
}



</style>