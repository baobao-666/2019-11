<template>
  <div class="mess-page">
    <header>
      <div class="img">
              <img :src="this.img" alt="">
      </div>
      <div class="text">
        <div class="left">
          <p>21.22-33.8万</p>
          <p>指导价26.68-40.17万</p>
        </div>
        <div class="right">
          <span>询问低价</span>
        </div>
      </div>
    </header>
    <div class="car-list">
      <div class="c-type">
        <span>全部</span>
        <span>2019</span>
      </div>
      <div class="item" v-for="(item,index) in list" :key="index">
        <p>{{item.exhaust_str}}/{{item.max_power_str}} 涡轮增压</p>
        <ul>
          <li class="line">
            <p class="one">{{item.car_name}}</p>
            <p class="two">{{item.trans_type}}</p>
            <p class="three">
              <span>指导价{{item.max_power}}万</span>
              <span>{{item.max_power_str}}万起</span>
            </p>
            <button>询问底价</button>
          </li>
        </ul>
      </div>
      <!-- <div class="item">
        <p>1.4L/110kW 涡轮增压</p>
        <ul>
          <li class="line">
            <p class="one">2019款 35 TFSI 进取版 国V</p>
            <p class="two">150马力7档双离合</p>
            <p class="three">
              <span>指导价28.68万</span>
              <span>20.98万起</span>
            </p>
            <button>询问底价</button>
          </li>
        </ul>
      </div>
      <div class="item">
        <p>1.4L/110kW 涡轮增压</p>
        <ul>
          <li class="line">
            <p class="one">2019款 35 TFSI 进取版 国V</p>
            <p class="two">150马力7档双离合</p>
            <p class="three">
              <span>指导价28.68万</span>
              <span>20.98万起</span>
            </p>
            <button>询问底价</button>
          </li>
        </ul>
      </div>
      <div class="item">
        <p>1.4L/110kW 涡轮增压</p>
        <ul>
          <li class="line">
            <p class="one">2019款 35 TFSI 进取版 国V</p>
            <p class="two">150马力7档双离合</p>
            <p class="three">
              <span>指导价28.68万</span>
              <span>20.98万起</span>
            </p>
            <button>询问底价</button>
          </li>
        </ul>
      </div>
      <div class="item">
        <p>1.4L/110kW 涡轮增压</p>
        <ul>
          <li class="line">
            <p class="one">2019款 35 TFSI 进取版 国V</p>
            <p class="two">150马力7档双离合</p>
            <p class="three">
              <span>指导价28.68万</span>
              <span>20.98万起</span>
            </p>
            <button>询问底价</button>
          </li>
        </ul>
      </div>
      <div class="item">
        <p>1.4L/110kW 涡轮增压</p>
        <ul>
          <li class="line">
            <p class="one">2019款 35 TFSI 进取版 国V</p>
            <p class="two">150马力7档双离合</p>
            <p class="three">
              <span>指导价28.68万</span>
              <span>20.98万起</span>
            </p>
            <button>询问底价</button>
          </li>
        </ul>
      </div> -->
    </div>
    <div class="foot">
      <p>询问低价</p>
      <p>本地经销商为你报价</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  props: {},
  components: {},
  data() {
    return {
      // 顶部图片
      img:'',
      //全部数据
      list:[]
    };
  },
  computed: {},
  methods: {
      getlist(){
        axios.get('https://baojia.chelun.com/v2-car-getInfoAndListById.html',{params:{SerialID:2593}}).then(res=>{
          console.log(res)
                  if(res.data.code===1){
                      this.title=res.data.data.market_attribute
                      this.list=res.data.data.list;
                      this.img=res.data.data.CoverPhoto
                      console.log(res.data.data.list)
                      console.log(res.data.data.CoverPhoto)
           }   
        })
    }
  },
  created() {
      this.getlist()
  },
  mounted() {
  
  }
};
</script>
<style scoped lang="scss">
.mess-page {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  position: relative;
}
.mess-page header {
  width: 100%;
  height: 256px;
  background: #fff;
  .img {
    height: 176px;
    background: cornflowerblue;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .text {
    height: 80px;
    display: flex;
    .left {
      width: 50%;
      height: 80px;
      display: flex;
      flex-direction: column;
      text-align: center;
      line-height: 35px;
      & > p:first-child {
        color: red;
        font-size: 18px;
        font-weight: 900;
      }
      & > p:last-child {
        font-size: 14px;
        color: #ccc;
      }
    }
    .right {
      width: 50%;
      height: 80px;
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
  height: 100%;
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
      color: skyblue;
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
  width: 100%;
  height: 53.33px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: skyblue;
  color: #fff;
  & > p:first-child {
    font-size: 20px;
  }
}
</style>
