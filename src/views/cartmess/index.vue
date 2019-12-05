<template>
  <div class="cart-mess">
      <div class="types">
          <router-link  v-for="(item,index) in title" :key="index" :to="item.path" tag="span">{{item.text}}</router-link>
      </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
        title:[
            {
                text:"全部颜色",
                 path:'/cartmess/cartcolor',
            },
             {
                text:"全部款式",
                path:'/cartmess/cartstyle',
            }
        ]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
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
}
</style>