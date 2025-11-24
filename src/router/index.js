import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Recipes from '@/views/Recipes.vue'
import RecipeDetail from '@/views/RecipeDetail.vue'
import Provide from '@/views/Provide.vue' 
import CategoryList from '@/views/CategoryList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "home",
      component: Home 
    },
    {
      path: '/recipes',
      name: "Recipes",
      component: Recipes,
      children: [
        {
          path: ':id',
          name: 'RecipeDetail',
          component: RecipeDetail 
        }
      ]
    },
    {
      path: '/provide',
      name: "Provide",
      component: Provide,
      children: [
        {
          path: ':id',
          name: 'CategoryList',
          component: CategoryList
        },
      ]
    }


  ],
})

export default router
