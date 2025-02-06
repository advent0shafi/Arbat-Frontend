"use client"

import type React from "react"
import { useState } from "react"
import StepContainer from "../step-container"
import type { StepProps } from "../../types/form"

export default function ContactInfo({ data, onNext, onPrev, currentStep }: StepProps) {
  const [localContactInfo, setLocalContactInfo] = useState({
    firstName: data.contactInfo?.firstName || "",
    lastName: data.contactInfo?.lastName || "",
    email: data.contactInfo?.email || "",
    phone: data.contactInfo?.phone || "",
  })

  const isValid =
    !!localContactInfo.firstName && !!localContactInfo.lastName && !!localContactInfo.email && !!localContactInfo.phone

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLocalContactInfo((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <StepContainer
      title="Your business setup estimate is ready!"
      description="Please provide your contact information to receive the detailed cost breakdown."
      onNext={() => onNext({ contactInfo: localContactInfo })}
      onPrev={onPrev}
      currentStep={currentStep}
      isValid={isValid}
      data={{ ...data, contactInfo: localContactInfo }}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <label htmlFor="firstName" className="block  md:text-base text-sm font-medium font-poppins text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={localContactInfo.firstName}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md font-poppins  md:text-base text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block  font-medium text-gray-700 mb-1 font-poppins  md:text-base text-sm">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={localContactInfo.lastName}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md font-poppins"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={localContactInfo.email}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md font-poppins"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={localContactInfo.phone}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
      </div>
    </StepContainer>
  )
}

