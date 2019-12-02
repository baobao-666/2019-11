<template>
  <div class="drawer_wrapp">
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
    ...mapState(["deamerList"])
  },
  methods: {
    ...mapMutations(["setFlag"]),
    getList(id) {
      console.log(id);
      this.$router.push({ path: "/message", query: { id } });
      this.setFlag(false);
    }
  },
  created() {

    
  },
  mounted() {
    console.log(this.deamerList);
    
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
  .title {
    flex: 1;
    p {
      line-height: 25px;
      margin-left: 10px;
      color: #666;
      font-size: 18px;
    
    }
    span{
      display: block;
      line-height: 25px;
      width: 100%;
      text-align: center;
      color: red;
      font-size: 14px;
    }
  }
  &:last-child {
    border: none;
  }
}
</style>