"use client"

import { useState } from "react"
import StepContainer from "../step-container"
import type { StepProps } from "../../types/form"

const reasons = [
  "New company formation",
  "Expansion plan (ie. new branch or franchise)",
  "Company relocation",
  "Visa purposes only",
]

export default function SetupReason({ data, onNext, onPrev, currentStep }: StepProps) {
  const [localReason, setLocalReason] = useState(data.setupReason)

  return (
    <StepContainer
      title="What is your main reason for setting up a company in the UAE?"
      description="This will help us determine the potential type of company structure you will need for your company."
      onNext={() => onNext({ setupReason: localReason })}
      onPrev={onPrev}
      currentStep={currentStep}
      isValid={!!localReason}
      data={{ ...data, setupReason: localReason }}
    >
      <div className="space-y-4">
        {reasons.map((reason) => (
          <label
            key={reason}
            className="flex items-center space-x-3 p-3 border rounded-md font-poppins hover:bg-gray-50 cursor-pointer  md:text-base text-sm"
          >
            <input
              type="radio"
              name="reason"
              value={reason}
              checked={localReason === reason}
              onChange={(e) => setLocalReason(e.target.value)}
              className="h-4 w-4 text-[#AC1B13] font-poppins  md:text-base text-sm"
            />
            <span>{reason}</span>
          </label>
        ))}
      </div>
    </StepContainer>
  )
}

