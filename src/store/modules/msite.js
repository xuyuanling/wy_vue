import {reqHome} from '../../api'
import {RECEIVE_HOME}  from '../mutation-types'

const state={
    homeDate:{}
}

const actions={
    //获取首页总数据
    async getHomeDate({commit}){
        const result = await reqHome()
        //console.log(result.data.data)
        if(result.data.code===0){
            const homeDate=result.data.data
           // console.log(homeDate)
            commit(RECEIVE_HOME,homeDate)
            
        }
    }
}

const mutations={
    [RECEIVE_HOME](state,homeDate){
        state.homeDate=homeDate
    }

}
const getters={
    //获取NewProduct数据 导航列表
    getNewProduct(state){
        if(state.homeDate.kingKongModule){
            return state.homeDate.kingKongModule.kingKongList
        }
        
    },
    //获取限时购数据
    getLimited(state){
        if(state.homeDate.flashSaleModule){
            return state.homeDate.flashSaleModule
        }
    },
    //获取新品首发数据
    getNewFirst(state){
        if(state.homeDate.newItemList){
            return state.homeDate.newItemList
        }
    },
    //获取AdLists 数据
    getAdLists(state){
        if(state.homeDate.categoryModule){
            return state.homeDate.categoryModule
        }
    }

}
export default{
    state,
    actions,
    mutations,
    getters
}