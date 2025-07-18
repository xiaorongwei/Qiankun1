import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import vice from '../components/vice.vue'
import ActivityHighlights from '../components/ActivityHighlights.vue'
import Highlights from '../components/Highlights.vue'
import cooperate from '../components/cooperate.vue'
import Commodity from '../components/commodity.vue'
import Certificate from '../components/Certificate.vue' // 新增有機證書組件
import NotFound from '../components/NotFound.vue'
import Redirect from '../components/Redirect.vue'

const routes = [
    {
        path: '/dist/',
        name: 'home',
        component: Home,
        meta: { title: '首頁' }
    },
    {
        path: '/dist/vice',
        name: 'vice',
        component: vice,
        meta: { title: '關於我們' }
    },
    {
        path: '/dist/activity-highlights',
        name: 'activityHighlights',
        component: ActivityHighlights,
        meta: { title: '活動花絮' }
    },
    {
        path: '/dist/highlights',
        name: 'highlights',
        component: Highlights,
        meta: { title: '最新活動' }
    },
    {
        path: '/dist/cooperate',
        name: 'cooperate',
        component: cooperate,
        meta: { title: '合作夥伴' }
    },
    {
        path: '/dist/commodity',
        name: 'commodity',
        component: Commodity,
        meta: { title: '商品列表' }
    },
    {
        path: '/dist/certificate',
        name: 'certificate',
        component: Certificate,
        meta: { title: '有機證書' }
    },
    {
        path: '/dist/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFound,
        meta: { title: '404 - 頁面未找到' }
    },
    {
        path: '/dist/redirect',
        name: 'Redirect',
        component: Redirect,
        meta: { title: '跳轉中...' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 全局前置守衛：動態設置頁面標題
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '大武有機生態合作社'
    next()
})

export default router
