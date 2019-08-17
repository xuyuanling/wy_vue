import Msite from '../pages/Msite/Msite.vue'
import Sort from '../pages/Sort/Sort.vue'
import Goods from '../pages/Goods/Goods.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'

export default[{
    path:'/msite',
    component:Msite
},{
    path:'/sort',
    component:Sort
},
{
    path:'/goods',
    component:Goods
},
{
    path:'/shopcart',
    component:ShopCart
},
{
    path:'/personal',
    component:Personal
},{
    path:'/',
    redirect:'/msite'
}
]