import { Metadata } from "next";
import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import SectionBlogpage from "./sections/SectionBlog01";

export const metadata: Metadata = {
  title: "UAE Free Zone Business Blog | Arbat Corporate",
  description:
    "Stay updated with the latest insights, trends, and expert advice on UAE free zone business activities. Explore in-depth articles and guides on business setup and regulations.",
  keywords: [
    "UAE business blog",
    "Dubai free zone insights",
    "business setup tips",
    "UAE corporate updates",
    "free zone regulations",
  ],
};

export default function Page() {
  return (
    <div className="mt-[64px]">
      <FreeZoneHero
        catogery="Blog"
        professionalImagesrc="people-15.png"
        title="Latest Business Insights"
        descriptions="Explore expert insights, business strategies, and the latest updates on UAE free zone regulations. Stay informed with our in-depth articles."
      />
      <SectionBlogpage />
      <SectionH8 />
    </div>
  );
}
