import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import ServicesList from "./sections/ServiceList";

export default function page() {
  return (
    <div className="mt-[64px] ">
      <FreeZoneHero
        professionalImagesrc="people-15.png"
        title="Business Activities"
        descriptions="The Free Zone jurisdiction offers 100% foreign ownership, making it an ideal choice for wholesale distributors, re-exporters, warehousing operations, service providers, and manufacturers focusing on markets beyond the MENA region."
      />
      <ServicesList />
      <SectionH8 />
    </div>
  );
}
