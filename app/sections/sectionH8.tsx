import SectionContainer from "../components/section-container"

export default function SectionH8() {
    return (
      <div className=" bg-gray-100 py-[96px]">
        <SectionContainer>
        <div className=" mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          {/* Left Column - Content */}
          <div className="max-w-xl">
          <h2 className="font-plus-jakarta font-bold text-[32px] leading-[48px] ">
          We take care of your business
          </h2>
            <p className="mt-[8px] leading-[33px] text-[22px] font-normal text-[#AC1B13] ">So you can take care of business</p>
            <p className="mt-6 text-[20px] font-poppins leading-[30px] text-gray-600">
              Our business support packages are here to help you beat the competition.
            </p>
            <p className="mt-6 text-[20px] font-poppins leading-[30px] text-gray-600">
              For startups and business owners in the UAE it can be invaluable to have a specialist company taking care of
              the many tasks involved in establishing a successful brand and commercial presence. If you want to take the
              UAE by storm, you need an expert who can give you not only the benefit of their experience but support much
              beyond the initial paperwork.
            </p>
            <p className="mt-6 text-[20px] font-poppins leading-[30px] text-gray-600">
              Our many support services are inspired by our clients' daily needs and have been designed especially to help
              you get the ball rolling and focus on what really matters.
            </p>
          </div>
  
          {/* Right Column - Form */}
          <div className="bg-white border border-[#AC1B13] rounded-[8px] p-8">
            <h2 className="text-2xl font-bold text-[#AC1B13] font-plus-jakarta mb-6">Book you free consultation</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block  text-sm font-poppins font-medium text-gray-700">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter first name"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 font-poppins text-[16px] leading-[24px] text-gray-900 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-poppins font-medium text-gray-700">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter last name"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 font-poppins text-[16px] leading-[24px] text-gray-900 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="phone" className="block text-sm font-poppins font-medium text-gray-700">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 font-poppins text-[16px] leading-[24px] text-gray-900 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  required
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-poppins font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 font-poppins text-[16px] leading-[24px] text-gray-900 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                />
              </div>
  
              <div>
                <label htmlFor="nationality" className="block text-sm font-poppins font-medium text-gray-700">
                  Nationality
                </label>
                <select
                  id="nationality"
                  name="nationality"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 font-poppins text-[16px] leading-[24px] text-gray-900 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                >
                  <option value="">Select nationality</option>
                  <option value="UAE">UAE</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  {/* Add more nationality options as needed */}
                </select>
              </div>
  
              <div>
                <label htmlFor="message" className="block text-sm font-poppins font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Type your message here"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 font-poppins text-[16px] leading-[24px] placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                />
              </div>
  
              <div>
                <button
                  type="submit"
                  className="w-fit rounded-md bg-[#AC1B13] px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
    </div>
        </div>
        </SectionContainer>
      </div>
    )
  }
  
  