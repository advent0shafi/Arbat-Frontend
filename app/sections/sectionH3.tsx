"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { BackgroundPattern } from "../components/backgroundlayer"
import SectionContainer from "../components/section-container"
import { Linkdin } from "../components/svg-components"

export default function SectionH3() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const team = [
    {
      name: "John Q. Public",
      role: "Manager",
      image: "/images/people-11.jpeg",
    },
    {
      name: "Jessica Brown",
      role: "Manager",
      image: "/images/people-12.jpeg",
    },
    {
      name: "Mike Hardson",
      role: "Manager",
      image: "/images/people-13.jpeg",
    },
  ]

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
    <div className="relative bg-[#AC1B13]">
      <BackgroundPattern />
      <motion.div
        ref={ref}
        className="py-[96px]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <SectionContainer>
          <div>
            <motion.div variants={itemVariants}>
              <h2 className="font-plus-jakarta font-bold text-[32px] text-white leading-[48px] text-center mb-[8px]">
                Why Choose Arbat Corporate?
              </h2>
              <div className="flex justify-center items-center w-full ">
                <p className="font-poppins text-white max-w-[670px] font-normal text-[16px] leading-[24px] text-center">
                  At Arbat Corporate Services, we are committed to empowering businesses and elevating lifestyles
                  through innovative and tailored solutions.{" "}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[48px]"
              variants={containerVariants}
            >
              {team.map((member, index) => (
                <motion.div key={member.name} className="relative group" variants={itemVariants}>
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={425}
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <motion.div
                      className="absolute bottom-4 -right-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                    >
                      <button className="bg-[#0e7490] p-2 rounded-lg hover:bg-[#0e7490]/80 transition-colors">
                        <Linkdin />
                      </button>
                    </motion.div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-white/80">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionContainer>
      </motion.div>
    </div>
  )
}

