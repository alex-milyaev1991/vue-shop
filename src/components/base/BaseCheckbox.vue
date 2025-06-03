<script setup>
import { useAttrs } from 'vue'

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const attrs = useAttrs()

const toggleValue = (e) => {
  const checked = e.target.checked
  const exists = props.modelValue.includes(props.value)

  const newValue = checked && !exists
    ? [...props.modelValue, props.value]
    : !checked && exists
    ? props.modelValue.filter((v) => v !== props.value)
    : props.modelValue

  emit('update:modelValue', newValue)
}
</script>

<template>
  <label v-bind="attrs">
    <input
      class="mr-2"
      type="checkbox"
      :checked="modelValue.includes(value)"
      @change="toggleValue"
    />
    <slot />
  </label>
</template>
