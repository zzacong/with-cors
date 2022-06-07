import type { ReactNode } from 'react'

export default function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="mb-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
      {children}
    </h1>
  )
}
