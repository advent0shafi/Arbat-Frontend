import SectionContainer from "@/app/components/section-container";
import { guideData } from "../data/guide";
import { Section } from "../components/section";

export default function SectionAT01() {
  return (
    <SectionContainer>
      <section className="py-24 flex flex-col gap-3 md:px-0 px-[14px]">
        {guideData.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            items={section.items}
          />
        ))}
      </section>
    </SectionContainer>
  );
}
