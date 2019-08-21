<template>
<!--类目热销榜-->
  <div class="hot-lists">
      <div class="hot-text">类目热销榜</div>
      <div class="hot-list">
        <div class="hot-list-Item">
          <div class="hot-list-text">
            <span>热销榜</span>
            <span class="border"></span>
          </div>
          <div class="hotImg" ><img src="/static/images/inshoe.png" alt=""></div>
        </div>
        <div class="praise-list-Item">
          <div class="hot-list-text">
            <span>好评榜</span>
            <span class="border"></span>
          </div>
          <div class="hotImg" ><img src="/static/images/camera.png" alt=""></div>
        </div>
      </div>
      <ul class="hot-products">
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/mike.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/yashua.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/mike.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/yashua.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/mike.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/yashua.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/mike.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/yashua.png" alt="">
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .hot-lists
      background white
      margin-top 10px
      padding 10px
      .hot-text
        margin-bottom 10px
      .hot-list
        display flex
        .hot-list-Item
          display flex
          background #F9F3E4
          margin-right 10px
          padding 10px
          height 90px
          .hotImg
            width 100px
            height 100px
            img
              width 100%
          .hot-list-text
            width 48px
            padding-top 30px
            font-size 14px
            .border
              display inline-block
              width 20px
              height 2px
              background black
        .praise-list-Item
          display flex
          background #EBEFF6
          padding 10px
          height 90px
          .hotImg
            width 100px
            height 100px
            img
              width 100%
          .hot-list-text
            width 48px
            padding-top 30px
            font-size 14px
            .border
              display inline-block
              width 20px
              height 2px
              background black
      .hot-products
        display flex
        flex-wrap wrap
        margin-top 5px
        .hot-product-item
          width 24%
          text-align center
          background #F5F5F5
          margin-right 2px
          margin-bottom 2px
          span
            font-size 12px
            color #333
          img
            width 50px
    
 
</style>
