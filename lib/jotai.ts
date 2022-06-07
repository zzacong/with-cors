import { atom } from 'jotai'
import navs from '$lib/navs'

export type HeaderNavLink = {
  href: string
  title: string
}

export const headerNavLinks = atom<HeaderNavLink[]>(navs)

export const formCurrentStepAtom = atom(1)
export const formDataAtom = atom<Record<string, unknown>>({})
