<template>
   <!--人气推荐-->
    <div class="popular">
      <div class="populartext">
        <span>人气推荐</span>
        <span>更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div class="p-product">
        <div class="productImg">
          <img src="/static/images/zhentou.png" >
        </div>
        <div class="productItem">
          <div class="sale">抄底特惠</div>
          <div class="title">新色 奢华植鞣头层水牛皮席 凉席三件套</div>
          <p class="desc">三峡水牛头层皮，高端夏凉必备</p>
          <p class="price">￥1949</p>
        </div>
      </div>
      <ul class="popularList">
        <li class="popularItem">
          <div class="ItemImg">
            <img src="/static/images/food.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
        <li class="popularItem">
          <div class="ItemImg">
            <img src="/static/images/bw.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
        <li class="popularItem">
          <div class="ItemImg">
            <img src="/static/images/shoes.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .popular
      background white
      margin-top 10px
      padding 10px
      .populartext
        width 100%
        span:nth-child(1)
          display inline-block
          width 82%
      .p-product
        background #FEF0DF
        display flex
        margin-top 10px
        .productImg
          width 150px
          height 150px
          img
            width 150px
        .productItem
          padding-top 20px
          width 200px
          .sale
            display inline-block
            padding 2px
            font-size 10px
            color #B4282D
            background white
            border 1px solid #B4282D
            margin 10px 0
          .title
            font-size 14px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            margin-bottom 10px
          .desc
            font-size 12px
            color #666
            margin-bottom 10px
          .price
            color #B4282D
            font-size 14px
      .popularList
        display flex
        flex-wrap wrap
        margin-top 10px
        .popularItem
          margin-bottom 10px
          width 30%
          font-size 14px
          margin-left 10px
          .ItemImg
            background #f5f5f5
            margin-bottom 10px
            img
              width 100%
          .product
            font-size 12px
            line-height 20px
          .price
            font-size 12px
            color red
   
 
</style>
