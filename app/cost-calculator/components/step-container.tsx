import type React from "react"
import type { FormData } from "../types/form"

type StepContainerProps = {
  title: string
  description?: string
  children: React.ReactNode
  onPrev: () => void
  onNext: (data: Partial<FormData>) => void
  currentStep: number
  isValid: boolean
  data: FormData
}

export default function StepContainer({
  title,
  description,
  children,
  onPrev,
  onNext,
  currentStep,
  isValid,
  data,
}: StepContainerProps) {
  return (
    <div className="bg-white rounded-lg shadow-md md:p-12 p-8">
      <h2 className="md:text-xl text-sm font-semibold mb-2 font-plus-jakarta ">
        {title} {currentStep < 11 && "*"}
      </h2>
      {description && <p className="text-gray-600 mb-6 md:text-base text-xs  font-plus-jakarta md">{description}</p>}

      <div className="space-y-6">
        {children}

        <div className="flex gap-4 pt-4">
          <button
            onClick={onPrev}
            className="px-4 text-sm  md:text-base py-2 border border-[#AC1B13] text-[#AC1B13] font-poppins rounded hover:bg-red-50 transition-colors"
          >
            Previous Step
          </button>
          <button
            onClick={() => onNext(data)}
            disabled={!isValid}
            className="px-4 text-sm  md:text-base  py-2 bg-[#AC1B13] text-white rounded font-poppins hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  )
}

