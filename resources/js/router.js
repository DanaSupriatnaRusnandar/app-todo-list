import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoIndex from './pages/Index.vue'
import TodoAdd from './pages/Add.vue'
import TodoDetail from './pages/Detail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'todo.index',
            component: TodoIndex
        },
        {
            path: '/tambah',
            name: 'todo.add',
            component: TodoAdd
        },
        {
            path: '/detail/:id',
            name: 'todo.detail',
            component: TodoDetail
        }
    ]

})

export default router
