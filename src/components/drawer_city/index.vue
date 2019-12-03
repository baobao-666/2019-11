<template>
    <div class="drawer_city">
        {{cityOneList}}
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  
    computed:{
 ...mapState({
    cityOneList: state=>state.mess.cityOneList
 })
    },
    methods:{

    },
    created(){
console.log(this.cityOneList)

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

</style>