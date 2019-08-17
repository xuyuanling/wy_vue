<template>
  <div id="msiteContainer">
    <!--头部导航-->
    <header class="msiteHeader">
      <div class="headerTop">
        <a href="javascript:">
          <img class="logo"src="/static/images/logo.png" alt="logo">
        </a>
        <div class="header_search">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品，共21615款好物</span>
        </div>
        <button class="login">登录</button>
      </div>
      <ul class="headerNav">
        <li class="headerItem active">推荐</li>
        <li class="headerItem ">居家生活</li>
        <li class="headerItem">服装箱包</li>
        <li class="headerItem">美食酒水</li>
      </ul>
      <span class="iconfont icon-jiantou-copy-copy"></span>
    </header>
    <!--全部频道-->
    <div class="channelAll" >
      <div class="channel">全部频道</div>
      <ul class="channelList">
        <li class="listItem active">推荐</li>
        <li class="listItem">居家生活</li>
        <li class="listItem">服饰箱包</li>
        <li class="listItem">美食酒水</li>
        <li class="listItem">个人清洁</li>
        <li class="listItem">母婴亲子</li>
        <li class="listItem">运动旅行</li>
        <li class="listItem">数码家电</li>
        <li class="listItem">全球特殊</li>
      </ul>
    </div>
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
    <!--网易自营-->
    <ul class="wy-merit">
      <li class="meritItem">
        <a href="javascript:" class="merit">
          <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
          <span>网易自营品牌</span>
        </a>
      </li>
      <li class="meritItem">
        <a href="javascript:" class="merit">
          <i class="iconfont icon-dunpai1"></i>
          <span>30天无忧退货</span>
        </a>
      </li>
      <li class="meritItem">
        <a href="javascript:" class="merit">
          <i class="iconfont icon-jiaoyi"></i>
          <span>48小时快速退款</span>
        </a>
      </li>
    </ul>
    <!--新品首发-->
    <ul class="new-product">
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/xinpin.png" >
          <span>新品首发</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/dazhe.gif" >
          <span>居家生活</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/xinpin.png" >
          <span>新品首发</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/dazhe.gif" >
          <span>居家生活</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/xinpin.png" >
          <span>新品首发</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/dazhe.gif" >
          <span>居家生活</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/xinpin.png" >
          <span>新品首发</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/dazhe.gif" >
          <span>居家生活</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/xinpin.png" >
          <span>新品首发</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/dazhe.gif" >
          <span>居家生活</span>
        </a>
      </li>
    </ul>
    <!--网易精选-->
    <div class="jx-ad">
      <a href="javascript:">
        <img src="/static/images/jingxuan.png" >
      </a>
    </div>
    <!--超值专区-->
    <ul class="bargain">
      <li class="bargainList">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="imgs">
          <img src="/static/images/cup.png" >
          <img src="/static/images/paper.png" >
        </div>
      </li>
      <li class="bargainList">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="imgs">
          <img src="/static/images/cup.png" >
          <img src="/static/images/paper.png" >
        </div>
      </li>
      <li class="bargainList">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="imgs">
          <img src="/static/images/cup.png" >
          <img src="/static/images/paper.png" >
        </div>
      </li>
      <li class="bargainList">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="imgs">
          <img src="/static/images/cup.png" >
          <img src="/static/images/paper.png" >
        </div>
      </li>
    </ul>
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
    <div>
      <div class="customizetext">
        <span>限时购</span>
        <div>
          <span></span>：
          <span></span>：
        </div>
      </div>
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

  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  export default {
    mounted () {
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
   #msiteContainer
      padding-top 80px
      padding-bottom 60px
      background #eee
      overflow hidden
    .msiteHeader
      padding 10px
      padding-bottom 0px
      position fixed !important
      left 0
      top 0
      z-index 11
      background white
      .headerTop
        display flex
        justify-content center
        align-items center
        height 30px
        .logo
          width 70px
        .header_search
          height 30px
          line-height 30px
          background #EDEDED
          border-radius 5px
          margin 0 10px
          padding 0 20px
          font-size 14px
          color #666
          text-align center

        .login
          background white
          color #b4282d
          border 1px solid #b4282d
          border-radius 5px
          font-size 12px


      .headerNav
        display flex
        margin-top 15px
        padding-left 10px
        .headerItem
          margin-right 20px
          color #333
          font-size 16px
          text-align center
          padding-bottom 5px
          &.active
            color #b4282d
            border-bottom 2px solid #b4282d

      .icon-jiantou-copy-copy
        position fixed
        right 30px
        top 55px
        font-size 18px
        color #333
        z-index 10
    .channelAll
      display none
      background white
      position fixed
      top 55px
      left 10px
      .channel
        color #666
        font-size 14px
        margin-bottom 20px
      .channelList
        display flex
        flex-wrap wrap
        .listItem
          width 80px
          height 30px
          line-height 30px
          border 1px solid #eee
          text-align center
          font-size 12px
          margin-left 8px
          margin-bottom 20px
          box-sizing border-box
          border-radius 2px
          &.active
            border 1px solid #b4282d
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

    .wy-merit
      display flex
      padding 10px
      background white
      .meritItem
        margin-right 5px
        padding 5px
        .merit
          font-size 12px
          color #333
          .iconfont
            color #b4282d

    .new-product
      display flex
      padding 10px
      flex-wrap wrap
      background white
      .productList
        //margin-right 20px
        margin-bottom 10px
        .productItem
          display flex
          flex-direction column
          align-items center
          margin 0 10px
          img
            width 50px
          span
            margin-top 5px
            font-size 12px
            color #333
    .jx-ad
      width 100%
      img
        width 380px

    .bargain
      display flex
      width 100%
      flex-wrap wrap
      padding 10px
      background white
      .bargainList
        width 40%
        padding 10px
        background #f5f5f5
        margin-right 3px
        margin-bottom 3px
        p:nth-child(1)
          color #333
        p:nth-child(2)
          font-size 12px
          color #666
          margin-top 5px
        .imgs
          img
            width 65px

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
