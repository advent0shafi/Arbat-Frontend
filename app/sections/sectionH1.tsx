import Image from "next/image";
import Link from "next/link";
import { LightBulb, PlaneSVG, Residential } from "../components/svg-components";

export function HeroSection() {
  return (
    <div className="relative md:min-h-screen min-h-[1200px] w-full">
      <div className="absolute inset-0">
        <Image
          src="/banner/Banner.jpg"
          alt="Business team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative pt-32 pb-20 px-4 text-center text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-plus-jakarta  md:text-[62px] text-[28px] md:leading-[66px] leading-[25px] lead font-extrabold   mb-6 ">
              <span className="block mb-2">Empowering Business.</span>
              <span className="block">Elevating Lifestyle.</span>
            </h1>
            <p className="text-lg font-plus-jakarta md:text-[1.5rem] md:leading-[2.25rem] mb-[56px]  mx-auto">
              Comprehensive Corporate and Luxury Services for Visionaries in the
              UAE.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ac1b13] hover:bg-[#ac1b13]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac1b13]"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0  w-full">
        <div className="items-center flex flex-col justify-center  md:px-4 max-md:px-5 ">
          <div className="w-full max-w-[1253px] h-full max-md:max-w-full max-md:my-10 relative overflow-hidden ">
            <div className="grid grid-cols-1 md:grid-cols-3  bg-white rounded-t-[6px] ">
              {/* Service cards */}
              <div className="bg-white hover:bg-gray-100 shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] md:p-[32px] p-[24px] ">
                <div className="h-full w-full">
                  <div className=" flex">
                    <div className="w-[48px] h-[48px]">
                      <LightBulb />
                    </div>
                    <h3 className="text-[24px] font-plus-jakarta font-bold p-[6px] leading-[36px]">
                      Business Setup
                    </h3>
                  </div>
                  <p className="text-gray-600 font-poppins font-normal leading-[21px] mt-[16px]">
                    From business setup to compliance and visa assistance, our
                    corporate solutions simplify your journey in the UAE.
                  </p>
                </div>
              </div>
              <div className="bg-white hover:bg-gray-100  p-[32px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)]">
                <div className="h-full w-full">
                  <div className=" flex">
                    <div className="w-[48px] h-[48px]">
                      <PlaneSVG />
                    </div>
                    <h3 className="text-[24px] font-plus-jakarta font-bold p-[6px] leading-[36px]">
                      Business Setup
                    </h3>
                  </div>
                  <p className="text-gray-600 font-poppins font-normal leading-[21px] mt-[16px]">
                    From business setup to compliance and visa assistance, our
                    corporate solutions simplify your journey in the UAE.
                  </p>
                </div>
              </div>
              <div className="bg-white hover:bg-gray-100  p-[32px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)]">
                <div className="h-full w-full">
                  <div className=" flex">
                    <div className="w-[48px] h-[48px]">
                      <Residential />
                    </div>
                    <h3 className="text-[24px] font-plus-jakarta font-bold p-[6px] leading-[36px]">
                      Business Setup
                    </h3>
                  </div>
                  <p className="text-gray-600 font-poppins font-normal leading-[21px] mt-[16px]">
                    From business setup to compliance and visa assistance, our
                    corporate solutions simplify your journey in the UAE.
                  </p>
                </div>
              </div>
              {/* Repeat for other service cards */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
