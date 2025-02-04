import type React from "react"

interface SectionTitleProps {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-xl font-bold font-plus-jakarta mb-4">{children}</h2>
}

