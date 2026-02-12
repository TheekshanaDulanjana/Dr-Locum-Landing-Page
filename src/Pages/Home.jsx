import React from "react";
import Mobile from "../assets/Mobile.png";

import LocumServicesComponents from "../Components/LocumServicesComponents";
import LocumCategoryComponents from "../Components/LocumCategoryComponents";
import BannerMessageComponent from "../Components/BannerMessageComponent";
import NotificationComponent01 from "../Components/NotificationComponent01";
import NotificationComponent02 from "../Components/NotificationComponent02";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex w-full min-h-[600px] md:h-screen flex-col items-center justify-center text-center bg-gradient-to-tr from-[#0FAEBF] to-[#FFFFFF] overflow-hidden px-4">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-alata  text-black leading-tight z-10 -mt-45">
          Your Trusted Partner for the <br className="hidden md:block" />
          <span className="text-black">Best Locum Services in Sri Lanka</span>
        </h1>

        <p className="text-[#555555] font-alata text-base sm:text-lg md:text-xl max-w-3xl z-10 mt-3 px-2">
          Sri Lanka’s Best Locum Services At Your Fingertips, Start Earning Anytime, Anywhere.
          <br className="hidden sm:block" /> Download Now!
        </p>

        {/* App Download Buttons */}
        <div className="mt-5 z-10 flex gap-3 flex-wrap justify-center">
          <a href="https://apps.apple.com/lk/app/instagram/id389801252" target="_blank" rel="noopener noreferrer">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-8 sm:h-10 md:h-12 hover:scale-105 transition-transform"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-8 sm:h-10 md:h-12 hover:scale-105 transition-transform"
            />
          </a>
        </div>

        {/* Mobile App Image */}
        <img 
          src={Mobile}
          alt="Mobile App"
          className="absolute bottom-0 w-[500px]  sm:w-[400px] md:w-[600px] lg:w-[800px] drop-shadow-xl"
        />
      </section>

      {/* Additional Sections */}
      <LocumServicesComponents />
      <LocumCategoryComponents />
      <BannerMessageComponent />
      
    </div>
  );
};

export default HeroSection;
