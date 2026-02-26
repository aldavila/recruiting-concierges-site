export default function Stats() {
  const stats = [
    { value: "72hrs", label: "Average time to first candidate" },
    { value: "200+", label: "Pre-screened LATAM engineers" },
    { value: "50%", label: "Average cost savings vs US hires" },
    { value: "6mo", label: "Replacement guarantee" },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2">
                {s.value}
              </p>
              <p className="text-sm text-text-muted font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
