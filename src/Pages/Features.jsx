import React from "react";

import verifiedBlack from "../assets/icon/verifiedBlack.png";
import profileBlack from "../assets/icon/profileBlack.png";
import securityBlack from "../assets/icon/securityBlack.png";
import jobBlack from "../assets/icon/jobBlack.png";
import paymentBlack from "../assets/icon/paymentBlack.png";
import accessBlack from "../assets/icon/accessBlack.png";

import verifiedWhite from "../assets/icon/verifiedWhite.png";
import profileWhite from "../assets/icon/profileWhite.png";
import securityWhite from "../assets/icon/securityWhite.png";
import jobWhite from "../assets/icon/jobWhite.png";
import paymentWhite from "../assets/icon/paymentWhite.png";
import accessWhite from "../assets/icon/accessWhite.png";

const features = [
  {
    title: "Verified Professionals",
    description:
      "Every doctor and healthcare professional is manually verified with the Sri Lanka Medical Council before approval — ensuring trust and reliability.",
    iconBlack: verifiedBlack,
    iconWhite: verifiedWhite,
  },
  {
    title: "Profile Management",
    description:
      "Easily create and manage your own account — whether you are a Locum Provider or a Locum Seeker — all in one place.",
    iconBlack: profileBlack,
    iconWhite: profileWhite,
  },
  {
    title: "Data Security",
    description:
      "Your personal information and job data are fully protected within our app — safe for both seekers and providers.",
    iconBlack: securityBlack,
    iconWhite: securityWhite,
  },
  {
    title: "Instant Job Matching",
    description:
      "Get connected quickly with the right locum jobs or professionals that match your requirements — saving time and effort.",
    iconBlack: jobBlack,
    iconWhite: jobWhite,
  },
  {
    title: "Easy Payments",
    description:
      "Enjoy secure and transparent payment options — no hidden costs, fast and reliable transactions.",
    iconBlack: paymentBlack,
    iconWhite: paymentWhite,
  },
  {
    title: "24/7 Access",
    description:
      "Find opportunities and connect with professionals anytime, anywhere — our app is always open for you.",
    iconBlack: accessBlack,
    iconWhite: accessWhite,
  },
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-4 md:py-16 font-[Alata]">
      {/* Heading */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-[#0FAEBF] text-lg sm:text-xl font-medium">Key Features</p>
          <div className="w-12 sm:w-16 border-t-2 border-[#0FAEBF]" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mt-2">
          Why Choose Dr. Locum?
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 border border-gray-200 rounded-2xl shadow-md flex flex-col items-start gap-4 bg-white transition-all duration-300 hover:bg-[#0FAEBF]"
          >
            {/* Icon */}
            <img
              src={feature.iconBlack}
              alt={feature.title}
              className="w-12 h-12 transition-all duration-300 group-hover:hidden"
            />
            <img
              src={feature.iconWhite}
              alt={feature.title}
              className="w-12 h-12 transition-all duration-300 hidden group-hover:block"
            />

            <h3 className="text-xl text-black group-hover:text-white transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-[#555555] group-hover:text-white transition-colors duration-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
