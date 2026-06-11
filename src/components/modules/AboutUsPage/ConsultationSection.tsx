/* eslint-disable @typescript-eslint/no-explicit-any */


import { useCreateBooking2Mutation } from "@/redux/api/dashboard.api";
import React, { useState } from "react";
import { toast } from "sonner";

function ConsultationSection() {
  const [createBooking2, { isLoading }] = useCreateBooking2Mutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedCountry: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    await createBooking2({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interestedCountry: formData.interestedCountry,
      message: formData.message,
      service: "Consultation",
      time: new Date().toISOString(),
    }).unwrap();

    toast.success("Booking submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      interestedCountry: "",
      message: "",
    });
  } catch (err: any) {
    toast.error(err?.data?.message || "Failed to submit booking");
  }
};

  return (
    <div>
      <section className="bg-[#f3f3f3] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-white rounded-[16px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm">
            
            {/* Left Side */}
            <div className="bg-[#08152f] p-10 flex flex-col justify-center min-h-[380px] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#2563eb,transparent_60%)]" />

              <div className="relative z-10">
                <h2 className="text-white text-[46px] font-bold leading-[52px]">
                  Ready to Start
                  <br />
                  Your
                  <br />
                  Journey?
                </h2>

                <p className="text-white/70 text-[14px] leading-[24px] mt-6 max-w-[320px]">
                  Whether you're aiming to study abroad or need expert guidance
                  on your educational pathway.
                </p>

                <div className="mt-8 space-y-3 text-white/80 text-[14px]">
                  <p>✓ Personalized Profile Assessment</p>
                  <p>✓ Overseas University Shortlisting</p>
                  <p>✓ Visa Strategy Workshop</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="p-10 flex items-center">
              <form onSubmit={handleSubmit} className="w-full">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="consult-name" className="text-[11px] uppercase text-slate-600 font-medium">
                      Full Name
                    </label>

                    <input
                      id="consult-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full mt-2 h-[48px] rounded-md border border-[#ddd] px-4 text-sm outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="consult-email" className="text-[11px] uppercase text-slate-600 font-medium">
                      Email Address
                    </label>

                    <input
                      id="consult-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full mt-2 h-[48px] rounded-md border border-[#ddd] px-4 text-sm outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mt-5">
                  <label htmlFor="consult-phone" className="text-[11px] uppercase text-slate-600 font-medium">
                    Phone
                  </label>

                  <input
                    id="consult-phone"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0123456789"
                    className="w-full mt-2 h-[48px] rounded-md border border-[#ddd] px-4 text-sm outline-none"
                  />
                </div>

                {/* Country */}
                <div className="mt-5">
                  <label htmlFor="consult-country" className="text-[11px] uppercase text-slate-600 font-medium">
                    Interested Country
                  </label>

                  <select
                    id="consult-country"
                    name="interestedCountry"
                    value={formData.interestedCountry}
                    onChange={handleChange}
                    className="w-full mt-2 h-[48px] rounded-md border border-[#ddd] px-4 text-sm outline-none bg-white"
                  >
                    <option value="">Select a Destination</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label htmlFor="consult-message" className="text-[11px] uppercase text-slate-600 font-medium">
                    Message (Optional)
                  </label>

                  <textarea
                    id="consult-message"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your educational background..."
                    className="w-full mt-2 rounded-md border border-[#ddd] px-4 py-3 text-sm outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 bg-[#f97316] hover:bg-[#ea580c] transition-colors text-white h-[46px] px-10 rounded-full text-sm font-medium"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConsultationSection;