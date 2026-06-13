/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  CalendarDays,
  ChevronDown,
  Phone,
  UserRound,
} from "lucide-react";

import { useState, lazy, Suspense } from "react";
import { useCreateBookingMutation } from "../../../redux/api/dashboard.api";
import { toast } from "sonner";

// ✅ Lazy load only component (NOT CSS inside loader)
const DatePicker = lazy(() => import("react-datepicker"));
import "react-datepicker/dist/react-datepicker.css";

function HeroSection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isPickerActive, setIsPickerActive] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");

  const [createBooking, { isLoading }] = useCreateBookingMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !service || !selectedDate || !phone) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await createBooking({
        name,
        email,
        phone,
        service,
        time: selectedDate.toISOString(),
      }).unwrap();

      toast.success("Booking submitted successfully!");

      setName("");
      setEmail("");
      setService("");
      setPhone("");
      setSelectedDate(new Date());
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to submit booking");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f5f7fb] flex items-center justify-center relative overflow-hidden">

    <img
  src="/hero.webp"
  alt="Global Education Background"
  width="1920"
  height="1080"
  fetchPriority="high"
  loading="eager"
  decoding="async"
  className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
/>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7fb] via-[#f5f7fb]/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f5f7fb] via-transparent to-[#f5f7fb]/10" />

      {/* Glow effects */}
      <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#2563ff]/10 blur-[130px]" />
      <div className="absolute bottom-[5%] right-[10%] w-[550px] h-[550px] rounded-full bg-[#ff6b00]/8 blur-[150px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto min-h-screen px-6 py-12 flex items-center">

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 w-full items-center">

          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#2563ff]/10 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563ff]" />
              Your Trusted Global Career Partner
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Start Your <br />
              <span className="text-blue-600">Global Career</span> <br />
              <span className="text-orange-500">Journey Today</span>
            </h1>

            <p className="mt-6 text-slate-600 text-lg max-w-xl">
              From choosing the right program to securing your visa,
              we support you at every step.
            </p>
          </div>

          {/* FORM */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white/90 backdrop-blur-md border rounded-[32px] shadow-2xl p-8"
            >
              <h2 className="text-3xl font-extrabold mb-8">
                Book a consultant
              </h2>

              {/* NAME */}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                aria-label="Your Name"
                className="w-full border rounded-xl px-4 py-3 mb-4"
              />

              {/* EMAIL */}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                aria-label="Your Email"
                className="w-full border rounded-xl px-4 py-3 mb-4"
              />

              {/* PHONE */}
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                aria-label="Your Phone Number"
                className="w-full border rounded-xl px-4 py-3 mb-4"
              />

              {/* SERVICE */}
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                aria-label="Select Consultation Service"
                className="w-full border rounded-xl px-4 py-3 mb-4"
              >
                <option value="">Select Service</option>
                <option>Student Visa</option>
                <option>Career Consultation</option>
                <option>University Admission</option>
              </select>

              {/* DATE */}
              <div className="mb-6">
                <input
                  readOnly
                  value={selectedDate?.toDateString() || ""}
                  onClick={() => setIsPickerActive(true)}
                  aria-label="Booking Date"
                  className="w-full border rounded-xl px-4 py-3 cursor-pointer"
                />

                {isPickerActive && (
                  <Suspense fallback={<div>Loading...</div>}>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date: any) => setSelectedDate(date)}
                      inline
                    />
                  </Suspense>
                )}
              </div>

              {/* SUBMIT */}
              <button
                disabled={isLoading}
                className="w-full bg-[#C2410C] hover:bg-[#9A3412] text-white py-4 rounded-xl font-bold transition-colors duration-300 cursor-pointer"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;