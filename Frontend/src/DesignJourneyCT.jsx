import React from "react";

const DesignJourneyCTA = () => {
  const headshots = [
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      top: "10%",
      left: "85%",
    },
    {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      top: "25%",
      left: "90%",
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      top: "40%",
      left: "75%",
    },
    {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      top: "55%",
      left: "85%",
    },
    {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      top: "70%",
      left: "70%",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      top: "85%",
      left: "80%",
    },
    {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      top: "30%",
      left: "60%",
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      top: "65%",
      left: "95%",
    },
    {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      top: "50%",
      left: "55%",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      top: "20%",
      left: "70%",
    },
  ];

  return (
    <div className="relative w-full py-16 md:py-20 rounded-2xl bg-green-800 text-white overflow-hidden">
      {/* Optional decorative SVG */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 md:opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            d="M45.8,-66.5C59.4,-58.7,73.4,-50.1,80.8,-37.5C88.2,-24.9,89.1,-8.3,84.8,7.3C80.5,22.9,71,37.6,57.3,47.8C43.6,58,25.7,63.8,10.5,63.8C-4.7,63.8,-17.1,58,-28.5,50.6C-39.9,43.2,-50.3,34.2,-57.4,22.3C-64.5,10.4,-68.3,-4.4,-66.7,-18.7C-65.1,-33,-58.1,-46.8,-47.8,-58.2C-37.5,-69.6,-23.9,-78.7,-8.6,-80.6C6.7,-82.5,23.7,-77.2,45.8,-66.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Main Content — Updated for MintPixel */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Launch Your Brand with Professional Design
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-90">
            From stunning websites to eye-catching print materials, we craft
            visuals that elevate your business. Get started with a free
            consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#start-project"
              className="bg-white px-4 py-2 text-black rounded-md font-semibold flex items-center flex-col md:flex-row gap-2"
            >
              Start Your Project
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
            <button className="border border-white text-white px-5 py-3 rounded-md font-semibold hover:bg-white hover:text-green-800 transition w-full sm:w-auto">
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Headshots — kept as-is (optional: replace with project thumbnails later) */}
      <div className="hidden md:block absolute top-0 right-0 w-full h-full pointer-events-none">
        {headshots.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt=""
            className="absolute rounded-full border-2 border-white shadow-lg"
            style={{
              top: item.top,
              left: item.left,
              width: "70px",
              height: "70px",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignJourneyCTA;
