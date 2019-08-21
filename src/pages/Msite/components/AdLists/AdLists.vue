<template>
  <div>
    <!--美食广告-->
    <div class="food-ad">
      <a href="javascript:">
        <img src="/static/images/meishi.png" >
      </a>
    </div>
    <div class="lists">
      <ul class="proList ">
        <li class="listItem">
          <div class="ItemImg">
            <img src="/static/images/mike.png" >
          </div>
          <span class="product">常温纯牛奶 250毫升*12盒*2提</span>
          <p class="price">￥219</p>
          <span class="discount">2件8.5折</span>
        </li>
        <li class="listItem">
          <div class="ItemImg">
            <img src="/static/images/mike.png" >
          </div>
          <span class="product">常温纯牛奶 250毫升*12盒*2提</span>
          <p class="price">￥219</p>
          <span class="discount">2件8.5折</span>
        </li>
        <li class="listItem">
          <div class="ItemImg">
            <img src="/static/images/mike.png" >
          </div>
          <span class="product">常温纯牛奶 250毫升*12盒*2提</span>
          <p class="price">￥219</p>
          <span class="discount">2件8.5折</span>
        </li>
        <li class="listItem">
          <div class="ItemImg">
            <img src="/static/images/mike.png" >
          </div>
          <span class="product">常温纯牛奶 250毫升*12盒*2提</span>
          <p class="price">￥219</p>
          <span class="discount">2件8.5折</span>
        </li>
        <li class="listItem">
          <div class="ItemImg">
            <img src="/static/images/mike.png" >
          </div>
          <span class="product">常温纯牛奶 250毫升*12盒*2提</span>
          <p class="price">￥219</p>
          <span class="discount">2件8.5折</span>
        </li>
        <li class="listItem">
          <div class="ItemImg">
            <img src="/static/images/mike.png" >
          </div>
          <span class="product">常温纯牛奶 250毫升*12盒*2提</span>
          <p class="price">￥219</p>
          <span class="discount">2件8.5折</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
      mounted() {
          let lists = document.querySelector('.lists')
          let scrollPro = new BScroll('.lists',{
            scrollX: true,
            click: true
        })
      },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .food-ad
      width 100%
      margin-top 10px
      img
        width 100%

    .lists
     background white
     overflow hidden
     .proList
       display flex
       margin-top 10px
       padding-top 10px
       float left
       .listItem
         margin-bottom 10px
         //width 150px
         font-size 14px
         margin-left 10px
         .ItemImg
           margin-bottom 10px
           width 100px
           img
             width 100%
             background #f4f4f4
         .product
           font-size 12px
           line-height 20px
         .price
           font-size 12px
           color #b4282d
           margin-bottom 5px
         .discount
          border 1px solid #CE2424
          border-radius 10px
          padding 0 5px
          color #CE2424
          font-size 12px
          text-align center
   
 
</style>
