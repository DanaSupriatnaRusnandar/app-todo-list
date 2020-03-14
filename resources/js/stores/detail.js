import Axios from "axios"

const state = () => {

}

const actions = {
    submitDetail({
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            Axios.post('/api/todo/detail', payload)
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
    changeStatus({
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            Axios.put(`/api/todo/detail/${payload}`, payload)
                .then((response) => {
                    resolve(response.data)
                })
        })
    }
}

export default {
    namespaced: true,
    state,
    actions
}
