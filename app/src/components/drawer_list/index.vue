<template>
  <div class="drawer_wrapp">
    <div class="drawer_list" v-for="(item,index) in deamerList" :key="index">
      <div class="drawer_title">{{item.GroupName}}</div>
      <div v-for="(ele,ind) in item.GroupList" :key="ind" class="drawer_ele">
        <img :src="ele.Picture" @click="getList(item)"   />
        <span>{{ele.AliasName}}</span>
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
    ...mapState(["deamerList"])
    
  },
  methods: {  
     ...mapMutations(['setFlag']),
      getList(item){
      this.$router.push({path:'/message',query:{item}})
      this.setFlag(false)
      }
  },
  created() {
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.drawer_wrapp {
  position: fixed;
  top: 0;
  left: 30%;
  bottom: 0;
  right: 0;
  background: white;
  overflow-y: scroll;
}
.drawer_list {
  width: 100%;
}
.drawer_title {
  width: 100%;
  line-height: 50px;
  background: #f0f0f0;
  padding-left: 20px;
}
.drawer_ele {
  width: 100%;
  height: 80px;
  display: flex;
  padding: 5px 20px;
  border-bottom: 1px solid #ccc;
  img {
    width: 90px;
    height: 70px;
  }
  span {
    flex: 1;
    line-height: 50px;
    margin-left: 20px;
  }
  &:last-child{
      border: none;
  }
}
</style>