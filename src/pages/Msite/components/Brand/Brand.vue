<template>
  <!--品牌制造商直供-->
    <div class="BrandModule">
      <div class="Brandtext">
        <span>品牌制造商直供</span>
        <span>更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <ul class="BrandLise">
        <li class="BrandItem">
          <p>海外制造商</p>
          <p>9.9元起</p>
        </li>
        <li class="BrandItem">
          <p>海外制造商</p>
          <p>9.9元起</p>
        </li>
        <li class="BrandItem">
          <p>海外制造商</p>
          <p>9.9元起</p>
        </li>
        <li class="BrandItem">
          <p>海外制造商</p>
          <p>9.9元起</p>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .BrandModule
     background white
     margin-top 10px
     padding 10px
     .Brandtext
       width 100%
       span:nth-child(1)
         display inline-block
         width 82%
     .BrandLise
       display flex
       width 100%
       flex-wrap wrap
       padding 10px
       background white
       .BrandItem
         width 40%
         height 100px
         padding 10px
         background #f5f5f5
         margin-right 3px
         margin-bottom 3px
         text-align center
         background url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
         background-size 100% 100%
         p:nth-child(1)
           color #333
         p:nth-child(2)
           font-size 12px
           color #666
           margin-top 5px

   
 
</style>
