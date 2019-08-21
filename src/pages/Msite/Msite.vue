<template>
  <div id="msiteContainer">
    <Header/>
    
    <Swiper/>
    <!--网易自营-->
    <ul class="wy-merit">
      <li class="meritItem">
        <a href="javascript:" class="merit">
          <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
          <span>网易自营品牌</span>
        </a>
      </li>
      <li class="meritItem">
        <a href="javascript:" class="merit">
          <i class="iconfont icon-dunpai1"></i>
          <span>30天无忧退货</span>
        </a>
      </li>
      <li class="meritItem">
        <a href="javascript:" class="merit">
          <i class="iconfont icon-jiaoyi"></i>
          <span>48小时快速退款</span>
        </a>
      </li>
    </ul>
    <NewProduct/>
    <!--网易精选-->
    <div class="jx-ad">
      <a href="javascript:">
        <img src="/static/images/jingxuan.png" >
      </a>
    </div>
    <Bargain/>
    <Customize/>
    <Limited/>
    <NewFirst/>
    <Popular/>
    <HotLists/>
    <Activity/>
    <Brand/>
    <Special/>
    <Crowd/>
    <AdLists/>
    

    <footer class="footer">
      <div class="bt-footer">
        <a href="javascript:">下载APP</a>
        <a href="javascript:">电脑版</a>
      </div>
      <p class="copy">网易公司版权所有 © 1997-2019</p>
      <p class="copy">食品经营许可证：JY13301080111719</p>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">

  
  import Header from '../../components/Header/Header.vue'
  import Swiper from './components/Swiper/Swiper.vue'
  import NewProduct from './components/NewProduct/NewProduct.vue'
  import Bargain from './components/Bargain/Bargain.vue'
  import Customize from './components/Customize/Customize.vue'
  import Limited from './components/Limited/Limited.vue'
  import NewFirst from './components/NewFirst/NewFirst.vue'
  import Popular from './components/Popular/Popular.vue'
  import HotLists from './components/HotLists/HotLists.vue'
  import Activity from './components/Activity/Activity.vue'
  import Brand from './components/Brand/Brand.vue'
  import Special from './components/Special/Special.vue'
  import Crowd from './components/Crowd/Crowd.vue'
  import AdLists from './components/AdLists/AdLists.vue'

  export default {

    mounted () {


      
    },
    components:{
      Header,
      Swiper,
      NewProduct,
      Bargain,
      Customize,
      Limited,
      NewFirst,
      Popular,
      HotLists,
      Activity,
      Brand,
      Special,
      Crowd,
      AdLists
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
   #msiteContainer
      padding-top 80px
      padding-bottom 60px
      background #eee
      overflow hidden
      .wy-merit
        display flex
        padding 10px
        background white
        .meritItem
          margin-right 5px
          padding 5px
          .merit
            font-size 12px
            color #333
            .iconfont
              color #b4282d

     .jx-ad
      width 100%
      img
        width 380px

    .footer
    margin-top 10px
    padding 10px
    background #414141
    text-align center
    .bt-footer
      padding 10px
      margin-bottom 10px
      a
        display inline-block
        border 1px solid #999
        border-radius 5px
        color white
        font-size 12px
        width 80px
        height 30px
        line-height 30px
        margin-right 15px

    .copy
      color: #999
      font-size 12px
      margin-bottom 5px
</style>
