import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const router = [
    {
        path: '/login',
        component: Login
    }
]

export default router
