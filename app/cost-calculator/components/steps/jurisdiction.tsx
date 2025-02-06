"use client"

import { useState } from "react"
import StepContainer from "../step-container"
import type { StepProps } from "../../types/form"

export default function Jurisdiction({ data, onNext, onPrev, currentStep }: StepProps) {
  const [localJurisdiction, setLocalJurisdiction] = useState(data.jurisdiction)

  return (
    <StepContainer
      title="Choose your preferred jurisdiction"
      description="This will have the biggest impact on your final proposal, but is also required based on your choice of activity and whether you need to be based in the mainland or not."
      onNext={() => onNext({ jurisdiction: localJurisdiction })}
      onPrev={onPrev}
      currentStep={currentStep}
      isValid={!!localJurisdiction}
      data={{ 
        ...data,
        jurisdiction: localJurisdiction 
      }}
    >
      <div className="space-y-4">
        {["Free Zones", "Mainland"].map((option) => (
          <label
            key={option}
            className="flex items-center space-x-3 p-3 border rounded-md hover:bg-gray-50 font-poppins cursor-pointer  md:text-base text-sm"
          >
            <input
              type="radio"
              name="jurisdiction"
              value={option}
              checked={localJurisdiction === option}
              onChange={(e) => setLocalJurisdiction(e.target.value)}
              className="h-4 w-4 text-[#AC1B13] font-poppins  md:text-base text-sm"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </StepContainer>
  )
}

