import { ss } from '@/utils/storage'

const LOCAL_NAME = 'selfPrompt'

export type selfPromptList = []

export interface selfPromptStore {
  selfPromptList: selfPromptList
}

export function getLocalselfPromptList(): selfPromptStore {
  const selfPromptStore: selfPromptStore | undefined = ss.get(LOCAL_NAME)
  return selfPromptStore ?? { selfPromptList: [] }
}

export function setLocalselfPromptList(selfPromptStore: selfPromptStore): void {
  ss.set(LOCAL_NAME, selfPromptStore)
}
