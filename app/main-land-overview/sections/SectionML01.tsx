import SectionContainer from "@/app/components/section-container";

export default function MainlandCompany() {
  const benefits = [
    {
      title: "Unlimited Market Access:",
      description:
        "Trade freely across all Emirates and international markets.",
    },
    {
      title: "100% Ownership:",
      description:
        "Enjoy full control of your business under the latest UAE regulations.",
    },
    {
      title: "Location Flexibility:",
      description:
        "Establish your office anywhere on the mainland with no geographic limitations.",
    },
    {
      title: "Government Contracts:",
      description: "Access lucrative government projects and tenders.",
    },
    {
      title: "Branch Expansion:",
      description: "Open multiple branches to grow your business footprint.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Define Your Business Activity",
      description:
        "Choose from over 2,000 business activities approved by the DED, ranging from trading to professional services.",
    },
    {
      number: "02",
      title: "Find the Ideal Location",
      description:
        "Select a strategic location tailored to your business needs, such as proximity to ports for trading or central hubs for retail.",
    },
    {
      number: "03",
      title: "Determine Your Legal Structure",
      description:
        "Opt for the best structure, such as a Limited Liability Company (LLC) for trading or a professional license for service-based businesses.",
    },
    {
      number: "04",
      title: "Secure a Local Sponsor",
      description:
        "If required, appoint a UAE-based local sponsor or service agent to meet legal requirements while retaining operational control.",
    },
    {
      number: "05",
      title: "Name Your Business",
      description:
        "Pick a trade name that aligns with UAE regulations, ensuring it reflects your brand identity while adhering to local naming conventions.",
    },
    {
      number: "06",
      title: "Obtain Your Trade License",
      description:
        "Submit the required documents to the DED to secure your mainland trade license.",
    },
    {
      number: "07",
      title: "Lease Office Space",
      description:
        "Choose between fully serviced offices or customizable spaces to match your business size and visa requirements.",
    },
    {
      number: "08",
      title: "Apply for Visas",
      description:
        "Obtain visas for owners, employees, and dependents. Visa quotas are typically linked to the size of your office space.",
    },
    {
      number: "09",
      title: "Consult with Experts",
      description:
        "Collaborate with a professional business setup consultant to ensure smooth navigation through legalities, documentation, and approvals.",
    },
  ];
  return (
    <SectionContainer>
       <div className=" md:py-[126px] py-9 space-y-4">
        {/* Header Section */}
        <h1 className="md:text-4xl text-2xl font-plus-jakarta  font-bold text-gray-800">
          Here&lsquo;s a simplified guide to the process and benefits:
        </h1>

        {/* Benefits Section */}
        <div className="space-y-4 mt-[32px] ">
          <h2 className=" font-bold text-gray-900 font-plus-jakarta md:text-[24px] text-[18px] leading-[24px] md:leading-[36px]">
            Key Benefits of Mainland Company Formation:
          </h2>

          <div className="space-y-1 mt-[16px] ">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Simple dot icon */}
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5" />
                <div className="font-poppins text-[16px] leading-[32px]">
                  <span className="font-bold">{benefit.title}</span>
                  <span className="text-gray-600 font-normal">
                    {benefit.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="pt-[32px]  ">
          <h2 className="text-lg  font-semibold text-gray-900 font-plus-jakarta  ">
            Steps for Setting Up a Mainland Company: 
          </h2>
          <div className="space-y-4 px-6 pt-[16px] ">
            {steps.map((step) => (
              <div
                key={step.number}
                className=" border border-[#AC1B13] rounded-lg py-[28px] px-[56px] relative"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 absolute top-6 -left-9 rounded-full bg-[#FFF1F2] border border-[#AC1B13] text-[#AC1B13] flex items-center justify-center text-[24px] leading-[36px] font-medium">
                    {step.number}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-[22px] leading-[33px] font-plus-jakarta  font-semibold text-[#262626]">
                      {step.title}
                    </h3>
                    <p className="text-[#737373] text-sm whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Switching Section */}
        <div className="space-y-4">
          <h2 className="text-[24px] leading-[36px]  font-bold font-plus-jakarta text-gray-800">
            Switching from a Free Zone to a Mainland Company:
          </h2>
          <p className="text-gray-600 font-poppins">
            While free zones offer excellent starting points for businesses,
            transitioning to the mainland can unlock broader opportunities. With
            the help of a qualified consultant, businesses can seamlessly switch
            to a mainland structure, enabling them to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 font-poppins">
            <li>Trade directly with the UAE market.</li>
            <li>Expand beyond free zone boundaries.</li>
            <li>Pursue government contracts.</li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
