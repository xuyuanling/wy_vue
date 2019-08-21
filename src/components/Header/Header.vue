<template>
  <div>
    <!--首页头部导航-->
    <header class="msiteHeader">
      <div class="headerTop">
        <a href="javascript:">
          <img class="logo"src="/static/images/logo.png" alt="logo">
        </a>
        <div class="header_search" @click="$router.push('/search')">
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
      
    </header>
    <span class="iconfont icon-jiantou-copy-copy" :class="{on:isShow }"@click='isShow=!isShow'></span>
    <!--全部频道-->
    <div class="channelAll" v-show="isShow" >
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
  </div>
    
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isShow:false
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
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
      z-index 999
      transition all 0.5s
      &.on
        transform rotate(180deg)
        transition all 0.5s
    .channelAll
        padding 10px
        background white
        position fixed
        top 50px
        z-index 12
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
              color #b4282d



      
 
</style>
