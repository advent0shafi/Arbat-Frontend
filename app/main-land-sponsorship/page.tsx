import { Metadata } from "next"
import FreeZoneHero from "../components/FreeZoneHero"
import SectionH8 from "../sections/sectionH8"
import BusinessServices from "./sections/SectionMLS01"

export const metadata: Metadata = {
    title: "Sponsorship Main Land | Arbat Corporate",
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
export default function page(){
    return (
       <div className="mt-[64px] ">
             <FreeZoneHero
             catogery="Main Land"
               professionalImagesrc="people-15.png"
               title="Sponsorship"
               descriptions="Corporate sponsorship provides the same benefits as working with an individual sponsor, while offering tailored services to address potential challenges. With our corporate sponsorship services, entrepreneurs enjoy the following advantages"
             />
             
            <BusinessServices />
             <SectionH8 />
           </div>
    )
}