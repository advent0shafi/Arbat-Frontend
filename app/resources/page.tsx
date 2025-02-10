import { Metadata } from "next";
import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import ServicesList from "./sections/services-list";

export const metadata: Metadata = {
  title: "Resources & Services | Arbat Corporate",
  description:
    "Comprehensive guide to UAE free zone business activities. Explore permitted business activities across different free zones in UAE.",
  keywords: [
    "UAE free zone activities",
    "Dubai free zone business",
    "free zone license types",
    "UAE business activities",
    "free zone company activities",
  ],
};
export default function page() {
  return (
    <div className="mt-[64px] ">
      <FreeZoneHero
        catogery="Resources"
        professionalImagesrc="people-15.png"
        title="Resources & Services"
        descriptions="The UAE government offers a wide range of resources and services to support individuals, businesses, and visitors. These services are designed to streamline processes, enhance convenience, and promote economic growth. Below is a comprehensive list of key UAE government resources and services:"
      />
<ServicesList />
      <SectionH8 />
    </div>
  );
}
