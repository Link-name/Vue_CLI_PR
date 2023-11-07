import { createRouter, createWebHistory } from 'vue-router'
import homepage from "@/components/homepage"
import first_page from "@/components/first_page"
import blook from "@/components/blook"
import project_Details5 from "@/components/homepage"
import productList4 from "@/components/productList4"


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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
