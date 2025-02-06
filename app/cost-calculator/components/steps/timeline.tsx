"use client"

import { useState } from "react"
import StepContainer from "../step-container"
import type { StepProps } from "../../types/form"

const timelineOptions = ["This Month", "Next Month", "3 Month", "6 Month"]

export default function Timeline({ data, onNext, onPrev, currentStep }: StepProps) {
  const [localTimeline, setLocalTimeline] = useState(data.startTimeline)

  return (
    <StepContainer
      title="When do you plan to start your business?"
      onNext={() => onNext({ startTimeline: localTimeline })}
      onPrev={onPrev}
      currentStep={currentStep}
      isValid={!!localTimeline}
      data={{ ...data, startTimeline: localTimeline }}
    >
      <div className="flex flex-wrap gap-4">
        {timelineOptions.map((option) => (
          <button
            key={option}
            onClick={() => setLocalTimeline(option)}
            className={`px-6 py-3 rounded-md border  md:text-base text-sm ${
              localTimeline === option ? "bg-[#AC1B13] font-poppins text-white" : "hover:bg-gray-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </StepContainer>
  )
}

