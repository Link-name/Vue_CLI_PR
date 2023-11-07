import { createRouter, createWebHistory } from 'vue-router'
import homepage from "@/components/homepage"
import first_page from "@/components/first_page"
import blook from "@/components/blook"
import project_Details5 from "@/components/project_Details5"
import productList4 from "@/components/productList4"
import Error404 from "@/components/Error404"


const routes = [
  {
    path: '/',
    name: 'first_page',
    component: first_page
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: homepage
  },
  {
    path: '/blook',
    name: 'blook',
    component: blook
  },
  {
    path: '/project_Details5',
    name: 'project_Details5',
    component: project_Details5
  },
  {
    path: '/productList4',
    name: 'productList4',
    component: productList4
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: Error404
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
