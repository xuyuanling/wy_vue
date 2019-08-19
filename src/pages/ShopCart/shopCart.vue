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
      <div class="shopImg"></div>
      <div class="text">
        <div class="add">去添加点什么吧</div>
        <div class="login">登录</div>
      </div>
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
          font-size 16px


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
      position fixed
      left 0
      top 95px
      right 0
      bottom 20px
      background #f4f4f4
      text-align center
      //margin 175px auto
      height 100%
      .shopImg
        position absolute
        left 0
        top 0
        right 0
        bottom 200px
        margin auto
        width 40px
        height 140px
        padding-left  100px
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
        background-repeat no-repeat
        background-size 100% 100%

      .text
        position absolute
        left 80px
        top 300px
        .add
          font-size 14px
          color #999
        .login
          margin-top 20px
          width 220px
          height 40px
          line-height 40px
          text-align center
          color white
          font-size 16px
          background #b4282d
</style>
