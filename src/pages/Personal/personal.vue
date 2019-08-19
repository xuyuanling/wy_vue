<template>
  <div class="personalContainer">
    <header class="goodsHeader">
      <div class="header-sy" @click="$router.replace('/msite')">
        <a href="javascript:">
          <i class="iconfont icon-shouye"></i>
        </a>
      </div>
      <div class="header-text">
        <img src="/static/images/logo.png" >
      </div>
      <div class="search-shop" >
        <a href="javascript:" @click="$router.push('/search')">
          <i class="iconfont icon-sousuo"></i>
        </a>
        <a href="javascript:" @click="$router.replace('/shopcart')">
          <i class="iconfont icon-gouwuchekong"></i>
        </a>
      </div>
    </header>
    <div class="loginWrap" v-show="isWrap">
      <div class="loginType">
        <div class="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" >
        </div>
        <div class="loginWay">
          <div class="login-phone" @click="showPhone">
            <i class="iconfont icon-shouji"></i>
            <span>手机号快捷登录</span>
          </div>
          <div class="login-email" @click="showMail">
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
    <div class="loginPhone" v-show="isPhone">
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
            <div class="code">获取验证码</div>
          </div>
          <div class="other-options">
            <span>遇到问题?</span>
            <span @click="showMail">使用密码验证登录</span>
          </div>
          <div class="loginPhone">登录</div>
          <div class="clause">
            <i class="iconfont icon-duigou1"></i>
            <span>我同意</span>
            <a href="javascript">《服务条款》</a>
            <span>和</span>
            <a href="javascript">《网易隐私政策》</a>
          </div>
        </div>
      </form>
    </div >
    <div class="loginMail" v-show="isMail">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" >
      </div>
      <form class="login-from">
        <div class="loginContent">
          <div class="inputItem">
            <input type="text" placeholder="邮箱账号">
          </div>
          <div class="inputItem">
            <input type="text" placeholder="密码">
          </div>
          <div class="other-options">
            <span>注册账号</span>
            <span>忘记密码</span>
          </div>
          <div class="loginMail">登录</div>
        </div>
      </form>
    </div>
    <div class="otherWay" @click="showWrap">
      <span>其他登录方式</span>
      <i class="iconfont icon-jiantou"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        isWrap:true,
        isPhone:false,
        isMail:false
      }
    },
    methods:{
      showPhone(){
        this.isWrap=false
        this.isPhone=true
      },
      showMail(){
        this.isWrap=false
        this.isPhone=false
        this.isMail=true
      },
      showWrap(){
        this.isWrap=true
        this.isPhone=false
        this.isMail=false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
  .personalContainer
    .goodsHeader
      background white
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
      //display none
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
      //display none
      .logo
        width 100px
        margin 30px auto
        img
          width 100%
      .login-from
        .loginContent
          padding 20px
          .inputItem
            position relative
            width 100%
            height 40px
            line-height 40px
            border-bottom 1px solid #c5cddb
            font-size 12px
            margin-bottom 10px
            .code
              position absolute
              right 10px
              bottom 10px
              width 80px
              height 25px
              line-height 25px
              border 1px solid #7f7f7f
              text-align center
              border-radius 3px
          .other-options
            margin-top 20px
            span:nth-child(1)
              display inline-block
              width 60%
              font-size 16px
              color #7f7f7f
            span:nth-child(2)
              font-size 16px
              color #333

          .loginPhone
            width 330px
            height 45px
            line-height 45px
            text-align center
            color white
            font-size 14px
            background #DD1A21
            margin 15px 0
            border-radius 5px
          .clause
            color #7f7f7f
            .icon-duigou1
              font-size 18px
            a
             color #007AFF
    .loginMail
      //display none
      .logo
        width 100px
        margin 30px auto
        img
          width 100%
      .login-from
        margin-top 50px
        .loginContent
          padding 20px
          .inputItem
            width 100%
            height 40px
            line-height 40px
            border-bottom 1px solid #c5cddb
            font-size 12px
            margin-bottom 10px
          .other-options
            margin-top 20px
            font-size 14px
            color #7f7f7f
            span:nth-child(1)
              display inline-block
              width 80%

          .loginMail
            width 330px
            height 45px
            line-height 45px
            text-align center
            color white
            font-size 14px
            background #DD1A21
            margin 15px 0
            border-radius 5px
    .otherWay
      font-size 14px
      text-align center
      margin-top 10px
</style>
