<template>
  <!--限时购-->
    <div class="Limited">
      <div class="Limitedtext">
        <span>限时购</span>
        <div class="count">
          <span class="hour">10</span>
          <span class="colon">:</span>
          <span class="hour">25</span>
          <span class="colon">:</span>
          <span class="hour">25</span>
        </div>
        <span>更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <ul class="LimitedList" v-if="getLimited">
        <li class="LimitedItem"  v-for="(item, index) in getLimited.itemList" :key="index">
          <div class="ItemImg">
            <img :src="item.picUrl" >
          </div>
          <span class="price">￥{{item.activityPrice}}</span>
          <del class="oldPrice">￥{{item.originPrice}}</del>
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
      ...mapGetters(['getLimited'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .Limited
      background white
      margin-top 10px
      padding 10px
      .Limitedtext
        display flex
        align-items center
        .count
          margin-left 10px
          width 70%
          .hour
            display inline-block
            width 16px
            height 16px
            background #333
            color white
            font-size 12px
            text-align center
      .LimitedList
        display flex
        flex-wrap wrap
        margin-top 10px
        .LimitedItem
          margin-bottom 10px
          width 30%
          font-size 14px
          margin-left 10px
          .ItemImg
            background #f5f5f5
            margin-bottom 10px
            img
              width 100%
          .price
            color #b4282d
            font-size 16px
          .oldPrice
            font-size 12px
            color #7f7f7f

    
 
</style>
