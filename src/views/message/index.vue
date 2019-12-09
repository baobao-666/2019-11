<template>
  <div class="mess-page" v-if="(Object.keys(desclist).length)" >
    <header>
      <div class="img"  @click="jumpCartMess" >
        <img v-lazy="desclist.Picture" alt />
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
              <p class="two">{{ ele.trans_type }}</p>
              <p class="three">
                <span>指导价{{ ele.market_attribute.official_refer_price }}</span>
                <span>{{ ele.market_attribute.dealer_price }}起</span>
              </p>
              <button @click="jump(ele.car_id)">询问底价</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="foot" @click="jump(desclist.SerialID)">
      <p>询问低价</p>
      <p>本地经销商为你报价</p>
    </div>
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
    ...mapMutations({backRoll:"CartMess/backRoll"}),
    //tab切换
    cut(index,item) {
      this.curIndex = index;
      this.backRoll(item)
      this.getCartMessSort(this.$route.query.id);
    },
    jump(id) {
      console.log("id...", id);
      this.$router.push({ path: "/carthome", query: { id } });
    },
    jumpCartMess(){
       this.$router.push({path:'/cartmess',query:{id:this.$route.query.id}})
    }
  },
  computed: {
    ...mapState({
      desclist: state => state.CartMess.desclist,
      current: state => state.CartMess.current,
      year: state => state.CartMess.year,
      currentList: state => state.CartMess.currentList,
    
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
    width: 100%;
    height: 4.5rem;
    position: relative;
    background: #fff;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      max-width: 100%;
      max-height: 100%;
      outline: none;
    }
    span {
      position: absolute;
      bottom: 0.15rem;
      right: 0.3rem;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 0.3rem;
      color: #fff;
      padding: 0.1rem 0.2rem;
    }
  }
  .text {
    height: 1rem;
    display: flex;
    background: #fff;
    .left {
      width: 50%;
      height: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      line-height: 0.5rem;
      padding-left: 0.2rem;
      & > p:first-child {
        color: red;
        font-size: 0.4rem;
      }
      & > p:last-child {
        font-size: 0.3rem;
        color: #ccc;
      }
    }
    .right {
      width: 50%;
      height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        padding: 0.2rem 1rem;
        background: skyblue;
        color: #fff;
        border-radius: 0.1rem;
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
    margin: 0.2rem 0 0 0;
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.4rem;
    span{
       margin-right:.2rem;
       &.active {
      color: skyblue;
     }
    }
    & span:first-child {
      padding-left:0.35rem;
    }
  }
  .item {
    width: 100%;
    background: #fff;
    & > p {
      height: 0.5rem;
      padding: 0 0.2rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #999;
      font-size: 0.3rem;
      background: #f4f4f4;
    }
    ul {
      width: 100%;
      .line{
        height: 2.3rem;
        height: 100%;
        border-bottom: .1rem solid #f4f4f4;
      }
      .line > .one {
        height: 0.8rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 0.2rem;
      }
      .line > .two {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 0.4rem;
        color: #999;

        padding: 0 0.2rem;
      }
      .line > .three {
        height: 0.5rem;
        padding: 0 0.2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 0.3rem;
        color: #999;
        & > span:last-child {
          color: Red;
          margin-left: 0.2rem;
        }
     }
  
      }
      button {
        height: 0.83rem;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        color: skyblue;
        border: 0;
        width: 100%;
        font-size: 0.35rem;
        background: #fff;
        border-top: 1px solid #ccc;
      }
    }
  }

.foot {
  display: flex;
  width: 100%;
  height: 1.1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: skyblue;
  color: #fff;
  & > p:first-child {
    font-size: 0.4rem;
    margin-bottom: 0.1rem;
  }
}
.active {
  color: skyblue;
}
</style>
