import SectionH8 from "../sections/sectionH8";
import BenefitsList from "./section/BenefitsList";
import SectionOH from "./section/SectionOH";

export default function Page() {
    return (
        <div className="mt-[64px] ">
            <SectionOH/>
            <BenefitsList/>
            <SectionH8 />
        </div>
    )
}