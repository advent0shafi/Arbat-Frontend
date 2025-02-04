interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonColor?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
}: PricingCardProps) {
  return (
    <div className="group">
      <div className="group-hover:bg-white rounded-[15px] border transform duration-500  border-gray-300 px-[28px] py-[30px]">
        <div className="pb-8">
          <h3 className="text-[18px] leading-[24px] font-bold mb-2 font-plus-jakarta ">
            {title}
          </h3>
          <div className="text-4xl font-plus-jakarta  font-bold mb-4">
            ${price}
          </div>
          <p className="text-gray-500  font-poppins text-sm">{description}</p>
        </div>
        <div>
          <h4 className="font-medium mb-4 font-plus-jakarta">
            What&apos;s included:
          </h4>
          <ul className="space-y-3 mb-6 font-poppins">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button
            className={`w-full py-2 px-4  rounded-md text-white bg-[#262626] transform duration-500  font-medium group-hover:bg-[#ac1b13] hover:opacity-90 transition-opacity`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
