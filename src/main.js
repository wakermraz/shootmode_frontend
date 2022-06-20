import Vue from 'vue'
import VueCookie from 'vue-cookie'
import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'
import App from './App.vue'
import VueRouter from 'vue-router';

import HomePage from "./pages/HomePage.vue";
import CategoryPage from "./pages/CategoryAudio.vue";
import ProfileListings from "./pages/ProfileListings.vue";
import ProfileBookings from "./pages/ProfileBookings.vue";

Vue.use(VueRouter);
Vue.use(VueCookie)
Vue.use(VModal)
Vue.config.productionTip = false

const router =  new VueRouter({
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
            path: '/profile/listings',
            name: 'category',
            component: ProfileListings
        },
        {
            path: '/profile/bookings',
            name: 'category',
            component: ProfileBookings
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
