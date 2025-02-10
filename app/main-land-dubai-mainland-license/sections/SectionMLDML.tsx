import SectionContainer from "@/app/components/section-container"

export default function SectionMLDML() {
    const steps = [
      {
        number: "01",
        title: "Select the Legal Form",
        description:
          "Choosing the appropriate legal form is a critical first step, as it determines the governing laws and business regulations. The legal form must align with the nature of the business activity. Options include:",
        bullets: [
          "General Partnership",
          "Limited Liability Company (LLC)",
          "Public or Private Joint Stock Company (PJSC/PrJSC)",
          "Civil Company",
          "Sole Establishment",
          "Branches (local, GCC, foreign, or free zone)",
          "Holding Companies",
        ],
        warning: "Each legal form has specific requirements based on the selected business activity.",
      },
      {
        number: "02",
        title: "Register the Trade Name",
        description: "The trade name is a business's identity and must:",
        bullets: [
          "Reflect the legal structure (e.g., LLC, EST)",
          "Be compatible with the business activity",
          "Avoid any violation of public morals or regulations",
        ],
        subheading: "Process:",
        additionalInfo:
          "Trade names are registered through the Department of Economic Development (DED) in the respective emirate. Renewal is required, and trademarks must be separately registered with the Ministry of Economy.",
      },
      {
        number: "03",
        title: "Obtain Initial Approval",
        description: "Initial approval confirms that the UAE government has no objection to establishing the business.",
        bullets: [
          "Foreign investors must get clearance from the General Directorate of Residency and Foreigners' Affairs.",
          "Some business activities may require additional approvals from regulatory bodies (e.g., Ministry of Interior, Ministry of Economy).",
        ],
        warning: "This step does not authorize business operations; it's a precursor to obtaining the licence.",
      },
      {
        number: "04",
        title: "Draft the Memorandum of Association (MoA) or Local Service Agent Agreement (LSA)",
        description: "Depending on the legal form, an MoA or LSA agreement is required.",
        bullets: [
          "MoA: Applicable to LLCs, PJSCs, PrJSCs, and partnerships.",
          "LSA: Required for non-GCC-owned businesses.",
        ],
      },
      {
        number: "05",
        title: "Choose a Business Location",
        description: "A physical address is mandatory for all businesses.",
        bullets: [
          "Lease agreements must comply with land planning and economic regulations.",
          "In Dubai, the rental agreement must be registered with Ejari.",
        ],
      },
      {
        number: "06",
        title: "Obtain Additional Approvals (if needed)",
        description: "Certain activities require approvals from specific government bodies:",
        bullets: [
          "Ministry of Interior: Transport and safety-related activities.",
          "Local Municipality: Engineering and architectural services.",
          "Telecommunications Regulatory Authority: Telecommunication services.",
          "Ministry of Economy: Insurance and consultancy services.",
          "Health Departments: Health-related activities.",
          "Supreme Petroleum Council: Oil and gas services.",
        ],
      },
      {
        number: "07",
        title: "Collect the Business Licence",
        description:
          "After completing all required steps, collect the business licence from the DED service centre or its website.",
        subheading: "Required Documents:",
        bullets: [
          "Initial approval receipt",
          "Attested lease agreement",
          "Memorandum of Association or LSA agreement",
          "Approvals from relevant government entities",
        ],
        warning:
          "The licence must be paid within 30 days of receiving the payment voucher. Failure to do so will result in application cancellation.",
      },
    ]
  
    return (
        <SectionContainer >
      <div className=" md:px-0 px-4 space-y-6 py-[96px]">
        {steps.map((step) => (
          <div key={step.number} className="border border-[#AC1B13] rounded-lg py-[28px] md:px-[56px] px-10 relative">
            {/* Number Badge */}
            <div className="flex-shrink-0 w-16 h-16 absolute top-6 -left-9 rounded-full bg-[#FFF1F2] border border-[#AC1B13] text-[#AC1B13] flex items-center justify-center text-[24px] leading-[36px] font-medium">
                    {step.number}
                  </div>
  
            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-[22px] leading-[33px] font-plus-jakarta  font-semibold text-[#262626]">{step.title}</h2>
  
              <p className="text-gray-600 text-sm whitespace-pre-line font-poppins">{step.description}</p>
  
              {/* Bullets */}
              {step.bullets && (
                <ul className="space-y-2 text-gray-600 text-sm whitespace-pre-line font-poppins">
                  {step.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
  
              {/* Subheading and Additional Info */}
              {step.subheading && (
                <>
                  <h3 className="font-semibold text-gray-900 mt-4">{step.subheading}</h3>
                  {step.additionalInfo && <p className="text-gray-600 leading-relaxed">{step.additionalInfo}</p>}
                </>
              )}
  
              {/* Warning Box */}
              {step.warning && (
                <div className="bg-[#FFF1F2] rounded-md p-4 font-plus-jakarta text-[18px] leading-[17px] text-red-600 text-sm">{step.warning}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      </SectionContainer>
    )
  }
  
  