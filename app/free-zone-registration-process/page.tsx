import { Metadata } from "next";
import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import VisaProcessList from "./sections/VisaProcessList";

export const metadata: Metadata = {
  title: "Company Registration in UAE | Arbat Corporate",
  description:
    "Expert company registration services in UAE. Fast, reliable setup process with complete documentation support and legal compliance guidance.",
  keywords: [
    "UAE company registration",
    "business setup Dubai",
    "company formation UAE",
    "register company Dubai",
    "UAE business license",
    "Dubai company setup cost",
  ],
};
export default function page() {
  return (
    <div className="mt-[64px] ">
      <FreeZoneHero
       catogery="Free Zone"
        professionalImagesrc="people-17.png"
        title="Registration Process"
        descriptions="The Free Zone jurisdiction offers 100% foreign ownership, making it an ideal choice for wholesale distributors, re-exporters, warehousing operations, service providers, and manufacturers focusing on markets beyond the MENA region."
      />
      <VisaProcessList />
      <SectionH8 />
    </div>
  );
}
