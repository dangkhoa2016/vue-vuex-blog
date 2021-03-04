import Vue from 'vue';
import VueRouter from 'vue-router'

import Register from '@/views/Register';
import Login from '@/views/Login';
import Home from '@/views/Home.vue';
import PathNotFound from '@/views/PathNotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About')
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: () => import('../views/Blogs')
    },
    {
        path: '/blogs_graphcms',
        name: 'blogs_graphcms',
        component: () => import('../views/BlogsWithGraphCMS')
    },
    {
        path: "*", name: 'not-found',
        component: PathNotFound,
        meta: { title: 'Path not found' }
    }
];


const router = new VueRouter({ mode: 'history', routes });

export default router;
