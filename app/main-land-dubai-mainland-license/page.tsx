import { Metadata } from "next"
import FreeZoneHero from "../components/FreeZoneHero"
import SectionH8 from "../sections/sectionH8"
import SectionMLDML from "./sections/SectionMLDML"

export const metadata: Metadata = {
    title: "Main Land Dubai Mainland License | Arbat Corporate",
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
               title="Dubai Mainland License"
               descriptions="Setting up a mainland company in Dubai offers unparalleled opportunities for entrepreneurs to access diverse markets, form local partnerships, and establish a strong presence in the UAE. A mainland company is licensed by the Department of Economic Development (DED) and allows businesses to trade across Dubai and the wider UAE without restrictions."
             />
          
            <SectionMLDML />
             <SectionH8 />
           </div>
    )
}