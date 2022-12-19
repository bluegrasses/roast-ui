import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../views/layout/Layout.vue'),
        children: [

            {
                path: '/cafes/:id',
                name: 'cafe',
                component: () => import( '../views/cafe/Cafe.vue')
            },
            {
                path: '/cafe/new',
                name: 'newCafe',
                component: () => import( '../views/cafe/NewCafe.vue')
            },
            {
                path:'home',
                name:'home',
                component: () => import( '../views/Home.vue')
            },
            {
                path: '/cafes',
                name: 'cafes',
                component: () => import('../views/cafe/Cafes.vue')
            }
        ]
    },

    {
        path: '/login',
        name: 'login',
        component: () => import( '../views/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
