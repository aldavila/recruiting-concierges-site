export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "We needed React Native developers fast. Recruiting Concierges delivered three qualified candidates in under a week. One of them is now our lead mobile engineer.",
      name: "Tech Startup CTO",
      role: "Series A SaaS Company",
    },
    {
      quote:
        "The quality of engineers blew us away. Bilingual, timezone-aligned, and genuinely senior. We saved over $80K annually compared to hiring domestically.",
      name: "VP of Engineering",
      role: "Health Tech Platform",
    },
    {
      quote:
        "What sold us was the replacement guarantee. Zero risk. Turns out we didn't need it because the hire has been excellent from day one.",
      name: "Founder & CEO",
      role: "E-commerce Startup",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Results
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
            Teams that scaled with us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-primary">{t.name}</p>
                <p className="text-sm text-text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
