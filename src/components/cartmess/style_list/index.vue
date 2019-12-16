<template>
  <div class="style_wrap">
    <div class="color_header" @click="setFlag">全部款式</div>
    <div class="c-type">
      <span
        v-for="(item,index) in year"
        :key="index"
        :class="{active:CurInd===index}"
        @click="cut(index,item)"
      >{{item}}</span>
    </div>
    <div class="item" v-for="(item, index) in currentList" :key="index">
      <p>{{item.key}}</p>
      <ul>
        <li
          class="line"
          @click="jumps(ele.car_id,ele.car_name)"
          v-for="(ele,index) in item.list"
          :key="index"
        >
          <p class="one">{{ele.market_attribute.year}}款{{ele.car_name}}</p>
          <p class="two">{{ ele.trans_type}}</p>
          <p class="three">
            <span>指导价{{ ele.market_attribute.official_refer_price }}</span>
            <span>{{ ele.market_attribute.dealer_price }}起</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      year: state => state.CartMess.year,
      currentList: state => state.CartMess.currentList,
      CurInd: state => state.ColorStyle.CurInd
    })
  },
  methods: {
    ...mapActions({
      getCartColorList: "ColorStyle/getCartColorList",
      getStyleList: "ColorStyle/getStyleList"
    }),
    ...mapMutations({
      setWareHouseStyle: "ColorStyle/setWareHouseStyle",
      setID: "ColorStyle/setID",
      setStyleInner: "ColorStyle/setStyleInner"
    }),
    setFlag() {
      this.setWareHouseStyle(false);
    },
    cut(index) {
      this.setID(index);
    },
    jumps(car_id, inner) {
      this.getStyleList({ car_id, SireID: this.$route.query.id });
      this.setWareHouseStyle(false);
      this.setStyleInner(inner);
    }
  },
  created() {
    this.getCartColorList();
  }
};
</script>
<style scoped  lang="scss">
.style_wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f4f4f4;
  overflow-y: auto;
}
.color_header {
  width: 100%;
  line-height: 40px;
  height: 40px;
  font-size: 15px;
  color: #00afff;
  text-align: center;
  margin: 0 auto;
  background: #fff;
}
.c-type {
  width: 100%;
  background: #fff;
  margin: 10px 0 0 0;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  span {
    margin-right: 10px;
    &.active {
      color: skyblue;
    }
  }
  & span:first-child {
    padding-left: 15px;
  }
}
.item {
  width: 100%;
  background: #fff;
  & > p {
    height: 25px;
    padding: 0 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #a59999;
    font-size: 0.3rem;
    background: #f4f4f4;
  }
  ul {
    width: 100%;
    background: #fff;
    .line {
      height: 2.3rem;
      height: 100%;
      border-bottom: 0.1rem solid #f4f4f4;
      position: relative;
    }
    .line > .one {
      padding: 8px 16px 8px;
      font-size: 14px;
      line-height: 18px;
      color: #3d3d3d;
    }
    .line > .two {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #999;
      font-size: 14px;
      padding: 5px 15px;
      border-bottom: 1px solid #ccc;
      background: #fff;
    }
    .three {
      position: absolute;
      right: 10px;
      bottom: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      & > span:last-child {
        color: red;
        margin-top: 10px;
        padding-bottom: 10px;
      }
    }
  }
}
</style>