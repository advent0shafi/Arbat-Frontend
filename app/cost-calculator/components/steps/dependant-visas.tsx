"use client"

import { useState } from "react"
import StepContainer from "../step-container"
import type { StepProps } from "../../types/form"

export default function DependantVisas({ data, onNext, onPrev, currentStep }: StepProps) {
  const [localNeedVisas, setLocalNeedVisas] = useState(data.dependantVisas)

  return (
    <StepContainer
      title="Will you also require visas for your dependants?"
      description="Dependants include your family members, nanny or other household staff you may personally employ."
      onNext={() => onNext({ dependantVisas: localNeedVisas })}
      onPrev={onPrev}
      currentStep={currentStep}
      isValid={typeof localNeedVisas === "boolean"}
      data={{ 
        ...data,
        dependantVisas: localNeedVisas 
      }}
    >
      <div className="space-y-4">
        {["Yes", "No"].map((option) => (
          <label
            key={option}
            className="flex items-center space-x-3 p-3 border rounded-md  md:text-base text-sm hover:bg-gray-50 font-poppins cursor-pointer"
          >
            <input
              type="radio"
              name="dependantVisas"
              value={option}
              checked={localNeedVisas === (option === "Yes")}
              onChange={(e) => setLocalNeedVisas(e.target.value === "Yes")}
              className="h-4 w-4 text-[#AC1B13] font-poppins  md:text-base text-sm"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </StepContainer>
  )
}

