"use client"
import Slider from "react-slick"
import { LightBulb, PlaneSVG, Residential } from './svg-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface ServiceCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-50  hover:bg-gray-200 shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] md:p-[32px] p-[14px]">
    <div className="h-full w-full">
      <div className="flex">
        <div className="w-[48px] h-[48px]">
          <Icon />
        </div>
        <h3 className="md:text-[24px] text-sm font-plus-jakarta font-bold p-[6px] leading-[36px]">{title}</h3>
      </div>
      <p className="text-gray-600 font-poppins font-normal md:text-[16px] text-sm leading-[21px] md:mt-[16px] mt-[10px]">
        {description}
      </p>
    </div>
  </div>
)

const services = [
  {
    icon: LightBulb,
    title: "Business Setup",
    description:
      "From business setup to compliance and visa assistance, our corporate solutions simplify your journey in the UAE.",
  },
  {
    icon: PlaneSVG,
    title: "Business Setup",
    description:
      "From business setup to compliance and visa assistance, our corporate solutions simplify your journey in the UAE.",
  },
  {
    icon: Residential,
    title: "Business Setup",
    description:
      "From business setup to compliance and visa assistance, our corporate solutions simplify your journey in the UAE.",
  },
]

export default function ServicesSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="absolute bottom-0 w-full z-30">
      <div className="items-center flex flex-col justify-center md:px-4 max-md:px-5">
        <div className="w-full max-w-[1253px] h-full max-md:max-w-full max-md:my-10 relative overflow-hidden">
          <div className="hidden md:grid md:grid-cols-3  rounded-t-[6px]">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="md:hidden">
            <Slider {...sliderSettings}>
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

