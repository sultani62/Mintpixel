import React, { useEffect, useState, useRef } from "react";

import img1 from "./images/Hero/autotint.JPG";
import img2 from "./images/Hero/handyman.JPG";
import img3 from "./images/Hero/jewelry.JPG";
import Icon1 from "./images/Sslider/ss-1.webp";
import Icon2 from "./images/Sslider/ss-2.webp";
import Icon3 from "./images/Sslider/ss-3.webp";
import Icon4 from "./images/Sslider/ss-4.webp";
import Icon5 from "./images/Sslider/ss-5.webp";
import overview from "./images/GD-GG.webp";
import james from "./images/picture-2.png";
import TestimonialGrid from "./TestimonialGrid";
import FeatureCardsSection from "./FeatureCardsSection";
import TestimonialSlider from "./TestimonialSlider";
import FAQSection from "./FAQSection";
import DesignJourneyCTA from "./DesignJourneyCT";
import Footer from "./Footer";
import Navbar from "./Navbar";
import StartProjectForm from "./StartProjectForm";

const originalSlides = [
  {
    image: img1,
    title: "Sunblockautotint.com",
    description: "@Mintpixel",
  },
  {
    image: img2,
    title: "rahmanihandyman.com",
    description: "@Mintpixel",
  },
  {
    image: img3,
    title: "bestjewelryandgems.com",
    description: "Ecommerce @Mintpixel",
  },
  {
    image: img1,
    title: "Sunblockautotint.com",
    description: "@Mintpixel",
  },
  {
    image: img2,
    title: "rahmanihandyman.com",
    description: "@Mintpixel",
  },
  {
    image: img3,
    title: "bestjewelryandgems.com",
    description: "Ecommerce @Mintpixel",
  },
];

export default function Hero() {
  const icons = [Icon1, Icon2, Icon3, Icon4, Icon5];
  const [play, setPlay] = useState(false);
  const videoId = "8AHPXm9Y6mI";

  // Add a clone of the first slide at the end for seamless looping
  const slides = [...originalSlides, originalSlides[0]];

  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const firstSlideRef = useRef(null);

  const transitionDuration = 1200; // 1.2s animation
  const gapBetweenSlides = 2000; // 2s gap AFTER animation

  // 🔹 Preload images
  useEffect(() => {
    originalSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // 🔹 Measure slide width (including gap)
  useEffect(() => {
    const updateWidth = () => {
      if (firstSlideRef.current) {
        const width = firstSlideRef.current.offsetWidth;
        const gap = 16; // matches your `gap-4` → 16px
        setSlideWidth(width + gap);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // 🔹 Handle seamless loop: when reaching the clone, instantly reset to 0
  useEffect(() => {
    if (index === originalSlides.length) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
        // Re-enable transitions after a tiny sync delay
        setTimeout(() => setIsTransitioning(true), 50);
      }, transitionDuration);

      return () => clearTimeout(resetTimer);
    }
  }, [index, originalSlides.length, transitionDuration]);

  // 🔹 Auto-slide every (gap + transition) ms
  useEffect(() => {
    if (originalSlides.length <= 1) return;

    const intervalId = setInterval(() => {
      setIndex((prev) => {
        if (prev >= originalSlides.length - 1) {
          // Go to the cloned slide (index = originalSlides.length)
          return originalSlides.length;
        }
        return prev + 1;
      });
    }, gapBetweenSlides + transitionDuration);

    return () => clearInterval(intervalId);
  }, [originalSlides.length, gapBetweenSlides, transitionDuration]);

  return (
    <div className="">
      <Navbar />
      <div>
        <div className="w-full min-h-screen  flex flex-col md:flex-row bg-black relative overflow-hidden">
          {/* 🔹 Left: Text Content */}
          <div className="text-white w-full  lg:w-6/12 mt-24 lg:mt-40 px-6 md:px-0 lg:ml-20 space-y-6 lg:space-y-8">
          
            <h1
              className="text-3xl text-center md:text-left sm:text-4xl lg:text-6xl font-bold leading-tight
  break-word
  max-w-full"
            >
              Master Web & Graphic Design From Scratch
            </h1>
            <p className="text-base md:text-lg text-center md:text-left">
              The only web & graphic design platform you need to be among top 1%
              designers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
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
              <a
                href="https://wa.me/93745111070"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-4 py-2 text-black rounded-md font-semibold w-full sm:w-auto text-center"
              >
                Contact Now
              </a>
            </div>

            <div className="flex gap-4  mt-4">
              <span className="flex gap-2 items-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25ZM15.75 10.5l4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72Z" />
                </svg>
                ONLINE
              </span>
              <span className="flex gap-2 items-center">
                <div className="bg-white rounded-md p-1">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.5 12.75 10.5 18.75 19.5 5.25" />
                  </svg>
                </div>
                WEBDESIGN
              </span>
              <span className="flex gap-2 items-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043C14.39 20.37 13.268 21 12 21ZM9 12.75 11.25 15 15 9.75" />
                </svg>
                PLATEFORM
              </span>
            </div>
          </div>

          {/* 🔹 Right: Slider */}
          {/* 🔹 Right: Slider */}
          <div className="w-full lg:w-6/12 flex items-center justify-center mt-12 md:mt-0 px-6 lg:px-8">
            {/* Slider Viewport — clips overflow */}
            <div className="relative w-full max-w-4xl overflow-hidden">
              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent pointer-events-none z-20" />
              {/* Right fade gradient */}
              <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-20" />

              {/* Slider Track */}
              <div
                className="flex gap-6 h-96 items-center"
                style={{
                  transform: `translateX(-${index * (320 + 24)}px)`, // 320 = w-80, 24 = gap-6 in px
                  transition: isTransitioning
                    ? `transform ${transitionDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`
                    : "none",
                  width: "fit-content", // Critical: don't use 100% * n
                }}
              >
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="relative flex-shrink-0 w-80 h-96 rounded-lg overflow-hidden"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-2 right-2 text-white text-center bg-black bg-opacity-30 p-2 rounded-md">
                      <p className="text-lg font-semibold">{slide.title}</p>
                      <p className="text-sm">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-20  px-1 text-xl w-full lg:-mt-10 bg-black items-center pb-20">
          <h1 className="text-zinc-500 whitespace-nowrap mr-6 mb-5">
            FEATURED ON
          </h1>
          <div className="overflow-hidden flex-1 min-w-0 relative">
            {/* Inner shadow overlay (left) */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            {/* Inner shadow overlay (right) */}
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

            <div className="flex animate-marquee whitespace-nowrap relative z-0">
              {[...icons, ...icons].map((icon, idx) => (
                <div key={idx} className="mx-8 flex-shrink-0">
                  <img src={icon} alt="" className="h-20" />
                </div>
              ))}
            </div>

            <style jsx global>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-marquee {
                display: flex;
                width: max-content;
                animation: marquee 15s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-10 w-full min-h-screen flex flex-col md:flex-row md:space-x-5 pt-10 sm:pt-20 bg-slate-100">
        {/* Left Column: Headline + CTA + Features */}
        <div className="w-full md:w-1/3 space-y-6 md:space-y-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Your all-in-one web & graphic design platform to join the top 1%.
          </h1>
          <div className="flex flex-col sm:flex-row gap-3">
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
            <a
              href="https://wa.me/93745111070"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-4 py-2 text-black rounded-md font-semibold w-full sm:w-auto text-center"
            >
              Contact Now
            </a>
          </div>
          <ul className="pl-6 md:pl-10 text-slate-800 space-y-4 md:space-y-6">
            {[
              "Deliver digital solutions from planning to building business websites.",
              "Create professional branding projects using modern tools for business growth.",
              "Provide services for web design projects, including layout optimization.",
              "Receive support to improve your brand presence.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start">
                <img
                  src="/Icon.png"
                  alt=""
                  className="mr-2 mt-0.5 w-5 h-5 flex-shrink-0"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Column: Image */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-center">
          <div className="w-full max-w-md rounded-xl overflow-hidden">
            <img
              src={overview}
              alt="Course overview"
              className="w-full h-5/6 rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Right Column: Feature Boxes */}
        <div className="w-full md:w-1/3  mt-10 md:mt-0 px-2 md:px-5 space-y-8 flex flex-col items-center text-center">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              ),
              title: "Your Vision",
              description:
                "Work directly with expert designers to create stunning visuals and receive quick, accurate revisions.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              ),
              title: "Expertly Crafted",
              description:
                "We bring your vision to life with real-world designs crafted to elevate your brand and showcase your identity",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              ),
              title: "Built for Your Brand",
              description:
                "Get tailored creative direction and support from seasoned designers to bring your vision to life and strengthen your brand.",
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-3">
              <span className="bg-green-800 text-white p-1.5 rounded-full inline-flex items-center justify-center">
                {item.icon}
              </span>
              <h3 className="font-semibold text-lg md:text-xl">{item.title}</h3>
              <p className="text-slate-800">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-10 bg-slate-100 px-4 sm:px-6">
        {/* Full-width, responsive aspect-ratio container */}
        <div className="relative w-full rounded-xl overflow-hidden bg-black shadow-xl aspect-video">
          {!play ? (
            <>
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="YouTube Thumbnail"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://img.youtube.com/vi/0/hqdefault.jpg";
                }}
              />
              <button
                onClick={() => setPlay(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30"
                aria-label="Play video"
              >
                <div className="w-16 h-12 sm:w-[68px] sm:h-[48px] bg-red-600 rounded-xl flex items-center justify-center shadow-lg hover:bg-red-700 transition transform hover:scale-105">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-0.5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-10 w-full min-h-screen pt-10 pb-20 bg-slate-100">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="bg-green-800 py-1 px-3 inline-flex text-white rounded-full text-lg font-medium">
            Why MintPixel Designs ?
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-4">
            Why you should choose us
          </h1>
        </div>

        {/* Responsive Grid */}
        <div className="mt-16 w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                ),
                title: "High-Value Results",
                description:
                  "Our designs deliver strong visual impact and measurable returns—elevating your brand with premium quality and professional polish.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                ),
                title: "Growth-Driven Design",
                description:
                  "From startups to global brands, our scalable solutions help your business evolve, expand, and stand out at every stage",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                ),
                title: "No Barriers, Just Brilliance",
                description:
                  "Great design isn’t about credentials—it’s about creativity, clarity, and craft. We bring all three to your brand.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                ),
                title: "Remote-Ready Creativity",
                description:
                  "Our team delivers top-tier design—anywhere, anytime—so your brand stays sharp without borders or delays.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                    />
                  </svg>
                ),
                title: "Always in Demand",
                description:
                  "From startups to global brands, powerful visuals are essential—your business deserves design that’s sought after and trusted.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                    />
                  </svg>
                ),
                title: "Design That Makes an Impact",
                description:
                  "Every poster, website, and brand element we create is crafted to resonate—leaving a lasting impression on your audience.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="bg-white text-green-800 p-2 rounded-full inline-flex items-center justify-center border border-violet-200 flex-shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 w-full min-h-screen bg-slate-100 flex items-center">
        <div className="bg-black rounded-xl w-full overflow-hidden">
          {/* Flexible layout: column on mobile, row on md+ */}
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10">
              <img
                src={james}
                alt="James Martinez"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6 md:p-10 text-white space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                MintPixel Team
              </h1>
              <p className="text-base sm:text-lg">
                The MintPixel Team is a collective of seasoned graphic and web
                designers with over a decade of experience crafting bold,
                results-driven visuals for global brands, startups, and creative
                entrepreneurs worldwide.
              </p>
              <p className="text-base sm:text-lg">
                Passionate about turning ideas into impactful designs, we
                deliver polished, professional work—from business cards and
                posters to full websites—on time, every time, with precision,
                care, and creative excellence.
              </p>

              {/* Stats */}
              <div className="space-y-6">
                {[
                  {
                    icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
                    label: "4.5 Client Rating",
                  },
                  {
                    icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
                    label: "500+ Projects Delivered",
                  },
                  {
                    icon: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z",
                    label: "120+ Brands Served",
                  },
                ].map((item, idx) => (
                  <h2 key={idx} className="flex items-center gap-3 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="size-6 text-green-800"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                    {item.label}
                  </h2>
                ))}
              </div>

              {/* Brands Educated / Marquee */}
              <div className="pt-8 border-t border-gray-800">
                <h2 className="text-zinc-500 text-sm sm:text-base mb-4">
                  BRANDS DESIGNED
                </h2>
                <div className="overflow-hidden relative">
                  <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
                  <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
                  <div className="flex animate-marquee whitespace-nowrap">
                    {[...icons, ...icons].map((icon, idx) => (
                      <div
                        key={idx}
                        className="mx-4 sm:mx-6 flex-shrink-0 flex items-center"
                      >
                        <img src={icon} alt="" className="h-6 sm:h-8" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 py-20 w-full h-full bg-slate-100 space-y-10 flex flex-col justify-center items-center">
        <div className="text-center max-w-2xl ">
          <div className="flex justify-center  pt-0">
            {" "}
            {/* pt-24 removed — vertical centering handles spacing */}
            <p className="bg-green-800 py-1 px-3 inline-flex text-white rounded-full text-lg">
              Client Stories
            </p>
          </div>
          <h1 className="text-center text-4xl font-bold my-6">
            We’ve Designed for Brands Like Google, Nike, and Duolingo
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Our clients mean everything to us, and we’re proud to have delivered
            standout visual identities for NASA, Google, Revolut, and other
            inspiring teams worldwide.
          </p>
          <div className="flex gap-4 justify-center">
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
             <a
              href="https://wa.me/93745111070"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-4 py-2 text-black rounded-md font-semibold  sm:w-auto text-center"
            >
              Contact Now
            </a>
          </div>
        </div>
        <TestimonialGrid />
      </div>
      <div className="px-2 py-20 w-full h-full bg-slate-100 flex flex-col justify-center items-center">
        <div className="text-center max-w-lg">
          <h1 className="text-center text-5xl font-bold my-6">
            Launch Your Brand with Professional Design!
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Say goodbye to generic templates and DIY struggles. In just days,
            you’ll have a standout visual identity crafted by experts.
          </p>
          <div className="flex gap-4 justify-center">
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
                  className=""
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </a>
           <a
              href="https://wa.me/93745111070"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-4 py-2 text-black rounded-md font-semibold  sm:w-auto text-center"
            >
              Contact Now
            </a>
          </div>
        </div>
        <FeatureCardsSection />
      </div>
      <div className="px-10 w-full h-screen bg-white flex flex-col items-center pt-20">
        {/* Content Section: Centered vertically stacked */}
        <div className="text-center max-w-2xl">
          <p className="bg-green-800 py-1 px-3 inline-block text-white rounded-full text-lg mb-6">
            Creative Network
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join a Global Community of Visionary Brands
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            MintPixel connects you with forward-thinking businesses and
            creatives from 150+ countries—collaborating to shape the future of
            design, together.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-green-800 px-6 py-3 text-white rounded-md font-semibold flex items-center gap-2">
              Join Community
              <span className="bg-white text-black p-1 rounded-lg flex items-center justify-center">
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
            </button>
          </div>
        </div>

        {/* Slider Section: Full width, with top margin */}
        <div className="w-full mt-12 flex-shrink-0">
          <TestimonialSlider />
        </div>
      </div>
      <div></div>
      <div className="px-2 py-20 w-full h-full mt-20 bg-slate-100 flex flex-col justify-center items-center">
        <div className="text-center max-w-lg">
          <h1 className="text-center text-5xl font-bold my-6">
            Frequently asked questions
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Have questions about working with us? We’re here to clarify
            everything—from timelines and pricing to how we bring your brand
            vision to life with precision and creativity.
          </p>
          <div className="flex gap-4 justify-center">
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
            <a
              href="https://wa.me/93745111070"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-4 py-2 text-black rounded-md font-semibold  sm:w-auto text-center"
            >
              Contact Now
            </a>
          </div>
        </div>
        <FAQSection />
      </div>
      <div className=" bg-slate-100 flex rounded-3xl p-2 overflow-hidden justify-center items-center">
        <StartProjectForm />
      </div>
      <div className=" bg-slate-100 flex rounded-3xl p-2 overflow-hidden justify-center items-center">
        <DesignJourneyCTA />
      </div>
      <div className=" bg-slate-100 flex rounded-3xl p-2 overflow-hidden justify-center items-center">
        <Footer />
      </div>
    </div>
  );
}
