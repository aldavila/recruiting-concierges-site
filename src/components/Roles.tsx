export default function Roles() {
  const roles = [
    {
      title: "React / React Native",
      desc: "Frontend and mobile engineers with production experience shipping to the App Store and Google Play.",
      hot: true,
    },
    {
      title: "UX / UI Designers",
      desc: "Figma experts who think in user flows, not just pixels. Research, wireframes, and high-fidelity design.",
      hot: true,
    },
    {
      title: "Node.js / Backend",
      desc: "API architects, microservices builders, and database specialists. REST, GraphQL, PostgreSQL, MongoDB.",
      hot: false,
    },
    {
      title: "Full-Stack Engineers",
      desc: "Versatile developers comfortable across the stack. Next.js, Express, TypeScript, cloud infrastructure.",
      hot: false,
    },
    {
      title: "DevOps / Cloud",
      desc: "AWS, GCP, Azure. CI/CD pipelines, containerization, infrastructure as code, and monitoring.",
      hot: false,
    },
    {
      title: "QA Engineers",
      desc: "Manual and automated testing. Cypress, Playwright, Jest. Ship with confidence.",
      hot: false,
    },
  ];

  return (
    <section id="roles" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Roles We Fill
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
            From frontend to infrastructure
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            We specialize in placing engineers across the modern tech stack.
            If you need it built, we have someone who can build it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div
              key={r.title}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover-lift relative"
            >
              {r.hot && (
                <span className="absolute top-4 right-4 px-2.5 py-0.5 bg-orange-100 text-orange-700 text-xs font-bold rounded-full uppercase">
                  🔥 High Demand
                </span>
              )}
              <h3 className="text-lg font-bold text-primary mb-2">
                {r.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-text-muted">
            Don&apos;t see your role?{" "}
            <a href="#contact" className="text-accent font-semibold underline">
              Tell us what you need
            </a>{" "}
            &mdash; if the talent exists in LATAM, we&apos;ll find it.
          </p>
        </div>
      </div>
    </section>
  );
}
