import GeneralPractice from "../assets/GeneralPractice.jpg";
import OPD from "../assets/OPD.jpg";
import DentalDoctor from "../assets/Dental.jpg";

export default function LocumCategoryComponents() {
  const categories = [
    {
      title: "General Practice",
      description: "Provide care to patients of all age groups in primary care settings.",
      image: GeneralPractice,
    },
    {
      title: "OPD",
      description: "Offer consultations in the outpatient department of private hospitals.",
      image: OPD,
    },
    {
      title: "Dental Doctor",
      description: "Deliver dental treatments at hospitals and private dental clinics.",
      image: DentalDoctor,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-16 font-[Alata] flex flex-col justify-center">
      {/* Section Header */}
      <div className="text-start mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black">
          Popular <span className="text-[#0FAEBF]">Locum Categories</span>
        </h2>
        <p className="text-[#555555] text-base sm:text-lg mt-2">
          Find the right opportunity to kickstart your medical career
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
        {categories.map(({ title, description, image }, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-md flex flex-col justify-end text-white h-[200px] sm:h-[220px] md:h-[240px] cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(15,174,191,0.9), rgba(15,174,191,0.3), transparent), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-5 sm:p-6 md:p-8 flex flex-col gap-2 transform translate-y-0 md:translate-y-12 md:group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl sm:text-2xl">{title}</h3>
              <p className="text-sm sm:text-base font-light leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
