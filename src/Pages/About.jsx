import React from "react";
import aboutbanner from "../assets/aboutbanner.jpg";
import Abt01Icon from "../assets/Abt01Icon.png";
import Abt02Icon from "../assets/Abt02Icon.png";
import Abt03Icon from "../assets/Abt03Icon.png";

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-16 font-[Alata] flex flex-col justify-center min-h-[auto]">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-6">
          <p className="text-[#0FAEBF] text-lg sm:text-xl">About Us</p>
          <div className="w-12 sm:w-16 border-t-2 border-[#0FAEBF]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 -mt-5 md:gap-10">
          <h1 className="text-3xl lg:text-4xl leading-snug lg:col-span-2">
            Introduction To Best <br />
            <span className="text-[#0FAEBF]"> Locum Provider </span> in Sri Lanka!
          </h1>

          <p className="text-[#555555] text-justify md:col-span-1">
            Dr. Locum is a mobile platform that makes locum staffing simple and reliable
            for professionals and providers.
          </p>

          <p className="text-[#555555] text-justify md:col-span-1">
            Our app is secure, easy to use, and connects seekers and providers in real
            time. Discover trusted jobs or hire qualified professionals anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Image and Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Image */}
        <img
          src={aboutbanner}
          alt="Doctor Banner"
          className="rounded-xl w-full h-80 sm:h-86 object-cover"
        />

        {/* Right Cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#0FAEBF] text-white p-5 rounded-xl shadow flex items-start gap-4">
            <img src={Abt01Icon} alt="icon" className="w-12 h-12 object-contain mt-1" />
            <h4 className="text-lg">
              Dr. Locum — Sri Lanka’s trusted app for connecting healthcare
              professionals with providers in real time.
            </h4>
          </div>

          <div className="bg-[#0FAEBF] text-white p-5 rounded-xl shadow flex items-start gap-4">
            <img src={Abt02Icon} alt="icon" className="w-12 h-12 object-contain mt-1" />
            <h4 className="text-lg">
              Connecting verified locum professionals and providers securely and quickly.
            </h4>
          </div>

          <div className="bg-[#0FAEBF] text-white p-5 rounded-xl shadow flex items-start gap-4">
            <img src={Abt03Icon} alt="icon" className="w-12 h-12 object-contain mt-1" />
            <h4 className="text-lg">
              Your bridge between healthcare professionals and providers — anytime, anywhere.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
