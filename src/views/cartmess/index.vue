<template>
  <div class="cart-mess">
      <div class="types">
         <span @click="setColorFlag" class="icon iconfont">颜色 &#xe617;</span>
         <span @click="setStyleFlag" class="icon iconfont">车款 &#xe617;</span>
      </div>
      <div class="cart-wrap">
         <ImgCode v-for="(item,index) in ColorList" :key="index" :items="item" ></ImgCode>
      </div>
      <!-- 颜色组价 -->
      <transition name="ColorStyleCode" >
           <ColorCode v-if="ColorFlag" ></ColorCode>
       </transition>
       <!-- 款式组价 -->
       <transition name="ColorStyleCode" >
         <CartStyleCode v-if="StyleFlag"  ></CartStyleCode>
       </transition>
  </div>
</template>
<script>
// 引入图片渲染
import ImgCode from '@/components/cartmess/img_list/'

// 引入颜色组件
import ColorCode from '@/components/cartmess/color_list/'
// 引入样式组件
import CartStyleCode from '@/components/cartmess/style_list/'

import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  components: {
     ImgCode,
     ColorCode,
     CartStyleCode
  },
  data() {
    return {
       
    };
  },
  computed: {
    ...mapState({
       ColorList:state=>state.ColorStyle.ColorList,
       ColorFlag:state=>state.ColorStyle.ColorFlag,
       StyleFlag:state=>state.ColorStyle.StyleFlag
    })
  },
  methods: {
    ...mapActions({
      getAllColor:"ColorStyle/getAllColor",
      getCartMessSort: "CartMess/getCartMessSort"
    }),
    ...mapMutations({
      setWareHouseStyle:"ColorStyle/setWareHouseStyle",
      setWareHouseColor:"ColorStyle/setWareHouseColor"
    }),
    setColorFlag(){
       this.setWareHouseColor(true)
    },
    setStyleFlag(){
       this.setWareHouseStyle(true)
    }
  },
  created() {
    this.getAllColor(this.$route.query.id),
    this.getCartMessSort(this.$route.query.id);
  }
};
</script>
<style scoped lang="scss">
.cart-mess {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  background:#f4f4f4;
}
.types{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
      b{
        font-weight: 600;
        margin-left: .1rem;
      }
    }
}
.cart-wrap{
   flex: 1;
   background: #f6f6f6;
   overflow-y: scroll;
}

.ColorStyleCode-enter-active {
  transition: all 1s ease;
}
.ColorStyleCode-leave-active {
  transition: all 0.3s ease;
}
/* enter 和 leave-to 表示元素/组件隐藏状态的样式 */
.ColorStyleCode-enter,
.ColorStyleCode-leave-to {
  /* transform: scale(0); */
  transform: translateY(100%);
}
</style>