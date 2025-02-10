interface SectionContentProps {
    details: GuideDetails
  }
  
  export function SectionContent({ details }: SectionContentProps) {
    return (
      <div className="">
        {Object.entries(details).map(([key, value]) => {
          if (Array.isArray(value)) {
            return (
              <div key={key} className="">
                <h4 className="font-medium text-[16px] leading-[32px]  capitalize font-poppins">{key}:</h4>
                <ul className="list-disc pl-5 ">
                  {value.map((item, index) => (
                    <li key={index} className="text-neutral-600 font-poppins text-[16px] leading-[32px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
          return (
            <div key={key} className="md:flex gap-2">
              <span className="font-medium text-[16px] leading-[32px]  capitalize font-poppins">{key}:</span>
              {key.toLowerCase().includes("website") ? (
                <a href="#" className="text-red-600 hover:text-red-700  font-poppins text-[16px] leading-[32px]">
                  {value as React.ReactNode}
                </a>
              ) : (
                <span className="text-neutral-600  font-poppins text-[16px] leading-[32px]">  {value as React.ReactNode}</span>
              )}
            </div>
          )
        })}
      </div>
    )
  }
  
  