import SectionContainer from "@/app/components/section-container"

export default function BusinessServices() {
    const services = [
      {
        number: "01",
        title: "Full Control Over Your Business",
        description:
          "Corporate sponsorship ensures business owners maintain complete authority over their company's operations. While the local sponsor holds a narrow majority of shares, they remain uninvolved in the day-to-day activities. This arrangement allows entrepreneurs to independently manage staff, clients, and service offerings without external interference.",
      },
      {
        number: "02",
        title: "Streamlined and Hassle-Free Setup",
        description:
          "As leading business setup consultants in the UAE, we take care of every step of the company formation process. From dealing with government authorities to obtaining approvals, we manage it all so you can focus on building your business without the stress of navigating the complexities.",
      },
      {
        number: "03",
        title: "Comprehensive and Secure Agreements",
        description:
          "Corporate sponsorship often includes robust legal contracts designed to protect the interests of business owners and shareholders. These agreements, drafted by top-tier legal experts, clearly outline rights and responsibilities, providing entrepreneurs with peace of mind and security.",
      },
      {
        number: "04",
        title: "LLC Sponsorship Services",
        description:
          "Our corporate nominee sponsorship offers unparalleled support for Limited Liability Companies (LLCs). With our service, you benefit from:",
        bullets: [
          "100% Financial and Operational Control: While adhering to UAE laws, we ensure you retain full control over your company's finances and operations.",
          "First-Class Legal Agreements: Our contracts, crafted and refined over a decade by top legal professionals, safeguard your shareholder rights and financial interests.",
          "Comprehensive Documentation: We provide all necessary documentation to protect your business and secure your company's future.",
        ],
      },
      {
        number: "05",
        title: "Our Expertise",
        description:
          "Since 2009, our team of over 100 experts has been dedicated to simplifying business setup in Dubai and the UAE. We offer end-to-end support, including company formation, license renewals, visa processing, and more. As a one-stop solution, our clients value the convenience of having a dedicated service agent for all their corporate needs.",
      },
      {
        number: "06",
        title: "Entity Formation Options",
        description:
          "In addition to LLCs, we assist with the formation of various other entities in the UAE mainland, including:",
        bullets: ["Branch Offices", "Representative Offices", "Sole Establishments", "Civil Companies"],
      },
    ]
  
    return (
        <SectionContainer>
      <div className="  py-[96px] space-y-6 md:px-0 px-4">
        {services.map((service) => (
          <div key={service.number} className="border border-[#AC1B13] rounded-lg py-[28px] md:px-[56px] px-10 relative">
            {/* Number Badge */}
            <div className="flex-shrink-0 w-16 h-16 absolute top-6 -left-9 rounded-full bg-[#FFF1F2] border border-[#AC1B13] text-[#AC1B13] flex items-center justify-center text-[24px] leading-[36px] font-medium">
                    {service.number}
                  </div>
  
            {/* Content */}
            <div className="space-y-3">
              <h2 className="text-[22px] leading-[33px] font-plus-jakarta  font-semibold text-[#262626]">{service.title}</h2>
              <p className="text-gray-600 text-sm whitespace-pre-line font-poppins">{service.description}</p>
  
              {/* Bullets if they exist */}
              {service.bullets && (
                <ul className="space-y-2 text-gray-600 text-sm whitespace-pre-line">
                  {service.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed font-poppins">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      </SectionContainer>
    )
  }
  
  