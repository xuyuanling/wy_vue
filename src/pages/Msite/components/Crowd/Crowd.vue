<template>
  <!--众筹-->
    <div class="crowd">
      <div class="crowdtext">
        <span>众筹</span>
        <span>更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div class="crowdProducts">
        <div class="crowd-product">
          <div class="crowdImg">
            <img src="/static/images/bracelet.png" >
          </div>
          <div class="crowdItem">
            <div class="title">来自地心的礼物</div>
            <div class="price">￥899起</div>
            <p class="box"></p>
            <p class="desc">6人已支持</p>
          </div>
        </div>
        <div class="crowd-product">
          <div class="crowdImg">
            <img src="/static/images/teapot.png" >
          </div>
          <div class="crowdItem">
            <div class="title">来自地心的礼物</div>
            <div class="price">￥899起</div>
            <p class="box"></p>
            <p class="desc">6人已支持</p>
          </div>
        </div>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .crowd
     background white
     margin-top 10px
     .crowdtext
       width 100%
       padding 10px
       span:nth-child(1)
         display inline-block
         width 82%
     .crowdProducts
       border-top 1px solid #d8d8d8
       padding 10px
       .crowd-product
         margin-top 10px
         display flex
         .crowdImg
           width 100px
           height 100px
           background #f4f4f4
           img
             width 100px
         .crowdItem
           margin-left 15px
           padding-top 10px
           width 200px

           .desc
             font-size 12px
             color #7f7f7f
           .title
             font-size 14px
             margin-bottom 10px
             color #333
           .box
             width 200px
             height 3px
             background #D8D8D8
             margin-bottom 10px
           .price
             color #B4282D
             font-size 16px
             margin-bottom 10px
   
 
</style>
