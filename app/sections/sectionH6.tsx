import { BackgroundPattern } from "../components/backgroundlayer";
import SectionContainer from "../components/section-container";
import { TestimonialCard } from "../components/TestimonialCard";

export default function SectionH6() {
  const testimonials = [
    {
      quote:
        "Arbat Corporate made securing my Golden Visa a stress-free experience. Their team handled every detail, keeping me informed at every step. I couldn't have done it without them!",
      author: "Sarah Al Mansoori",
      role: "Entrepreneur",
      image: "/images/google-images.jpeg",
    },
    {
      quote:
        "From the initial consultation to the final approvals, Arbat's expertise was evident. They helped me establish my business in Dubai within weeks, saving me time and effort. Highly recommend!",
      author: "John Richards",
      role: "CEO of Innovate Solutions",
      image: "/images/google-images.jpeg",
    },
    {
      quote:
        "I used Arbat's PRO services for document processing, and they were exceptional. Fast, reliable, and professional – they took care of everything seamlessly.",
      author: "Ahmed Khalifa",
      role: "Operations Manager",
      image: "/images/google-images.jpeg",
    },
    {
      quote:
        "As a growing business, managing compliance in the UAE was overwhelming. Arbat's accounting team ensured we stayed compliant while optimizing our finances. Truly a game-changer!",
      author: "Priya Sharma",
      role: "CFO of Apex Technologies",
      image: "/images/google-images.jpeg",
    },
  ];

  return (
    <div className="relative  bg-[#AC1B13]">
      <BackgroundPattern />
      <SectionContainer>
        <div className="py-[96px]">
          <h2 className="font-plus-jakarta font-bold text-[32px] text-white leading-[48px] text-center mb-[8px]">
            Real Results. Real Impact.
          </h2>
          <div className="flex justify-center items-center w-full ">
            <p className="font-poppins text-white max-w-[670px] font-normal text-[16px] leading-[24px] text-center">
              Our clients’ success is our greatest achievement. Discover how
              Arbat Corporate Services has helped businesses and individuals
              thrive in the UAE through our tailored solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-[48px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
