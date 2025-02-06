export type FormData = {
  businessActivity: string
  setupReason: string
  shareholderCount: number
  visaCount: number
  dependantVisas: boolean
  officeType: string
  startTimeline: string
  jurisdiction: string
  livingInUAE: boolean
  employedInUAE: boolean
  nationality: string
  contactInfo?: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
}

export type StepProps = {
  data: FormData
  onNext: (data: Partial<FormData>) => void
  onPrev: () => void
  currentStep: number
}

