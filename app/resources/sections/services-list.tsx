import SectionContainer from "@/app/components/section-container"


const data: ServicesData = {
  services: [
    {
      id: "01",
      title: "Federal Government Services",
      description:
        "The UAE federal government provides centralized services through various ministries and authorities. Key services include:",
      categories: [
        {
          title: "Ministry of Interior (MOI)",
          services: [
            "Visa and Immigration Services: Visa applications, residency permits, and Emirates ID issuance.",
            "Traffic and Licensing Services: Vehicle registration, driving licenses, and traffic fine payment.",
            "Public Safety Services: Crime reporting, police clearance certificates, and emergency services.",
          ],
        },
        {
          title: "Ministry of Human Resources and Emiratisation (MOHRE)",
          services: [
            "Labour Contracts: Drafting and attestation of employment contracts.",
            "Work Permits: Issuance of work permits for expatriates.",
            "Wage Protection System (WPS): Ensures timely payment of employee salaries.",
          ],
        },
        {
          title: "Ministry of Economy",
          services: [
            "Business Licensing: Issuance of commercial licenses.",
            "Intellectual Property Protection: Trademark and patent registration.",
            "Consumer Protection: Handling consumer complaints and disputes.",
          ],
        },
        {
          title: "Ministry of Finance",
          services: [
            "Corporate Tax Services: Registration, filing, and compliance.",
            "VAT Services: VAT registration, filing, and refunds.",
          ],
        },
        {
          title: "Federal Authority for Identity and Citizenship (ICA)",
          services: [
            "Emirates ID Services: Application, renewal, and replacement of Emirates ID cards.",
            "Citizenship and Passport Services: Issuance of UAE passports and citizenship-related services.",
          ],
        },
        {
          title: "Ministry of Foreign Affairs (MOFA)",
          services: [
            "Document Attestation: Attestation of educational certificates, marriage certificates, etc.",
            "Diplomatic Services: Support for UAE citizens abroad.",
          ],
        },
      ],
    },
    {
      id: "02",
      title: "Emirate-Specific Government Services",
      description:
        "Each emirate has its own government portals and services tailored to local needs. Key locations include:",
      categories: [
        {
          title: "Dubai",
          services: [
            "Dubai Now App: A one-stop platform for over 120 government services.",
            "Dubai Economy (DED): Business licensing, trade name registration, and consumer protection.",
            "Roads and Transport Authority (RTA): Public transport services, vehicle registration, and driving licenses.",
          ],
        },
        {
          title: "Abu Dhabi",
          services: [
            "Tamm: Abu Dhabi government services portal (e.g., housing, health, education).",
            "Department of Economic Development (ADDED): Business setup and licensing.",
            "Abu Dhabi Police: Traffic fines, vehicle registration, and public safety services.",
          ],
        },
        {
          title: "Sharjah",
          services: [
            "Sharjah Government Services Portal: Access to local government services.",
            "Sharjah Economic Development Department (SEDD): Business licensing and economic support.",
          ],
        },
        {
          title: "Other Emirates",
          services: [
            "Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah: Each emirate has its own government portals for services like business licensing, housing, and utilities.",
          ],
        },
      ],
    },
    {
      id: "03",
      title: "Key Online Portals and Apps",
      description: "The UAE government has launched several digital platforms to make services accessible online.",
      categories: [
        {
          title: "Federal Level",
          services: [
            "UAE Pass: A digital identity app for accessing all UAE government services.",
            "Smart UAE Government Portal: Centralized access to federal services.",
            "ICP (Federal Authority for Identity, Citizenship, Customs & Port Security): For visa, residency, and customs services.",
          ],
        },
        {
          title: "Emirate Level",
          services: [
            "Dubai Now (Dubai): Over 120 services in one app.",
            "Tamm (Abu Dhabi): Comprehensive government services.",
            "Sharjah24 (Sharjah): News and government services.",
          ],
        },
      ],
    },
    {
      id: "04",
      title: "Business and Economic Services",
      categories: [
        {
          title: "Company Setup and Licensing",
          services: ["Department of Economic Development (DED): Business licensing in each emirate."],
        },
        {
          title: "Tax and Customs",
          services: [
            "Federal Tax Authority (FTA): VAT and corporate tax services.",
            "Customs Authorities: Import/export clearance and customs duties.",
          ],
        },
        {
          title: "Investment Support",
          services: [
            "Ministry of Economy: Investment opportunities and economic partnerships.",
            "Dubai FDI: Foreign direct investment support in Dubai.",
          ],
        },
      ],
    },
    {
      id: "05",
      title: "Health and Education Services",
      categories: [
        {
          title: "Health",
          services: [
            "Ministry of Health and Prevention (MOHAP): Health card issuance, vaccination, and medical services.",
            "Dubai Health Authority (DHA): Health services in Dubai.",
            "SEHA (Abu Dhabi Health Services): Public health services in Abu Dhabi.",
          ],
        },
        {
          title: "Education",
          services: [
            "Ministry of Education: School registration, curriculum, and accreditation.",
            "Knowledge and Human Development Authority (KHDA): Education regulation in Dubai.",
          ],
        },
      ],
    },
    {
      id: "06",
      title: "Housing and Utilities",
      categories: [
        {
          title: "Housing",
          services: [
            "Dubai Land Department (DLD): Property registration and real estate services.",
            "Abu Dhabi Housing Authority: Housing support for citizens.",
          ],
        },
        {
          title: "Utilities",
          services: [
            "DEWA (Dubai Electricity and Water Authority): Electricity, water, and sewerage services.",
            "ADDC (Abu Dhabi Distribution Company): Utilities in Abu Dhabi.",
          ],
        },
      ],
    },
    {
      id: "07",
      title: "Tourism and Travel Services",
      categories: [
        {
          title: "Tourism",
          services: ["Department of Tourism and Commerce Marketing (Dubai Tourism): Tourism-related services."],
        },
        {
          title: "Travel",
          services: [
            "General Directorate of Residency and Foreigners Affairs (GDRFA): Visa and residency services.",
            "Dubai Airports: Airport services and flight information.",
          ],
        },
      ],
    },
    {
      id: "08",
      title: "Social Services",
      categories: [
        {
          title: "Social Support",
          services: [
            "Ministry of Community Development: Social welfare programs and family support.",
            "Community Development Authority (CDA): Social services in Dubai.",
          ],
        },
        {
          title: "Pensions",
          services: ["General Pension and Social Security Authority (GPSSA): Pension services for Emiratis."],
        },
      ],
    },
    {
      id: "09",
      title: "Emergency Services",
      categories: [
        {
          title: "Emergency Numbers",
          services: [
            "Police: Emergency number 999.",
            "Ambulance: Emergency number 998.",
            "Fire Department: Emergency number 997.",
          ],
        },
      ],
    },
    {
      id: "10",
      title: "Other Key Services",
      categories: [
        {
          title: "Postal Services",
          services: ["Emirates Post: For mail and parcel delivery."],
        },
        {
          title: "Telecommunications",
          services: ["Etisalat and du: For internet, mobile, and TV services."],
        },
        {
          title: "Environmental Services",
          services: ["Municipalities handle waste management and environmental protection."],
        },
      ],
    },
  ],
}

export default function ServicesList() {
  return (
    <SectionContainer>
    <div className=" mx-auto py-24 space-y-6">
      {data.services.map((service) => (
        <div key={service.id} className="border border-[#AC1B13] rounded-lg py-[28px] md:px-[56px] px-10 relative">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 absolute top-6 -left-9 rounded-full bg-[#FFF1F2] border border-[#AC1B13] text-[#AC1B13] flex items-center justify-center text-[24px] leading-[36px] font-medium">
              {service.id}
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <h2 className="text-[22px] leading-[33px] font-plus-jakarta  font-semibold text-[#262626]">{service.title}</h2>
                {service.description && <p className="text-gray-600 text-sm whitespace-pre-line font-poppins mt-1">{service.description}</p>}
              </div>

              <div className="space-y-6">
                {service.categories.map((category: { title: string; services: string[] }, index: number) => (
                  <div key={index}>
                    <h3 className="font-semibold text-[#262626] text-[16px] leading-[28px]  whitespace-pre-line font-poppins mb-2">{category.title}</h3>
                    <ul className="space-y-1">
                      {category.services.map((serviceItem, serviceIndex) => {
                        const [title, description] = serviceItem.split(": ")
                        return (
                          <li key={serviceIndex} className="md:flex gap-1">
                            <span className="font-medium  text-sm whitespace-pre-line font-poppins">{title}:</span>
                            <span className="text-gray-600 text-sm whitespace-pre-line font-poppins">{description}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </SectionContainer>
  )
}

