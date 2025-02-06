import { Metadata } from "next";
import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import FreeZonesGrid from "./sections/FreeZoneList";

export const metadata: Metadata = {
  title: "UAE Free Zone License Locations | Arbat Corporate",
  description:
    "Explore UAE free zone locations and license options. Compare different free zones and find the perfect location for your business.",
  keywords: [
    "UAE free zone locations",
    "Dubai free zone map",
    "free zone license UAE",
    "best free zones UAE",
    "free zone comparison",
  ],
}


export default function page() {
  return (
    <div className="mt-[64px] ">
      <FreeZoneHero
        professionalImagesrc="people-16.png"
        title="Free Zone License Locations and Pricingx"
        descriptions="The Free Zone jurisdiction offers 100% foreign ownership, making it an ideal choice for wholesale distributors, re-exporters, warehousing operations, service providers, and manufacturers focusing on markets beyond the MENA region."
      />
      <FreeZonesGrid />
      <SectionH8 />
    </div>
  );
}
