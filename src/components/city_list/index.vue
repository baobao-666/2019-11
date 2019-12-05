<template>
  <div class="city_page">
    <div class="defaut_city">
      <div class="default_title">自动定位</div>
      <div class="default_city">{{automatic}}</div>
    </div>
    <div class="city_item">
      <div class="province">省份</div> 
        <div
        class="item_e"
        @click="cityTo(item.CityID)"
        v-for="(item,index) in cityList"
        :key="index"
        >
       {{item.CityName}}
       <span class="icon iconfont">&#xe600;</span>
      </div>
    </div>
    <DrawerCity v-if="cityFlag"></DrawerCity>
  </div>
</template>

<script>
// 列表抽屉
import DrawerCity from "../drawer_city/";

import { mapActions, mapState, mapMutations } from "vuex";
export default {
  components: {
    DrawerCity
  },
  computed: {
    ...mapState({
      cityList: state => state.mess.cityList,
      automatic: state => state.mess.automatic,
      cityFlag: state => state.mess.cityFlag
    })
  },
  methods: {
    ...mapActions({
      getcityList: "mess/getcityList",
      getcityOneList: "mess/getcityOneList"
    }),
    ...mapMutations({
      setCityFlag: "mess/setCityFlag",
      setcityblock: "mess/setcityblock"
    }),
    cityTo(id) {
      this.getcityOneList(id);
      this.setCityFlag(true);
    }
  },
  created() {
    this.getcityList();
  }
};
</script>
<style scoped  lang="scss">
.city_page {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  z-index: 88;
  background: #fff;
}
@mixin title() {
  font-size: 0.28rem;
  background: #eee;
  padding: 0.2rem 0 0.2rem 0.1rem;
}
@mixin List() {
  width: 100%;
  line-height: 0.7rem;
  padding-left: 20px;
}
.defaut_city {
  width: 100%;
  .default_title {
    @include title();
  }
  .default_city {
    @include List();
  }
}
.city_item {
  .province {
    @include title();
  }
  .item_e {
    @include List();
    position: relative;
    width: 95%;
    margin: 0 2.5%;
    border-bottom: 0.01rem solid #ccc;
    font-size: 16px;
    &:last-child {
      border: none;
    }
    span {
      position: absolute;
      right: 10px;
    }
  }
}
</style>