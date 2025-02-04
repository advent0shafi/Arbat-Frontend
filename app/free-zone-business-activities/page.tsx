import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import ServicesList from "./sections/ServiceList";

export default function page(){
    return (
        <div>
            <FreeZoneHero professionalImagesrc="people-15.png" />
            <ServicesList />
              <SectionH8 />
        </div>
    )
}