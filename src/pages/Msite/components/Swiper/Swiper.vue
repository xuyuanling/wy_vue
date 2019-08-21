<template>
  <!--轮播-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="/static/images/m1.png" ></div>
          <div class="swiper-slide"><img src="/static/images/m2.png" ></div>
          <div class="swiper-slide"><img src="/static/images/m3.png" ></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  export default {
    mounted() {
       new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
  .swiper-container
       width: 100%
       height: 190px
       .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            img
              width 100%
              height 100%


       .swiper-pagination
        /deep/ .swiper-pagination-bullet
                 width 20px
                 height 2px
                 background white

   
 </style>
