"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BackgroundPattern } from "../components/backgroundlayer"
import SectionContainer from "../components/section-container"
import { TestimonialCard } from "../components/TestimonialCard"

import { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
}

const AnimatedText = ({ children, className }: AnimatedTextProps) => {
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

interface Testimonial {
  quote: string
  author: string
  role: string
  image: string
}

const AnimatedTestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <TestimonialCard {...testimonial} />
    </motion.div>
  )
}

export default function SectionH6() {
  const testimonials = [
    {
      quote:
        "Arbat Corporate made securing my Golden Visa a stress-free experience. Their team handled every detail, keeping me informed at every step. I couldn't have done it without them!",
      author: "Sarah Al Mansoori",
      role: "Entrepreneur",
      image: "/images/google-images.jpeg",
    },
    {
      quote:
        "From the initial consultation to the final approvals, Arbat's expertise was evident. They helped me establish my business in Dubai within weeks, saving me time and effort. Highly recommend!",
      author: "John Richards",
      role: "CEO of Innovate Solutions",
      image: "/images/google-images.jpeg",
    },
    {
      quote:
        "I used Arbat's PRO services for document processing, and they were exceptional. Fast, reliable, and professional – they took care of everything seamlessly.",
      author: "Ahmed Khalifa",
      role: "Operations Manager",
      image: "/images/google-images.jpeg",
    },
    {
      quote:
        "As a growing business, managing compliance in the UAE was overwhelming. Arbat's accounting team ensured we stayed compliant while optimizing our finances. Truly a game-changer!",
      author: "Priya Sharma",
      role: "CFO of Apex Technologies",
      image: "/images/google-images.jpeg",
    },
  ]

  return (
    <div className="relative bg-[#AC1B13]">
      <BackgroundPattern />
      <SectionContainer>
        <div className="py-[96px]">
          <AnimatedText className="">
            <h2 className="font-plus-jakarta font-bold text-[32px] text-white leading-[48px] text-center mb-[8px]">
              Real Results. Real Impact.
            </h2>
          </AnimatedText>
          <AnimatedText className="">
            <div className="flex justify-center items-center w-full">
              <p className="font-poppins text-white max-w-[670px] font-normal text-[16px] leading-[24px] text-center">
                Our clients&apos; success is our greatest achievement. Discover how Arbat Corporate Services has helped
                businesses and individuals thrive in the UAE through our tailored solutions.
              </p>
            </div>
          </AnimatedText>
          <div className="grid md:grid-cols-2 gap-8 mt-[48px]">
            {testimonials.map((testimonial, index) => (
              <AnimatedTestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

