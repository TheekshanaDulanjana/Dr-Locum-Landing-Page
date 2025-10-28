import Watermark from "../assets/watermark.png";
import Seeker from "../assets/seeker.png";
import ProviderGroup from "../assets/providerGroup.png";

export default function BannerMessageComponent() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-4 md:py-16 font-[Alata] flex flex-col justify-center">
      <div className="relative flex items-center justify-center h-[260px] sm:h-[300px] md:h-[340px] bg-[#0FAEBF] rounded-2xl overflow-hidden">
        
        {/* Watermark */}
        <img
          src={Watermark}
          alt="Watermark"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        {/* Seeker - only desktop/laptop */}
        <img
          src={Seeker}
          alt="Seeker"
          className="hidden md:block absolute bottom-0 left-4 sm:left-10 h-48 sm:h-64 md:h-80 object-contain"
        />

        {/* Provider Group - only desktop/laptop */}
        <img
          src={ProviderGroup}
          alt="Provider Group"
          className="hidden md:block absolute bottom-0 right-4 sm:right-10 h-48 sm:h-64 md:h-80 object-contain"
        />

        {/* Center Text */}
        <div className="z-10 px-4 md:px-0 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl md:mr-50 text-white leading-tight">
            Where Locum Seekers Meet <br className="hidden sm:block" /> The
            Right Providers.
          </h1>
        </div>
      </div>
    </section>
  );
}
