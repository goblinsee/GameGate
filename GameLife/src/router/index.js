import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/user/User'
import AdminPage from '@/components/admin/AdminPage'
import Farm from '@/components/user/Farm'
import LivingRoom from '@/components/user/LivingRoom'
import Lab from '@/components/user/Lab'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'User',
      component: User,
      redirect: '/live',
      children: [
        {
          path: '/farm',
          name: 'Farm',
          component: Farm
        },
        {
          path: '/live',
          name: 'LivingRoom',
          component: LivingRoom
        },
        {
          path: '/lab',
          name: 'Lab',
          component: Lab
        }
      ]
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
