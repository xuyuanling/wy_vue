<template>
  <!--专题精选-->
    <div class="special">
      <div class="specialtext">
        <span>专题精选</span>
        <span>更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div class="wrapper">
        <ul class="content">
          <li class="contentItem" >
            <div class="contentImg">
              <a href="javascript:">
                <img src="/static/images/ad1.png" >
              </a>
            </div>
            <div class="title">直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</div>
            <div class="desc">女士精选礼物大赏</div>
          </li>
          <li class="contentItem" >
            <div class="contentImg">
              <a href="javascript:">
                <img src="/static/images/ad2.png" >
              </a>
            </div>
            <div class="title">直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</div>
            <div class="desc">女士精选礼物大赏</div>
          </li>
          <li class="contentItem" >
            <div class="contentImg">
              <a href="javascript:">
                <img src="/static/images/ad3.png" >
              </a>
            </div>
            <div class="title">直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</div>
            <div class="desc">女士精选礼物大赏</div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
      mounted() {
          let wrapper = document.querySelector('.wrapper')
            let scroll = new BScroll('.wrapper',{
                scrollX: true,
                click: true
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .special
     background white
     margin-top 10px
     padding 10px
     .specialtext
       width 100%
       span:nth-child(1)
         display inline-block
         width 82%
     .wrapper
        margin-top 10px
        overflow hidden
        .content
          display flex
          float left
          .contentItem
            width 210px
            //height 150px
            margin-right 45px
            .contentImg
              width 240px
              height 150px
              img
                width 100%

            .title
              padding-left 5px
              font-size 16px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              margin-bottom 5px
            .desc
              padding-left 5px
              font-size 12px
              color #7f7f7f

   
 
</style>
