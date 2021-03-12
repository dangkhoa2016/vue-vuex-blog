import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue';
import PathNotFound from '@/views/PathNotFound.vue';
import { scrollTop } from '../helpers/ui';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { title: 'Welcome to my blog' }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About'),
        meta: { title: 'About me' }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/Contact'),
        meta: { title: 'Contact me' }
    },
    {
        path: '/blogs1',
        name: 'blogs1',
        component: () => import('../views/Blogs1'),
        meta: { title: 'Blog layout 1' }
    },
    {
        path: '/blogs2',
        name: 'blogs2',
        component: () => import('../views/Blogs2'),
        meta: { title: 'Blog layout 2' }
    },
    {
        path: '/blogs3',
        name: 'blogs3',
        component: () => import('../views/Blogs3'),
        meta: { title: 'Blog layout 3' }
    },
    {
        path: '/:type(blogs1|blogs2|blogs3|blogs_graphcms)/:id',
        name: 'blog',
        component: () => import('../components/PostDetail'),
        beforeEnter: (to, from, next) => {
            /*
            if (to.params.type.indexOf('blogs') === -1)
                next({ name: 'not-found' });
            else
                next();
            */
            next();
        },
        meta: { title: 'Read blog' }
    },
    {
        path: '/blogs_graphcms',
        name: 'blogs_graphcms',
        component: () => import('../views/BlogsWithGraphCMS'),
        meta: { title: 'Blog using Graph CMS' }
    },
    {
        path: "*", name: 'not-found',
        component: PathNotFound,
        meta: { title: 'Path not found' }
    }
];


const router = new VueRouter({ mode: 'history', routes });

router.beforeEach((to, from, next) => {
    //console.log('beforeEach', to, from);

    scrollTop();

    next();
});

const DEFAULT_TITLE = process.env.VUE_APP_DEFAULT_TITLE;

router.afterEach((to) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title ? `${to.meta.title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    });
});

export default router;
