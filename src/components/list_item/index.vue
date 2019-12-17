<template>
  <div class="list_item">
    <div class="list_title">{{item.title}}</div>
    <div v-for="(ele, index) in item.children"   @click="mess(ele.MasterID)"  :key="index" class="list_ele">
      <img v-lazy="ele.CoverPhoto" />
      <span>{{ele.Name}}</span>
    </div>
  </div>
</template>
<script>

 import { mapActions, mapState, mapMutations} from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      default() {
        return "无数据";
      }
    }
  },
  methods: {
    ...mapActions({
      getdrawerList: "home/getdrawerList"
    }),
    ...mapMutations({
      setFlag:"home/setFlag"
    }),
   mess(id){
       _hmt.push(['_trackEvent', "我草", "无情",id]);
        this. getdrawerList(id)
        this.setFlag(true)
    }
  }
};
</script>
<style scoped lang="scss">
.list_item {
  width: 100%;
}
.list_title {
  width: 100%;
  line-height: 30px;
  background: #f0f0f0;
  color:#999;
  padding-left: 15px;
  font-size: 16px;
}
.list_ele {
  width: 95%;
  height: 55px;
  display: flex;
  padding:15px;
  margin-left:2.5%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border: none;
  }
  img {
    width: 40px;
    height:40px;
  }
  span {
    flex: 1;
    line-height: .80rem;
    margin-left: 20px;
    font-size: 16px;
  }
}
</style>