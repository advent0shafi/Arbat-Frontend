import Image from "next/image";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5224 6.93804L11.9889 6.09279L9.50861 0.809791C9.32337 0.415291 8.67611 0.415291 8.49086 0.809791L6.01136 6.09279L0.477862 6.93804C0.0233619 7.00779 -0.158138 7.56054 0.160612 7.88679L4.18061 12.0073L3.23036 17.8325C3.15461 18.2953 3.64886 18.6425 4.05761 18.4153L9.00011 15.6838L13.9426 18.416C14.3476 18.641 14.8464 18.3005 14.7699 17.8333L13.8196 12.008L17.8396 7.88754C18.1584 7.56054 17.9761 7.00779 17.5224 6.93804Z"
            fill={star <= rating ? "#AC1B13" : "#D1D5DB"}
          />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating = 4,
  image,
}: {
  quote: string;
  author: string;
  role: string;
  rating?: number;
  image: string;
}) {
  return (
    <div className="bg-white rounded-[11px] p-8 flex flex-col gap-6 relative">
      <div className="absolute top-0 right-0">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.05">
            <path
              d="M73.334 60H33.334C33.334 45.274 45.28 33.334 60 33.334V20C37.916 20 20 37.904 20 60V113.334C20 120.664 26.002 126.666 33.334 126.666H73.334C80.664 126.666 86.666 120.664 86.666 113.334V73.334C86.666 66.002 80.664 60 73.334 60Z"
              fill="#47414F"
            />
            <path
              d="M140 73.334V86.666C154.72 86.666 166.666 98.608 166.666 113.334H126.666C119.336 113.334 113.334 119.336 113.334 126.666V166.666C113.334 173.998 119.336 180 126.666 180H166.666C173.998 180 180 173.998 180 166.666V113.334C180 91.236 162.084 73.334 140 73.334Z"
              fill="#47414F"
            />
          </g>
        </svg>
      </div>
      <StarRating rating={rating} />
      <blockquote className="text-[18px]  font-normal text-black leading-[27px] ">
        "{quote}"
      </blockquote>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${author}'s profile picture`}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <div className="font-bold font-plus-jakarta text-[16px] leading-[24px] ">{author}</div>
            <div className="text-[#78716C] text-[12px] leading-[18px] font-poppins">{role}</div>
          </div>
        </div>
        <Image
          src="/images/google.png"
          alt="Google Reviews"
          width={100}
          height={36}
          className="object-contain"
        />
      </div>
    </div>
  );
}
