import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Hobbies from './components/Hobbies'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Feedback from './components/Feedback'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/services',
            name: 'services',
            component: Services,
        },
        {
            path: '/hobbies',
            name: 'hobbies',
            component: Hobbies,
        },
        {
            path: '/articles',
            name: 'articles',
            component: Articles,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: Feedback,
        },
    ],
})