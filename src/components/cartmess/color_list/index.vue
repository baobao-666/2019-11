<template>
    <div class="color-wrap">
      <div class="color_header" @click="setFlag" >
          全部颜色
      </div>
      <div class="color_nav">
         <span  :class="{active:CurIndex===index}" @click="setYear(index)" v-for="(item,index) in ColorKey" :key="index">{{item}}</span>
      </div>
      <div class="color_cont">
        <li v-for="(item,index) in Color" :key="index" @click="setColorList(item.ColorId)" >
            <span :style="{background:item.Value}" ></span>
            {{item.Name}}
        </li>
      </div>
    </div>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
 computed:{
    ...mapState({
        Color:state=>state.ColorStyle.Color,
        ColorKey:state=>state.ColorStyle.ColorKey,
        CurIndex:state=>state.ColorStyle.CurIndex
    })
 },
 methods:{
     ...mapActions({
         getCartColorList:"ColorStyle/getCartColorList",
         getAllColor:"ColorStyle/getAllColor"

     }),
     ...mapMutations({
         setColor:"ColorStyle/setColor",
         setWareHouseColor:"ColorStyle/setWareHouseColor"
     }),
     setYear(index){
      this.setColor(index)
     },
     setFlag(){
       this.setWareHouseColor(false)
     },
     setColorList(id){
         this.getAllColor({id,SireID:2593})
     }
 },
 created(){
     this.getCartColorList(2593)
     this.setColor(this.CurIndex)
 }
}
</script>
<style scoped lang="scss">
.color-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f4f4f4;
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
.color_nav{
    margin-top: .15rem;
    padding-left: .2rem;
    font-size: .3rem;
    line-height: .76rem;
    height: .76rem;
    background: #fff;
    overflow-x: scroll;
    span{
        padding-right: .42rem;
        &.active{
         color: #00afff;
        }
    }
}
.color_cont{
    margin-top: .15rem;
    overflow: hidden;
    background: #fff;
    li{
       float: left;
       width: 3.45rem;
       font-size: .32rem;
       line-height: .68rem;
       border: 1px solid #3aacff;
       box-sizing: border-box;
       margin: .2rem .15rem;
       border-radius: .05rem;
       span{
         display: inline-block;
         width: .4rem;
         height: .4rem;
         margin-left: .2rem;
         vertical-align: -12%;
         box-sizing: border-box;
         border: 1px solid #818181;
       }
    }
}
</style>