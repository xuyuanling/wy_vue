import Msite from '../pages/Msite/Msite.vue'
import Sort from '../pages/Sort/Sort.vue'
import Goods from '../pages/Goods/Goods.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search'

export default[{
    path:'/msite',
    component:Msite,
    meta:{
      showFooter:true
    }
},{
    path:'/sort',
    component:Sort,
    meta:{
      showFooter:true
    }
},
{
    path:'/goods',
    component:Goods,
    meta:{
      showFooter:true
    }
},
{
    path:'/shopcart',
    component:ShopCart,
    meta:{
      showFooter:true
    }
},
{
    path:'/personal',
    component:Personal
},
  {
    path:'/search',
    component:Search
  },
{
    path:'/',
    redirect:'/msite'
}
]
