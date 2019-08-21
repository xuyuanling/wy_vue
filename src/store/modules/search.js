import {reqkeywordsInit} from '../../api'
import {RECEIVE_KEYWORDS} from '../mutation-types'
const state={
    keywordsInit:[]
}

const actions={
    async getkeywordsInit({commit}){
        const result= await reqkeywordsInit()
        console.log(result)
        if(result.status===200){
            const keywordsInit=result.data.data
            console.log(keywordsInit)
            commit(RECEIVE_KEYWORDS,keywordsInit)
        }
    }
}

const mutations={
    [RECEIVE_KEYWORDS](state,keywordsInit){
        state.keywordsInit=keywordsInit
    }

}

const getters={

}
export default{
    state,
    actions,
    mutations,
    getters
}