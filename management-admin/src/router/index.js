import Vue from 'vue'
import VueRouter from 'vue-router'
import createArticle from '../views/createArticle.vue'
import manageArticle from '../views/manageArticle.vue'
import editArticle from '../views/editArticle.vue'



Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect:'/articles/index',
  //   name: 'Home'
  // },
  {
    path: '/articles/index',
    name: 'manageArticle',
    component: manageArticle
  },
  {
    path: '/articles/create',
    name: 'createArticle',
    component: createArticle
  },
  {
    path: '/articles/edit/:id',
    name: 'editArticle',
    component: editArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
