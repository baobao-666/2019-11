<template>
  <div class="cart-mess">
      <div class="types">
        <div v-for="(item,index) in title" :key="index" >
            <router-link :to="item.path" tag="span">{{item.text}}</router-link>
            <b class="icon iconfont">&#xe617;</b>
        </div>
      </div>
      <div class="cart-wrap">
       <router-view></router-view>
      </div>
  </div>
</template>
<script>

import { mapActions, mapState } from 'vuex';
export default {
  props: {},
  components: {},
  data() {
    return {
       
    };
  },
  computed: {
    ...mapState({
     title:state=>state.ColorStyle.title
    })
  },
  methods: {
    ...mapActions({
      getAllColor:"ColorStyle/getAllColor"
    })
  },
  created() {
    this.getAllColor(2593)
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
   overflow: hidden;
}
</style>