import React from "react";

/* ===== Images ===== */
import img1f from "./images/slider/1f.png";
import img1b from "./images/slider/1b.png";

import img2f from "./images/slider/2f.png";
import img2b from "./images/slider/2b.png";

import img3f from "./images/slider/3f.jpg";
import img3b from "./images/slider/3b.jpg";

import img4f from "./images/slider/4f.png";
import img4b from "./images/slider/4b.png";

import img5f from "./images/slider/5f.png";
import img5b from "./images/slider/5b.png";

import img6f from "./images/slider/6f.png";
import img6b from "./images/slider/6b.png";

import img7f from "./images/slider/7f.png";
import img7b from "./images/slider/7b.png";

import img8f from "./images/slider/8f.png";
import img8b from "./images/slider/8b.png";

/* ===== Component ===== */
const InfiniteScrollSlider = () => {
  const images = [
    img1f, img1b,
    img2f, img2b,
    img3f, img3b,
    img4f, img4b,
    img5f, img5b,
    img6f, img6b,
    img7f, img7b,
    img8f, img8b,
  ];

  // duplication for seamless looping
  const loopImages = [...images, ...images, ...images, ...images];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Top Row */}
      <div className="relative mb-8 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex gap-1 animate-loop-top whitespace-nowrap">
          {loopImages.map((src, index) => (
            <img
              key={`top-${index}`}
              src={src}
              alt={`slider-${index}`}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-sm"
              draggable="false"
            />
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex gap-1 animate-loop-bottom whitespace-nowrap">
          {loopImages.map((src, index) => (
            <img
              key={`bottom-${index}`}
              src={src}
              alt={`slider-${index}`}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-sm"
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteScrollSlider;
