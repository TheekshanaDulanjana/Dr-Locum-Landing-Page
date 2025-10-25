import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPhone, FaEnvelope, FaLink, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const ContactPage = () => {
  const form = useRef();
  const [modal, setModal] = useState({ show: false, message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setModal({ show: true, message: "Message sent successfully!" });
          form.current.reset();
        },
        (error) => {
          setModal({ show: true, message: `Failed to send message: ${error.message}` });
        }
      );
  };

  const closeModal = () => setModal({ show: false, message: "" });

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-6 sm:p-10 md:p-16 font-[Alata] text-[#555555] gap-10">
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="text-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black">Get In Touch.</h2>
          <p className="text-[#555555] text-base sm:text-lg mt-2">
            Feel free to contact us for any questions or inquiries <br className="hidden sm:block" /> you may have.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 mt-4">
          {/* Phone */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <FaPhone className="text-black" />
              <p className="text-black">Dial</p>
            </div>
            <a
              href="tel:0717621100"
              className="ml-7 text-[#555555] hover:text-[#0FAEBF] transition-colors duration-300"
            >
              071 762 1100
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-black" />
              <p className="text-black">E-Mail</p>
            </div>
            <a
              href="mailto:info@drlocum.club"
              className="ml-7 text-[#555555] hover:text-[#0FAEBF] transition-colors duration-300"
            >
              info@drlocum.club
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <FaLink className="text-black" />
              <p className="text-black">Find us on</p>
            </div>
            <div className="flex ml-7 gap-3 text-[#555555]">
              <a href="https://www.linkedin.com" target="_blank" className="hover:text-[#0FAEBF]"><FaLinkedin size={20} /></a>
              <a href="https://www.instagram.com" target="_blank" className="hover:text-[#0FAEBF]"><FaInstagram size={20} /></a>
              <a href="https://www.facebook.com" target="_blank" className="hover:text-[#0FAEBF]"><FaFacebook size={20} /></a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-4 rounded-lg overflow-hidden w-full h-[250px] sm:h-[280px] md:h-[320px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.606154650259!2d79.88776457448219!3d6.817662919676101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25acc4a4a86e1%3A0x23e8b8390853ca4f!2sGeneral%20Sir%20John%20Kotelawala%20Defence%20University!5e0!3m2!1sen!2slk!4v1761418834191!5m2!1sen!2slk"
            width="100%"
            height="85%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 bg-white h-fit outline-1 outline-[#f1f1f1] rounded-xl p-6 sm:p-8 md:p-5 shadow-sm">
        <h2 className="text-3xl mb-10 text-[#0FAEBF]">Message</h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="flex-1 p-3 rounded-lg bg-gray-200 outline-none"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="flex-1 p-3 rounded-lg bg-gray-200 outline-none"
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              className="flex-1 p-3 rounded-lg bg-gray-200 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="flex-1 p-3 rounded-lg bg-gray-200 outline-none"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 mt-4 rounded-lg bg-gray-200 outline-none h-32 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#555555] cursor-pointer mt-4 mb-5 text-white py-3 rounded-lg hover:bg-[#0FAEBF] transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal */}
      {modal.show && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-fit text-center">
            <p className="mb-4">{modal.message}</p>
            <button
              onClick={closeModal}
              className="bg-[#555555] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#0FAEBF] transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
