"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ServicesSection from "../components/Service_cards";
import Link from "next/link";

const slides = [
  {
    image: "/images/corporate-people-01.jpg",
    title: "Business Setup Is Just The Beginning",
    description: "Mainland | Free Zone | Offshore | KSA | Qatar",
    buttonText: "GET START NOW",
    href:"/free-zone-overview",
  },
  {
    image: "/images/corporate-people-02.jpg",
    title: "How Much Does Business Setup In Dubai Cost?",
    description: "That depends. What is your business activity? Free zone or mainland? How many visas or shareholders? From our experience with business setup in Dubai for over 80,000 entrepreneurs, we have created the Business Setup Cost Calculator to give you the answer.",
    buttonText: "Cost Calculator",
    href:"/cost-calculator",
  },
  {
    image: "/images/corporate-people-03.jpg",
    title: "Should you undertake business setup in Dubai yourself?",
    description: "Wondering if you can start a Dubai company yourself? You can. But there are some things you need to know.",
    buttonText: "Cost Calculator",
    href:"/cost-calculator",

  },
  {
    image: "/images/corporate-people-04.jpg",
    title: "The process of business setup in Dubai",
    description: "With Arbat as your company formation partner, registering a company in the UAE is not only easy, but it’s the most cost-effective way to do it! In fact, the entire process can take as little as 24 hours! That’s right! All you have to do is supply us with the relevant information about your company and we do the rest.  Here’s our time-tested process:",
    buttonText: "Cost Calculator",
    href:"/cost-calculator",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const navigate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) => (prevIndex + newDirection + slides.length) % slides.length
    );
  }, []);

  return (
    <div className="relative h-screen w-full  bg-black mt-[64px] ">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 "
        >
          {/* Image Background */}
          <div className="relative h-full w-full " >
            <div className="absolute inset-0    z-10" />{" "}
            {/* Overlay */}
            <Image
              src={slides[currentIndex].image || "/placeholder.svg"}
              alt={slides[currentIndex].title}
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="100vw"
            //   className="md:block hidden"
            />
            {/* Content */}
            <div className="absolute inset-0 flex items-center  bg-[linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),linear-gradient(0deg,rgba(172,27,19,0.1),rgba(172,27,19,0.1))]   justify-center z-20">
              <div className="max-w-4xl px-4 text-center">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-2 sm:mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl font-plus-jakarta drop-shadow-md lg:text-5xl xl:text-6xl font-bold tracking-tight text-white"
                >
                  {slides[currentIndex].title}
                </motion.h1>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg font-plus-jakarta drop-shadow-lg lg:text-xl text-gray-200"
                >
                  {slides[currentIndex].description}
                </motion.p>
<Link href={`${slides[currentIndex].href}`} >
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-full bg-[#AC1B13] font-poppins px-6 md:px-8 py-3 text-sm font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white transition-all hover:bg-opacity-90"
                >
                  {slides[currentIndex].buttonText}
                </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => navigate(-1)}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-1 sm:p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20 z-30"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={() => navigate(1)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-1 sm:p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20 z-30"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className="absolute bottom-0  w-full ">
       
      <ServicesSection />
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-[200px] left-1/2 flex -translate-x-1/2 gap-1 sm:gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1 sm:h-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-white w-4 sm:w-8"
                : "bg-white/50 w-1 sm:w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
