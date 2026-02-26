export default function Problem() {
  const problems = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Months to hire",
      desc: "US engineering roles take 3 to 6 months to fill. Every empty seat costs you velocity.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "$150K+ per engineer",
      desc: "US senior developers command $150K to $200K all in. That budget only stretches so far.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
          />
        </svg>
      ),
      title: "Bad hires happen",
      desc: "Offshore gambles lead to communication gaps, timezone mismatches, and rework.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
            Scaling a dev team shouldn&apos;t feel like this
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Most companies face the same painful tradeoff: pay US rates or
            gamble on offshore quality. There&apos;s a better path.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-red-50/60 border border-red-100 rounded-2xl p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-xl mb-5">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
