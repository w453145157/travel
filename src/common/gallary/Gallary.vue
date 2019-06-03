<template>
  <div class="container" @click="handleClose">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img :src="item" class="gallary-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        autoPlay: false,
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 99
    background: #000
    display: flex
    flex-direction: column
    justify-content: center
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 99.66%
      background: #fff
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff  
        bottom: -1rem
</style>