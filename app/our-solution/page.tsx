import { Metadata } from "next";
import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";

export const metadata: Metadata = {
  title: "Corporate Solutions in UAE | Arbat Corporate",
  description:
    "Comprehensive corporate solutions for UAE businesses. From company formation to business support services, we provide end-to-end solutions.",
  keywords: [
    "UAE corporate solutions",
    "business solutions Dubai",
    "corporate services UAE",
    "business support Dubai",
    "UAE company services",
  ],
}
export default function page(){
    return (
        <div className="mt-[64px] ">
      <FreeZoneHero
        professionalImagesrc="people-16.png"
        title="Our Solution"
        descriptions="The Free Zone jurisdiction offers 100% foreign ownership, making it an ideal choice for wholesale distributors, re-exporters, warehousing operations, service providers, and manufacturers focusing on markets beyond the MENA region."
      />
      <SectionH8 />
        </div>
    )
}