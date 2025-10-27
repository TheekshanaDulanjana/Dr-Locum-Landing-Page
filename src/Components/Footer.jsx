import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import DrLocumLogo from "../assets/DrLocum.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#555555] font-[Alata] border-t border-gray-200 py-10 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 text-center lg:text-left">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-center lg:items-start">
            <img src={DrLocumLogo} alt="Dr. Locum Logo" className="w-32 mb-4 mx-auto lg:mx-0" />
            <p className="text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
              Dr. Locum is a smart healthcare staffing platform that connects professionals with trusted locum opportunities and helps providers fill vacancies instantly.
            </p>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col lg:ml-20 items-center lg:items-start">
            <h3 className="text-black text-lg mb-4 font-medium">Connect with us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <FaPhoneAlt className="text-[#0FAEBF]" />
                <a href="tel:0717621100" className="hover:text-[#0FAEBF] transition-colors">071 762 1100</a>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <FaEnvelope className="text-[#0FAEBF]" />
                <a href="mailto:info@drlocum.club" className="hover:text-[#0FAEBF] transition-colors">info@drlocum.club</a>
              </li>
              <li className="flex items-start gap-2 justify-center lg:justify-start">
                <FaMapMarkerAlt className="text-[#0FAEBF] mt-1" />
                <p className="leading-snug">No 20, Courts Junction,<br />Kegalle, Sri Lanka.</p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col lg:ml-20 items-center lg:items-start">
            <h3 className="text-black text-lg mb-4 font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacypolicy" className="hover:text-[#0FAEBF] transition-colors">Privacy Policy</a></li>
              <li><a href="/termsofuse" className="hover:text-[#0FAEBF] transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* App Links */}
          <div className="flex flex-col lg:ml-20 items-center lg:items-start">
            <h3 className="text-black text-lg mb-4 font-medium">App Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://theekshanadulanjana.me" target="_blank" rel="noopener noreferrer" className="hover:text-[#0FAEBF] transition-colors">Locum Provider (Android)</a></li>
              <li><a href="https://theekshanadulanjana.me" target="_blank" rel="noopener noreferrer" className="hover:text-[#0FAEBF] transition-colors">Locum Provider (iOS)</a></li>
              <li><a href="https://theekshanadulanjana.me" target="_blank" rel="noopener noreferrer" className="hover:text-[#0FAEBF] transition-colors">Locum Seeker (Android)</a></li>
              <li><a href="https://theekshanadulanjana.me" target="_blank" rel="noopener noreferrer" className="hover:text-[#0FAEBF] transition-colors">Locum Seeker (iOS)</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 w-full pt-5 text-center text-sm text-[#555555] mt-10">
          Copyright © {new Date().getFullYear()} Dr Locum. All Rights Reserved. by{" "}
          <a href="https://glamermedia.com.au/" target="_blank" rel="noopener noreferrer" className="text-[#555555] hover:text-black transition-colors">
            Glamer Media
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
