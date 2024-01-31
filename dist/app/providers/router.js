import { createRouter, createWebHistory } from 'vue-router';
import { getRouteMain } from '@/shared/const/router';
import HomePage from '@/pages/IndexPage/ui/IndexPage.vue';
import { loadLayoutMiddleware } from '@/app/providers/router/middleware';
const routes = [
    {
        path: getRouteMain(),
        name: 'home',
        component: HomePage
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
router.beforeEach(loadLayoutMiddleware);
export default router;
