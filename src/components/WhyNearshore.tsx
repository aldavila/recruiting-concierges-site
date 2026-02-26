export default function WhyNearshore() {
  const advantages = [
    {
      icon: "🕐",
      title: "Same Timezone",
      desc: "LATAM engineers overlap 6 to 8 hours with US business hours. Real-time collaboration, no midnight standups.",
    },
    {
      icon: "💬",
      title: "Bilingual & Culture-Aligned",
      desc: "Our candidates are fluent in English and deeply familiar with US work culture. Communication is never the bottleneck.",
    },
    {
      icon: "💰",
      title: "40 to 60% Cost Savings",
      desc: "Senior engineers at a fraction of US rates. Reallocate budget to product, marketing, or more hires.",
    },
    {
      icon: "🎯",
      title: "Pre-Vetted Talent Only",
      desc: "Every candidate passes our technical assessment, behavioral interview, and reference checks before you ever see their profile.",
    },
    {
      icon: "⚡",
      title: "72-Hour Shortlists",
      desc: "No waiting months. We tap our active talent network and deliver qualified candidates in days, not quarters.",
    },
    {
      icon: "🛡️",
      title: "6-Month Guarantee",
      desc: "If your hire doesn't work out in the first 6 months, we replace them at no additional cost. Zero risk.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
            Why Nearshore
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            The best of both worlds
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nearshore gives you the cost efficiency of offshore with the
            communication quality of domestic hires.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((a) => (
            <div key={a.title} className="flex gap-4">
              <span className="text-3xl flex-shrink-0 mt-1">{a.icon}</span>
              <div>
                <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
