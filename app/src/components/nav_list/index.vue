<template>
  <div class="nav_list">
    <div v-for="(item,index) in arr" @click="jump(item)"  :key="index" class="nav_item">{{item}}</div>
  </div>
</template>
<script>
export default {
  props: {
    arr: {
      type: Array,
      default() {
        return [
          "#",
          "A",
          "B",
          "C",
          "D",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z"
        ];
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
      jump(item){
         this.$emit('Parent_jump',item)
      }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.nav_list {
  width: 30px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top:20%;
  right: 5%;
}
.nav_item {
  text-align: center;
  line-height: 18px;
  font-size: 14px;
}
</style>