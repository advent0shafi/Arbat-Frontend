import { Metadata } from "next";
import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import ServicesList from "./sections/ServiceList";

export const metadata: Metadata = {
  title: "UAE Free Zone Business Activities Guide | Arbat Corporate",
  description:
    "Comprehensive guide to UAE free zone business activities. Explore permitted business activities across different free zones in UAE.",
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
       catogery="Free Zone"
        professionalImagesrc="people-15.png"
        title="Business Activities"
        descriptions="The Free Zone jurisdiction offers 100% foreign ownership, making it an ideal choice for wholesale distributors, re-exporters, warehousing operations, service providers, and manufacturers focusing on markets beyond the MENA region."
      />
      <ServicesList />
      <SectionH8 />
    </div>
  );
}
