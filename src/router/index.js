import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Happy from '@/components/Happy'
import Unhappy from '@/components/Unhappy'

// import User from '@/components/User'
// import UserChild from '@/components/UserChild'
const User = resolve => require(['@/components/User.vue'], resolve)
const UserChild = resolve => require(['@/components/UserChild'], resolve)
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/Happy',
        name: 'Happy',
        component: Happy
    }, {
        path: '/Unhappy',
        name: 'Unhappy',
        component: Unhappy
    }, {
        path: '/User/:id',
        name: 'userparams',
        component: User,
        children: [{
            path: 'post',
            name: 'UserChild',
            component: UserChild
        }]
    }]
})