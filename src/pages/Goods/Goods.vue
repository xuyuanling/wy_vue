<template>
  <div class="goodsContainer">
    <header class="goodsHeader">
      <div class="header-sy">
        <a href="javascript:">
          <i class="iconfont icon-shouye"></i>
        </a>
      </div>
      <div class="header-text">
        <span>发现</span>
        <span>甄选家</span>
      </div>
      <div class="search-shop">
        <a href="javascript:">
          <i class="iconfont icon-sousuo"></i>
        </a>
        <a href="javascript:">
          <i class="iconfont icon-gouwuchekong"></i>
        </a>
      </div>
    </header>
      <div class="wrapper">
        <ul class="headerNav">
          <li class="headerItem ">盛夏特别版</li>
          <li class="headerItem active">推荐</li>
          <li class="headerItem">好货內价版</li>
          <li class="headerItem">回购榜</li>
          <li class="headerItem ">晒单</li>
          <li class="headerItem ">开发者日记</li>
          <li class="headerItem">达人</li>
          <li class="headerItem">HOME</li>
        </ul>
      </div>
      <div class="goodsContent">
        <div class="good-type-a">
          <a href="javascript:">
            <img src="https://yanxuan.nosdn.127.net/4d3325dca3fd3955cb3f71049bcb06cf.jpg?imageView&quality=65&thumbnail=690y376">
          </a>
        </div>
        <div class="good-type-b">
          <div class="b-title">
          <span>
            <img src="https://yanxuan.nosdn.127.net/1406d299130efb28de10c8a1f9bae430.png?imageView&quality=65&thumbnail=56y56" >
          </span>
            <span>选妹</span>
          </div>
          <div class="b-text">夏凉拖鞋捡漏啦！人字拖、软木拖、穆勒鞋……最低5折！</div>
          <div class="bImg">
            <a href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/4268aea8303aff2e998e1367d72fc82d.jpg?imageView&quality=65&thumbnail=690y376">
            </a>
          </div>
          <div class="b-count">
            <i class="iconfont icon-yanjing"></i>
            <span>69.2k人看过</span>
          </div>
        </div>
        <div class="good-type-c">
          <div class="c-concent">
            <div class="c-title">
          <span>
            <img src="https://yanxuan.nosdn.127.net/511b0e109a55ca28d3b8074c7929bc09.jpg?imageView&quality=65&thumbnail=56y56" >
          </span>
              <span>网易有道：莉莉</span>
            </div>
            <div class="c-text">我可以擦厨房，但从不洗抹布</div>
            <div class="ctext">本色抑菌懒人抹布</div>
            <div class="c-count">
              <i class="iconfont icon-yanjing"></i>
              <span>4483人看过</span>
            </div>
          </div>
          <div class="cImg">
            <a href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/dfb45f7fb44232989b7094e8be4a8dd3.jpg?imageView&quality=65&thumbnail=272y272">
            </a>
          </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      let wrapper = document.querySelector('.wrapper')
      let scroll = new BScroll('.wrapper',{
        scrollX: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
  .goodsContainer
    padding-top 80px
    padding-bottom 60px
    background #eee
    .goodsHeader
      position fixed !important
      left 0
      top 0
      z-index 11
      width 95%
      background white
      padding 10px
      padding-right 20px
      display flex
      justify-content space-between
      align-items center
      border-bottom 1px solid #d9d9d9
      font-size 20px
      .iconfont
        font-size 26px
      .header-text
        margin-left 10px
        text-align center
        span:nth-child(1)
          color #b4282d
          font-weight bold
        span:nth-child(2)
          color #7F7F7F
          font-size 14px
          margin-left 5px

      .search-shop
        a
          display inline-block
          margin-right 5px


    .wrapper
      position fixed !important
      left 0
      top 40px
      z-index 11
      display flex
      width 100%
      overflow hidden
      background white
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
          white-space: nowrap
          &.active
            color #b4282d
            border-bottom 2px solid #b4282d

    .goodsContent
      margin-top 10px
      .good-type-a
        background white
        padding 20px
        img
          width 100%
          border-radius 5px
      .good-type-b
        background white
        padding 20px
        margin-top 10px
        .b-title
          font-size 16px
          img
            width 30px
            border-radius 50%
          span
            display inline-block
            vertical-align middle
        .b-text
          font-size 18px
          margin-top 10px
          color #333
          line-height 25px
        .bImg
          margin-top 10px
          img
            width 100%
            border-radius 5px
        .b-count
          color #999
          margin-top 10px
      .good-type-c
        background white
        padding 20px
        margin-top 10px
        display flex
        .c-concent
          width 60%
          .c-title
            font-size 16px
            img
              width 30px
              border-radius 50%
            span
              display inline-block
              vertical-align middle

          .c-text
            margin-top 10px
            font-size 18px
            color: #333
          .ctext
            color #7f7f7f
            font-size 16px
            margin-top 10px
          .c-count
            color #999
            margin-top 10px
        .cImg
          width 40%
          img
            width 100%
            border-radius 5px
</style>
