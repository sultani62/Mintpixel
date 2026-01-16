import React from "react";
import website from "./images/CardImages/card-1.avif";
import branding from "./images/CardImages/card-2.avif";
import printImg from "./images/CardImages/card-3.jpg";
import ads from "./images/CardImages/card-4.avif";
import ui from "./images/CardImages/card-5.avif";
import strategy from "./images/CardImages/card-6.avif";

const serviceImages = {
  website,
  branding,
  print: printImg,
  ads,
  ui,
  strategy,
};
const FeatureCardsSection = () => {
  const featureCards = [
    {
      title: "Custom Website Design",
      description:
        "Stunning, responsive websites built to convert visitors and reflect your brand identity.",
      image: serviceImages.website,
    },
    {
      title: "Brand Identity",
      description:
        "Complete visual branding including logos, color palettes, and typography that define your business.",
      image: serviceImages.branding,
    },
    {
      title: "Print & Packaging",
      description:
        "Eye-catching brochures, posters, business cards, and packaging designed for real-world impact.",
      image: serviceImages.print,
    },
    {
      title: "Digital Advertising",
      description:
        "High-converting social media ads, banners, and digital campaigns tailored to your audience.",
      image: serviceImages.ads,
    },
    {
      title: "UI/UX Excellence",
      description:
        "Intuitive, user-friendly interfaces that enhance engagement and streamline customer journeys.",
      image: serviceImages.ui,
    },
    {
      title: "Creative Direction",
      description:
        "Strategic design guidance to align your visuals with business goals and market trends.",
      image: serviceImages.strategy,
    },
  ];

  const statsCards = [
    { label: "Projects", value: "500+" },
    { label: "Clients", value: "120+" },
    { label: "Brands", value: "120+" },
    { label: "Years", value: "5+" },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-slate-100">
      {/* Top Row: 6 Feature Cards */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile: flex-col | Desktop: flex-row in groups of 3 */}
        <div className="space-y-8 md:space-y-0 md:flex md:flex-wrap md:justify-center md:gap-6 mb-12">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-xs md:max-w-none md:w-3/12"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="h-48 w-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-sm text-center flex-1">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
