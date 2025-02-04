import { visaContent } from "../data/visa-content"
import { SectionTitle } from "../components/section-title"
import { AlertBox } from "../components/alert-box"
import SectionContainer from "@/app/components/section-container"
export default function UAEVisaPage() {
  return (
    <SectionContainer>
    <div className=" mx-auto  py-[128px] ">
      {/* Introduction */}
      <section className="mb-8">
        <h1 className="text-2xl font-plus-jakarta font-bold mb-4">{visaContent.introduction.title}</h1>
        <p className="text-gray-700 mb-4 font-poppins">{visaContent.introduction.description}</p>
      </section>

      {/* Benefits */}
      <section className="mb-8">
        <SectionTitle>{visaContent.benefits.title}</SectionTitle>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {visaContent.benefits.items.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <AlertBox>{visaContent.benefits.alert}</AlertBox>
      </section>

      {/* Residency Paths */}
      <section className="mb-8">
        <SectionTitle>{visaContent.residencyPaths.title}</SectionTitle>
        <p className="text-gray-700 mb-4">{visaContent.residencyPaths.description}</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {visaContent.residencyPaths.items.map((item, index) => (
            <li key={index}>
              <span className="font-medium">{item.title}:</span> {item.description}
            </li>
          ))}
        </ul>
        <AlertBox>{visaContent.residencyPaths.alert}</AlertBox>
      </section>

      {/* Visa Process */}
      <section className="mb-8">
        <SectionTitle>{visaContent.visaProcess.title}</SectionTitle>
        <p className="text-gray-700 mb-4">{visaContent.visaProcess.description}</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {visaContent.visaProcess.steps.map((step, index) => (
            <li key={index}>
              <span className="font-medium">{step.title}:</span> {step.description}
            </li>
          ))}
        </ul>
        <AlertBox>{visaContent.visaProcess.alert}</AlertBox>
      </section>

      {/* Costs */}
      <section className="mb-8">
        <SectionTitle>{visaContent.costs.title}</SectionTitle>
        <p className="text-gray-700 mb-4">{visaContent.costs.description}</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {visaContent.costs.options.map((option, index) => (
            <li key={index}>
              <span className="font-medium">{option.title}:</span> {option.description}
            </li>
          ))}
        </ul>
        <AlertBox>{visaContent.costs.alert}</AlertBox>
      </section>

      {/* Maintenance */}
      <section className="mb-8">
        <SectionTitle>{visaContent.maintenance.title}</SectionTitle>
        <p className="text-gray-700 mb-4">{visaContent.maintenance.description}</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {visaContent.maintenance.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
        <AlertBox>{visaContent.maintenance.alert}</AlertBox>
      </section>

      {/* Cancellation */}
      <section className="mb-8">
        <SectionTitle>{visaContent.cancellation.title}</SectionTitle>
        <p className="text-gray-700 mb-4">{visaContent.cancellation.description}</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {visaContent.cancellation.options.map((option, index) => (
            <li key={index}>
              <span className="font-medium">{option.title}:</span> {option.description}
            </li>
          ))}
        </ul>
        <AlertBox>{visaContent.cancellation.alert}</AlertBox>
      </section>

      {/* Why Choose Us */}
      <section className="mb-8">
        <SectionTitle>{visaContent.whyChooseUs.title}</SectionTitle>
        <p className="text-gray-700">{visaContent.whyChooseUs.description}</p>
      </section>

      {/* Call to Action */}
      <section>
        <SectionTitle>{visaContent.callToAction.title}</SectionTitle>
        <p className="text-gray-700">{visaContent.callToAction.description}</p>
      </section>
    </div>
    </SectionContainer>
  )
}

