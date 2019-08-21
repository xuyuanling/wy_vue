<template>
  <div class="categoryList">
    <div>
       <div class="banner" v-if="getCurrentCategorys">
          <img :src="getCurrentCategorys.bannerUrl" >
        </div>
        <div class="List">
          <ul class="catelist" v-if="getCurrentCategorys">
            <li class="cateItem" v-for="(cate, index) in getCurrentCategorys.subCateList" :key="index">
              <div class="cateImg">
                <img :src="cate.wapBannerUrl">
              </div>
              <div class="cateText">{{cate.name}}</div>
            </li>
            
          </ul>
        </div>
    </div>
        
      </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
      props:['categorys',"currentIndex"],
      computed: {
          getCurrentCategorys(){
              return this.categorys[this.currentIndex]
          }
              
        },
        mounted() {
          let categoryList = document.querySelector('.categoryList')
          let scrollPro = new BScroll('.categoryList',{
            scrollY: true,
            click: true
        })
      }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
      .categoryList
        margin-left 15px
        width 77%
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
