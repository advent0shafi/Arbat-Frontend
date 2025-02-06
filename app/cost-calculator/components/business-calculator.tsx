"use client"

import { useState } from "react"
import type { FormData } from "../types/form"
import Layout from "./layout"
import BusinessActivity from "./steps/business-activity"
import SetupReason from "./steps/setup-reason"
import ShareholderCount from "./steps/shareholder-count"
import VisaCount from "./steps/visa-count"
import DependantVisas from "./steps/dependant-visas"
import OfficeType from "./steps/office-type"
import Timeline from "./steps/timeline"
import Jurisdiction from "./steps/jurisdiction"
import ResidencyStatus from "./steps/residency-status"
import Nationality from "./steps/nationality"
import ContactInfo from "./steps/contact-info"
import Success from "./steps/success"

const initialData: FormData = {
  businessActivity: "",
  setupReason: "",
  shareholderCount: 0,
  visaCount: 0,
  dependantVisas: false,
  officeType: "",
  startTimeline: "",
  jurisdiction: "",
  livingInUAE: false,
  employedInUAE: false,
  nationality: "",
}

export default function BusinessCalculator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialData)

  const handleNext = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }

  const steps = [
    <BusinessActivity key="1" data={formData} onNext={handleNext} onPrev={handlePrev} currentStep={1} />,
    <SetupReason key="2" data={formData} onNext={handleNext} onPrev={handlePrev} currentStep={2} />,
    <ShareholderCount key="3" data={formData} onNext={handleNext} onPrev={handlePrev} currentStep={3} />,
    <VisaCount key="4" data={formData} onNext={handleNext} onPrev={handlePrev} currentStep={4} />,
    <DependantVisas key="5" data={formData} onNext={handleNext} onPrev={handlePrev} currentStep={5} />,
    <OfficeType key="6" data={formData} onNext={handleNext} onPrev={handlePrev} currentStep={6} />,
    <Timeline key="7" data={formData} onNext={handleNext} onPrev={handlePrev} currentStep={7} />,
    <Jurisdiction key="8" data={formData} onNext={handleNext} onPrev={handlePrev} currentStep={8} />,
    <ResidencyStatus key="9" data={formData} onNext={handleNext} onPrev={handlePrev} currentStep={9} />,
    <Nationality key="10" data={formData} onNext={handleNext} onPrev={handlePrev} currentStep={10} />,
    <ContactInfo key="11" data={formData} onNext={handleNext} onPrev={handlePrev} currentStep={11} />,
    <Success key="12"  />,
  ]

  return <Layout>{steps[currentStep - 1]}</Layout>
}

