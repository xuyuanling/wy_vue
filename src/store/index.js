import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import msite from './modules/msite'
import category from './modules/category'
Vue.use(Vuex)

export default new Vuex.Store({
 
    actions,
    mutations,
    getters,
    modules:{
        msite,
        category
    }
})
