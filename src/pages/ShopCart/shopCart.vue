<template>
  <div class="shopCartContainer">
    <header class="shopCartHeader">
      <div class="headerTop">
        <p class="shopCart">购物车</p>
        <a href="javascript:" class="cash">领劵</a>
      </div>
    </header>
    <ul class="wy-shop">
      <li class="shopItem">
        <a href="javascript:" class="shop">
          <i class="iconfont icon-yuanquanweixuanfuben"></i>
          <span>30天无忧退货</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="javascript:" class="shop">
          <i class="iconfont icon-yuanquanweixuanfuben"></i>
          <span>48小时快速退款</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="javascript:" class="shop">
          <i class="iconfont icon-yuanquanweixuanfuben"></i>
          <span>满88元免邮费</span>
        </a>
      </li>
    </ul>
    <div class="shopContent">
      <div class="shopImg">
        <img src="/static/images/shopcart.png" >
      </div>
      <div>登录</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
  .shopCartContainer
    background #eee
    height 100%
    .shopCartHeader
      background white
      .headerTop
        padding 10px 20px
        overflow hidden
        height 30px
        .shopCart
          font-size 18px
          color #7e8c8d
          float left
        .cash
          float right
          color #B4282D



    .wy-shop
      display flex
      padding 10px
      justify-content space-between
      background #eee
      .shopItem
        margin-right 5px
        padding 5px
        .shop
          font-size 12px
          color #333
          .iconfont
            font-size 6px
            color #b4282d



    .shopContent
      background #f4f4f4
      text-align center
      margin 100px auto
      height 100%
      .shopImg
        width 200px
        padding-left  100px
        img
          width 100%
</style>
