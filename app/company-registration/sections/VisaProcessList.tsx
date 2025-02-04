import SectionContainer from "@/app/components/section-container"

export default function VisaProcessList() {
    const benefits = [
      {
        id: "01",
        title: "Choose Your Activity",
      },
      {
        id: "02",
        title: "Confirm Trade Name",
      },
      {
        id: "03",
        title: "Prepare Documents",
      },
      {
        id: "04",
        title: "Apply for Initial Approval",
      },
      {
        id: "05",
        title: "Process Visa Requirements",
      },
      {
        id: "06",
        title: "Complete Licensing",
      },
      {
        id: "07",
        title: "Open a Bank Account",
      },
    ]
  
    return (
      <SectionContainer  >
      <div className="mx-auto space-y-4 py-[96px]  md:px-10 px-7">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="flex items-start md:px-[56px] px-10 md:py-[28px] py-[24px]   gap-4  rounded-[12px] border border-[#AC1B13] relative">
            <div className="flex absolute -left-7 bg-[#FFF1F2] items-center justify-center md:w-16 md:h-16 h-12 w-12 top-3 rounded-full border-2 border-[#AC1B13] flex-shrink-0">
              <span className="text-[#AC1B13] font-semibold ">{benefit.id}</span>
            </div>
            <h3 className="md:text-[22px] md:leading-[33px] text-[14px] leading-[18px] font-bold text-neutral-900 font-plus-jakarta ">{benefit.title}</h3>
          </div>
        ))}

      </div>
      </SectionContainer>
    )
  }
  
  