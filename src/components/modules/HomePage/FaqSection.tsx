import { useState } from "react";
import faqImage from "../../../assets/images/Faq.png";
import { useGetFaqsQuery } from "../../../redux/api/dashboard.api";
import type { FAQ } from "@/types";

function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: faqs = [], isLoading } = useGetFaqsQuery({});

  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] sm:text-xs font-bold tracking-[3px] uppercase text-[#2563EB] mb-2">
            FAQs
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text- font-poppins">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-3">
            {faqs.map((f: FAQ, i: number) => (
              <div
                key={i}
                className="bg-white border border-[#e8e8f0] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left"
                >
                  <span className="text-sm sm:text-[15px] font-semibold text-dark font-poppins">
                    {f.question}
                  </span>

                  <span className="text-xl text-gray-400 flex-shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaq === i
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 pb-4 text-xs sm:text-sm leading-relaxed text-gray-500">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="w-full max-w-[260px] sm:max-w-[300px]">
              <img
                src={faqImage}
                alt="FAQ"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 w-full max-w-[280px]">
              <h4 className="font-poppins font-extrabold text-dark text-lg mb-2">
                Still have questions?
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Our team is here to help you every step of the way.
              </p>

              <button className="border-2 border-primary text-primary font-poppins font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
