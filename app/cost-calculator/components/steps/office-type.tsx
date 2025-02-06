"use client"

import { useState } from "react"
import StepContainer from "../step-container"
import type { StepProps } from "../../types/form"

const officeTypes = ["Virtual Office", "Physical Office", "Shop Front", "Business Centre", "Warehouse"]

export default function OfficeType({ data, onNext, onPrev, currentStep }: StepProps) {
  const [localType, setLocalType] = useState(data.officeType)

  return (
    <StepContainer
      title="What type of office space do you need?"
      description="Depending on the nature of your business, will you need a flexi-desk, a co-working space or an entire office space? This is an important factor in calculating your total setup cost."
      onNext={() => onNext({ officeType: localType })}
      onPrev={onPrev}
      currentStep={currentStep}
      isValid={!!localType}
      data={{ ...data, officeType: localType }}
    >
      <div className="space-y-4">
        {officeTypes.map((type) => (
          <label
            key={type}
            className="flex items-center space-x-3 p-3 border font-poppins rounded-md hover:bg-gray-50 cursor-pointer  md:text-base text-sm"
          >
            <input
              type="radio"
              name="officeType"
              value={type}
              checked={localType === type}
              onChange={(e) => setLocalType(e.target.value)}
              className="h-4 w-4 text-[#AC1B13] font-poppins  md:text-base text-sm"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
    </StepContainer>
  )
}

