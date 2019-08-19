<template>
    <div class="searchContainer">
      <div class="header">
        <div class="header_search">
          <i class="iconfont icon-sousuo"></i>
          <span>硅藻土浴室地垫 直降29元</span>
        </div>
        <span class="cancel" @click="$router.replace('/personal')">取消</span>
      </div>
      <div class="searchContion">
        <div class="hot-search">热门搜索</div>
        <ul class="searchList">
          <li class="searchItem active">爆款 行李箱</li>
          <li class="searchItem">香氛牙膏 谈吐芳香</li>
          <li class="searchItem">轻弹云朵拖鞋9.9元</li>
          <li class="searchItem">中秋月饼 上新热卖</li>
          <li class="searchItem">百搭帆布鞋89元起</li>
          <li class="searchItem">行李箱</li>
          <li class="searchItem">开胃面皮 仅5元</li>
          <li class="searchItem">锅</li>
          <li class="searchItem">床垫</li>
          <li class="searchItem">耳机</li>
          <li class="searchItem">电动牙刷</li>
          <li class="searchItem">咖啡</li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .searchContainer
    padding 15px
    background #fff
    .header
      display flex
      align-items center
      font-size 14px
      .header_search
        background #f4f4f4
        width 80%
        height 30px
        line-height 30px
        margin-right 15px
        padding 0 10px
        font-size 14px
        color #666
    .searchContion
      margin-top 20px
      .hot-search
        margin 20px 0
        font-size 16px
        color #7f7f7f
      .searchList
        display flex
        flex-wrap wrap
        font-size 12px
        color #7f7f7f
        .searchItem
          border 1px solid #999
          padding 5px
          margin-right 15px
          margin-bottom 15px
          &.active
            border-color #b4282d
            color #b4282d
</style>
