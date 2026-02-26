export default function LogoBar() {
  return (
    <section className="py-10 border-y border-gray-100 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-text-muted mb-6 uppercase tracking-wider">
          Our engineers work with teams using
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-50">
          {[
            "React",
            "React Native",
            "Node.js",
            "TypeScript",
            "Python",
            "AWS",
            "Figma",
            "PostgreSQL",
          ].map((tech) => (
            <span
              key={tech}
              className="text-lg font-bold text-gray-400 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
