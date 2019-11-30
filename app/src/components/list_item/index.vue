<template>
    <div class="list_item">
        <div class="list_title">
           {{item.title}}
        </div>
        <div v-for="(ele, index) in item.children" :key="index" class="list_ele">
            <img :src="ele.CoverPhoto"><span>{{ele.Name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
       item:{
           type:Object,
           default(){
               return "无数据"
           }
       }
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.list_item{
    width: 100%;
}
.list_title{
    width: 100%;
    line-height: 30px;
    background: #f0f0f0;
    padding-left: 20px;
}
.list_ele{
    width: 100%;
    height: 80px;
    display: flex;
    padding: 15px 20px;
    img{
        width: 50px;
        height: 50px;
    }
    span{
     flex: 1;
    line-height: 50px;
    margin-left: 20px;
    }
}
</style>