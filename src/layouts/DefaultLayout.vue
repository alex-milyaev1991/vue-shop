<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
<div class="min-h-screen">
    <header class="header py-3">
        <div class="container px-3 mx-auto max-w-[1140px]">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <h1 class="text-xl font-bold text-blue-600">Vue Shop</h1>
                <nav class="space-x-4">
                <RouterLink to="/products" class="text-gray-700 hover:text-blue-600"
                    >Каталог</RouterLink
                >
                </nav>
            </div>
        </div>
    </header>

    <main>
        <div class="container px-3 pt-5 mx-auto max-w-[1140px]">
            <slot />
        </div>
    </main>

    <footer class="footer mt-10 py-4 bg-gray-100 text-sm text-gray-500">
        <p class="text-center">&copy; 2025 Vue Shop. Все права защищены.</p>
    </footer>
</div>
</template>
  