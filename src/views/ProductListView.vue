<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { useProductStore } from '@/stores/productStore'
import { useDebouncedRef } from '@/composables/useDebouncedRef'

import ProductCard from '@/components/ProductCard.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'

const [searchInput, debouncedSearch] = useDebouncedRef('', 400, { leading: false })
const selectedCategories = ref([])
const sort = ref('')
const currentPage = ref(1)
const limit = 50

const sortOptions = [
  { label: 'Без сортировки', value: '' },
  { label: 'Цена ↑', value: 'asc' },
  { label: 'Цена ↓', value: 'desc' }
]

const categoryStore = useCategoryStore()
const productStore = useProductStore()

const filteredProductsBySearch = computed(() => {
  let result = productStore.products

  if (!result.length) return []

  if (debouncedSearch.value) {
    const q = debouncedSearch.value.toLowerCase()
    return result.filter(p => p.name.toLowerCase().includes(q))
  }

  return result
})

const filteredProductsByCategory = computed(() => {
  const products = filteredProductsBySearch.value
  const categories = selectedCategories.value.map(Number)

  if (!products.length) return []

  if (categories.length) {
    return products.filter(product => categories.includes(product.categoryId));
  }

  return products
})

const sortedProducts = computed(() => {
  const products = [...filteredProductsByCategory.value]

  if (sort.value === 'asc') {
    return products.sort((a, b) => a.price - b.price)
  }
  if (sort.value === 'desc') {
    return products.sort((a, b) => b.price - a.price)
  }

  return products
})

const loadProducts = async ({ append = false } = {}) => {
  await productStore.fetchProducts({
    page: currentPage.value,
    limit
  }, append)
}

onMounted(async () => {
  await categoryStore.fetchCategories()
  await loadProducts();
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Product Catalog</h1>

    <div class="holder">
      <aside class="aside">
        <BaseInput
          v-model="searchInput"
          placeholder="Search products..."
          class="mb-2 w-full"
        />

        <div class="categories">
          <BaseCheckbox
            class="block"
            v-for="cat in categoryStore.categories"
            :key="cat.id"
            :value="cat.id"
            v-model="selectedCategories"
          >
            {{ cat.name }}
          </BaseCheckbox>
        </div>
      </aside>

      <div class="content">
        <BaseSelect
          v-model="sort"
          class="mb-4"
          :options="sortOptions"
        />

        <div 
          v-if="sortedProducts.length"
          class="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
        >
          <ProductCard
            v-for="product in sortedProducts"
            :key="product.id"
            :product="product"
            :is-favorite="productStore.isFavorite(product.id)"
            @toggle-favorite="productStore.toggleFavorite"
          />
        </div>
        <div v-else>
          <p class="text-center">Продуктов нет</p>
        </div>
      </div>
    </div>
  </div>
</template>
