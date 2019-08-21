<template>
  <!--新品首发-->
    <ul class="new-product">
      <li class="productList" v-for="(item, index) in getNewProduct" :key="index">
        <a href="javascript:" class="productItem">
          <img :src="item.picUrl" >
          <span>{{item.text}}</span>
        </a>
      </li>
      
    </ul>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapState} from 'vuex'
  export default {
    mounted() {
      //console.log(this.$store)
      this.$store.dispatch('getHomeDate')
    },
    computed: {
     ...mapGetters(['getNewProduct'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .new-product
      display flex
      padding 10px
      flex-wrap wrap
      background white
      .productList
        //margin-right 20px
        margin-bottom 10px
        .productItem
          display flex
          flex-direction column
          align-items center
          margin 0 10px
          img
            width 50px
          span
            margin-top 5px
            font-size 12px
            color #333
   
 
</style>
