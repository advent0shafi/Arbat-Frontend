import SectionContainer from "../components/section-container"
import { PricingCard } from "./../components/pricing-card"

const plans = [
  {
    title: "Starter Plan",
    price: "20",
    description: "This package is suitable for teams 1-15 people.",
    features: ["Corporate Bank Account Opening", "Compliance (UBO & EST)", "Assessment", "Virtual Receptionist", "VAT Registration"],
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

export default function PricingPage() {
  return (

    <div className="py-[96px] bg-gray-100">
      <SectionContainer>
   
    <div className="container mx-auto px-4 py-16 max-w-7xl ">
      <div className="text-center mb-12">
        <h1 className="mb-4 font-plus-jakarta font-bold text-[32px] leading-[48px] ">Our Pricing</h1>

        <p className="text-gray-500 font-poppins text-[16px] leading-[24px] text-center ">
        At Arbat Corporate Services, we are committed to empowering businesses and elevating lifestyles through
        innovative and tailored solutions.
              </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-[48px]">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            buttonColor={plan.buttonColor}
          />
        ))}
      </div>
    </div>
    </SectionContainer>
    </div>
  )
}

