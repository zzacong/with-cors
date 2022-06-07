import type { ReactNode } from 'react'

export default function Wrapper({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-5xl px-6 pt-[10vh]">{children}</main>
}
