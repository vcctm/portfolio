import { atom, AtomEffect } from 'recoil'
import { getStorageItem, setStorageItem } from 'utils'

export type ThemeMode = 'light' | 'dark'

const themeMode = getStorageItem('themeMode') ?? 'light'

const localStorageEffect =
  (key: string): AtomEffect<ThemeMode> =>
  ({ setSelf, onSet }) => {
    const stored = getStorageItem(key)
    if (stored === 'dark' || stored === 'light') {
      setSelf(stored)
    }
    onSet((value, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key)
      } else {
        setStorageItem(key, value || _)
      }
    })
  }

export const themeAtom = atom<ThemeMode>({
  key: 'themeAtom',
  default: themeMode,
  effects: [localStorageEffect('themeMode')]
})
