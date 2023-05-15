import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ProductsView from '../views/ProductsView.vue'
import DetailProductView from '../views/DetailProductView.vue'
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/product/:id',
      name: 'detail-product',
      component: DetailProductView
    },
  ]
})

router.beforeEach((to, from) => {
  const authStore = useAuthStore()

  if (!authStore.user && to.name !== 'login') {
    return { name: 'login' }
  }

  if (authStore.user && to.name == 'login') {
    return { name: 'products' }
  }
})

export default router
