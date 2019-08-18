<template>
  <div id="msiteContainer">
    <!--头部导航-->
    <header class="msiteHeader">
      <div class="headerTop">
        <a href="javascript:">
          <img class="logo"src="/static/images/logo.png" alt="logo">
        </a>
        <div class="header_search">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品，共21615款好物</span>
        </div>
        <button class="login">登录</button>
      </div>
      <ul class="headerNav">
        <li class="headerItem active">推荐</li>
        <li class="headerItem ">居家生活</li>
        <li class="headerItem">服装箱包</li>
        <li class="headerItem">美食酒水</li>
      </ul>
      <span class="iconfont icon-jiantou-copy-copy"></span>
    </header>
    <!--全部频道-->
    <div class="channelAll" >
      <div class="channel">全部频道</div>
      <ul class="channelList">
        <li class="listItem active">推荐</li>
        <li class="listItem">居家生活</li>
        <li class="listItem">服饰箱包</li>
        <li class="listItem">美食酒水</li>
        <li class="listItem">个人清洁</li>
        <li class="listItem">母婴亲子</li>
        <li class="listItem">运动旅行</li>
        <li class="listItem">数码家电</li>
        <li class="listItem">全球特殊</li>
      </ul>
    </div>
    <!--轮播-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="/static/images/m1.png" ></div>
          <div class="swiper-slide"><img src="/static/images/m2.png" ></div>
          <div class="swiper-slide"><img src="/static/images/m3.png" ></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
  </div>
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
    <!--新品首发-->
    <ul class="new-product">
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/xinpin.png" >
          <span>新品首发</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/dazhe.gif" >
          <span>居家生活</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/xinpin.png" >
          <span>新品首发</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/dazhe.gif" >
          <span>居家生活</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/xinpin.png" >
          <span>新品首发</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/dazhe.gif" >
          <span>居家生活</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/xinpin.png" >
          <span>新品首发</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/dazhe.gif" >
          <span>居家生活</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/xinpin.png" >
          <span>新品首发</span>
        </a>
      </li>
      <li class="productList">
        <a href="javascript:" class="productItem">
          <img src="/static/images/dazhe.gif" >
          <span>居家生活</span>
        </a>
      </li>
    </ul>
    <!--网易精选-->
    <div class="jx-ad">
      <a href="javascript:">
        <img src="/static/images/jingxuan.png" >
      </a>
    </div>
    <!--超值专区-->
    <ul class="bargain">
      <li class="bargainList">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="imgs">
          <img src="/static/images/cup.png" >
          <img src="/static/images/paper.png" >
        </div>
      </li>
      <li class="bargainList">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="imgs">
          <img src="/static/images/cup.png" >
          <img src="/static/images/paper.png" >
        </div>
      </li>
      <li class="bargainList">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="imgs">
          <img src="/static/images/cup.png" >
          <img src="/static/images/paper.png" >
        </div>
      </li>
      <li class="bargainList">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="imgs">
          <img src="/static/images/cup.png" >
          <img src="/static/images/paper.png" >
        </div>
      </li>
    </ul>
    <!--私人定制-->
    <div class="customizeContainer">
      <div class="customizetext">私人定制</div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="customizeList">
              <li class="customizeItem">
                <div class="ItemImg">
                  <img src="/static/images/yashua.png" >
                </div>
                <span class="product">全净皓齿变速式声波电动牙刷</span>
                <span class="product-name">￥21.9</span>
              </li>
              <li class="customizeItem">
                <div class="ItemImg">
                  <img src="/static/images/zhiku.png" >
                </div>
                <span class="product">全净皓齿变速式声波电动牙刷</span>
                <span class="product-name">￥21.9</span>
              </li>
              <li class="customizeItem">
                <div class="ItemImg">
                  <img src="/static/images/paper.png" >
                </div>
                <span class="product">全净皓齿变速式声波电动牙刷</span>
                <span class="product-name">￥21.9</span>
              </li>
          </ul>
          </div>
          <div class="swiper-slide"><ul class="customizeList">
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
          </ul></div>
          <div class="swiper-slide"><ul class="customizeList">
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
            <li class="customizeItem">
              <div class="ItemImg">
                <img src="/static/images/yashua.png" >
              </div>
              <span class="product">全净皓齿变速式声波电动牙刷</span>
              <span class="product-name">￥21.9</span>
            </li>
          </ul></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

    </div>
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
      <ul class="LimitedList">
        <li class="LimitedItem">
          <div class="ItemImg">
            <img src="/static/images/yashua.png" >
          </div>
          <span class="price">￥179</span>
          <del class="oldPrice">￥219</del>
        </li>
        <li class="LimitedItem">
          <div class="ItemImg">
            <img src="/static/images/yashua.png" >
          </div>
          <span class="price">￥179</span>
          <del class="oldPrice">￥219</del>
        </li>
        <li class="LimitedItem">
          <div class="ItemImg">
            <img src="/static/images/yashua.png" >
          </div>
          <span class="price">￥179</span>
          <del class="oldPrice">￥219</del>
        </li>
        <li class="LimitedItem">
          <div class="ItemImg">
            <img src="/static/images/yashua.png" >
          </div>
          <span class="price">￥179</span>
          <del class="oldPrice">￥219</del>
        </li>
        <li class="LimitedItem">
          <div class="ItemImg">
            <img src="/static/images/yashua.png" >
          </div>
          <span class="price">￥179</span>
          <del class="oldPrice">￥219</del>
        </li>
        <li class="LimitedItem">
          <div class="ItemImg">
            <img src="/static/images/yashua.png" >
          </div>
          <span class="price">￥179</span>
          <del class="oldPrice">￥219</del>
        </li>
      </ul>
    </div>
    <!--新品首发-->
    <div class="new-products">
      <div class="newProducttext">
        <span>新品首发</span>
        <span>更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <ul class="newProductList">
        <li class="newProductItem">
          <div class="ItemImg">
            <img src="/static/images/food.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
        <li class="newProductItem">
          <div class="ItemImg">
            <img src="/static/images/bw.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
        <li class="newProductItem">
          <div class="ItemImg">
            <img src="/static/images/shoes.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
        <li class="newProductItem">
          <div class="ItemImg">
            <img src="/static/images/shoes.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
        <li class="newProductItem">
          <div class="ItemImg">
            <img src="/static/images/food.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
        <li class="newProductItem">
          <div class="ItemImg">
            <img src="/static/images/shoes.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
      </ul>
    </div>
    <!--人气推荐-->
    <div class="popular">
      <div class="populartext">
        <span>人气推荐</span>
        <span>更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div class="p-product">
        <div class="productImg">
          <img src="/static/images/zhentou.png" >
        </div>
        <div class="productItem">
          <div class="sale">抄底特惠</div>
          <div class="title">新色 奢华植鞣头层水牛皮席 凉席三件套</div>
          <p class="desc">三峡水牛头层皮，高端夏凉必备</p>
          <p class="price">￥1949</p>
        </div>
      </div>
      <ul class="popularList">
        <li class="popularItem">
          <div class="ItemImg">
            <img src="/static/images/food.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
        <li class="popularItem">
          <div class="ItemImg">
            <img src="/static/images/bw.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
        <li class="popularItem">
          <div class="ItemImg">
            <img src="/static/images/shoes.png" >
          </div>
          <span class="product">英国设计 车载杀菌除味无线...</span>
          <span class="price">￥219</span>
        </li>
      </ul>
    </div>
    <!--类目热销榜-->
    <div class="hot-lists">
      <div class="hot-text">类目热销榜</div>
      <div class="hot-list">
        <div class="hot-list-Item">
          <div class="hot-list-text">
            <span>热销榜</span>
            <span class="border"></span>
          </div>
          <div class="hotImg" ><img src="/static/images/inshoe.png" alt=""></div>
        </div>
        <div class="praise-list-Item">
          <div class="hot-list-text">
            <span>好评榜</span>
            <span class="border"></span>
          </div>
          <div class="hotImg" ><img src="/static/images/camera.png" alt=""></div>
        </div>
      </div>
      <ul class="hot-products">
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/mike.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/yashua.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/mike.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/yashua.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/mike.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/yashua.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/mike.png" alt="">
        </li>
        <li class="hot-product-item">
          <span>居家生活榜</span>
          <img src="/static/images/yashua.png" alt="">
        </li>
      </ul>
    </div>
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
    <!--品牌制造商直供-->
    <div class="BrandModule">
      <div class="Brandtext">
        <span>品牌制造商直供</span>
        <span>更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <ul class="BrandLise">
        <li class="BrandItem">
          <p>海外制造商</p>
          <p>9.9元起</p>
        </li>
        <li class="BrandItem">
          <p>海外制造商</p>
          <p>9.9元起</p>
        </li>
        <li class="BrandItem">
          <p>海外制造商</p>
          <p>9.9元起</p>
        </li>
        <li class="BrandItem">
          <p>海外制造商</p>
          <p>9.9元起</p>
        </li>
      </ul>
    </div>
    <!--专题精选-->
    <div class="special">
      <div class="specialtext">
        <span>专题精选</span>
        <span>更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div class="wrapper">
        <ul class="content">
          <li class="contentItem" >
            <div class="contentImg">
              <a href="javascript:">
                <img src="/static/images/ad1.png" >
              </a>
            </div>
            <div class="title">直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</div>
            <div class="desc">女士精选礼物大赏</div>
          </li>
          <li class="contentItem" >
            <div class="contentImg">
              <a href="javascript:">
                <img src="/static/images/ad2.png" >
              </a>
            </div>
            <div class="title">直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</div>
            <div class="desc">女士精选礼物大赏</div>
          </li>
          <li class="contentItem" >
            <div class="contentImg">
              <a href="javascript:">
                <img src="/static/images/ad3.png" >
              </a>
            </div>
            <div class="title">直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</div>
            <div class="desc">女士精选礼物大赏</div>
          </li>
        </ul>
      </div>
    </div>
    <!--众筹-->
    <div class="crowd">
      <div class="crowdtext">
        <span>众筹</span>
        <span>更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div class="crowdProducts">
        <div class="crowd-product">
          <div class="crowdImg">
            <img src="/static/images/bracelet.png" >
          </div>
          <div class="crowdItem">
            <div class="title">来自地心的礼物</div>
            <div class="price">￥899起</div>
            <p class="box"></p>
            <p class="desc">6人已支持</p>
          </div>
        </div>
        <div class="crowd-product">
          <div class="crowdImg">
            <img src="/static/images/teapot.png" >
          </div>
          <div class="crowdItem">
            <div class="title">来自地心的礼物</div>
            <div class="price">￥899起</div>
            <p class="box"></p>
            <p class="desc">6人已支持</p>
          </div>
        </div>
      </div>

    </div>
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
    <!--日用品-->
    <div class="food-ad">
      <a href="javascript:">
        <img src="/static/images/commodity.png" >
      </a>
    </div>
    <div class="lists">
      <ul class="proList ">
        <li class="listItem">
          <div class="ItemImg">
            <img src="/static/images/yashua.png" >
          </div>
          <span class="product">常温纯牛奶 250毫升*12盒*2提</span>
          <p class="price">￥219</p>
          <span class="discount">抄底特惠</span>
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
    <!--厨房-->
    <div class="food-ad">
      <a href="javascript:">
        <img src="/static/images/kitchen.png  " >
      </a>
    </div>
    <div class="lists">
      <ul class="proList ">
        <li class="listItem">
          <div class="ItemImg">
            <img src="/static/images/watercup.png" >
          </div>
          <span class="product">常温纯牛奶 250毫升*12盒*2提</span>
          <p class="price">￥219</p>
          <span class="discount">特价</span>
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
    <!--清凉游泳-->
    <div class="food-ad">
      <a href="javascript:">
        <img src="/static/images/swim.png " >
      </a>
    </div>
    <div class="lists">
      <ul class="proList ">
        <li class="listItem">
          <div class="ItemImg">
            <img src="/static/images/row.png" >
          </div>
          <span class="product">常温纯牛奶 250毫升*12盒*2提</span>
          <p class="price">￥219</p>
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
    <!--SPA-->
    <div class="food-ad">
      <a href="javascript:">
        <img src="/static/images/spa.png " >
      </a>
    </div>
    <div class="lists">
      <ul class="proList ">
        <li class="listItem">
          <div class="ItemImg">
            <img src="/static/images/laundry.png  " >
          </div>
          <span class="product">常温纯牛奶 250毫升*12盒*2提</span>
          <p class="price">￥219</p>
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
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'

  export default {

    mounted () {
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
      let wrapper = document.querySelector('.wrapper')
      let scroll = new BScroll('.wrapper',{
        scrollX: true,
        click: true
      })
      let lists = document.querySelector('.lists')
      let scrollPro = new BScroll('.lists',{
        scrollX: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
   #msiteContainer
      padding-top 80px
      padding-bottom 60px
      background #eee
      overflow hidden
    .msiteHeader
      padding 10px
      padding-bottom 0px
      position fixed !important
      left 0
      top 0
      z-index 11
      background white
      .headerTop
        display flex
        justify-content center
        align-items center
        height 30px
        .logo
          width 70px
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

        .login
          background white
          color #b4282d
          border 1px solid #b4282d
          border-radius 5px
          font-size 12px


      .headerNav
        display flex
        margin-top 15px
        padding-left 10px
        .headerItem
          margin-right 20px
          color #333
          font-size 16px
          text-align center
          padding-bottom 5px
          &.active
            color #b4282d
            border-bottom 2px solid #b4282d

      .icon-jiantou-copy-copy
        position fixed
        right 30px
        top 55px
        font-size 18px
        color #333
        z-index 10
    .channelAll
      display none
      background white
      position fixed
      top 55px
      left 10px
      .channel
        color #666
        font-size 14px
        margin-bottom 20px
      .channelList
        display flex
        flex-wrap wrap
        .listItem
          width 80px
          height 30px
          line-height 30px
          border 1px solid #eee
          text-align center
          font-size 12px
          margin-left 8px
          margin-bottom 20px
          box-sizing border-box
          border-radius 2px
          &.active
            border 1px solid #b4282d
    .swiper-container
       width: 100%
       height: 190px
       .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            img
              width 100%
              height 100%


       .swiper-pagination
        /deep/ .swiper-pagination-bullet
                 width 20px
                 height 2px
                 background white

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
    .jx-ad
      width 100%
      img
        width 380px

    .bargain
      display flex
      width 100%
      flex-wrap wrap
      padding 10px
      background white
      .bargainList
        width 40%
        padding 10px
        background #f5f5f5
        margin-right 3px
        margin-bottom 3px
        p:nth-child(1)
          color #333
        p:nth-child(2)
          font-size 12px
          color #666
          margin-top 5px
        .imgs
          img
            width 65px

    .customizeContainer
      padding 10px
      background white
      margin-top 10px
      .customizetext
        margin-bottom 10px
      .customizeList
        display flex
        .customizeItem
          margin-bottom 10px
          width 33%
          font-size 14px
          margin-right 10px
          .ItemImg
            background #f5f5f5
            img
              width 100px
          .product
            //display inline-block
            font-size 12px
            line-height 20px
          .product-name
            font-size 12px
            color red

      .swiper-pagination
        /deep/ .swiper-pagination-bullet
          width 5px
          height 5px
          background red
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
    .popular
     background white
     margin-top 10px
     padding 10px
     .populartext
       width 100%
       span:nth-child(1)
         display inline-block
         width 82%
     .p-product
       background #FEF0DF
       display flex
       margin-top 10px
      .productImg
        width 150px
        height 150px
        img
          width 150px
      .productItem
        padding-top 20px
        width 200px
        .sale
          display inline-block
          padding 2px
          font-size 10px
          color #B4282D
          background white
          border 1px solid #B4282D
          margin 10px 0
        .title
          font-size 14px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          margin-bottom 10px
        .desc
          font-size 12px
          color #666
          margin-bottom 10px
        .price
          color #B4282D
          font-size 14px
      .popularList
        display flex
        flex-wrap wrap
        margin-top 10px
        .popularItem
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
    .hot-lists
      background white
      margin-top 10px
      padding 10px
      .hot-text
        margin-bottom 10px
      .hot-list
        display flex
        .hot-list-Item
          display flex
          background #F9F3E4
          margin-right 10px
          padding 10px
          height 90px
          .hotImg
            width 100px
            height 100px
            img
              width 100%
          .hot-list-text
            width 48px
            padding-top 30px
            font-size 14px
            .border
              display inline-block
              width 20px
              height 2px
              background black
        .praise-list-Item
          display flex
          background #EBEFF6
          padding 10px
          height 90px
          .hotImg
            width 100px
            height 100px
            img
              width 100%
          .hot-list-text
            width 48px
            padding-top 30px
            font-size 14px
            .border
              display inline-block
              width 20px
              height 2px
              background black
      .hot-products
        display flex
        flex-wrap wrap
        margin-top 5px
        .hot-product-item
          width 24%
          text-align center
          background #F5F5F5
          margin-right 2px
          margin-bottom 2px
          span
            font-size 12px
            color #333
          img
            width 50px
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


   .BrandModule
     background white
     margin-top 10px
     padding 10px
     .Brandtext
       width 100%
       span:nth-child(1)
         display inline-block
         width 82%
     .BrandLise
       display flex
       width 100%
       flex-wrap wrap
       padding 10px
       background white
       .BrandItem
         width 40%
         height 100px
         padding 10px
         background #f5f5f5
         margin-right 3px
         margin-bottom 3px
         text-align center
         background url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
         background-size 100% 100%
         p:nth-child(1)
           color #333
         p:nth-child(2)
           font-size 12px
           color #666
           margin-top 5px

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

   .crowd
     background white
     margin-top 10px
     .crowdtext
       width 100%
       padding 10px
       span:nth-child(1)
         display inline-block
         width 82%
     .crowdProducts
       border-top 1px solid #d8d8d8
       padding 10px
       .crowd-product
         margin-top 10px
         display flex
         .crowdImg
           width 100px
           height 100px
           background #f4f4f4
           img
             width 100px
         .crowdItem
           margin-left 15px
           padding-top 10px
           width 200px

           .desc
             font-size 12px
             color #7f7f7f
           .title
             font-size 14px
             margin-bottom 10px
             color #333
           .box
             width 200px
             height 3px
             background #D8D8D8
             margin-bottom 10px
           .price
             color #B4282D
             font-size 16px
             margin-bottom 10px
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
