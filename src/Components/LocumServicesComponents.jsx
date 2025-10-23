import LocumProvider from "../assets/LocumProvider.jpg";
import LocumSeeker from "../assets/LocumSeeker.jpg";

export default function LocumServicesComponents() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-16 font-[Alata] flex flex-col justify-center min-h-screen">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-2">
          <p className="text-[#0FAEBF] text-lg sm:text-xl">Trusted Locum Services</p>
          <div className="w-[50px] sm:w-[60px] border-t-2 border-[#0FAEBF] mt-1" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mt-2">
          Connecting the Best in Healthcare
        </h2>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Locum Providers Card */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-md flex flex-col justify-end text-white h-[260px] sm:h-[300px] md:h-[320px]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15,174,191,0.9), rgba(15,174,191,0.3), transparent), url(${LocumProvider})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-5 sm:p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl mb-2">Locum Providers</h3>
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Hire qualified locum professionals fast and effortlessly – Sri Lanka’s best service for your hospital or clinic.
            </p>
            <div className="flex gap-3 mt-4 flex-wrap">
              <a href="https://theekshanadulanjana.me" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-8 sm:h-10 hover:scale-105 transition-transform"
                />
              </a>
              <a href="https://theekshanadulanjana.me" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-8 sm:h-10 hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Locum Seekers Card */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-md flex flex-col justify-end text-white h-[260px] sm:h-[300px] md:h-[320px]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15,174,191,0.9), rgba(15,174,191,0.3), transparent), url(${LocumSeeker})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-5 sm:p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl mb-2">Locum Seekers</h3>
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Discover verified locum jobs in Sri Lanka, build your profile and earn anytime, anywhere.
            </p>
            <div className="flex gap-3 mt-4 flex-wrap">
              <a href="https://theekshanadulanjana.me" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-8 sm:h-10 hover:scale-105 transition-transform"
                />
              </a>
              <a href="https://theekshanadulanjana.me" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-8 sm:h-10 hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
