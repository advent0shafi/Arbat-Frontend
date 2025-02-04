import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import VisaProcessList from "./sections/VisaProcessList";

export default function page(){
    return (
        <div className="mt-[64px] ">
            <FreeZoneHero professionalImagesrc="people-17.png"     title="Registration Process"
          descriptions="The Free Zone jurisdiction offers 100% foreign ownership, making it an ideal choice for wholesale distributors, re-exporters, warehousing operations, service providers, and manufacturers focusing on markets beyond the MENA region." />
            <VisaProcessList />
              <SectionH8 />
        </div>
    )
}