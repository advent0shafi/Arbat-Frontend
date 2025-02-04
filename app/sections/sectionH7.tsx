import Image from "next/image";
import SectionContainer from "../components/section-container";

export default function BlogPage() {
  const articles = [
    {
      title: "The Ultimate Guide to UAE Free Zone Business Setup",
      date: "23, February 2021",
      image: "/images/blog-01.png",
    },
    {
      title: "5 Steps to Setting Up Your Business in Dubai",
      date: "23, February 2021",
      image: "/images/blog-02.png",
    },
    {
      title: "Top 10 Luxury Real Estate Investments in the UAE",
      date: "23, February 2021",
      image: "/images/blog-03.png",
    },
    {
      title: "Golden Visa vs. Regular Visa: What's the Difference?",
      date: "23, February 2021",
      image: "/images/blog-03.png",
    },
    {
      title: "How to Navigate Dubai's Real Estate Market in 2025",
      date: "23, February 2021",
      image: "/images/blog-05.png",
    },
    {
      title: "5 Common Mistakes When Starting a Business in the UAE",
      date: "23, February 2021",
      image: "/images/blog-06.png",
    },
  ];

  return (
    <SectionContainer>
      <div className="py-[96px]">
        <h2 className="font-plus-jakarta font-bold text-[32px]  leading-[48px] text-center mb-[8px]">
          Stay Informed with Expert Insights{" "}
        </h2>
        <div className="flex justify-center items-center w-full ">
          <p className="font-poppins  max-w-[670px] font-normal text-[16px] leading-[24px] text-center text-gray-500">
            Discover the latest trends, tips, and updates in the world of
            business, luxury, and lifestyle. Our curated articles and guides are
            designed to keep you informed and inspired.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-[48px]">
          {articles.map((article, index) => (
            <article
              key={index}
              className="flex flex-col bg-white rounded-lg overflow-hidden"
            >
              <div className="relative w-full ">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}

                  className="object-cover"
                  width={400}
                  height={286}
                 
                />
              </div>
              <div className="pt-[32px] flex flex-col ">
                <h2 className="text-[24px] leading-[36px]  font-plus-jakarta  font-bold text-gray-900 line-clamp-2">
                  {article.title}
                </h2>
                <div className=" flex items-center justify-between mt-[24px]">
                  <time className="text-sm font-poppins text-gray-500">{article.date}</time>
                  <button className="inline-flex items-center justify-center px-5 py-[14px] border border-[#AC1B13] text-[#AC1B13] font-medium text-[14px] leading-[21px] rounded-md hover:bg-red-50 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-red-600 text-red-600 font-medium rounded-md hover:bg-red-50 transition-colors">
            View All Blog Posts
          </button>
        </div>
      </div>
    </SectionContainer>
  );
}
