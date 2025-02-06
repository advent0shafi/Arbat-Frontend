"use client"

import { useState } from "react"
import StepContainer from "../step-container"
import type { StepProps } from "../../types/form"

export default function ResidencyStatus({ data, onNext, onPrev, currentStep }: StepProps) {
  const [localLiving, setLocalLiving] = useState(data.livingInUAE)
  const [localEmployed, setLocalEmployed] = useState(data.employedInUAE)

  return (
    <StepContainer
      title="Your Current Status"
      onNext={() =>
        onNext({
          livingInUAE: localLiving,
          employedInUAE: localEmployed,
        })
      }
      onPrev={onPrev}
      currentStep={currentStep}
      isValid={typeof localLiving === "boolean" && typeof localEmployed === "boolean"}
      data={{ 
        ...data,
        livingInUAE: localLiving, 
        employedInUAE: localEmployed 
      }}
    >
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-4  md:text-base text-sm">Are you currently living in the UAE?</h3>
          <div className="space-y-4">
            {["Yes", "No"].map((option) => (
              <label
                key={option}
                className="flex items-center  md:text-base text-sm space-x-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer font-poppins"
              >
                <input
                  type="radio"
                  name="livingInUAE"
                  value={option}
                  checked={localLiving === (option === "Yes")}
                  onChange={(e) => setLocalLiving(e.target.value === "Yes")}
                  className="h-4 w-4 text-[#AC1B13] font-poppins  md:text-base text-sm"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4 font-poppins  md:text-base text-sm">Are you currently employed in the UAE?</h3>
          <div className="space-y-4">
            {["Yes", "No"].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer font-poppins"
              >
                <input
                  type="radio"
                  name="employedInUAE"
                  value={option}
                  checked={localEmployed === (option === "Yes")}
                  onChange={(e) => setLocalEmployed(e.target.value === "Yes")}
                  className="h-4 w-4 text-[#AC1B13] font-poppins  md:text-base text-sm"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </StepContainer>
  )
}

