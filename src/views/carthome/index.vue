<template>
  <div class="city-home">
    <header>
      <p>可向多个商家咨询最低价，商家及时回复</p>
    </header>

    <div class="count">
      <div class="hover">
        <div class="img">
          <img :src="this.titImg" alt="">
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
            <input type="text" placeholder="输入你的真实中文姓名" maxlength="4" />
          </li>
          <li>
            <span>手机</span>
            <input type="text" placeholder="输入你的手机号" maxlength="4" />
          </li>
          <li>
            <span>城市</span>
            <input type="text" placeholder="输入你的城市" maxlength="4" />
          </li>
        </ul>
      </div>

      <div class="quotation">
        <button>询问最低价</button>
      </div>

      <div class="foot">
        <p>选择报价经销商</p>
      </div>
    </div>

    <button @click="alerts">点击渲染城市列表</button>
    <transition name="cityList">
      <CityCode v-if="block"></CityCode>
    </transition>
  </div>
</template>
<script>
import CityCode from "@/components/city_list/";
import axios from 'axios'

export default {
  props: {},
  components: {
    CityCode
  },
  data() {
    return {
      block: false,
      list:[],
      titImg:''
    };
  },
  computed: {},
  methods: {
    alerts() {
      this.block = true;
    }
  },
  created() {
    
    this.$http.get("https://baojia.chelun.com/v2-car-getInfoAndListById.html", {
        params: { SerialID: this.$route.query.id }
      })
      .then(res => {
        console.log(res.data.data);
        if (res.data.code === 1) {
          this.titImg = res.data.data.Picture;
          this.list = res.data.data;
        }
      });
    // console.log(this.$route.query.id)
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.city-home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  font-size: 18px;
}
header {
  background: #79cd92;
  height: 30px;
  text-align: center;
  line-height: 30px;
  p {
    color: #fff;
  }
}
.count {
  flex: 1;

  .hover {
    // padding:20px;
    width: 100%;
    height: 100px;
    padding: 10px;
    background: #fff;
    display: flex;
    .img {
      width: 40%;
      // height: 100%;
      position: relative;
      overflow: hidden;
      img{
      position: absolute;
      max-width: 100%;
      max-height: 100%;
      outline: none;
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%)
      }
    }
    .text {
      width: 60%;
      height: 100%;
      display: flex;
      line-height: 22px;
      flex-direction: column;
      justify-content: flex-start;
      // align-items: center;
      & p:last-child {
        font-size: 14px;
      }
    }
  }
  .info {
    p {
      height: 25px;
      background: #eee;
      font-size: 14px;
      line-height: 25px;
      color: #666;
      padding-left: 10px;
    }
    ul {
      padding: 0 10px;
      background: #fff;
      li {
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        span {
          font-size: 16px;
        }
        input {
          outline: none;
          border: 0;
        }
      }
    }
  }
  .quotation {
    height: 64px;
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
    }
  }
  .foot {
    height: 25px;
    padding: 0 10px;
    font-size: 16px;
    background: #eee;
    color: #666;
    line-height: 25px;
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