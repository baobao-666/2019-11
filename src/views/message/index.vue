<template>
  <div class="mess-page" v-if="(Object.keys(desclist).length)">
    <header>
      <div class="img" @click="jumpCartMess">
        <img v-lazy="desclist.CoverPhoto" alt />
        <span>{{desclist.pic_group_count}}张图片</span>
      </div>

      <div class="text">
        <div class="left">
          <p>{{desclist.market_attribute.dealer_price}}</p>
          <p>指导价{{desclist.market_attribute.official_refer_price}}</p>
        </div>
        <div class="right">
          <span @click="jump(desclist.SerialID)">{{desclist.BottomEntranceTitle}}</span>
        </div>
      </div>

      <div class="car-list">
        <div class="c-type">
          <span
            v-for="(item,index) in year"
            :key="index"
            :class="{active:curIndex===index}"
            @click="cut(index,item)"
          >{{item}}</span>
        </div>
        <div class="item" v-for="(item, index) in currentList" :key="index">
          <p>{{item.key}}</p>
          <ul>
            <li class="line" v-for="(ele,index) in item.list" :key="index">
              <p class="one">{{ele.market_attribute.year}}款{{ ele.car_name }}</p>
              <p class="two">{{ele.inhale_type}}-{{ ele.trans_type }}</p>
              <p class="three">
                <span>指导价{{ ele.market_attribute.official_refer_price }}</span>
                <span>{{ ele.market_attribute.dealer_price }}起</span>
              </p>
              <button @click="jump(desclist.SerialID)">询问底价</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="foot" @click="jump(desclist.SerialID)">
      <p>询问低价</p>
      <p>本地经销商为你报价</p>
    </div>
    <!-- {{desclist}} -->
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      curIndex: 0
    };
  },
  methods: {
    ...mapActions({
      getCartMessSort: "CartMess/getCartMessSort"
    }),
    ...mapMutations({ backRoll: "CartMess/backRoll" }),
    //tab切换
    cut(index, item) {
      this.curIndex = index;
      this.backRoll(item);
      this.getCartMessSort(this.$route.query.id);
    },
    jump(id) {
      // 存车系 ID
      let idi = this.currentList;
      let idele = idi && idi[0].list[0].car_id;
      localStorage.setItem("SerialID", idele);
      this.$router.push({ path: "/carthome", query: { id } });
    },
    jumpCartMess() {
      this.$router.push({
        path: "/cartmess",
        query: { id: this.$route.query.id }
      });
    }
  },
  computed: {
    ...mapState({
      desclist: state => state.CartMess.desclist,
      current: state => state.CartMess.current,
      year: state => state.CartMess.year,
      currentList: state => state.CartMess.currentList
    })
  },
  created() {
    this.getCartMessSort(this.$route.query.id);
  }
};
</script>
<style scoped lang="scss">
.mess-page {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
}
.mess-page header {
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  background: #f2f2f2;
  .img {
    position: relative;
    height: 170px;
    overflow: hidden;
    img {
      width: 100%;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      position: absolute;
    }
    span {
      position: absolute;
      bottom: 15px;
      right: 10px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      color: #fff;
      padding: 8px 10px;
      font-size: 14px;
      text-align: center;
    }
  }
  .text {
    padding: 15px 8px 15px;
    background: #fff;
    display: flex;
    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      line-height: 20px;
      padding-left: 10px;
      & > p:first-child {
        color: red;
        font-size: 16px;
        font-weight: 900;
      }
      & > p:last-child {
        font-size: 14px;
        color: #ccc;
      }
    }
    .right {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        padding: 10px 45px;
        background: skyblue;
        color: #fff;
        border-radius: 6px;
        font-size: 14px;
      }
    }
  }
}
.mess-page .car-list {
  width: 100%;
  display: flex;
  flex-direction: column;
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
      .line {
        height: 2.3rem;
        height: 100%;
        border-bottom: 0.1rem solid #f4f4f4;
      }
      .line > .one {
        padding:11px 15px 11px;
        font-size: 16px;
        line-height: 18px;
        color: #3d3d3d;
      }
      .line > .two {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #999;
        font-size: 14px;
        padding: 0 15px;
      }
      .line > .three {
        height: 25px;
        padding: 0 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size:14px;
        color: #999;
        & > span:last-child {
          color: Red;
          margin-left:10px;
        }
      }
    }
    button {
      width: 100%;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
      color: #49aae8;
      border: 0;
      font-size: 16px;
      background: #fff;
      border-top: 1px solid #ccc;
    }
  }
}

.foot {
  display: flex;
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: skyblue;
  color: #fff;
  & > p:first-child {
    font-size: 14px;
    margin-bottom: 6px;
    font-weight: 900;
  }
}
.active {
  color: skyblue;
}
</style>
