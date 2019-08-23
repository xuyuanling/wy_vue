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
          <li class="contentItem" v-for="(item, index) in getSpecial" :key="index">
            <div class="contentImg">
              <a href="javascript:">
                <img :src="item.itemPicUrl" >
              </a>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.subtitle}}</div>
          </li>
          
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapGetters} from 'vuex'
  export default {
      mounted() {
        this.$store.dispatch('getHomeDate')
        this.$nextTick(()=>{
           let wrapper = document.querySelector('.wrapper')
            let scroll = new BScroll('.wrapper',{
                scrollX: true,
                click: true
           })
        })
         
    },
    computed: {
      ...mapGetters(['getSpecial'])
    },
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
