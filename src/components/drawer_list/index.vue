<template>
  <div class="drawer_wrapp" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="drawer_list" v-for="(item,index) in deamerList" :key="index">
      <div class="drawer_title">{{item.GroupName}}</div>
      <div v-for="(ele,ind) in item.GroupList" :key="ind" class="drawer_ele">
        <img v-lazy="ele.Picture" @click="getList(ele.SerialID)" />
        <div class="title">
          <p>{{ele.AliasName}}</p>
          <span>{{ele.DealerPrice}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";


export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      deamerList: state => state.home.deamerList
    })
  },
  methods: {
    ...mapMutations({
      setFlag: "home/setFlag"
    }),
    getList(id) {
      console.log(id);
      this.$router.push({ path: "/message", query: { id } });
      this.setFlag(false);
    },
    touchStart(e) {
     console.log("开始移动");
    },
    touchMove(e) {

          },
    touchEnd(e) {
      console.log("移动结束");
    }
  }
};
</script>
<style scoped lang="scss">
.drawer_wrapp {
  position: fixed;
  top: 0;
  left: 25%;
  bottom: 0;
  right: 0;
  background: white;
  overflow-y: scroll;
  z-index: 999;
}
.drawer_list {
  width: 100%;
}
.drawer_title {
  width: 100%;
  line-height: .7rem;
  background: #f0f0f0;
  padding-left: .4rem;
}
.drawer_ele {
  width: 100%;
  height: 1.4rem;
  display: flex;
  padding: .10rem .40rem;
  border-bottom: .1px solid #ccc;
  img {
    width: 1.4rem;
    height: 1rem;
  }
  .title {
    flex: 1;
    p {
      line-height: .6rem;
      margin-left: .3rem;
      color: #666;
      font-size: .30rem;
    }
    span {
      display: block;
      line-height: .6rem;
      width: 100%;
      text-align: center;
      color: red;
      font-size: .26rem;
    }
  }
}
</style>