import { defineStore } from 'pinia'
import type { selfPromptStore } from './helper'
import { getLocalselfPromptList, setLocalselfPromptList } from './helper'

export const useselfPromptStore = defineStore('selfPrompt', {
  state: (): selfPromptStore => getLocalselfPromptList(),

  actions: {
    updateselfPromptList(selfPromptList: []) {
      this.$patch({ selfPromptList })
      setLocalselfPromptList({ selfPromptList })
    },
    getselfPromptList() {
      return this.$state
    },
  },
})
