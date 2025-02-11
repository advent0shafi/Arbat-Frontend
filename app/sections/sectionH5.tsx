"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionContainer from "../components/section-container"
import { PricingCard } from "./../components/pricing-card"

const plans = [
  {
    title: "Starter Plan",
    price: "20",
    description: "This package is suitable for teams 1-15 people.",
    features: [
      "Corporate Bank Account Opening",
      "Compliance (UBO & EST)",
      "Assessment",
      "Virtual Receptionist",
      "VAT Registration",
    ],
  },
  {
    title: "Basic Plan",
    price: "150",
    description: "This package is suitable for teams 1-50 people.",
    features: [
      "Corporate Bank Account Opening",
      "Compliance (UBO & EST)",
      "Assessment",
      "VAT Registration",
      "Virtual Receptionist",
    ],
    buttonColor: "bg-[#ac1b13]",
  },
  {
    title: "Premium Plan",
    price: "390",
    description: "This package is suitable for teams 1-100 people.",
    features: [
      "Corporate Bank Account Opening",
      "Compliance (UBO & EST)",
      "Assessment",
      "VAT Registration",
      "Virtual Receptionist",
    ],
  },
]

const AnimatedText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface Plan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonColor?: string;
}

const AnimatedPricingCard = ({ plan, index }: { plan: Plan; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <PricingCard
        title={plan.title}
        price={plan.price}
        description={plan.description}
        features={plan.features}
        buttonColor={plan.buttonColor}
      />
    </motion.div>
  )
}

export default function PricingPage() {
  return (
    <div className="py-[96px] bg-gray-100">
      <SectionContainer>
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12">
            <AnimatedText className="mb-4">
              <h1 className="font-plus-jakarta font-bold text-[32px] leading-[48px]">Our Pricing</h1>
            </AnimatedText>

            <AnimatedText className="">
              <p className="text-gray-500 font-poppins text-[16px] leading-[24px] text-center">
                At Arbat Corporate Services, we are committed to empowering businesses and elevating lifestyles through
                innovative and tailored solutions.
              </p>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-[48px]">
            {plans.map((plan, index) => (
              <AnimatedPricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

