import { SectionContent } from "./section-content"

interface SectionProps {
    id: string,
    title: string,
    description?: string,
    items: GuideItem[]
  }

export function Section({ id, title, description, items }: SectionProps) {
  return (
    <div className="border border-[#AC1B13] rounded-lg py-[28px] md:px-[56px] px-10 relative ">
      <div className="flex items-start gap-4 mb-2">
        {/* Section Header */}
        <div className="flex-shrink-0 w-16 h-16 absolute top-6 -left-9 rounded-full bg-[#FFF1F2] border border-[#AC1B13] text-[#AC1B13] flex items-center justify-center text-[24px] leading-[36px] font-medium">
          {id}
        </div>
        <div>
          <h2 className="text-[22px] leading-[33px] font-plus-jakarta  font-semibold text-[#262626]">{title}</h2>
          {description && <p className="text-gray-600 text-sm whitespace-pre-line font-poppins">{description}</p>}
        </div>
      </div>

      {/* Section Content */}
      <div className="space-y-6 0">
        {items.map((item, index) => (
          <div key={index} className="space-y-2 ">
            <h3 className="font-bold text-[#262626] text-[20px] leading-[28px]  whitespace-pre-line font-plus-jakarta ">{item.title}</h3>
            <SectionContent details={item.details} />
          </div>
        ))}
      </div>
    </div>
  )
}

