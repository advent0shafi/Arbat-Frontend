import Image from "next/image";
import SectionContainer from "./section-container";

interface FreeZoneHeroProps {
    professionalImagesrc: string;
}
export default function FreeZoneHero({ professionalImagesrc }: FreeZoneHeroProps) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={"/layer/layers_02.jpeg"}
        alt="layer"
        width={1400}
        height={583}
        className="w-screen h-[583px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full  bg-[#AC1B13] opacity-85">
        <SectionContainer>
          <div className="pt-[111px] max-w-[550px] ">
            <h3 className="font-plus-jakarta font-medium text-[20px] leading-[24px] text-white">
              Free Zone
            </h3>
            <h2 className="font-plus-jakarta font-extrabold  text-[34px] leading-[43.6px] text-white">
              Our Solution
            </h2>

            <p className="font-plus-jakarta font-medium md:text-[24px] text-[18px] leading-[24px] md:leading-[30px] text-white mt-[36px]">
              The Free Zone jurisdiction offers 100% foreign ownership, making
              it an ideal choice for wholesale distributors, re-exporters,
              warehousing operations, service providers, and manufacturers
              focusing on markets beyond the MENA region.
            </p>
          </div>
        </SectionContainer>
      </div>

      <Image
        src={`/images/${professionalImagesrc}`}
        alt="images"
        width={700}
        height={502}
        className=" h-[485px] w-[700px]   absolute -bottom-10 -right-44 z-10 md:block hidden"
      />
      <Image
        src={"/logo/mainbiglogo.png"}
        alt="layer"
        width={735}
        height={368}
        className="absolute bottom-0 right-0 opacity-20 md:block hidden"
      />
    </div>
  );
}
