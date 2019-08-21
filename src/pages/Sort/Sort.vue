<template>
  <div class="sortContainer">
    <div class="header">
      <div class="header_search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共21576款好物</span>
      </div>
    </div>
    <div class="categoryContainer">
      <ul class="categoryNav" >
        <li class="categoryItem " :class="{active:currentIndex===index}" v-for="(category, index) in categorys" :key="index" @click='currentIndex=index'>{{category.name}}</li>
      </ul>
      <div class="categoryList">
        <div class="banner">
          <img src="/static/images/banner.png" >
        </div>
        <div class="List">
          <ul class="catelist">
            <li class="cateItem">
              <div class="cateImg">
                <img src="/static/images/man.png">
              </div>
              <div class="cateText">员工精选好物</div>
            </li>
            <li class="cateItem">
              <div class="cateImg">
                <img src="/static/images/girl.png">
              </div>
              <div class="cateText">员工精选好物</div>
            </li>
            <li class="cateItem">
              <div class="cateImg">
                <img src="/static/images/children.png">
              </div>
              <div class="cateText">员工精选好物</div>
            </li>
            <li class="cateItem">
              <div class="cateImg">
                <img src="/static/images/man.png">
              </div>
              <div class="cateText">员工精选好物</div>
            </li>
            <li class="cateItem">
              <div class="cateImg">
                <img src="/static/images/girl.png">
              </div>
              <div class="cateText">员工精选好物</div>
            </li>
            <li class="cateItem">
              <div class="cateImg">
                <img src="/static/images/children.png">
              </div>
              <div class="cateText">员工精选好物</div>
            </li>
            <li class="cateItem">
              <div class="cateImg">
                <img src="/static/images/man.png">
              </div>
              <div class="cateText">员工精选好物</div>
            </li>
            <li class="cateItem">
              <div class="cateImg">
                <img src="/static/images/girl.png">
              </div>
              <div class="cateText">员工精选好物</div>
            </li>
            <li class="cateItem">
              <div class="cateImg">
                <img src="/static/images/children.png">
              </div>
              <div class="cateText">员工精选好物</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    data() {
      return {
        currentIndex:0
      }
    },
    mounted() {
      this.$store.dispatch('getCategory')
    },
    computed: {
      ...mapState({
        categorys: state=>state.category.categorys
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
  .sortContainer
    background white
    .header
      background white
      padding 10px
      border-bottom 1px solid #eee
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

    .categoryContainer
      padding-top 10px
      display flex
      .categoryNav
        width 55%
        height 100%
        .categoryItem
          padding 5px 10px
          font-size 14px
          margin-bottom 22px
          text-align center
          color #333
          box-sizing border-box
          &.active
            color #ab2b2b
            border-left 3px solid #ab2b2b
      .categoryList
        margin-left 15px
        .banner
          width 260px
          img
            width 100%

        .List
          margin-top 10px
          .catelist
            display flex
            flex-wrap wrap
            .cateItem
              width 30%
              margin-bottom 10px
              .cateImg
                width 80px
                img
                  width 100%

              .cateText
                font-size 12px
</style>
