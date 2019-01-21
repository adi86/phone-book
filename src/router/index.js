import Vue from 'vue'
import Router from 'vue-router'
import PhoneBook from '@/components/PhoneBook'
import PhoneBookEdit from '@/components/PhoneBookEdit'
import PhoneBookAdd from '@/components/PhoneBookAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PhoneBook',
      component: PhoneBook
    },
    {
      path: '/edit/:id',
      name: 'PhoneBookEdit',
      component: PhoneBookEdit
    },
    {
      path: '/add',
      name: 'PhoneBookAdd',
      component: PhoneBookAdd
    }
  ]
})
