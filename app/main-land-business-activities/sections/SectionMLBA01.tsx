import SectionContainer from "@/app/components/section-container"

export default function SectionMLBA01() {
    const licenses = [
      "Logistics License",
      "Restaurant License",
      "Medical Clicinc License",
      "Gold Trading License",
      "Delivery Services License",
      "Consultancy License",
      "Education License",
      "Industrial Trade License",
      "E-commerce License",
      "Trade License",
      "Advertising License",
      "Tourism License",
      "Regulatory License",
      "Construction Business License",
      "IT Business License",
      "Transportation License",
      "Crypto Trading License",
      "Holding License",
      "Real Estate License",
      "Accounting License",
      "Brokerage License",
      "Used Car Trading License",
    ]
   
    
  
    return (
        <SectionContainer >
      <div className=" mx-auto py-[96px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {licenses.map((license, index) => (
            <div
              key={index}
              className={`border border-[#AC1B13] rounded-lg py-[24px] md:px-[16px] px-10 relative flex gap-6 items-center
                ${index === licenses.length - 1 ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              {/* Number Badge */}
              <div className=" flex-shrink-0 w-16 h-16  rounded-full bg-[#FFF1F2] border border-[#AC1B13] text-[#AC1B13] flex items-center justify-center text-[24px] leading-[36px] font-medium">
                <span>{index+1}</span>
              </div>
  
              {/* License Name */}
              <h2 className="text-[18px] leading-[33px] font-semibold text-gray-900">{license}</h2>
            </div>
          ))}
        </div>
      </div>
      </SectionContainer>
    )
  }
  
  