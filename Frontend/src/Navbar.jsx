// File: src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "./images/Logo.svg"; // Adjust path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6">
      <div className="mt-5 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 bg-slate-50 rounded-lg px-4 sm:px-6">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="h-10" />
          </div>

          {/* Desktop Navigation & Button */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-5">
              <a
                href="#overview"
                className="text-sm hover:text-green-800 transition"
              >
                Overview
              </a>
              <a
                href="#curriculum"
                className="text-sm hover:text-green-800 transition"
              >
                Curriculum
              </a>
              <a
                href="#instructor"
                className="text-sm hover:text-green-800 transition"
              >
                Instructor
              </a>
              <a
                href="#testimonials"
                className="text-sm hover:text-green-800 transition"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-sm hover:text-green-800 transition"
              >
                FAQ
              </a>
              <a
                href="#pricing"
                className="text-sm hover:text-green-800 transition"
              >
                Pricing
              </a>
            </nav>
            <a
                href="#start-project"
                className="bg-green-800 px-4 py-2 text-white text-center rounded-md font-semibold flex flex-col items-center md:flex-row gap-2 "
              >
                Start Now
                <span className="bg-white text-black p-1 rounded-lg hidden md:flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-slate-50 rounded-lg px-4 py-4 shadow-lg">
            <div className="flex flex-col gap-3 mb-4">
              <a
                href="#overview"
                className="text-sm hover:text-green-800 transition py-1"
                onClick={() => setIsOpen(false)}
              >
                Overview
              </a>
              <a
                href="#curriculum"
                className="text-sm hover:text-green-800 transition py-1"
                onClick={() => setIsOpen(false)}
              >
                Curriculum
              </a>
              <a
                href="#instructor"
                className="text-sm hover:text-green-800 transition py-1"
                onClick={() => setIsOpen(false)}
              >
                Instructor
              </a>
              <a
                href="#testimonials"
                className="text-sm hover:text-green-800 transition py-1"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-sm hover:text-green-800 transition py-1"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#pricing"
                className="text-sm hover:text-green-800 transition py-1"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
            </div>
            <button
              className="w-full bg-green-800 px-3 py-2 text-white rounded-md font-semibold flex items-center justify-center gap-1"
              onClick={() => setIsOpen(false)}
            >
              Start Now
              <span className="bg-white rounded-lg text-black p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
