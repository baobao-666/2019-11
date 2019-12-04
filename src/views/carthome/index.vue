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

    <button @click="alerts">{{automatic}}</button>
    <transition name="cityList">
      <CityCode v-if="cityblock"></CityCode>
    </transition>
  </div>
</template>
<script>
import CityCode from "@/components/city_list/";
import axios from 'axios'
import { mapState, mapMutations } from 'vuex';

export default {
  props: {},
  components: {
    CityCode
  },
  data() {
    return {
      list:[],
      titImg:''
    };
  },
  computed: {
    ...mapState({
      cityblock:state=>state.mess.cityblock,
      automatic:state=>state.mess.automatic
    })
  },
  methods: {
    ...mapMutations({
       setcityblock:"mess/setcityblock"
    }),
    alerts() {
       this.setcityblock(true)
    }
  },
  created() {
    
    this.$http.get("https://baojia.chelun.com/v2-car-getInfoAndListById.html", {
        params: { SerialID: this.$route.query.id }
      })
      .then(res => {
        console.log(res);
        if (res.data.code === 1) {
          this.titImg = res.data.data.Picture;
          this.list = res.data.data;
          console.log(this.list);
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
  font-size: .33rem;
}
header {
  background: #79cd92;
  height: .6rem;
  text-align: center;
  line-height: .6rem;
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
      line-height: .43rem;
      flex-direction: column;
      justify-content: flex-start;
      & p:last-child {
        font-size: .3rem;
      }
    }
  }
  .info {
    p {
      height: .5rem;
      background: #eee;
      font-size: 14px;
      line-height: .5rem;
      color: #666;
      padding-left: .2rem;
    }
    ul {
      padding: 0 .2rem;
      background: #fff;
      li {
        height: .9rem;
        line-height: .9rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        span {
          font-size: .3rem;
        }
        input {
          outline: none;
          border: 0;
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
      height: .7rem;
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
    height: .3rem;
    padding: 0 .2rem;
    font-size: .31rem;
    background: #eee;
    color: #666;
    line-height: .3rem;
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