<template>
  <div class="list-page">
    <!--导航组件   arr 传入数据 默认英文26 事件传出点击的值  -->
    <NavList :arr="arr" @Parent_jump="jumps"></NavList>
      <!-- 列表渲染组件 -->
     <ListCode :id="item.title" v-for="(item,index) in list" :key="index" :item="item"></ListCode>
     <!-- 抽屉组件 -->
     <transition name="drawer" >
     <DrawerCode v-if="drawerflag" ></DrawerCode>
     </transition>
  </div>
</template>
<script>
// 列表每一项  组件
import ListCode from "@/components/list_item/";

// 导航列表
import NavList from "@/components/nav_list/";


// 抽屉层
import DrawerCode from '@/components/drawer_list/'
import { mapState } from 'vuex';

// 页面loding效果
import { Loading } from 'element-ui';

export default {
  props: {},
  components: {
    ListCode,
    NavList,
    DrawerCode
  },
  data() {
    return {
      list: [],
      arr: []
    };
  },
  computed: {
    ...mapState(['drawerflag'])
  },
  methods: {
    jumps(item) {
      console.log(item);
      this.idScroll=item
      document.querySelector('.list-page').scrollTop=document.querySelector(`#${item}`).offsetTop;
    },
    getList() {
     let loadingInstance = Loading.service();
      this.$http
        .get("https://baojia.chelun.com/v2-car-getMasterBrandList.html")
        .then(res => {
          if (res.data.code === 1) {
            console.log("全部数据",res.data.msg);
            this.setArr(res.data.data);
            this.setList(res.data.data);
            loadingInstance.close();
          } else {
            console.log(res.data.msg);
          }
        });
    },
    setArr(data) {
      let arr = ["#"];
      data.forEach((item, index) => {
        let flag = arr.findIndex((ele, index) => {
          return ele === item.Spelling.slice(0, 1);
        });
        if (flag === -1) {
          arr.push(item.Spelling.slice(0, 1));
        }
      });
      this.arr = arr;
    },
    setList(data) {
        let newarr=this.arr
        let newList = newarr.slice(1).map((ele, index) => {
        return {
          title: ele,
          children: data.filter((item, index) => {
              return item.Spelling.slice(0, 1) === ele;
            })
        };
      });
     this.list=newList
    }
  },
  created() {},
  mounted() {
    this.getList();
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
.drawer-enter-active{
  transition: all 1s ease;
}
.drawer-leave-active {
  transition: all .8s ease;
}
/* enter 和 leave-to 表示元素/组件隐藏状态的样式 */
.drawer-enter, .drawer-leave-to{
  /* transform: scale(0); */
  transform: translateX(200px)
}



</style>