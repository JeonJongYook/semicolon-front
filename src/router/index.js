import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/common/SignUp'
import Login from '@/components/common/LogIn'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})