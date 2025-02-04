import type React from "react"

interface AlertBoxProps {
  children: React.ReactNode
}

export function AlertBox({ children }: AlertBoxProps) {
  return (
    <div className="bg-red-50  rounded-[6px] py-[18px] px-[24px]  my-4">
      <p className="text-red-700 font-plus-jakarta text-[18px] leading-[27px] font-medium">{children}</p>
    </div>
  )
}

