import React from "react";
import Logo from "./images/CardImages/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-0 w-full rounded-xl">
      {" "}
      {/* Full width */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-5">
        {" "}
        {/* Content centered inside */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column — Only logo and tagline */}
          <div>
            <div className="flex items-center mb-4">
              <img src={Logo} alt="MintPixel" className="size-20" />
            </div>
            <p className="text-base leading-relaxed text-gray-300 max-w-[260px]">
              Professional design studio crafting websites, brands, and print
              materials that make your business stand out.
            </p>
          </div>

          {/* Right Columns */}
          <div className="md:col-span-3 flex justify-end space-x-8">
            {/* Services */}
            <div className="text-right">
              <h3 className="text-base font-semibold text-green-300 mb-5">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Website Design",
                  "Brand Identity",
                  "Print & Packaging",
                  "Digital Ads",
                  "UI/UX Design",
                  "Creative Direction",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base text-gray-300 hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="text-right">
              <h3 className="text-base font-semibold text-green-300 mb-5">
                Follow Us
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Facebook", href: "https://facebook.com/yourpage" },
                  { name: "Twitter", href: "https://twitter.com/yourhandle" },
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com/in/yourprofile",
                  },
                  {
                    name: "Instagram",
                    href: "https://instagram.com/yourhandle",
                  },
                ].map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-300 hover:text-white transition"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-right">
              <h3 className="text-base font-semibold text-green-300 mb-5">
                Contact
              </h3>
              <ul className="space-y-3">
                {[
                  "info@mintpixeldesigns.com",
                  "+93 74 511 1070",
                  "Kabul, Afghanistan",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.includes("@") ? `mailto:${item}` : "#"}
                      className="text-base text-gray-300 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
