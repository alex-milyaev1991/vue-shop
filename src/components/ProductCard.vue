<template>
  <div class="card-item">
    <div class="card-item_holder p-4 rounded-lg hover:shadow-md transition">
      <router-link
        :to="`/products/${product.id}`"
        class="block text-center hover:opacity-90 transition"
      >
        <img
          :src="product.image"
          :alt="product.name"
          loading="lazy"
          class="h-40 object-contain mx-auto mb-2"
        />
        <h2 class="text-lg font-bold">{{ product.name }}</h2>
        <p class="text-gray-600">{{ product.price }} $</p>
      </router-link>

      <button
        @click.prevent="toggleFavorite"
        class="card-item_btn text-xl hover:scale-110 transition"
        :class="{'text-red-500' : isFavorite}"
      >
        <span>&#10084;</span> 
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['toggle-favorite'])

const toggleFavorite = () => {
  emit('toggle-favorite', props.product.id)
}
</script>
