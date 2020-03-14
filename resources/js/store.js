import Vue from 'vue'
import Vuex from 'vuex'
import todo from './stores/todo'
import detail from './stores/detail'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        todo,
        detail
    },
    state: {
        errors: []
    },
    mutations: {
        SET_ERROR(state, payload) {
            state.errors = payload
        },
        CLEAR_ERROR(state) {
            state.errors = []
        }
    }
})

export default store
