import { defineStore } from 'pinia'
import { computed, ref } from "vue"

export const useCounterStore = defineStore(
  "counter",
  () => {
    // state
    const count = ref(100)
    // getters
    const doubleCount = computed(() => count.value * 2)
    // mutations
    const update = () => count.value++
    // actions
    const asyncUpdate = () => {
      setTimeout(() => {
        count.value++
      }, 1000)
    }
    return { count, doubleCount, update, asyncUpdate }
  }
)