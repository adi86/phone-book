import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/PhoneBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PhoneBook',
      component: HelloWorld
    }
  ]
})
