<template>
    <div class="searchContainer">
      <div class="header">
        <div class="header_search" v-if="keywordsInit.defaultKeyword">
          <input type="text" :placeholder="keywordsInit.defaultKeyword.keyword" v-model="keyWord" @keyup='getKeyWord'>
          <i class="iconfont icon-sousuo"></i>
        </div>
        <span class="cancel" @click="$router.back()">取消</span>
      </div>
      <ul class="searchBox" v-if="result">
        <li class="searchItem" v-for="(item, index) in result.data" :key="index">{{item}}</li>
      </ul>
      <div class="searchContion">
        <div class="hot-search">热门搜索</div>
        <ul class="searchList" v-if="keywordsInit">
          <li class="searchItem " :class='{active:keyword.highlight}' v-for="(keyword, index) in keywordsInit.hotKeywordVOList" :key="index">{{keyword.keyword}}</li>
          
        </ul>
      </div>
    </div>
</template>

<script>
  import {reqkeywords} from '../../api'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        keyWord:'',
        result:{}
      }
    },
     mounted() {
      this.$store.dispatch('getkeywordsInit')
       console.log(this)
    },
    computed: {
      ...mapState({
        keywordsInit:state=>state.search.keywordsInit
      })
    },

    methods: {
      async getKeyWord(){
        const {keyWord} = this
        const response = await reqkeywords(keyWord)
        
        let result =response.data
        console.log(result)
        if(result.code==='200'){
          console.log(result)
          this.result=result
       }
      }
    },
 
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
        position relative
        background #f4f4f4
        width 80%
        height 30px
        line-height 30px
        margin-right 15px
        padding  0 10px
        font-size 14px
        color #666
        input
          width 100%
          background #f4f4f4
          padding-left 25px
          outline none
        .icon-sousuo
          position absolute
          left 10px
          top 0
    .searchBox
      padding 10px
      .searchItem
        padding 10px
        border-bottom 1px solid #eee
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
