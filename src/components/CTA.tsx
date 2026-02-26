"use client";

import { useState } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // FormSubmit.co forwards to hello@recruitingconcierges.com
      data.append("_cc", "Optionalholding@gmail.com");
      const res = await fetch("https://formsubmit.co/ajax/hello@recruitingconcierges.com", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      // Fallback: mailto
      const name = data.get("name");
      const email = data.get("email");
      const role = data.get("role");
      const message = data.get("message");
      window.location.href = `mailto:hello@recruitingconcierges.com?subject=New Inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0ARole: ${role}%0A%0A${message}`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-gradient-to-br from-accent via-blue-700 to-purple-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
              Ready to build your
              <br />
              dream engineering team?
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Tell us about the role you need filled. We&apos;ll get back to you
              within 24 hours with a game plan and your first candidates within
              72 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Email us directly</p>
                  <a
                    href="mailto:hello@recruitingconcierges.com"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    hello@recruitingconcierges.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Book a call</p>
                  <p className="text-blue-200">15-minute intro, no strings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 text-text">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  We&apos;re on it!
                </h3>
                <p className="text-text-muted">
                  Expect to hear from us within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">
                    Work email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">
                    Role you&apos;re hiring for
                  </label>
                  <input
                    type="text"
                    name="role"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    placeholder="Senior React Native Developer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">
                    Tell us more (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                    placeholder="Team size, tech stack, timeline..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Get Your Candidates →"}
                </button>
                <p className="text-xs text-text-muted text-center">
                  No commitment. No spam. Just candidates.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
