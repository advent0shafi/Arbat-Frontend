import Image from "next/image";
import { BackgroundPattern } from "../components/backgroundlayer";
import SectionContainer from "../components/section-container";
import { Linkdin } from "../components/svg-components";

export default function SectionH3() {
  const team = [
    {
      name: "John Q. Public",
      role: "Manager",
      image: "/images/people-11.jpeg",
    },
    {
      name: "Jessica Brown",
      role: "Manager",
      image: "/images/people-12.jpeg",
    },
    {
      name: "Mike Hardson",
      role: "Manager",
      image: "/images/people-13.jpeg",
    },
  ];

  return (
    <div className="relative  bg-[#AC1B13]">
      <BackgroundPattern />
      <div className="py-[96px]">
        <SectionContainer>
          <div>
            <div>
              <h2 className="font-plus-jakarta font-bold text-[32px] text-white leading-[48px] text-center mb-[8px]">
                Why Choose Arbat Corporate?
              </h2>
              <div className="flex justify-center items-center w-full ">
                <p className="font-poppins text-white max-w-[670px] font-normal text-[16px] leading-[24px] text-center">
                  At Arbat Corporate Services, we are committed to empowering
                  businesses and elevating lifestyles through innovative and
                  tailored solutions.{" "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[48px]">
                {team.map((member) => (
                  <div key={member.name} className="relative group">
                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={400}
                        height={425}
                        className="w-full aspect-[3/4] object-cover"
                      />
                      <div className="absolute bottom-4 -right-4">
                        <button className="bg-[#0e7490] p-2 rounded-lg hover:bg-[#0e7490]/80 transition-colors">
                          <Linkdin />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}
