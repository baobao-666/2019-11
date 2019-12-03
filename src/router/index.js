import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 {
   path:'/message',
   name:'message',
   component:()=>import('../views/message/'),
   children:[]
 },
 {
  path:'/carthome',
  name:'home',
  component:()=>import('../views/carthome'),
  children:[]
 },
 {
  path:'/list',
  name:'list',
  component:()=>import('../views/list/'),
  children:[]
 },
 {
   path:'/cartmess',
   name:'cartmess',
   component:()=>import('../views/cartmess/'),
   children:[
     {
       path:'/cartmess/cartcolor',
       name:'cartcolor',
       component:()=>import('../views/cartmess/cartColo/'),
       children:[]
     },{
      path:'/cartmess/cartstyle',
      name:'cartstyle',
      component:()=>import('../views/cartmess/cartStyle/'),
      children:[]
     },{
       path:'/cartmess',
       redirect:'/cartmess/cartcolor'
     }
   ]
 },

 {
   path:'*',
   redirect:'/list'
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
