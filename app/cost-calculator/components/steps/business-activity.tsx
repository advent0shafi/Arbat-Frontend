"use client"

import { useState } from "react"
import StepContainer from "../step-container"
import type { StepProps } from "../../types/form"

const activities = ["Consulting", "Technology", "Food & Beverage", "Retail", "Marketing", "E-commerce"]

export default function BusinessActivity({ data, onNext, onPrev, currentStep }: StepProps) {
  const [localData, setLocalData] = useState(data.businessActivity)

  return (
    <StepContainer
      title="Choose your business activity to start your business setup cost estimate"
      description="Choose the business activity that you would like to carry out in the UAE. Aside from helping you identify the location and licence that best suits your company, this will also help you get a better estimate of the cost of your company setup."
      onNext={() => onNext({ businessActivity: localData })}
      onPrev={onPrev}
      currentStep={currentStep}
      isValid={!!localData}
      data={{ ...data, businessActivity: localData }}
    >
      <select value={localData} onChange={(e) => setLocalData(e.target.value)} className="w-full p-3 border rounded-md font-poppins md:text-base text-sm">
        <option value="">Select Activity</option>
        {activities.map((activity) => (
          <option key={activity} value={activity}>
            {activity}
          </option>
        ))}
      </select>
    </StepContainer>
  )
}

