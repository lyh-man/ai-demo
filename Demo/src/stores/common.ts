import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore({
  id: 'common',
  state: () => ({
    lang: 'zh'
  }),
  getters: {
  },
  actions: {
    setLang(name ) {
      localStorage.setItem()
    }
  },
})