<template>
  <div class="city_page">
    <div class="defaut_city">
      <div class="default_title" >自动定位</div>
      <div class="default_city">{{automatic}}</div>
    </div>
    <div class="city_item">
      <div class="province">省份</div>
      <div class="item_e" @click="cityTo(item.CityID)" v-for=" (item,index) in macticList"  :key="index" >
          {{item.CityName}}
          <span>></span>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        automatic:"北京",
        macticList:[]
    };
  },
  methods: {
    getList() {
      this.$http
        .get("https://baojia.chelun.com/v1-city-alllist.html")
        .then(res => {
          console.log(res);
          if(res.data.code===1){
              console.log(res.data.msg);
              this. macticList=res.data.data
          }
        });
    },
    cityTo(id){
      console.log(id);
    //   this.$http.get('https://baojia.chelun.com/v1-city-alllist.html')
    }
  },
  created(){
 this.getList()
  },
  mounted() {
     
  }
};
</script>
<style scoped  lang="scss">
.city_page {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  z-index: 88;
}
@mixin title(){
     font-size: 14px;
     background: #eee;
     padding: 2px 0 2px 10px;
}
@mixin List(){
        width: 100%;
        line-height: 50px;
        padding-left: 20px;
}
.defaut_city{
    width: 100%;
    .default_title{
    @include title()
    }
    .default_city{
      @include List()
    }
}
.city_item{
 .province{
    @include title()
 }
.item_e{
      @include List();
      position: relative;
      width: 95%;
      margin: 0 2.5%;
      border-bottom: 1px solid #ccc;
      font-size: 16px;
      &:last-child{
          border: none;
      }
      span{
          position: absolute;
          right: 10px;
      }
}
}
</style>