<template>
  <!--私人定制-->
    <div class="customizeContainer">
      <div class="customizetext">私人定制</div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="customizeList">
              <li class="customizeItem">
                <div class="ItemImg">
                  <img src="/static/images/yashua.png" >
                </div>
                <span class="product">全净皓齿变速式声波电动牙刷</span>
                <span class="product-name">￥21.9</span>
              </li>
              <li class="customizeItem">
                <div class="ItemImg">
                  <img src="/static/images/zhiku.png" >
                </div>
                <span class="product">全净皓齿变速式声波电动牙刷</span>
                <span class="product-name">￥21.9</span>
              </li>
              <li class="customizeItem">
                <div class="ItemImg">
                  <img src="/static/images/paper.png" >
                </div>
                <span class="product">全净皓齿变速式声波电动牙刷</span>
                <span class="product-name">￥21.9</span>
              </li>
          </ul>
          </div>
          <div class="swiper-slide"><ul class="customizeList">
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
          </ul></div>
          <div class="swiper-slide"><ul class="customizeList">
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
          </ul></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .customizeContainer
      padding 10px
      background white
      margin-top 10px
      .customizetext
        margin-bottom 10px
      .customizeList
        display flex
        .customizeItem
          margin-bottom 10px
          width 33%
          font-size 14px
          margin-right 10px
          .ItemImg
            background #f5f5f5
            img
              width 100px
          .product
            //display inline-block
            font-size 12px
            line-height 20px
          .product-name
            font-size 12px
            color red

      .swiper-pagination
        /deep/ .swiper-pagination-bullet
          width 5px
          height 5px
          background red
    
 
</style>
