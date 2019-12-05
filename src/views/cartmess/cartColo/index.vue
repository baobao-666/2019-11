<template>
    <div class="cart-color">
       <ImgCode v-for="(item,index) in ColorList" :key="index" :items="item" ></ImgCode>
    </div>
</template>
<script>

import ImgCode from '@/components/cartmess/img_list/'
import { mapState } from 'vuex'


export default {
    components:{
       ImgCode
    },
    computed:{
       ...mapState({
           ColorList:state=>state.ColorStyle.ColorList,
       })
    }
}
</script>
<style scoped lang="scss">
.cart-color{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
</style>