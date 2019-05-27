<template>
  <div class="icon-wrapper clear-fix">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for="(item, index) of pages"
        :key="index"
      >
        <div
          class="single-icon"
          v-for="icon of item"
          :key="icon.id"
        >
          <img :src="icon.imgUrl" alt="">
          <p>{{ icon.desc }}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconList.forEach((v, i) => {
        const page = Math.floor(i / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(v)
      })
      return pages;
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .icon-wrapper >>> .swiper-container
    overflow: unset
  .icon-wrapper >>> .swiper-pagination
    bottom: -0.5rem
  .icon-wrapper
    padding-top: 0.05rem
    height: 0;
    padding-bottom: 49.3%
    overflow: hidden
    .single-icon
      float: left
      width: 25%
      padding-top: .1rem
      text-align: center
      img
        width: 1.1rem
        height: 1.1rem
      p
        text-align: center
        margin-top: .08rem
        ellipsis()
</style>