import { ref, watch, onUnmounted } from 'vue'
import debounce from 'lodash.debounce'

export function useDebouncedRef(initialValue, delay = 300, options = {}) {
  const state = ref(initialValue)
  const debounced = ref(initialValue)

  const update = debounce((val) => {
    debounced.value = val
  }, delay, options)

  watch(state, (val) => {
    update(val)
  })

  onUnmounted(() => {
    update.cancel()
  })

  return [state, debounced]
}
