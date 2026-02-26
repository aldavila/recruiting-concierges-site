"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">RC</span>
            </div>
            <span className="font-bold text-lg text-primary">
              Recruiting<span className="text-accent">Concierges</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              How It Works
            </a>
            <a
              href="#roles"
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              Roles
            </a>
            <a
              href="#pricing"
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <a
              href="#how-it-works"
              className="block text-sm text-text-muted hover:text-accent"
              onClick={() => setOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#roles"
              className="block text-sm text-text-muted hover:text-accent"
              onClick={() => setOpen(false)}
            >
              Roles
            </a>
            <a
              href="#pricing"
              className="block text-sm text-text-muted hover:text-accent"
              onClick={() => setOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block text-sm text-text-muted hover:text-accent"
              onClick={() => setOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="block w-full text-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
