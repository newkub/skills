// composables/useCounter.ts
export const useCounter = (initial = 0) => {
  const count = ref(initial)
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initial
  
  return {
    count: readonly(count),
    increment,
    decrement,
    reset
  }
}
