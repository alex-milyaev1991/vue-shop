import { defineStore } from 'pinia'
import { getCategories } from '@/services/api'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [],
  }),
  actions: {
    async fetchCategories() {
      try {
        const { data } = await getCategories()
        this.categories = data
      } catch (e) {
        console.error('Ошибка загрузки категорий:', e)
      }
    },
  },
})
