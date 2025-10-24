import React from "react";

const TermsOfUse = () => {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-[#64e9f8] to-white font-[Alata] text-[#000000] py-16 px-6 md:px-12 lg:px-20 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5 mt-16 md:mt-20 text-center md:text-left">
          Terms of Use
        </h1>

        <div className="text-center md:text-left mb-10">
          <p className="text-lg md:text-2xl mt-6 mb-2 font-medium">
            Last Updated: April 05, 2025
          </p>
          <div className="border-t-3 border-[#0FAEBF] w-full md:w-1/3 mx-auto md:mx-0"></div>
        </div>

        {/* Intro Paragraph */}
        <p className="text-[#555555] leading-relaxed mb-12 text-justify text-base md:text-lg">
          Welcome to DrLocum, a platform connecting private practice doctors
          with locum opportunities for recently graduated medical professionals
          in Sri Lanka. By accessing or using our website{" "}
          <a
            href="https://www.drlocum.club"
            className="text-[#0FAEBF] underline hover:text-[#097e8f]"
          >
            www.drlocum.club
          </a>
          , you agree to be bound by these Terms and Conditions. If you do not
          agree, please refrain from using our services.
        </p>

        {/* App Download Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-16">
          {/* Locum Seekers */}
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-3 font-medium">For the Locum Seekers</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://theekshanadulanjana.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-10 sm:h-12 cursor-pointer hover:scale-105 transition-transform"
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
                  className="h-10 sm:h-12 cursor-pointer hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Locum Providers */}
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-3 font-medium">For the Locum Providers</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://theekshanadulanjana.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-10 sm:h-12 cursor-pointer hover:scale-105 transition-transform"
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
                  className="h-10 sm:h-12 cursor-pointer hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-10 text-[#555555] leading-relaxed text-base md:text-lg">
          {[
            {
              title: "1. Definitions",
              points: [
                "“DrLocum”: Refers to the website and services provided by DrLocum, operated in Sri Lanka.",
                "“User”: Any individual or entity accessing the website, including doctors and candidates.",
                "“Employer”: A registered private practice doctor posting locum opportunities.",
                "“Candidate”: A recently graduated doctor seeking locum positions.",
              ],
            },
            {
              title: "2. Eligibility",
              points: [
                "Employers may post locum job opportunities, and candidates may apply through DrLocum. Users must provide accurate and complete information.",
              ],
            },
            {
              title: "3. Use of Services",
              points: [
                "Users may not use DrLocum for unlawful purposes, harassment, or posting misleading content.",
              ],
            },
            {
              title: "4. Account Responsibilities",
              points: [
                "Keep your account credentials confidential.",
                "Notify us immediately at support@drlocum.club if unauthorized use occurs.",
                "DrLocum is not liable for losses from unauthorized access due to failure to secure your account.",
              ],
            },
            {
              title: "5. Intellectual Property",
              points: [
                "All content (text, logos, design) is owned by DrLocum or its licensors and protected by copyright. Users grant DrLocum a non-exclusive license to display uploaded content.",
              ],
            },
            {
              title: "6. Limitation of Liability",
              points: [
                "DrLocum connects employers and candidates but does not guarantee placements or accuracy. Liability is limited to the amount paid (if any).",
              ],
            },
            {
              title: "7. Termination",
              points: [
                "DrLocum may suspend or terminate accounts for violations. Users may deactivate accounts anytime via support.",
              ],
            },
            {
              title: "8. Governing Law",
              points: [
                "These Terms are governed by Sri Lankan law. Disputes will be resolved in Colombo courts.",
              ],
            },
            {
              title: "9. Changes to Terms",
              points: [
                "We may update Terms periodically. Continued use constitutes acceptance of changes.",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h2 className="text-xl md:text-2xl mb-2  text-black">
                {section.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          <p className="mt-10 text-center md:text-left">
            For questions, contact us at{" "}
            <a
              href="mailto:support@drlocum.club"
              className="text-[#323232] font-medium hover:text-black transition-colors"
            >
              support@drlocum.club
            </a>{" "}
            or{" "}
            <a
              href="tel:0717621100"
              className="font-medium text-[#323232] hover:text-black transition-colors"
            >
              0717621100
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
