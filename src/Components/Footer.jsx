import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import DrLocumLogo from "../assets/DrLocum.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#555555] font-[Alata] border-t border-gray-200 py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full text-center md:text-left">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={DrLocumLogo}
              alt="Dr. Locum Logo"
              className="w-30 mb-4"
            />
            <p className="text-sm leading-relaxed max-w-xs text-center md:text-justify">
              Dr. Locum is a smart healthcare staffing platform that connects
              professionals with trusted locum opportunities and helps providers
              fill vacancies instantly.
            </p>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-black text-lg mb-4 font-medium">
              Connect with us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaPhoneAlt className="text-[#0FAEBF]" />
                <a
                  href="tel:0717621100"
                  className="hover:text-[#0FAEBF] transition-colors"
                >
                  071 762 1100
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope className="text-[#0FAEBF]" />
                <a
                  href="mailto:travelmolanka@gmail.com"
                  className="hover:text-[#0FAEBF] transition-colors"
                >
                  travelmolanka@gmail.com
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2">
                <FaMapMarkerAlt className="text-[#0FAEBF] mt-1" />
                <p className="leading-snug">
                  No 20, Courts Junction, <br /> Kegalle, Sri Lanka.
                </p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-black text-lg mb-4 font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/policy"
                  className="hover:text-[#0FAEBF] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/termsofuse"
                  className="hover:text-[#0FAEBF] transition-colors"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* App Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-black text-lg mb-4 font-medium">App Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://theekshanadulanjana.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0FAEBF] transition-colors"
                >
                  Locum Provider (Android)
                </a>
              </li>
              <li>
                <a
                  href="https://theekshanadulanjana.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0FAEBF] transition-colors"
                >
                  Locum Provider (iOS)
                </a>
              </li>
              <li>
                <a
                  href="https://theekshanadulanjana.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0FAEBF] transition-colors"
                >
                  Locum Seeker (Android)
                </a>
              </li>
              <li>
                <a
                  href="https://theekshanadulanjana.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0FAEBF] transition-colors"
                >
                  Locum Seeker (iOS)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 w-full pt-5 text-center text-sm text-[#555555]">
        Copyright © {new Date().getFullYear()} Dr Locum. All Rights Reserved. by{" "}
        <a
            href="https://glamermedia.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555555] hover:text-black transition-colors"
        >
            Glamer Media
        </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
