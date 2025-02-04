import SectionContainer from "@/app/components/section-container"
import Image from "next/image"

export default function FreeZonesGrid() {
  const freeZones = [
    {
      name: "FIZA Free Zone",
      logo: "/clients/client-01.png",
      price: "12,900",
    },
    {
      name: "RAKEZ Free Zone",
      logo: "/clients/client-02.png",
      price: "6,100",
    },
    {
      name: "STRIP Free Zone",
      logo: "/clients/client-03.png",
      price: "5,750",
    },
    {
      name: "SHAMS Free Zone",
      logo: "/clients/client-04.png",
      price: "5,750",
    },
    {
      name: "SPC Free Zone",
      logo: "/clients/client-05.png",
      price: "5,750",
    },
    {
      name: "Ajman Free Zone",
      logo: "/clients/client-06.png",
      price: "6,000",
    },
    {
      name: "DAFAZA Free Zone",
      logo: "/clients/client-07.png",
      price: "25,000",
    },
    {
      name: "DMCC Free Zone",
      logo: "/clients/client-08.png",
      price: "33,000",
    },
    {
      name: "JAFZA Free Zone",
      logo: "/clients/client-09.png",
      price: "9,000",
    },
    {
      name: "DIFC Free Zone",
      logo: "/clients/client-010.png",
      price: "30,000",
    },
    {
      name: "Medan Free Zone",
      logo: "/clients/client-011.png",
      price: "12,500",
    },
    {
      name: "DUQE Free Zone",
      logo: "/clients/client-012.png",
      price: "12,500",
    },
  ]

  return (
    <SectionContainer>
        <div className="py-[96px]">

        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {freeZones.map((zone) => (
          <div
            key={zone.name}
            className="border border-[#AC1B13] rounded-lg py-[42px] px-[32px] flex flex-col items-center justify-center transition-transform hover:scale-105"
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={zone.logo || "/placeholder.svg"}
                alt={`${zone.name} logo`}
                fill
                sizes="(max-width: 128px) 100vw, 128px"
                className="object-contain"
                priority={false}
              />
            </div>
            <h3 className="text-[22px] font-bold text-gray-900 mb-2 leading-[33px] font-plus-jakarta ">{zone.name}</h3>
            <div className="text-[16px] leading-[24px] text-gray-800 text-center font-poppins">
              <span>Pricing Starting from </span>
              <span className="font-bold ">AED {zone.price}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </SectionContainer>
  )
}

