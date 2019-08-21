<template>
 <!--福利社-->
    <div class="activityContainer">
      <ul class="activityList" >
        <li class="activityItem">
          <div class="activityInfo">
            <p>福利社</p>
            <p>抢超值神券</p>
            <p>享今日特价</p>
          </div>
          <div class="activityImg">
            <img src="/static/images/foods.png" >
          </div>
        </li>
        <li class="activityItem">
          <div class="activityInfo">
            <p>福利社</p>
            <p>抢超值神券</p>
            <p>享今日特价</p>
          </div>
          <div class="activityImg">
            <img src="/static/images/foods.png" >
          </div>
        </li>
        <li class="activityItem">
          <div class="activityInfo">
            <p>福利社</p>
            <p>抢超值神券</p>
            <p>享今日特价</p>
          </div>
          <div class="activityImg">
            <img src="/static/images/foods.png" >
          </div>
        </li>
        <li class="activityItem">
          <div class="activityInfo">
            <p>福利社</p>
            <p>抢超值神券</p>
            <p>享今日特价</p>
          </div>
          <div class="activityImg">
            <img src="/static/images/foods.png" >
          </div>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
    .activityContainer
      background white
      margin-top 10px
      padding 10px
      .activityList
        display flex
        flex-wrap wrap
        .activityItem
          width 43%
          display flex
          margin-right 3px
          margin-bottom 3px
          padding 10px
          background url(https://yanxuan.nosdn.127.net/dc4bbc16d3946fddb71382f8132210b9.png?imageView&thumbnail=343x220&quality=75)
          p:nth-child(1)
            color #333
          p:nth-child(2)
            font-size 12px
            color #666
            margin-top 5px
          p:nth-child(3)
            font-size 12px
            color red
            margin-top 5px
          .activityImg
            width 90px
            img
              width 100%


   
 
</style>
