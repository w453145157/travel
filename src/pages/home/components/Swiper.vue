<template>
  <div class="swiper-self">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide
        v-for="item of swiperList"
        :key="item.id"
      >
        <img
          :src="item.imgUrl"
          class="swiper-img"
        >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .swiper-self >>> .swiper-pagination-bullet-active
    background: #fff;
  .swiper-self
    padding-bottom: 31.67%
    height: 0
    background: #ddd
    overflow: hidden
    .swiper-img
      width: 100%
</style>