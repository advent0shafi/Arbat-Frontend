import Image from "next/image";
import SectionContainer from "./section-container";

interface FreeZoneHeroProps {
    professionalImagesrc: string;
    title:string;
    descriptions:string;
    catogery:string;
}
export default function FreeZoneHero({ professionalImagesrc,title,descriptions,catogery }: FreeZoneHeroProps) {
  return (
    <div className="relative overflow-hidden max-h-[586px] ">
      <Image
        src={"/layer/layers_02.jpeg"}
        alt="layer"
        width={1400}
        height={586}
        className="w-screen h-[586px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full  bg-[#AC1B13] opacity-85">
        <SectionContainer>
          <div className="flex flex-col justify-center items-end h-[586px] max-w-[500px]  ">
          <div className="">
            <h3 className="font-plus-jakarta font-medium text-[20px] leading-[24px] text-white">
             {catogery}
            </h3>
            <h2 className="font-plus-jakarta font-extrabold  text-[34px] leading-[43.6px] text-white">
             {title}
            </h2>

            <p className="font-plus-jakarta font-medium md:text-[20px] text-[18px] leading-[20px] md:leading-[30px] text-white mt-[36px]">
              {descriptions}
            </p>
          </div>
          </div>
       
        </SectionContainer>
      </div>

      <Image
        src={`/images/${professionalImagesrc}`}
        alt="images"
        width={400}
        height={502}
        className=" h-[500px] w-[400px]   absolute bottom-0 right-10  z-10 md:block hidden"
      />
      <Image
        src={"/logo/mainbiglogo.png"}
        alt="layer"
        width={690}
        height={368}
        className="absolute bottom-28 object-contain right-20 opacity-40 md:block hidden"
      />
    </div>
  );
}
