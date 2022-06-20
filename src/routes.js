import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from "./pages/HomePage.vue";
import CategoryPage from "./pages/CategoryAudio.vue";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: HomePage
        },
        {
            path: '/category/audio',
            name: 'category',
            component: CategoryPage
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
