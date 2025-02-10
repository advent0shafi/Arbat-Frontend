import { Metadata } from "next";
import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import SectionAT01 from "./sections/SectionAT01";

export const metadata: Metadata = {
  title: "Tax System in the UAE | Arbat Corporate",
  description:
    "The UAE tax system is relatively simple compared to other countries, but it has become more structured with the introduction of new taxes.",
  keywords: [
    "UAE free zone activities",
    "Dubai free zone business",
    "free zone license types",
    "UAE business activities",
    "free zone company activities",
  ],
  
}

export default function page() {
  return (
    <div className="mt-[64px] ">
      <FreeZoneHero
       catogery="Accounting & Tax"
        professionalImagesrc="people-15.png"
        title="Tax System in the UAE"
        descriptions="The UAE tax system is relatively simple compared to other countries, but it has become more structured with the introduction of new taxes."
      />
    <SectionAT01 />
      <SectionH8 />
    </div>
  );
}
