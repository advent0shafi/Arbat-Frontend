
export default function Success() {
  return (
    <div className="text-center">
      <h2 className="md:text-2xl text-xl font-bold mb-4 font-plus-jakarta">Thank you for your interest!</h2>
      <p className="mb-6 md:text-sm text-xs">We&apos;ll get back to you shortly with your business setup estimate.</p>

      <div className="aspect-video max-w-2xl mx-auto mb-8">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/placeholder"
          title="Learn more about business setup in UAE"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>

      <div className="inline-flex items-center gap-2 font-poppins text-[#AC1B13]  md:text-base text-sm">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Your request has been submitted successfully!</span>
      </div>
    </div>
  )
}

