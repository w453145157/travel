<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        src="//img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_600x330_370cb642.jpg"
        alt
        class="banner-img"
      >
      <div class="banner-info">
        <div class="banner-title">秦岭野生动物园(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont">&#xe65f;</span> 16
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary
  },
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1508/b2/e550b9a9d55279fff263b7fb2fe44c0d.water.jpg_r_800x800_aa94397d.jpg",
        "http://img1.qunarzz.com/sight/p0/1505/ea/ea154d04472e9cd0.water.jpg_r_800x800_5073d596.jpg"
      ]
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