<template>
    <div class="wrap_scroll" >
     <SlotImgCode  
      ref="scroll"
      :data="ImgScrollList.List"
      :pullDownRefresh="pullDownRefreshObj"
      :pullUpLoad="pullUpLoadObj"
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

import { mapState, mapActions } from 'vuex'

import SlotImgCode from './slotImg'

export default {
    components:{
       SlotImgCode
    },
    computed:{
        ...mapState({
            ImgScrollList:state=>state.GetImgScroll.ImgScrollList
        }),
         pullDownRefreshObj: () => {
                return {
                    threshold: 90,
                    stop: 50,
                    txt: '刷新成功'
                }
            },
            pullUpLoadObj: () => {
                return {
                    threshold: 50,
                    txt: {
                        more: '加载更多',
                        noMore: '没有更多数据了'
                    }
                }
            }
    },
    methods:{
        ...mapActions({
            grtImageTypeList:"GetImgScroll/grtImageTypeList"
        })
    },
    watch:{
         pullDownRefreshObj: {
                handler(val) {
                    const scroll = this.$refs.scroll.scroll
                    if (val) {
                        scroll.openPullDown()
                    } else {
                        scroll.closePullDown()
                    }
                },
                deep: true
            },
            pullUpLoadObj: {
                handler(val) {
                    const scroll = this.$refs.scroll.scroll
                    if (val) {
                        scroll.openPullUp()
                    } else {
                        scroll.closePullUp()
                    }
                },
                deep: true
            },
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