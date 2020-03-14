import Axios from 'axios'

const state = () => ({
    todos: [],
    todo: [],
    page: 1
})

const mutations = {
    SET_TODOS(state, payload) {
        state.todos = payload
    },
    SET_TODO(state, payload) {
        state.todo = payload
    }
}

const actions = {
    getTodos({
        commit,
        state
    }) {
        return new Promise((resolve, reject) => {
            Axios.get(`/api/todo?page=${state.page}`)
                .then((response) => {
                    commit('SET_TODOS', response.data.data)
                    resolve(response.data)
                })
        })
    },
    simpanTodo({
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            Axios.post('/api/todo', payload)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    if (error.response.status == 422) {
                        commit('SET_ERROR', error.response.data.errors, {
                            root: true
                        })
                    }
                })
        })
    },
    updateStatus({
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            Axios.put(`/api/todo/${payload}`)
                .then((response) => {
                    resolve(response.data)
                })
        })
    },
    hapusTodo({
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            Axios.delete(`/api/todo/${payload}`)
                .then((response) => {
                    resolve(response.data)
                })
        })
    },
    getTodo({
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            Axios.get(`/api/todo/${payload}`)
                .then((response) => {
                    commit('SET_TODO', response.data.data)
                    resolve(response.data)
                })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
