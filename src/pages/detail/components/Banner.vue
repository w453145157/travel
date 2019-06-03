<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{ this.name }}</div>
        <div class="banner-number">
          <span class="iconfont">&#xe65f;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleClose"></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/Fade";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    name: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleClose() {
      this.showGallary = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right:0
      bottom: 0
      line-height: .6rem
      display: flex
      color: #fff
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        line-height: .4rem
        height: .4rem
        border-radius: .2rem
        font-size: .24rem
        background: rgba(0, 0, 0, .8)
        margin: .1rem .2rem 0 0;
        .banner-icon
          font-size: .24rem
</style>