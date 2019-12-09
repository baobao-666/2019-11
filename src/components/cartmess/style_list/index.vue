<template>
    <div class="style_wrap">
        <div class="color_header" @click="setFlag" >
          全部款式
       </div>
        <div class="c-type">
          <span
            v-for="(item,index) in year"
            :key="index"
            :class="{active:CurInd===index}"
            @click="cut(index,item)"
          >{{item}}</span>
        </div>
        <div class="item" v-for="(item, index) in currentList" :key="index" >
          <p>{{item.key}}</p>
          <ul>
            <li class="line"  @click="jumps(ele.car_id)" v-for="(ele,index) in item.list"  :key="index"  >
              <p class="one">{{ele.market_attribute.year}}款{{ item.list[0].car_name }}</p>
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
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
    computed:{
        ...mapState({
             year: state => state.CartMess.year,
             currentList: state => state.CartMess.currentList,
             CurInd: state => state.ColorStyle.CurInd
        })
        },
    methods:{
        ...mapActions({
            getCartColorList:"ColorStyle/getCartColorList",
            getColorList:"ColorStyle/getColorList"
        }),
        ...mapMutations({
            setWareHouseStyle:"ColorStyle/setWareHouseStyle",
            setID:"ColorStyle/setID"
        }),
        setFlag(){
             this.setWareHouseStyle(false)
        },
        cut(index){
             this.setID(index)
        },
        jumps(car_id){
             this.getColorList({car_id,SireID:this.$route.query.id});
             this.setWareHouseStyle(false)
        }
    },
    created(){
        this.getCartColorList()
    }
}
</script>
<style scoped  lang="scss">
.style_wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f4f4f4;
    overflow-y: auto;
}
.color_header{
    width: 100%;
    line-height: .8rem;
    height: .8rem;
    font-size: .34rem;
    color: #00afff;
    text-align: center;
    margin: .15rem 0;
    background: #fff;
}

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
}
</style>