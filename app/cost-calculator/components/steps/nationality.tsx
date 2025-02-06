"use client"

import { useState } from "react"
import StepContainer from "../step-container"
import type { StepProps } from "../../types/form"

const nationalities = ["UAE", "USA", "UK", "India", "Pakistan", "Other"]

export default function Nationality({ data, onNext, onPrev, currentStep }: StepProps) {
  const [localNationality, setLocalNationality] = useState(data.nationality)

  return (
    <StepContainer
      title="What's your nationality?"
      onNext={() => onNext({ nationality: localNationality })}
      onPrev={onPrev}
      currentStep={currentStep}
      isValid={!!localNationality}
      data={{ 
        ...data, 
        nationality: localNationality 
      }}
    >
      <select
        value={localNationality}
        onChange={(e) => setLocalNationality(e.target.value)}
        className="w-full p-3 border rounded-md font-poppins  md:text-base text-sm"
      >
        <option value="">Select Nationality</option>
        {nationalities.map((nationality) => (
          <option key={nationality} value={nationality}>
            {nationality}
          </option>
        ))}
      </select>
    </StepContainer>
  )
}

