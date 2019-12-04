<template>
    <div class="drawer_city">
        <div class="drawer_wrap">
            <div v-for="(item,index) in cityOneList" @click="setFlag(item.CityName)" :key="index" class="deawer_item">
                {{item.CityName}}
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    computed:{
 ...mapState({
    cityOneList: state=>state.mess.cityOneList
 })
    },
    methods:{
 ...mapMutations({
     setCityFlag:"mess/setCityFlag",
     setAutomatic:"mess/setAutomatic",
     setcityblock:"mess/setcityblock"
 }),
 setFlag(name){
     this.setCityFlag(false)
     this.$router.push('/carthome')
     this.setAutomatic(name)
     this.setcityblock(false)
 }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.drawer_city{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: rgba($color: #000000, $alpha: .3)
}
.drawer_wrap{
    width: 70%;
    height: 100%;
    background: #fff;
    margin-left: 30%;
    padding-left: .1rem;
    overflow-y: scroll;
}
.deawer_item{
    width: 100%;
    line-height: .8rem;
    border-bottom: .01rem solid #ccc;
    padding-left: .4rem;
    font-size: .28rem;
    &:last-child{
        border: none;
    }
}
</style>