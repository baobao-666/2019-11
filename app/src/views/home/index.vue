<template>
  <div class="city-home">
    <button @click="alerts">点击渲染城市列表</button>
    <transition name="cityList">
      <CityCode v-if="block"></CityCode>
    </transition>
  </div>
</template>
<script>
import CityCode from "@/components/city_list/";

export default {
  props: {},
  components: {
    CityCode
  },
  data() {
    return {
      block: false
    };
  },
  computed: {},
  methods: {
    alerts() {
      this.block = true;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.city-home {
  width: 100%;
  height: 100%;
}

// 城市列表动画
.cityList-enter-active{
  transition: all 1s ease;
}
.cityList-leave-active {
  transition: all .3s ease;
}
/* enter 和 leave-to 表示元素/组件隐藏状态的样式 */
.cityList-enter, .cityList-leave-to{
  /* transform: scale(0); */
  transform: translateY(100%)
}
</style>