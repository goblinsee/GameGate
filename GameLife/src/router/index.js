import Vue from 'vue'
import Router from 'vue-router'
import UserPage from '@/components/user/UserPage'
import AdminPage from '@/components/admin/AdminPage'
import Farm from '@/components/user/Farm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserPage',
      component: UserPage,
      children: [
        {
          path: '/farm',
          name: 'Farm',
          component: Farm
        }
      ]
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage
    }
  ]
})
