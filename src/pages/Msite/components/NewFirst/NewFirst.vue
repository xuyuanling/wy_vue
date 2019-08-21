<template>
  <!--新品首发-->
    <div class="new-products">
      <div class="newProducttext">
        <span>新品首发</span>
        <span>更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <ul class="newProductList">
        <li class="newProductItem" v-for="(item, index) in NewFirst" :key="index">
          <div class="ItemImg">
            <img :src="item.listPicUrl" >
          </div>
          <span class="product">{{item.name}}</span>
          <span class="price">￥{{item.counterPrice}}</span>
        </li>
       
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    mounted() {
      this.$store.dispatch('getHomeDate')
    },
    computed: {
      ...mapGetters(['getNewFirst']),
      NewFirst(){
        if(this.getNewFirst){
          return this.getNewFirst.slice(0,6)
        }
        
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .new-products
      background white
      margin-top 10px
      padding 10px
      .newProducttext
        width 100%
        span:nth-child(1)
          display inline-block
          width 82%
      .newProductList
        display flex
        flex-wrap wrap
        margin-top 10px
        .newProductItem
          margin-bottom 10px
          width 30%
          font-size 14px
          margin-left 10px
          .ItemImg
            background #f5f5f5
            margin-bottom 10px
            img
              width 100%
          .product
            font-size 12px
            line-height 20px
          .price
            font-size 12px
            color red
   
 
</style>
