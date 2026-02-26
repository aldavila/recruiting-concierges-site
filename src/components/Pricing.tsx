export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. You only pay when you
            hire.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Monthly Staffing */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover-lift">
            <h3 className="text-xl font-bold text-primary mb-2">
              Monthly Staffing
            </h3>
            <p className="text-text-muted text-sm mb-6">
              Ongoing dedicated engineers on your team
            </p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-primary">
                $5,000
              </span>
              <span className="text-text-muted">
                &ndash;$15,000/mo
              </span>
              <p className="text-sm text-text-muted mt-1">per engineer, based on seniority</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Full-time dedicated engineer",
                "6-month replacement guarantee",
                "Payroll & compliance handled",
                "Ongoing performance support",
                "US timezone overlap (6-8 hrs)",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block text-center px-6 py-3 border-2 border-accent text-accent font-semibold rounded-xl hover:bg-accent hover:text-white transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Direct Placement */}
          <div className="bg-accent rounded-2xl p-8 text-white relative hover-lift">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase">
              Most Popular
            </span>
            <h3 className="text-xl font-bold mb-2">Direct Placement</h3>
            <p className="text-blue-100 text-sm mb-6">
              One-time fee to hire an engineer permanently
            </p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">20%</span>
              <span className="text-blue-100 ml-1">of first-year salary</span>
              <p className="text-sm text-blue-100 mt-1">One-time placement fee</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Pre-vetted shortlist in 72 hours",
                "6-month replacement guarantee",
                "Technical + cultural screening",
                "Contract & onboarding support",
                "No fee until you hire",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-blue-200 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block text-center px-6 py-3 bg-white text-accent font-semibold rounded-xl hover:bg-blue-50 transition-all"
            >
              Hire Now
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-text-muted mt-8">
          Need something custom? Enterprise volume pricing available.{" "}
          <a href="#contact" className="text-accent underline font-medium">
            Let&apos;s talk
          </a>
          .
        </p>
      </div>
    </section>
  );
}
