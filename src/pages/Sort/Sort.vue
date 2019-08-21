<template>
  <div class="sortContainer">
    <div class="header">
      <div class="header_search" @click="$router.push('/search')">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共21576款好物</span>
      </div>
    </div>
    <div class="categoryContainer">
      <ul class="categoryNav" >
        <li class="categoryItem " :class="{active:currentIndex===index}" v-for="(category, index) in categorys" :key="index" @click='currentIndex=index'>{{category.name}}</li>
      </ul>
      <Category :categorys='categorys' :currentIndex='currentIndex'/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import Category from '../Category/Category'
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
    components:{
      Category
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
  .sortContainer
    background white
    padding-top 50px
    .header
      position fixed
      left 0
      top 0
      width 95%
      z-index 11
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
      height 600px
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
          border-left 3px solid transparent
          &.active
            color #ab2b2b
            border-color #ab2b2b
    </style>
