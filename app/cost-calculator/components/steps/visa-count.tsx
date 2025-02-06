"use client"

import { useState } from "react"
import StepContainer from "../step-container"
import type { StepProps } from "../../types/form"

export default function VisaCount({ data, onNext, onPrev, currentStep }: StepProps) {
  const [localCount, setLocalCount] = useState(data.visaCount)

  return (
    <StepContainer
      title="How many residence visas will you need?"
      description="In addition to residence visas for your shareholders, you can apply for residence visas for your employees and family members."
      onNext={() => onNext({ visaCount: localCount })}
      onPrev={onPrev}
      currentStep={currentStep}
      isValid={localCount >= 0}
      data={{ ...data, visaCount: localCount }}
    >
      <div className="flex flex-wrap gap-2">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            onClick={() => setLocalCount(i)}
            className={`md:w-12 md:h-12 w-10  h-10 rounded-md border ${localCount === i ? "bg-[#AC1B13] font-poppins text-white" : "hover:bg-gray-50"}`}
          >
            {i}
          </button>
        ))}
      </div>
    </StepContainer>
  )
}

