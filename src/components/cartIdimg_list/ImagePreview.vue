<template>
  <div class="preview">
    <van-image-preview
      v-model="showPreview"
      :images="list"
      @change="change"
      :start-position="current"
    >
      <template v-slot:index>{{`${current+1}/${count}`}}</template>
    </van-image-preview>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {
    showImageSwiper: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      imageTypeList: state => state.GetImgScroll.imageTypeList,
      current: state => state.GetImgScroll.Current,
      count: state => state.GetImgScroll.Count,
      page: state => state.GetImgScroll.Page
    }),
    list() {
      return this.imageTypeList.map(item => {
        return item.Url.replace("{0}", item.HighSize);
      });
    },
    showPreview: {
      get() {
        return this.showImageSwiper;
      },
      set(value) {
        this.$emit("update:showImageSwiper", false);
      }
    }
  },
  methods: {
    ...mapActions({
      getImageTypeList: "GetImgScroll/getImageTypeList"
    }),
    ...mapMutations({
      setCurrent: "GetImgScroll/setCurrent"
    }),
    change(index) {
      this.setCurrent(index);
      // 提前两张加载下一页图片
      if (index > this.imageTypeList.length - 2) {
        if (this.imageTypeList.length < 30) {
          this.getImageTypeList(1);
        } else {
          this.getImageTypeList(this.page + 1);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.preview /deep/ .van-image-preview__overlay {
  background: #000;
}
</style>