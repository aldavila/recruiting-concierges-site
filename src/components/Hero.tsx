export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            Now placing React Native &amp; UX talent
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6">
            Elite LATAM Engineers.
            <br />
            <span className="gradient-text">Half the Cost.</span>
            <br />
            Zero Compromise.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            We source, vet, and place top nearshore software engineers from
            Latin America so you can scale your team{" "}
            <strong className="text-text">40&ndash;60% below US rates</strong>{" "}
            &mdash; with your first candidate in hand within{" "}
            <strong className="text-text">72 hours</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="relative inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 text-lg"
            >
              Hire Your First Engineer
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-200 text-text font-semibold rounded-xl hover:border-accent hover:text-accent transition-all text-lg"
            >
              See How It Works
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              No upfront cost
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              6-month replacement guarantee
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Same timezone overlap
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
