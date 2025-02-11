"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionContainer from "../components/section-container"
import { CareLive, CustomerCare, HandShake } from "../components/svg-components"

export default function SectionH2() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="pb-[96px] pt-[120px]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <SectionContainer>
        <motion.div variants={itemVariants}>
          <h2 className="font-plus-jakarta font-bold md:text-[32px] text-[25.31px] md:leading-[48px] text-center mb-[8px]">
            Why Choose Arbat Corporate?
          </h2>
          <div className="flex justify-center items-center w-full ">
            <p className="font-poppins text-gray-500 max-w-[670px] font-normal text-[16px] leading-[24px] text-center">
              At Arbat Corporate Services, we are committed to empowering businesses and elevating lifestyles through
              innovative and tailored solutions.{" "}
            </p>
          </div>
        </motion.div>
        <div>
          <motion.div
            className="grid md:grid-cols-3 grid-cols-1 gap-[18px] mt-[48px] md:px-[142px]"
            variants={containerVariants}
          >
            <motion.div className="group" variants={itemVariants}>
              <div className="bg-white rounded-[8px] transform duration-500  py-[44px] px-[32px] group-hover:bg-[#AC1B13] md:max-w-[320px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)]">
                <div className="rounded-[8px] bg-opacity-20 flex flex-col justify-center items-center  bg-gray-100 w-[64px] h-[64px] mb-[16px]">
                  <HandShake />
                </div>
                <h3 className="font-bold text-[24px] leading-[36px] transform duration-500  group-hover:text-white text-gray-800 font-plus-jakarta md:max-w-[256px]">
                  Personalized Attention
                </h3>
                <p className="text-gray-500 group-hover:text-white transform duration-500  text-[15px] font-poppins leading-[24px] md:max-w-[256px]">
                  We assign a dedicated consultant to every client, ensuring tailored support that aligns with your
                  specific goals and challenges.
                </p>
              </div>
            </motion.div>
            <motion.div className="group" variants={itemVariants}>
              <div className="bg-white rounded-[8px] transform duration-500 shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] py-[44px] px-[32px] group-hover:bg-[#AC1B13] md:max-w-[320px]">
                <div className="rounded-[8px] bg-opacity-20 flex flex-col justify-center items-center  bg-gray-100 w-[64px] h-[64px] mb-[16px]">
                  <CareLive />
                </div>
                <h3 className="font-bold text-[24px] leading-[36px] transform duration-500  group-hover:text-white text-gray-800 font-plus-jakarta md:max-w-[256px]">
                  Comprehensive Services
                </h3>
                <p className="text-gray-500 group-hover:text-white transform duration-500  text-[15px] font-poppins leading-[24px] max-w-[256px]">
                  From business setup to lifestyle management, we offer a wide range of services to meet all your needs
                  under one roof.
                </p>
              </div>
            </motion.div>
            <motion.div className="group" variants={itemVariants}>
              <div className="bg-white rounded-[8px] transform duration-500 shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] py-[44px] px-[32px] group-hover:bg-[#AC1B13] md:max-w-[320px]">
                <div className="rounded-[8px] bg-opacity-20 flex flex-col justify-center items-center  bg-gray-100 w-[64px] h-[64px] mb-[16px]">
                  <CustomerCare />
                </div>
                <h3 className="font-bold text-[24px] leading-[36px] transform duration-500  group-hover:text-white text-gray-800 font-plus-jakarta md:max-w-[256px]">
                  Expert Guidance
                </h3>
                <p className="text-gray-500 group-hover:text-white transform duration-500  text-[15px] font-poppins leading-[24px] max-w-[256px]">
                  Our team of experienced professionals provides expert advice and guidance to help you navigate complex
                  business landscapes.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>
    </motion.div>
  )
}

