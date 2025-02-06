import type React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
     

      <main className="max-w-4xl mx-auto px-4 py-8 mt-20">
        <h1 className="md:text-3xl text-xl  font-bold text-center mb-4 font-plus-jakarta ">How much does it cost to start a business in the UAE?</h1>
        <p className="text-center text-gray-600 mb-8 font-plus-jakarta font-medium md:text-[18px] md:leading-[27px] text-sm">
          That depends. What is your business activity? Are you setting up in a free zone or the mainland? Would you
          require visas? Several factors influence the cost of starting a business in the UAE, but we&apos;ve made it easy
          and hassle-free for you to get an estimate using our Business Setup Cost Calculator.
        </p>
        {children}
      </main>
    </div>
  )
}

