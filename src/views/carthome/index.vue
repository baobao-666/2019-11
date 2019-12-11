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
          <p>{{list&&list.BrandName}}-{{list&&list.AliasName}}</p>
          <p>{{list.list&&list.list[0].car_name}}</p>
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
          <div class="dealer" v-for="(item,index) in arrs" :key="index">
            <div class="left">
                  <input type="checkbox" >
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
import axios from "axios";
import { mapState, mapMutations,mapActions } from "vuex";

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
      arrs:state=>state.CartMess.arrs
    })
  },
  methods: {
    ...mapActions({
        getautomatic:"mess/getautomatic",
        getCityId:'CartMess/getCityId'
    }),
    ...mapMutations({
        setcityblock: "mess/setcityblock",
        setarr:"CartMess/setarr",
        setWareHouseStyle:"ColorStyle/setWareHouseStyle",
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
    iuy(){
      this.setWareHouseStyle(true)
      this.$router.push('/cartmess') 
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
      let SerialID = localStorage.getItem('SerialID');
      this.getautomatic();
      this.getCityId(SerialID);
      this.setarr();
      
    console.log("this.setarr***",this.setarr())
  },

};
</script>
<style scoped lang="scss">
.city-home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  font-size: 0.33rem;
  overflow: auto;
}
header {
  background: #79cd92;
  height: 0.6rem;
  text-align: center;
  line-height: 0.6rem;
  p {
    color: #fff;
  }
}
.count {
  flex: 1;
  .hover {
    width: 100%;
    height: 100px;
    padding: 10px;
    background: #fff;
    display: flex;
    .img {
      width: 40%;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        max-width: 100%;
        max-height: 100%;
        outline: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .text {
      width: 60%;
      height: 100%;
      display: flex;
      line-height: 0.43rem;
      flex-direction: column;
      justify-content: flex-start;
      & p:last-child {
        font-size: 0.3rem;
      }
    }
  }
  .info {
    p {
      height: 0.5rem;
      background: #eee;
      font-size: 14px;
      line-height: 0.5rem;
      color: #666;
      padding-left: 0.2rem;
    }
    ul {
      padding: 0 0.2rem;
      background: #fff;
      li {
        height: 0.9rem;
        line-height: 0.9rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        span {
          font-size: 0.3rem;
        }
        input {
          outline: none;
          border: 0;
          text-align: right;
        }
      }
      & li:last-child{
        button{
          max-width: 100%;
          max-height: 100%;
          outline: none;
          border: 0;
          background:#fff;
          color:#999;
        }
      }
    }
  }
  .quotation {
    height: 1.21rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    button {
      width: 80%;
      height: 0.7rem;
      background: #3aacff;
      outline: none;
      border: 0;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .foot {
    height:.5rem;
    padding: 0 0.2rem;
    font-size: 0.31rem;
    background: #eee;
    color: #666;
    line-height: .5rem;
  }
 

  .arrs{
    margin-top:.2rem;
    width: 100%;
    display: flex;
    background:#fff;
    // border-bottom:1px solid #ccc;
    padding:.3rem;
    flex-direction: column;
    .dealer{
      width: 100%;
      height: 1.5rem;
      border-bottom:1px solid #ccc;
      display: flex;
      position: relative;
      .left{
        width: 5%;
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
      }
      .right{
        padding:.1rem;
        width: 95%;
        height: 100%;
        display: flex;
        flex-direction: column;
        // justify-content: flex-start;
        line-height:.45rem;
        font-size: .25rem;
        & p:first-child{
          font-size: .3rem;
        }
        & p:last-child{
          color:#999;
          font-size: .28rem;
        }
      }
      .line{
        position: absolute;
        right: .0;
        bottom:.6rem;
        font-size: .2rem;
        color:#ccc;
      }
      .money{
        position: absolute;
        right: 0;
        top:.2rem;
        font-size: .2rem;
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