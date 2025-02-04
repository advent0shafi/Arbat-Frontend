import SectionContainer from "../components/section-container";
import {
  CareLive,
  CustomerCare,
  HandShake,
} from "../components/svg-components";

export default function SectionH2() {
  return (
    <div className="py-[96px]">
      <SectionContainer>
        <div>
          <h2 className="font-plus-jakarta font-bold text-[32px] leading-[48px] text-center mb-[8px]">
            Why Choose Arbat Corporate?
          </h2>
          <div className="flex justify-center items-center w-full ">
            <p className="font-poppins text-gray-500 max-w-[670px] font-normal text-[16px] leading-[24px] text-center">
              At Arbat Corporate Services, we are committed to empowering
              businesses and elevating lifestyles through innovative and
              tailored solutions.{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[18px] mt-[48px] md:px-[142px]">
            <div className="group ">
              <div className="bg-white rounded-[8px] transform duration-500  py-[44px] px-[32px] group-hover:bg-[#AC1B13] md:max-w-[320px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)]">
                <div className="rounded-[8px] bg-opacity-20 flex flex-col justify-center items-center  bg-gray-100 w-[64px] h-[64px] mb-[16px]">
                  <HandShake />
                </div>
                <h3 className="font-bold text-[24px] leading-[36px] transform duration-500  group-hover:text-white text-gray-800 font-plus-jakarta md:max-w-[256px]">
                  Personalized Attention
                </h3>
                <p className="text-gray-500 group-hover:text-white transform duration-500  text-[15px] font-poppins leading-[24px] md:max-w-[256px]">
                  We assign a dedicated consultant to every client, ensuring
                  tailored support that aligns with your specific goals and
                  challenges.
                </p>
              </div>
            </div>
            <div className="group ">
              <div className="bg-white rounded-[8px] transform duration-500 shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] py-[44px] px-[32px] group-hover:bg-[#AC1B13] md:max-w-[320px]">
                <div className="rounded-[8px] bg-opacity-20 flex flex-col justify-center items-center  bg-gray-100 w-[64px] h-[64px] mb-[16px]">
                  <CareLive />
                </div>
                <h3 className="font-bold text-[24px] leading-[36px] transform duration-500  group-hover:text-white text-gray-800 font-plus-jakarta md:max-w-[256px]">
                  Personalized Attention
                </h3>
                <p className="text-gray-500 group-hover:text-white transform duration-500  text-[15px] font-poppins leading-[24px] max-w-[256px]">
                  We assign a dedicated consultant to every client, ensuring
                  tailored support that aligns with your specific goals and
                  challenges.
                </p>
              </div>
            </div>
            <div className="group ">
              <div className="bg-white rounded-[8px] transform duration-500 shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] py-[44px] px-[32px] group-hover:bg-[#AC1B13] md:max-w-[320px]">
                <div className="rounded-[8px] bg-opacity-20 flex flex-col justify-center items-center  bg-gray-100 w-[64px] h-[64px] mb-[16px]">
                  <CustomerCare />
                </div>
                <h3 className="font-bold text-[24px] leading-[36px] transform duration-500  group-hover:text-white text-gray-800 font-plus-jakarta md:max-w-[256px]">
                  Personalized Attention
                </h3>
                <p className="text-gray-500 group-hover:text-white transform duration-500  text-[15px] font-poppins leading-[24px] max-w-[256px]">
                  We assign a dedicated consultant to every client, ensuring
                  tailored support that aligns with your specific goals and
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
