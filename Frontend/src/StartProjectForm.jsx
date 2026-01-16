import React, { useState } from "react";

// Hardcode the URL - No env variables
const BACKEND_URL = "https://mintpixel-1.onrender.com";

const StartProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", service: "", timeline: "", budget: "", message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // SIMPLE FETCH - no complications
      const response = await fetch(`${BACKEND_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Get the response text
      const text = await response.text();
      console.log("Server response:", text);

      // Try to parse as JSON, but handle if it's not
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = { success: false, message: "Invalid response from server" };
      }

      // Check if successful
      if (data.success || data.message?.includes("success")) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "", timeline: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Keep your existing form UI exactly as it is
  return (
    <div id="start-project" className="w-full bg-black text-white rounded-lg py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Start Your Project
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Share your vision. We'll craft a tailored solution and respond within 24 hours.
          </p>
        </div>

        {status === "success" && (
          <div className="mb-8 p-5 bg-emerald-900/30 border border-emerald-800 rounded-xl text-center">
            ✅ Thank you! Your project brief has been received.
          </div>
        )}
        {status === "error" && (
          <div className="mb-8 p-5 bg-rose-900/30 border border-rose-800 rounded-xl text-center">
            ❌ Failed to send. Please try again.
          </div>
        )}

        {/* YOUR EXISTING FORM HTML - DON'T CHANGE */}
        <form onSubmit={handleSubmit} className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Service Needed *</label>
              <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-white">
                <option value="">Select a service</option>
                <option>Custom Website Design</option>
                <option>Brand Identity</option>
                <option>Print & Packaging</option>
                <option>Digital Advertising</option>
                <option>UI/UX Excellence</option>
                <option>Creative Direction</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Timeline</label>
              <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-white">
                <option value="">Choose option</option>
                <option>ASAP</option>
                <option>1-2 Weeks</option>
                <option>1 Month</option>
                <option>2+ Months</option>
                <option>Flexible</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">Estimated Budget</label>
              <select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-white">
                <option value="">Share your budget range (optional)</option>
                <option>Under $1k</option>
                <option>$1k - $3k</option>
                <option>$3k - $7k</option>
                <option>$7k+</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white" placeholder="Describe your goals..."></textarea>
          </div>
          <button type="submit" disabled={loading} className="w-full py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition disabled:opacity-70 text-lg">
            {loading ? "Sending Brief..." : "Submit Project Request"}
          </button>
          <p className="text-center text-xs text-gray-500 mt-4">We respect your privacy. Your data will only be used to contact you about this project.</p>
        </form>
      </div>
    </div>
  );
};

export default StartProjectForm;