"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionContainer from "../components/section-container"
import {
  Accounts,
  Building,
  BulbInverted,
  Company,
  CustomerCare,
  Documnentation,
  Goverment,
  HandShake,
  HSE,
  LuxuryBag,
  Passport_Visa,
  PlaneSVG,
  TradeMark,
  VIPSVG,
} from "../components/svg-components"

interface AnimatedCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AnimatedCard = ({ icon, title, description }: AnimatedCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="border border-gray-200 rounded-[12px] py-[75px] px-[32px] relative mt-[96px]"
    >
      <div className="absolute -top-14 right-32">
        <div className="w-[112px] h-[122px] rounded-full bg-gray-100 flex flex-col justify-center items-center">
          {icon}
        </div>
      </div>
      <h3 className="font-plus-jakarta font-bold text-[24px] leading-[36px] text-center mb-[12px]">{title}</h3>
      <p className="text-gray-500 font-poppins text-[16px] leading-[24px] text-center">{description}</p>
      <div className="w-full flex flex-col justify-center items-center">
        <button className="px-[20px] py-[14px] rounded-[6px] text-[#AC1B13] font-bold leading-[21px] border border-[#AC1B13] mt-[24px]">
          Read More
        </button>
      </div>
    </motion.div>
  )
}

interface AnimatedSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const AnimatedSection = ({ icon, title, children }: AnimatedSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mt-[80px]"
    >
      {icon}
      <h2 className="font-plus-jakarta font-bold text-[32px] leading-[48px] mt-[16px]">{title}</h2>
      {children}
    </motion.div>
  )
}

export default function SectionH4() {
  return (
    <div className="py-[96px]">
      <SectionContainer>
        <AnimatedSection icon={<Company />} title="Corporate Services">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[48px]">
            <AnimatedCard
              icon={<HandShake />}
              title="Business Consulting & Setup"
              description="Transform your vision into reality with tailored business consulting. From strategy to seamless setup, we guide you in the UAE's dynamic market."
            />
            <AnimatedCard
              icon={<Passport_Visa />}
              title="Golden Visa Assistance"
              description="Unlock exclusive UAE Golden Visa benefits for you and your family. We simplify the process for hassle-free long-term residency."
            />
            <AnimatedCard
              icon={<Documnentation />}
              title="PRO Services"
              description="Focus on growth while we handle documentation and approvals. Our PRO services ensure smooth regulatory compliance and government interaction."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
            <AnimatedCard
              icon={<Accounts />}
              title="Accounting & Compliance"
              description="Keep your finances compliant and optimized with expert accounting. We ensure accurate records and adherence to local regulations."
            />
            <AnimatedCard
              icon={<Goverment />}
              title="Government Services"
              description="Effortlessly manage approvals and renewals with our government services. We simplify processes, saving you time and effort."
            />
          </div>
        </AnimatedSection>

        <AnimatedSection icon={<LuxuryBag />} title="Luxury Services">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[48px]">
            <AnimatedCard
              icon={<PlaneSVG />}
              title="Jet Chartering"
              description="Travel in luxury with our bespoke private jet chartering services. Enjoy personalized arrangements for business or leisure trips."
            />
            <AnimatedCard
              icon={<Building />}
              title="Luxury Real Estate"
              description="Explore premium properties with our expert real estate services. We assist in buying, selling, and renting exclusive properties."
            />
            <AnimatedCard
              icon={<VIPSVG />}
              title="VIP Concierge"
              description="Experience convenience with our VIP concierge services. From luxury transportation to event planning, we handle it all."
            />
          </div>
        </AnimatedSection>

        <AnimatedSection icon={<BulbInverted />} title="Specialized Solutions">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[48px]">
            <AnimatedCard
              icon={<TradeMark />}
              title="Trademark Registration"
              description="Safeguard your brand with our trademark registration services. Protect your intellectual property with expert guidance."
            />
            <AnimatedCard
              icon={<HSE />}
              title="HSE Compliance"
              description="Ensure safety with our Health, Safety, and Environmental compliance services. We help you meet regulatory standards seamlessly."
            />
            <AnimatedCard
              icon={<CustomerCare />}
              title="Virtual Office Setup"
              description="Establish credibility with our professional virtual office solutions. Flexible and affordable options tailored to your business."
            />
          </div>
        </AnimatedSection>
      </SectionContainer>
    </div>
  )
}

