import SectionContainer from "@/app/components/section-container"

export default function ServicesList() {
    const services = [
      {
        id: "01",
        title: "Broadcast Management",
        description: "Requires authority approval and is limited to certain package options.",
        tags: ["Radio broadcasting", "TV broadcasting", "Web streaming"],
      },
      {
        id: "02",
        title: "Consultancy",
        description: "Encompasses various consulting services, including:",
        tags: [
          "Business consultancy",
          "Lifestyle consultancy",
          "Investment consultancy",
          "Legal consultancy",
          "Human resource consultancy",
        ],
      },
      {
        id: "03",
        title: "Education and Training",
        description:
          "• Supports a broad range of activities in education and training sectors.\n• Restricted to packages with visa eligibility",
        tags: [],
      },
      {
        id: "04",
        title: "Event Management",
        description: "Covers activities such as:",
        tags: ["Conference organization", "Theatre production", "Other event-related operations"],
      },
      {
        id: "05",
        title: "Film, Production, and Post-Production",
        description: "Includes activities like:",
        tags: ["Film, art, and video production", "Post-production services"],
      },
      {
        id: "06",
        title: "Industrial",
        description: "Licenses are available for:",
        tags: ["Manufacturing", "Processing of raw materials", "Often combined with warehousing requirements"],
      },
      {
        id: "07",
        title: "IT Services",
        description: "Encompasses activities in the IT and communications technology sector, including:",
        tags: ["E-commerce"],
      },
      {
        id: "08",
        title: "Media and Marketing Services",
        description: "Activities under this category include:",
        tags: ["Advertising", "Public relations", "Market research"],
      },
      {
        id: "09",
        title: "Music and Entertainment",
        description: "Covers activities such as:",
        tags: [
          "Music production and recording",
          "Music promotion and management",
          "Management of music rights and theme parks",
        ],
      },
      {
        id: "10",
        title: "New Media",
        description: "Activities include:",
        tags: ["Photography", "Web design", "Digital media services like mobile application development"],
      },
      {
        id: "11",
        title: "Publishing",
        description: "Covers publishing of:",
        tags: [
          "Directories, guides, and magazines",
          "Educational and consumer books",
          "Online and electronic content",
          "Special approval from authorities is required",
        ],
      },
      {
        id: "12",
        title: "Trading",
        description: "• Includes import and export transactions across various sectors.",
        tags: [],
      },
    ]
  
    return (
        <SectionContainer>
      <div className="mx-auto px-6 py-[126px] space-y-4">
        {services.map((service) => (
          <div key={service.id} className="border border-[#AC1B13] rounded-lg py-[28px] px-[56px] relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 absolute top-3 -left-9 rounded-full bg-[#FFF1F2] border border-[#AC1B13] text-[#AC1B13] flex items-center justify-center text-[24px] leading-[36px] font-medium">
                {service.id}
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-[22px] leading-[33px] font-plus-jakarta  font-semibold text-[#262626]">{service.title}</h3>
                <p className="text-[#737373] text-sm whitespace-pre-line">{service.description}</p>
                {service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-4 py-2 font-poppins rounded-full text-xs bg-[#f5f5f5] text-[#262626]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </SectionContainer>
    )
  }
  
  