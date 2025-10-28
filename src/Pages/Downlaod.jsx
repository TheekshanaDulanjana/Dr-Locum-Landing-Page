import React from "react";

const Download = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-4 md:py-16 px-6 mt-10 md:mt-20 font-[Alata]">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl text-black">
        Start Your <span className="text-[#0FAEBF]">Locum</span> Journey Today.
      </h1>
      <p className="text-[#555555] mt-3 text-lg max-w-2xl">
        Trusted By Healthcare Professionals And <br /> Providers Across In Sri Lanka.
      </p>

      {/* Two Columns */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center md:space-x-40 space-y-16 md:space-y-0 relative w-full max-w-6xl">
        {/* Line connector */}
        <div className="hidden md:block absolute h-[240px] w-[2px] bg-[#0FAEBF] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#0FAEBF] rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#0FAEBF] rounded-full"></div>
        </div>

        <div className="hidden md:block absolute w-[50px] h-[2px] bg-[#0FAEBF] top-1/5 left-1/2 transform -translate-x-1/1 -translate-y-1/2">
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#0FAEBF] rounded-full"></div>
        </div>

        <div className="hidden md:block absolute w-[50px] h-[2px] bg-[#0FAEBF] top-4/5 left-1/2 transform -translate-x-1/ -translate-y-1/2">
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#0FAEBF] rounded-full"></div>
        </div>

        {/* Locum Provider */}
        <div className="max-w-md text-center md:text-right">
          <h2 className="text-2xl">
            Are You a <span className="text-[#0FAEBF]">Locum Provider?</span>
          </h2>
          <p className="text-[#555555] mt-3">
            Connect With Talented Recent Graduates And Fill Your Locum Needs.{" "}
            <span className="text-black">
              Download The App Now And Start Hiring Instantly!
            </span>
          </p>
          <div className="flex justify-center md:justify-end mt-5 space-x-3">
            <a
              href="https://theekshanadulanjana.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10 hover:scale-105 transition-transform"
              />
            </a>
            <a
              href="https://theekshanadulanjana.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10 hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Locum Seeker */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl">
            Are You a <span className="text-[#0FAEBF]">Locum Seeker?</span>
          </h2>
          <p className="text-[#555555] mt-3">
            Launch Your Medical Career With Locum Roles In Private Practices.{" "}
            <span className="text-black">
              Download The App Now And Start Earning Today!
            </span>
          </p>
          <div className="flex justify-center md:justify-start mt-5 space-x-3">
            <a
              href="https://theekshanadulanjana.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10 hover:scale-105 transition-transform"
              />
            </a>
            <a
              href="https://theekshanadulanjana.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10 hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
