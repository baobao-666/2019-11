<template>
<div class="wrap">
    <CommonList :list="{
            query: {Page},
            limit: 30,
            count: count,
            refreshDispatch: 'GetImgScroll/getImageTypeList',
            loadMoreDispatch: 'GetImgScroll/getImageTypeList',
            value:value  //列表数据
        }">
        <!--  插槽内容  -->
        <template v-slot:default="slotProps">
            <ul>
                <span :key="index" v-for="(item, index) in slotProps.value" v-lazy:background-image="item.Url.replace('{0}', item.LowSize)" @click="showSwiper(index)" />
            </ul>
        </template>
    </CommonList>
</div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions
} from "vuex";
import CommonList from "./CommonList";
export default {
    computed: {
        ...mapState({
            count: state => state.GetImgScroll.Count,
            value: state => state.GetImgScroll.imageTypeList,
            Page: state => state.GetImgScroll.Page
        })
    },
    components: {
        CommonList
    },
    methods: {
        ...mapActions({
            getImageTypeList: "GetImgScroll/getImageTypeList"
        }),
        ...mapMutations({
            setCurrent: "GetImgScroll/setCurrent",
            setShowImageSwiper:"GetImgScroll/setShowImageSwiper"
        }),
        showSwiper(index) {
            // 显示轮播
            this.setShowImageSwiper(true)
            this.$emit("update:showImageSwiper", true);
            // 修改current
            this.setCurrent(index);
        }
    },
    mounted() {
        this.getImageTypeList();
    }
};
</script>

<style lang="scss" scoped>
.wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
}

ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

ul span {
    display: inline-block;
    width: 32.7vw;
    height: 32.7vw;
    margin-bottom: 1vw;
    background-size: cover;
    background-position: center;
}
</style>
