import { defineStore } from 'pinia'
import { getProducts, getProductById } from '@/services/api'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  }),
  actions: {
    async fetchProducts({ page = 1, limit = 50 } = {}, append = false) {
      try {
        const params = {
          _page: page,
          _limit: limit,
        }
    
        const response = await getProducts(params)
        const data = response.data
    
        if (append) {
          this.products.push(...data)
        } else {
          this.products = data
        }
    
      } catch (e) {
        console.error('Ошибка загрузки товаров:', e)
      }
    },    

    getProduct: async function (id) {
      const numericId = Number(id)
    
      const existing = this.products.find(p => p.id === numericId)
      if (existing) return existing
    
      try {
        const response = await getProductById(numericId)
        const product = response.data
    
        this.products.push(product)
    
        return product
      } catch (e) {
        console.error(`Товар с id=${id} не найден`, e)
        return null
      }
    },

    toggleFavorite(id) {
      if (this.favorites.includes(id)) {
        this.favorites = this.favorites.filter(fav => fav !== id)
      } else {
        this.favorites.push(id)
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },

    isFavorite(id) {
      return this.favorites.includes(id)
    },
  },
})
