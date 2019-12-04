<template>
  <div class="mess-page">
    <header>
      <div class="img">
        <img :src="this.titImg" alt />
        <span>{{list&&list.pic_group_count}}</span>
      </div>

      <div class="text">
        <div class="left">
          <p>{{list.market_attribute&&list.market_attribute.dealer_price}}</p>
          <p>指导价{{list.market_attribute&&list.market_attribute.official_refer_price}}</p>
        </div>
        <div class="right">
          <span @click="jump(list.SerialID)">{{list&&list.BottomEntranceTitle}}</span>
        </div>
      </div>

      <div class="car-list">
        <div class="c-type">
          <!-- <span>全部</span>
          <span>2019</span>-->
          <span
            v-for="(item,index) in titlist"
            :key="index"
            :class="{active:curIndex===index}"
            @click="cut(index)"
          >{{item}}</span>
        </div>

        <div class="item" v-for="(item, index) in list.list" :key="index">
          <p>{{ item.exhaust_str }}/{{ item.max_power_str }} 涡轮增压</p>
          <ul>
            <li class="line">
              <p class="one">{{ item.car_name }}</p>
              <p class="two">{{ item.trans_type }}</p>
              <p class="three">
                <span>指导价{{ item.market_attribute.official_refer_price }}</span>
                <span>{{ item.market_attribute.dealer_price }}起</span>
              </p>
              <button>询问底价</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="foot" @click="jump(id)">
      <p>询问低价</p>
      <p>本地经销商为你报价</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: {},
  components: {},
  data() {
    return {
      //全部数据
      list: [],
      //头部图片
      titImg: "",
      titlist: ["全部", "2019"],
      curIndex: 0
    };
  },
  methods: {
    cut(index) {
      console.log(index);
      this.curIndex = index;
    },
    getlist() {
      axios
        .get("https://baojia.chelun.com/v2-car-getInfoAndListById.html", {
          params: { SerialID: this.$route.query.id }
        })
        .then(res => {
          if (res.data.code === 1) {
            this.titImg = res.data.data.Picture;
            this.list = res.data.data;
          }
        });
    },
    jump(id) {
      console.log("id...", id);
      this.$router.push({ path: "/carthome", query: { id } });
    }
  },
  created() {
    this.getlist();
  },
};
</script>
<style scoped lang="scss">
.mess-page {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
}
.mess-page header {
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  // overflow: scroll;
  background: #fff;
  .img {
    width: 100%;
    height: 166px;
    position: relative;
    // overflow: hidden;
    img {
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      display: block;
      max-width: 100%;
      max-height: 100%;
      outline: none;
    }
    span {
      position: absolute;
      bottom: 5px;
      right: 10px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      color: #fff;
      padding: 5px;
    }
  }
  .text {
    height: 50px;
    display: flex;
    .left {
      width: 50%;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
     line-height: 25px;
      padding-left:10px;
      // line-height: 20px;
      & > p:first-child {
        color: red;
        font-size: 20px;
        // font-weight: 900;
      }
      & > p:last-child {
        font-size: 14px;
        color: #ccc;
      }
    }
    .right {
      width: 50%;
      height: 50px;
      // margin:10px;
      // line-height: 80px;
      // text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        // width: 100%;
        // height:100%;
        padding: 8px 45px;
        background: skyblue;
        color: #fff;
        border-radius: 5px;
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
    margin: 10px 0;
    height: 49.06px;
    padding: 10px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;
    & span:first-child {
      margin: 0 20px 0 15px;
      // color: skyblue;
    }
  }
  .item {
    width: 100%;
    height: 154px;
    background: #fff;
    & > p {
      height: 26.66px;
      padding: 0 10px;
      // text-align: center;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #999;
      font-size: 14px;
      background: #f4f4f4;
    }
    ul {
      width: 100%;
      height: 127.44px;
      //   background: lime;

      .line > .one {
        height: 39.45px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 10px;
      }
      .line > .two {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 19px;
        color: #999;

        padding: 0 10px;
      }
      .line > .three {
        height: 26.33px;
        padding: 0 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 14px;
        color: #999;
        & > span:last-child {
          color: Red;
          margin-left: 10px;
        }
      }
      button {
        height: 42.66px;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        color: skyblue;
        border: 0;
        width: 100%;
        font-size: 18px;
        background: #fff;
        border-top: 1px solid #ccc;
      }
    }
  }
}
.foot {
  display: flex;
  width: 100%;
  height: 53.33px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: skyblue;
  color: #fff;
  & > p:first-child {
    font-size: 20px;
  }
}

.active {
  color: skyblue;
}
</style>
