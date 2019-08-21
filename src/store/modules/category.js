import {reqCategory} from '../../api'
import { RECEIVE_CATEGORY } from '../mutation-types';
const state={
    categorys:[]
}

const actions={

    async getCategory({commit}){
        const result = await reqCategory()
       // console.log(result.data.data)
        if(result.data.code===0){
            const categorys=result.data.data
            commit(RECEIVE_CATEGORY,categorys)
        }
    }

}

const mutations={
    [RECEIVE_CATEGORY](state,categorys){
        state.categorys=categorys
    }

}

const getters = {

}

export default{
    state,
    actions,
    mutations,
    getters
}