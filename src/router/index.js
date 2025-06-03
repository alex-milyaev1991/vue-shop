import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '@/views/ProductListView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/products',
  },
  {
    path: '/products',
    component: ProductListView,
    name: 'product-list',
    meta: { layout: DefaultLayout },
  },
  {
    path: '/products/:id',
    component: ProductDetailView,
    name: 'product-detail',
    props: true,
    meta: { layout: DefaultLayout },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
