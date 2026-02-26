export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Tell us what you need",
      desc: "Share your role requirements, tech stack, and team culture. We learn your business so we match on more than just keywords.",
      highlight: "15-minute intake call",
    },
    {
      num: "02",
      title: "We source & vet",
      desc: "Our bilingual team taps a 200+ pre-screened LATAM talent network. Every candidate passes technical screens, English fluency checks, and culture fit interviews.",
      highlight: "72-hour turnaround",
    },
    {
      num: "03",
      title: "You interview the best",
      desc: "We present 2 to 3 top candidates with detailed profiles. You interview only the ones worth your time. No resume spam.",
      highlight: "Curated shortlist",
    },
    {
      num: "04",
      title: "Hire & onboard seamlessly",
      desc: "We handle contracts, payroll through Deel, and onboarding logistics. Your new engineer starts contributing from day one.",
      highlight: "Full ops support",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
            From brief to first hire in under two weeks
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            We do the heavy lifting. You make the final call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover-lift h-full">
                <span className="text-5xl font-extrabold text-accent/10 absolute top-4 right-6">
                  {s.num}
                </span>
                <div className="relative">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {s.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {s.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
