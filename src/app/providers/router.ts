import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { getRouteMain } from '@/shared/const/router'
import { loadLayoutMiddleware } from '@/app/providers/router/middleware'
import { IndexPage } from '@/pages/IndexPage'
import { TestPage } from '@/pages/testPage'
import { AboutPage } from '@/pages/aboutPage'

const routes: Array<RouteRecordRaw> = [
    {
        path: getRouteMain(),
        name: 'home',
        component: IndexPage
    },
    {
        path: '/test',
        name: 'test',
        component: TestPage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage,
        meta: {
            layout: 'page'
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach(loadLayoutMiddleware)

export default router
