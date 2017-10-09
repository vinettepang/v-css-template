import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Button from '@/components/Button'
import Alert from '@/components/Alert'
import Toast from '@/components/Toast'
import Form from '@/components/Form'
import Sidebar from '@/components/Sidebar'
import Layout from '@/components/Layout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
  		path: '/button',
  		name: 'Button',
  		component: Button
	  },{
      path: '/alert',
      name: 'Alert',
      component: Alert
    },{
      path: '/toast',
      name: 'Toast',
      component: Toast
    },{
      path: '/form',
      name: 'Form',
      component: Form
    },{
      path:'/layout',
      name:'Layout',
      component:Layout
    }
  ]
})
