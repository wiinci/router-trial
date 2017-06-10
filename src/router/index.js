import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ViewSlat from '@/components/ViewSlat'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: window.location.href,
    linkActiveClass: 'c-mainNav_link--active',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },

        {
            path: '/slat',
            name: 'ViewSlat',
            component: ViewSlat
        }
    ]
})
