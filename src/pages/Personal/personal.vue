<template>
  <div class="personalContainer">
    <header class="goodsHeader">
      <div class="header-sy" @click="$router.replace('/msite')">
        <a href="javascript:">
          <i class="iconfont icon-shouye"></i>
        </a>
      </div>
      <div class="header-text">
        <img src="/static/images/logo.png" alt="">
      </div>
      <div class="search-shop">
        <a href="javascript:">
          <i class="iconfont icon-sousuo"></i>
        </a>
        <a href="javascript:" @click="$router.replace('/shopcart')">
          <i class="iconfont icon-gouwuchekong"></i>
        </a>
      </div>
    </header>
    <div class="loginWrap">
      <div class="loginType">
        <div class="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" >
        </div>
        <div class="loginWay">
          <div class="login-phone">
            <i class="iconfont icon-shouji"></i>
            <span>手机号快捷登录</span>
          </div>
          <div class="login-email">
            <i class="iconfont icon-youjian"></i>
            <span>邮箱账号登录</span>
          </div>
        </div>
      </div>
      <div class="threeWay">
        <div class="wayItem">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="wayItem">
          <i class="iconfont icon-web-icon-"></i>
          <span>QQ</span>
        </div>
        <div class="wayItem">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <div class="loginPhone">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" >
      </div>
      <form class="login-from">
        <div class="loginContent">
          <div class="inputItem">
            <input type="text" placeholder="请输入手机号">
          </div>
          <div class="inputItem">
            <input type="text" placeholder="请输入短信验证码">
          </div>
          <div>
            <span>遇到问题</span>
            <span>使用密码验证登录</span>
          </div>
          <div>登录</div>
          <div>
            <i></i>
            <span>我同意</span>
            <a href="javascript">《服务条款》</a>
            <span>和</span>
            <a href="javascript">《网易隐私政策》</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
  .personalContainer
    .goodsHeader
      padding 10px
      display flex
      justify-content space-between
      align-items center
      border-bottom 1px solid #d9d9d9
      font-size 20px
      .iconfont
        font-size 26px
      .header-text
        width 80px
        margin-left 40px
        img
          width 100%
      .search-shop
        a
          display inline-block
          margin-right 5px

    .loginWrap
      display none
      height 620px
      background #F2F5F4
      .loginType
        padding-top 100px
        .logo
          width 150px
          margin auto
          img
            width 100%
        .loginWay
          margin-top 100px
          text-align center
          padding-left 20px
          .login-phone
            width 330px
            height 45px
            line-height 45px
            text-align center
            color white
            font-size 14px
            background #DD1A21
            margin-bottom 15px
            .icon-shouji
              font-size 22px
          .login-email
            width 330px
            height 45px
            line-height 45px
            text-align center
            color #DD1A21
            font-size 14px
            background transparent
            border 1px solid #DD1A21
            margin-bottom 10px
            .icon-youjian
              font-size 18px


      .threeWay
        position absolute
        left 60px
        bottom 40px
        display flex
        color #7f7f7f
        font-size 16px
        .wayItem
          margin 0 10px
          &:nth-child(2)
           padding 0 20px
           border-left 1px solid #979797
           border-right 1px solid #979797
    .loginPhone
      .logo
        width 100px
        margin 30px auto
        img
          width 100%
      .login-from
        .loginContent
          padding 20px
          .inputItem
            width 100%
            height 40px
            line-height 40px
            border-bottom 1px solid #c5cddb
            font-size 12px
            margin-bottom 10px
</style>
