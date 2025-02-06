"use client"

import { useState } from "react"
import StepContainer from "../step-container"
import type { StepProps } from "../../types/form"

export default function ShareholderCount({ data, onNext, onPrev, currentStep }: StepProps) {
  const [localCount, setLocalCount] = useState(data.shareholderCount)

  return (
    <StepContainer
      title="How many owners/shareholders will your company have?"
      description="The number of owners/shareholders your company will have can help in identifying the most suitable legal structure for your company, as well as the number of residence visas you will require."
      onNext={() => onNext({ shareholderCount: localCount })}
      onPrev={onPrev}
      currentStep={currentStep}
      isValid={localCount > 0}
      data={{ 
        ...data,
        shareholderCount: localCount 
      }}
    >
      <div className="flex flex-wrap gap-2">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            onClick={() => setLocalCount(i)}
            className={`md:w-12 md:h-12 w-10  h-10 rounded-md border  md:text-base text-sm ${localCount === i ? "bg-[#AC1B13] text-white" : "hover:bg-gray-50"}`}
          >
            {i}
          </button>
        ))}
      </div>
    </StepContainer>
  )
}

