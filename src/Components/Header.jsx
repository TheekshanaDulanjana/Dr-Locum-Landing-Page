import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/DrLocum.png";

const Header = () => {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id) => {
    navigate("/"); 
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 800 && currentScrollY > lastScrollY) {
        // Scrolling down past 800px
        setShowHeader(false);
      } else {
        // Scrolling up or less than 800px
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 px-4 flex items-center justify-between rounded-full max-w-6xl mx-auto mt-6 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo - acts as HOME */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        <img src={Logo} alt="Locum Logo" className="h-7 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="hidden font-alata md:flex space-x-10 text-black font-medium">
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-[#0FAEBF] cursor-pointer transition"
        >
          About Us
        </button>
        <button
          onClick={() => scrollToSection("features")}
          className="hover:text-[#0FAEBF] cursor-pointer transition"
        >
          Features
        </button>
        <button
          onClick={() => scrollToSection("faq")}
          className="hover:text-[#0FAEBF] cursor-pointer transition"
        >
          FAQ
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-[#0FAEBF] cursor-pointer transition"
        >
          Contact
        </button>
      </nav>

      {/* Download Button */}
      <button
        onClick={() => scrollToSection("download")}
        className="bg-[#0FAEBF] w-35 font-alata text-white px-4 py-2 rounded-full hover:scale-105 cursor-pointer transition"
      >
        Download
      </button>
    </header>
  );
};

export default Header;
