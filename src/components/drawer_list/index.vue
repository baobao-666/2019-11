<template>
  <div class="drawer_wrapp" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="drawer_list" v-for="(item,index) in deamerList" :key="index">
      <div class="drawer_title">{{item.GroupName}}</div>
      <div
        v-for="(ele,ind) in item.GroupList"
        :key="ind"
        class="drawer_ele"
        @click="getList(ele.SerialID)"
      >
        <img v-lazy="ele.Picture" />
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
  data() {
    return {
      PageX:0,
      offsetX:0
    };
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
      this.$router.push({ path: "/message", query: { id } });
      this.setFlag(false);
    },
    touchStart(e) {
      // 统计属性
      this.pageX=e.touches[0].pageX
      this.offsetX=document.querySelector(".drawer_wrapp").offsetLeft
    },
    touchMove(e) {
     let x=e.touches[0].pageX;
     let left=this.offsetX+(x-this.pageX)
     left= left <0?0:left
     document.querySelector(".drawer_wrapp").style.left = left+"px"
    },
    touchEnd(e) {
      this.setFlag(false);
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
  width: 74%;
  background: white;
  overflow-y: auto;
  z-index: 999;
}
.drawer_list {
  width: 100%;
}
.drawer_title {
  width: 100%;
  line-height: 32px;
  background: #f0f0f0;
  padding-left: 15px;
  font-size: 14px;
  color:#999;
}
.drawer_ele {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1px solid #ccc;
  img {
    margin: 0 5px 0 10px;
    width:90px;
    height: 50px;
  }
  .title {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
      margin-left:5px;
    p {
      line-height:30px;
      color: #666;
      font-size: 16px;
      font-weight: 900;
    }
    span{
      font-size: 14px;
      color:red;
    }
  }
}
</style>