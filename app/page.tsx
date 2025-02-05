import HeroCarousel from "./sections/heroanimation";
import { HeroSection } from "./sections/sectionH1";
import SectionH2 from "./sections/sectionH2";
import SectionH3 from "./sections/sectionH3";
import SectionH4 from "./sections/sectionH4";
import PricingPage from "./sections/sectionH5";
import SectionH6 from "./sections/sectionH6";
import BlogPage from "./sections/sectionH7";
import SectionH8 from "./sections/sectionH8";

export default function Home() {
  return (
    <main>
      <HeroCarousel/>
      {/* <HeroSection/> */}
      <SectionH2/>
      <SectionH3/>
      <SectionH4 />
      <PricingPage/>
      <SectionH6 /> 
      <BlogPage/>
      <SectionH8/>
    </main>
  );
}
