// src/components/StartProjectForm.jsx
import React, { useState } from "react";

// Define backend URL
const BACKEND_URL = import.meta.env.PROD
  ? "https://mintpixel-1.onrender.com"
  : "http://localhost:5000";

const StartProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    timeline: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      console.log("Submitting form to:", `${BACKEND_URL}/send-email`);
      console.log("Form data:", formData);

      const response = await fetch(`${BACKEND_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      let data;
      try {
        data = await response.json();
        console.log("Response data:", data);
      } catch (parseError) {
        console.error("Failed to parse JSON:", parseError);
        throw new Error("Invalid server response");
      }

      // Check both success flag and message
      if (data.success === true || data.message === "Email sent successfully") {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: "",
          timeline: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus("error");
        console.error("Server error:", data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "Custom Website Design",
    "Brand Identity",
    "Print & Packaging",
    "Digital Advertising",
    "UI/UX Excellence",
    "Creative Direction",
    "Other",
  ];

  const timelines = ["ASAP", "1-2 Weeks", "1 Month", "2+ Months", "Flexible"];
  const budgets = [
    "Under $1k",
    "$1k - $3k",
    "$3k - $7k",
    "$7k+",
    "Not sure yet",
  ];

  return (
    <div
      id="start-project"
      className="w-full bg-black text-white rounded-lg py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Start Your Project
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Share your vision. We'll craft a tailored solution and respond
            within 24 hours.
          </p>
        </div>

        {status === "success" && (
          <div className="mb-8 p-5 bg-emerald-900/30 border border-emerald-800 rounded-xl text-center">
            ✅ Thank you! Your project brief has been received.
          </div>
        )}
        {status === "error" && (
          <div className="mb-8 p-5 bg-rose-900/30 border border-rose-800 rounded-xl text-center">
            ❌ Failed to send. Please check your connection and try again.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="you@company.com"
              />
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Service Needed *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white appearance-none"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Preferred Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white appearance-none"
              >
                <option value="">Choose option</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget - spans full width on all screens */}
            <div className="md:col-span-2">
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Estimated Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white appearance-none"
              >
                <option value="">Share your budget range (optional)</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Describe your goals, target audience, inspiration, or any specific requirements..."
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-white resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-all disabled:opacity-70 disabled:cursor-not-allowed text-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending Brief…
              </span>
            ) : (
              "Submit Project Request"
            )}
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            We respect your privacy. Your data will only be used to contact you
            about this project.
          </p>
        </form>
      </div>
    </div>
  );
};

export default StartProjectForm;
