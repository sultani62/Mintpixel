import React from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "MintPixel delivered a clean, professional website that perfectly represents my handyman services—clients love it!",
    name: "Rahmanudin Rahmani",
    title: "Owner @ Rahmanihandyman.com",
  },
  {
    id: 2,
    quote:
      "Our auto repair site needed speed and clarity—MintPixel nailed it with a fast, modern design that converts.",
    name: "Rahmimullah Rahimi",
    title: "Founder @ Sparkandturbo.com",
  },
  {
    id: 3,
    quote:
      "As a tax professional, I needed trust and simplicity. MintPixel created a sleek, reliable site that reflects my brand.",
    name: "Assadullah Sultani",
    title: "CEO @ Primaxtax.com",
  },
  {
    id: 4,
    quote:
      "From logo to full website, MintPixel gave us a cohesive brand that stands out in the handyman industry.",
    name: "Sebghatullah Rahmani",
    title: "Founder @ Expertbros-handyman.com",
  },
  {
    id: 5,
    quote:
      "Our jewelry store now shines online! The elegant design captures our craftsmanship and attracts premium clients.",
    name: "Hurmatullah Sofizada",
    title: "Creative Director @ Bestgemandjewelry.com",
  },
  {
    id: 6,
    quote:
      "MintPixel transformed our vision into a stunning digital presence—responsive, beautiful, and built to grow with us.",
    name: "Zahra Naderi",
    title: "Founder @ BloomCafeKabul.com",
  },
];

const TestimonialGrid = () => {
  return (
    <div className="px-4 py-12 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl border border-gray-200 text-center"
            >
              {/* Centered stars */}
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-6 line-clamp-4">
                "{testimonial.quote}"
              </p>

              {/* Only name and title — no image */}
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;
