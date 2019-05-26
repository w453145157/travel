<template>
  <div class="swiper-self">
    <swiper :options="swiperOption">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/60904fc24f223e0db5aee3c6148e641f.jpg_750x200_b1b90a19.jpg'
      }, {
        id: '002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/17e2352b857f66e9d2948e98dc483bc2.jpg_750x200_2857d0a3.jpg'
      }, {
        id: '003',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .swiper-self >>> .swiper-pagination-bullet-active
    background: #fff;
  .swiper-self
    padding-bottom: 26.67%
    height: 0
    background: #ddd
    overflow: hidden
    .swiper-img
      width: 100%
</style>