import Image from "next/image"
import SectionContainer from "@/app/components/section-container"
import Link from "next/link"

interface Article {
  title: string
  date: string
  image: string
}

const AnimatedArticle = ({ article }: { article: Article }) => {
  return (
    <article className="flex flex-col bg-white rounded-lg overflow-hidden">
      <div className="relative w-full">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="object-cover"
          width={400}
          height={286}
        />
      </div>
      <div className="pt-[32px] flex flex-col">
        <h2 className="text-[24px] leading-[36px] font-plus-jakarta font-bold text-gray-900 line-clamp-2">
          {article.title}
        </h2>
        <div className="flex items-center justify-between mt-[24px]">
          <time className="text-sm font-poppins text-gray-500">{article.date}</time>
          <Link href={`/blog/${article.title.toLowerCase().replace(/ /g, "-")}`}>
            <button className="inline-flex items-center justify-center px-5 py-[14px] border border-[#AC1B13] text-[#AC1B13] font-medium text-[14px] leading-[21px] rounded-md hover:bg-red-50 transition-colors">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </article>
  )
}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

const mockPost = {
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  image: "/images/blog-01.png",
  date: "23 February 2021",
}

const relatedPosts = [
  {
    slug: "5-steps-to-setting-up-your-business-in-dubai",
    title: "5 Steps to Setting Up Your Business in Dubai",
    image: "/images/blog-02.png",
    date: "15 March 2021",
  },
  {
    slug: "top-10-luxury-real-estate-investments-in-the-uae",
    title: "Top 10 Luxury Real Estate Investments in the UAE",
    image: "/images/blog-03.png",
    date: "7 April 2021",
  },
  {
    slug: "top-10-luxury-real-estate-investments-in-the-uae",
    title: "Top 10 Luxury Real Estate Investments in the UAE",
    date: "23, February 2021",
    image: "/images/blog-03.png",
  },
]


  
  export default async function Page({ params }: { params:  Promise<{ blogName: string }> }) {
    const { blogName } = await params;

    const title = blogName ? slugToTitle(blogName) : "Blog Post"
  return (
    <SectionContainer>
      <div className="mt-[64px] mx-auto md:px-32 py-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-4">{mockPost.date}</p>
        <Image
          src={mockPost.image || "/placeholder.svg"}
          alt={title}
          width={800}
          height={400}
          className="w-full h-auto max-h-[200px] object-cover rounded-lg mb-6"
        />
        <div className="mb-12">
          <p className="font-poppins font-normal text-lg">{mockPost.content}</p>
        </div>
        <div className="mb-12">
          <p className="font-poppins font-normal text-lg">{mockPost.content}</p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map((relatedPost, index) => (
            <AnimatedArticle key={index} article={relatedPost} />
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

