<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const onInput = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="onInput"
    class="border p-1 rounded-lg"
  />
</template>
