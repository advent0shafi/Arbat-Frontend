import { Metadata } from "next";
import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";

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
  catogery="Contact Us"
     professionalImagesrc="people-15.png"
  title="Get in Touch"
  descriptions="Have questions or need assistance? Reach out to us for expert guidance on business setup, licensing, and corporate services. Our team is here to help you every step of the way."
/>

      <SectionH8 />
    </div>
  );
}
