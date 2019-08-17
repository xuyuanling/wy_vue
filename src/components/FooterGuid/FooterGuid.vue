<template>
  <footer class="footerContainer">
    <a class="footerItem " :class="{on:$route.path==='/msite'}" @click="goTo('/msite')">
        <span class="iconItem">
            <i class="iconfont icon-shouye"></i>
        </span>
        <span>首页</span>
    </a>
    <a class="footerItem":class="{on:$route.path==='/sort'}"  @click="goTo('/sort')">
        <span class="iconItem">
            <i class="iconfont icon-iconyihuifu-"></i>
        </span>
        <span>分类</span>
    </a>
    <a class="footerItem" :class="{on:$route.path==='/goods'}" @click="goTo('/goods')">
        <span class="iconItem">
            <i class="iconfont icon-fengjing"></i>
        </span>
        <span>识物</span>
    </a>
    <a class="footerItem" :class="{on:$route.path==='/shopcart'}" @click="goTo('/shopcart')">
        <span class="iconItem">
            <i class="iconfont icon-gouwuchekong"></i>
        </span>
        <span>购物车</span>
    </a>
     <a class="footerItem" :class="{on:$route.path==='/personal'}" @click="goTo('/personal')">
        <span class="iconItem">
            <i class="iconfont icon-geren"></i>
        </span>
        <span>个人</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
      methods: {
          goTo(path){
              this.$router.replace(path)
          }
      },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .footerContainer
        position fixed
        left 0
        bottom 0
        width 100%
        height 50px
        display flex
        justify-content space-around
        align-items center
        background white
        z-index 20
        .footerItem
            display flex
            flex-direction column
            align-items center
            font-size 12px
            color #333
            &.on
              color red
            .iconItem
              .iconfont
                font-size 20px
                font-weight 400










</style>
