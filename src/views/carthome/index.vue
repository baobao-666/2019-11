<template>
  <div class="city-home">
    <header>
      <p>
        可向多个商家咨询最低价，商家及时回复
        <span class="icon iconfont">&#xe72d;</span>
      </p>
    </header>
    <div class="count">
      <div class="hover">
        <div class="img" @click="iuy">
          <img :src="this.titImg" alt />
        </div>
        <div class="text">
          <p>{{list&&list.AliasName}}</p>
          <p>{{list.list&&list.list[0].car_name}}</p>
          <span>&gt;</span>
        </div>
      </div>

      <div class="info">
        <p>个人信息</p>
        <ul>
          <li>
            <span>姓名</span>
            <input type="text" placeholder="输入你的真实中文姓名" maxlength="4" v-model="username" />
          </li>
          <li>
            <span>手机</span>
            <input type="text" placeholder="输入你的手机号" maxlength="11" v-model="phone" />
          </li>
          <li>
            <span>城市</span>
            <button @click="alerts">{{automatic}}</button>
            <!-- 默认城市 -->
            <transition name="cityList">
              <CityCode v-if="cityblock"></CityCode>
            </transition>
          </li>
        </ul>
      </div>

      <div class="quotation">
        <button @click="inquiry">询问最低价</button>
      </div>

      <div class="foot">
        <p>选择报价经销商</p>
      </div>

      <!-- 下面经销商 -->
      <!-- {{arrs}} -->
      <div class="arrs">
        <div class="dealer" v-for="(item,index) in arrs" :key="index" @click="addColor(item)">
          <div class="left">
            <li :class="{active:item.newsRemainingDays==1}"></li>
          </div>
          <div class="right">
            <p>{{item.dealerShortName}}</p>
            <p>{{item.address}}</p>
          </div>
          <span class="money">{{item.promotePrice}}万</span>
          <span class="line">售{{item.saleRange}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CityCode from "@/components/city_list/";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: {},
  components: {
    CityCode
  },
  data() {
    return {
      list: [],
      titImg: "",
      username: "",
      phone: ""
    };
  },
  computed: {
    ...mapState({
      cityblock: state => state.mess.cityblock,
      automatic: state => state.mess.automatic,
      arrs: state => state.CartMess.arrs,
      fromList: state => state.CartMess.fromList
    })
  },
  methods: {
    ...mapActions({
      getautomatic: "mess/getautomatic",
      getCityId: "CartMess/getCityId",
      getFrom: "CartMess/getFrom"
    }),
    ...mapMutations({
      setcityblock: "mess/setcityblock",
      setarr: "CartMess/setarr",
      setWareHouseStyle: "ColorStyle/setWareHouseStyle"
    }),
    alerts() {
      this.setcityblock(true);
    },
    inquiry() {
      if (
        !/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone) ||
        !/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,4}$/.test(this.username)
      ) {
        alert("姓名或者手机号输入有误");
      }
    },
    iuy() {
      this.setWareHouseStyle(true);
      this.$router.push("/cartmess");
    },
    addColor(item) {
      item.newsRemainingDays = !item.newsRemainingDays;
    }
  },
  created() {
    this.$http
      .get("https://baojia.chelun.com/v2-car-getInfoAndListById.html", {
        params: { SerialID: this.$route.query.id }
      })
      .then(res => {
        if (res.data.code === 1) {
          this.titImg = res.data.data.Picture;
          this.list = res.data.data;
        }
      });
    let SerialID = localStorage.getItem("SerialID");
    this.getautomatic();
    this.getCityId(SerialID);
    this.setarr();
  }
};
</script>
<style scoped lang="scss">
.city-home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  overflow: auto;
}
header {
  background: #79cd92;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  p {
    color: #fff;
  }
}
.count {
  flex: 1;
  .hover {
    background: #fff;
    padding: 16px 8px 13px;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    display: flex;
    img {
      width: 127px;
      height: 77px;
      border: 1px solid #eee;
      border-radius: 5px;
    }
    .text {
      height: 77px;
      flex: 1;
      position: relative;
      margin-left:10px;
      font-size: 16px;
      line-height: 32px;
      span {
        position: absolute;
        right:15px;
        top: 50%;
        transform: translateY(-50%);
        font-size:20px;
        color: #ccc;
        font-weight: 900;
      }
    }
  }
  .info {
    p {
      height:25px;
      background: #eee;
      font-size:12px;
      line-height:25px;
      color: #666;
      padding-left: 10px;
    }
    ul {
      padding: 0 13px;
      background: #fff;
      li {
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        span {
          font-size: 16px;
          margin-right: 55px;
        }
        input {
          outline: none;
          border: 0;
          flex: 1;
          text-align: right;
        }
        input::-webkit-input-placeholder {
          font-size: 14px;
        }
      }
      & > li:last-child {
        button {
          max-width: 100%;
          max-height: 100%;
          outline: none;
          border: 0;
          background: #fff;
          color: #999;
        }
      }
    }
  }
  .quotation {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    button {
      width: 80%;
      height: 35px;
      background: #3aacff;
      outline: none;
      border: 0;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      font-size:14px;
    }
  }
  .foot {
    height:30px;
    padding: 0 10px;
    font-size: 14px;
    background: #eee;
    color: #666;
    line-height:30px;
  }
  .arrs {
    margin-top: 10px;
    width: 100%;
    display: flex;
    background: #fff;
    padding: 15px;
    flex-direction: column;
    .dealer {
      width: 100%;
      border-bottom: 1px solid #ccc;
      display: flex;
      position: relative;
      .left {
        width: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        & > li.active:before {
          background: #3aacff;
          border: none;
        }
        & > li:before {
          content: "";
          display: inline-block;
          width: 0.32rem;
          height: 0.32rem;
          border-radius: 50%;
          border: 2px solid #ccc;
          box-sizing: border-box;
          position: absolute;
          left: 0.05rem;
          top: 50%;
          -webkit-transform: translate3d(0, -50%, 0);
          transform: translate3d(0, -50%, 0);
        }
        & > li.active:after {
          content: "";
          display: inline-block;
          padding-top: 0.17rem;
          padding-right: 0.1rem;
          border: 2px solid #fff;
          -webkit-transform: rotate(40deg) translate3d(0, -50%, 0);
          transform: rotate(40deg) translate3d(0, -50%, 0);
          position: absolute;
          left: 0.07rem;
          border-left: none;
          border-top: none;
          top: 47%;
        }
      }
      .right {
        padding: 0.1rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        line-height: 20px;
        font-size:14px;
        & p:first-child {
          font-size: 16px;
        }
        & p:last-child {
          color: #999;
          font-size: 12px;
        }
      }
      .line {
        font-size: 14px;
        color: #ccc;
        position: absolute;
        right: 0;
        top: 30px;
      }
      .money {
        font-size: 12px;
        position: absolute;
        right: 0;
        top: 10px;
      }
    }
  }
}

// 城市列表动画
.cityList-enter-active {
  transition: all 1s ease;
}
.cityList-leave-active {
  transition: all 0.3s ease;
}
/* enter 和 leave-to 表示元素/组件隐藏状态的样式 */
.cityList-enter,
.cityList-leave-to {
  /* transform: scale(0); */
  transform: translateY(100%);
}
</style>