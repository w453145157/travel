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
          <img :src="icon.iconUrl" alt="">
          <p>{{ icon.text }}</p>
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [{
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        id: '001',
        text: '北京欢乐谷'
      }, {
        iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png',
        id: '002',
        text: '北京欢乐谷'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        id: '003',
        text: '北京欢乐谷'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        id: '004',
        text: '北京欢乐谷'
      }, {
        iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
        id: '005',
        text: '北京欢乐谷'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        id: '006',
        text: '北京欢乐谷'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        id: '007',
        text: '北京欢乐谷'
      }, {
        iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/35d83bb968d80d54926f30cfb92cb6ff.png',
        id: '008',
        text: '北京欢乐谷'
      }, {
        iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
        id: '009',
        text: '北京欢乐谷'
      }, {
        iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
        id: '010',
        text: '北京欢乐谷'
      }]
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
    bottom: -16px
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