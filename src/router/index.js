import { createRouter, createWebHistory } from "vue-router";
import Home from "views/home/index.vue"
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savePosition) {
        if (savePosition) {
            return savePosition
        } else {
            return {
                left: 0, top: 0
            }
        }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import("views/detail/index.vue")
        },
        {
            path: '/category',
            name: 'category',
            component: () => import("views/category/index.vue")
        }
    ]
})

export default router