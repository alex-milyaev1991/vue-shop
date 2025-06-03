<script setup>
import { onMounted, ref, computed } from 'vue'
import { useProductStore } from '@/stores/productStore'

const props = defineProps({ id: String });
  
const store = useProductStore()
const product = ref(null)
  
onMounted(async () => {
  product.value = await store.getProduct(props.id)
})
  
const isFavorite = computed(() => product.value && store.isFavorite(product.value.id))
const toggleFavorite = () => {
  if (product.value) {
    store.toggleFavorite(props.id)
  }
}
</script>

<template>
    <div v-if="product" class="max-w-3xl mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">{{ product.name }}</h1>
      <img :src="product.image" alt="" class="w-full max-h-[400px] object-contain mb-4" />
      <p class="text-gray-700 mb-2">{{ product.description }}</p>
      <p class="text-lg font-semibold mb-4">{{ product.price }} $</p>
      <button @click="toggleFavorite" class="text-red-500 text-xl">
        <span v-if="isFavorite">❤️</span>
        <span v-else>🤍</span> В избранное
      </button>
    </div>
    <div v-else class="p-4 text-center text-red-500 font-bold">
      Товар не найден.
    </div>
</template>