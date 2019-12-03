<template>
  <div class="list_item">
    <div class="list_title">{{item.title}}</div>
    <div v-for="(ele, index) in item.children" :key="index" class="list_ele">
      <img v-lazy="ele.CoverPhoto"  @click="mess(ele.MasterID)" />
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
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions({
      getdrawerList: "home/getdrawerList"
    }),
    ...mapMutations({
      setFlag:"home/setFlag"
    }),
   mess(id){
        this. getdrawerList(id)
        this.setFlag(true)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.list_item {
  width: 100%;
}
.list_title {
  width: 100%;
  line-height: .60rem;
  background: #f0f0f0;
  padding-left: .40rem;
}
.list_ele {
  width: 90%;
  height: 1.4rem;
  display: flex;
  padding: .30rem .40rem;
  border-bottom: .01rem solid #ccc;
  margin: 0 5%;
  &:last-child {
    border: none;
  }
  img {
    width: .8rem;
    height: .8rem;
  }
  span {
    flex: 1;
    line-height: .80rem;
    margin-left: .40rem;
  }
}
</style>