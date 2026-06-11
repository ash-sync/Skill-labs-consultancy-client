import React from "react";
import instragram from "../../assets/icons/skill-icons_instagram.png";
import linkedin from "../../assets/icons/skill-icons_linkedin.png";
import whatsapp from "../../assets/icons/whatsapp-icon.png";
import facebook from "../../assets/icons/facebook.png";
import phoneIcon from "../../assets/icons/gg_phone.png";
import emailIcon from "../../assets/icons/picon_mail.png";
import locationIcon from "../../assets/icons/duo-icons_location.png";

function Footer() {
  return (
    <footer className="bg-[#031A5E] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          
          <div>
            <h2 className="text-2xl font-semibold leading-none">
              Skills Lab
            </h2>

            <p className="text-sm text-gray-300 mt-2 leading-6 max-w-[220px]">
              Consultancy <br />
              Your trusted partner for global education and career success.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full hover:scale-105 transition-all duration-300"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-full h-full object-contain"
                  width={36}
                  height={36}
                />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center rounded-full hover:scale-105 transition-all duration-300"
              >
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  className="w-full h-full object-contain"
                  width={36}
                  height={36}
                />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full hover:scale-105 transition-all duration-300"
              >
                <img
                  src={instragram}
                  alt="Instagram"
                  className="w-full h-full object-contain"
                  width={36}
                  height={36}
                />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full hover:scale-105 transition-all duration-300"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-full h-full object-contain"
                  width={36}
                  height={36}
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-all">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-all">
                  Our Services
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-all">
                  Consultants
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-all">
                  Training
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Study Abroad
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-all">
                  Work Abroad
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-all">
                  Visa Assistance
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-all">
                  Career Counseling
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-all">
                  SOP Writing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Contact Info
            </h3>

            <div className="mt-5 space-y-4 text-sm text-gray-300">
              
              <div className="flex items-start gap-3">
                <img
                  src={phoneIcon}
                  alt="Phone"
                  className="w-5 h-5 mt-[2px]"
                  width={20}
                  height={20}
                />

                <p>+880 1234 567890</p>
              </div>

              <div className="flex items-start gap-3">
                <img
                  src={emailIcon}
                  alt="Email"
                  className="w-5 h-5 mt-[2px]"
                  width={20}
                  height={20}
                />

                <p className="break-all sm:break-normal">
                  info@skillslab.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <img
                  src={locationIcon}
                  alt="Location"
                  className="w-5 h-5 mt-[2px]"
                  width={20}
                  height={20}
                />

                <p className="leading-6 max-w-[250px]">
                  House 12, Road 5, Dhanmondi,
                  <br />
                  Dhaka 1205, Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-5">
          <p className="text-xs sm:text-sm text-gray-300 text-center">
            © 2024 Skills Lab Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;