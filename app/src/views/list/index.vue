<template>
  <div class="list-page">
    <!--导航组件   arr 传入数据 默认英文26 事件传出点击的值  -->
    <NavList :arr="arr" @Parent_jump="jumps"></NavList>
    <!-- 列表渲染组件 -->
    <!-- {{Alllist.length}} -->
    <!-- <div v-for="(item,index) in Alllist" :key="index">{{item}}</div> -->
    <ListCode :id="item.title" v-for="(item,index) in list" :key="index" :item="item"></ListCode>

    <!-- 抽屉组件 -->
    <transition name="drawer">
      <DrawerCode v-if="drawerflag"></DrawerCode>
    </transition>
  </div>
</template>
<script>
// 列表每一项  组件
import ListCode from "@/components/list_item/";

// 导航列表
import NavList from "@/components/nav_list/";

// 抽屉层
import DrawerCode from "@/components/drawer_list/";
import { mapState, mapActions } from "vuex";

// 页面loding效果
import { Loading } from "element-ui";

export default {
  props: {},
  components: {
    ListCode,
    NavList,
    DrawerCode
  },
  data() {
    return {
    
    };
  },
  computed: {
    // ...mapState(['drawerflag'])
    ...mapState({
      Alllist: state => state.home.allList,
      arr:state=>state.home.arr,
      list:state=>state.home.list,
      drawerflag:state=>state.home.drawerflag
    })
  },
  methods: {
    ...mapActions({
      getMasterAllList: "home/getMasterAllList"
    }),
    jumps(item) {
      console.log(item);
      this.idScroll = item;
      document.querySelector(".list-page").scrollTop = document.querySelector(
        `#${item}`
      ).offsetTop;
    }
  },
  created() {

    this.getMasterAllList()
  },
  mounted() {
  }
};
</script>
<style scoped lang="scss">
.list-page {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

// 抽屉动画
.drawer-enter-active {
  transition: all 1s ease;
}
.drawer-leave-active {
  transition: all 0.8s ease;
}
/* enter 和 leave-to 表示元素/组件隐藏状态的样式 */
.drawer-enter,
.drawer-leave-to {
  /* transform: scale(0); */
  transform: translateX(200px);
}
</style>