/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  CalendarDays,
  ChevronDown,
  Phone,
  UserRound,
} from "lucide-react";
import heroImage from "../../../assets/images/hero/hero.webp";

import { useState, lazy, Suspense } from "react";
const DatePicker = lazy(async () => {
  await import("react-datepicker/dist/react-datepicker.css");
  return import("react-datepicker");
});
import { useCreateBookingMutation } from "../../../redux/api/dashboard.api";
import { toast } from "sonner";
import { optimizeImageUrl } from "../../../utils/imageOptimizer";

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
    console.log({ name, email, phone, service, time: selectedDate.toISOString() });

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
      setSelectedDate(new Date());
      setPhone("");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to submit booking");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f5f7fb] flex items-center justify-center relative overflow-hidden">
      
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <img
  src="/hero.webp"
  alt="Global Education Background"
  width={1920}
  height={1080}
  fetchPriority="high"
  decoding="async"
  className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
/>
        {/* Soft edge blending gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7fb] via-[#f5f7fb]/90 to-transparent md:from-[#f5f7fb] md:via-[#f5f7fb]/80 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f7fb] via-transparent to-[#f5f7fb]/10" />
      </div>

      {/* Ambient Colorful Glows (Glassmorphic Orbs) */}
      <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#2563ff]/10 blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[5%] right-[10%] w-[550px] h-[550px] rounded-full bg-[#ff6b00]/8 blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-[25%] right-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      {/* Subtle Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1.5px, transparent 1.5px)`,
          backgroundSize: `24px 24px`
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto min-h-screen px-6 py-12 md:p-14 lg:p-20 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 w-full items-center">
          
          <div className="flex flex-col justify-center">
            {/* Elegant Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2563ff]/10 border border-[#2563ff]/20 text-[#2563ff] px-4 py-1.5 rounded-full text-xs font-bold mb-6 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2563ff] animate-ping" />
              Your Trusted Global Career Partner
            </div>
            
            <h1 className="text-slate-900 text-5xl md:text-7xl lg:text-[76px] font-black leading-[1.05] tracking-tight">
              Start Your <br />
              <span className="bg-gradient-to-r from-[#2563ff] to-[#4f46e5] bg-clip-text text-transparent">Global Career</span> <br />
              <span className="bg-gradient-to-r from-[#ff6b00] to-orange-500 bg-clip-text text-transparent">Journey Today</span>
            </h1>

            <p className="mt-8 text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
              From choosing the right program to securing your visa,
              we support you at every step of your journey.
            </p>

            
            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <button className="bg-gradient-to-r from-[#2563ff] to-[#4f46e5] hover:from-[#1d4ed8] hover:to-[#4338ca] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 text-center cursor-pointer">
                Get Free Consultation
              </button>

              <button className="bg-white/80 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-slate-700 px-8 py-4 rounded-2xl text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300 text-center cursor-pointer">
                Explore Services
              </button>
            </div>
          </div>

          
          <div className="flex items-center justify-center lg:justify-end">
            <form onSubmit={handleSubmit} className="w-full max-w-[500px] bg-white/90 backdrop-blur-md border border-white/50 rounded-[32px] shadow-2xl p-8 md:p-10 hover:shadow-blue-500/5 transition-all duration-500">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Book a consultant
              </h2>

              
              <div className="mb-6">
                <label htmlFor="hero-name" className="block text-slate-700 font-semibold mb-2 text-sm">
                  Name
                </label>

                <div className="flex items-center border border-slate-200 rounded-2xl px-4 py-3 bg-white focus-within:border-[#2563ff] focus-within:ring-4 focus-within:ring-[#2563ff]/10 transition-all duration-200 shadow-sm">
                  <input
                    id="hero-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full outline-none text-gray-700 bg-transparent text-sm"
                    required
                  />

                  <UserRound
                    className="text-[#2563ff] opacity-80"
                    size={20}
                  />
                </div>
              </div>

              
              <div className="mb-6">
                <label htmlFor="hero-email" className="block text-slate-700 font-semibold mb-2 text-sm">
                  Email
                </label>

                <div className="flex items-center border border-slate-200 rounded-2xl px-4 py-3 bg-white focus-within:border-[#2563ff] focus-within:ring-4 focus-within:ring-[#2563ff]/10 transition-all duration-200 shadow-sm">
                  <input
                    id="hero-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full outline-none text-gray-700 bg-transparent text-sm"
                    required
                  />

                  <UserRound
                    className="text-[#2563ff] opacity-80"
                    size={20}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="hero-phone" className="block text-slate-700 font-semibold mb-2 text-sm">
                  Phone
                </label>

                <div className="flex items-center border border-slate-200 rounded-2xl px-4 py-3 bg-white focus-within:border-[#2563ff] focus-within:ring-4 focus-within:ring-[#2563ff]/10 transition-all duration-200 shadow-sm">
                  <input
                    id="hero-phone"
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full outline-none text-gray-700 bg-transparent text-sm"
                    required
                  />

                  <Phone
                    className="text-[#2563ff] opacity-80"
                    size={20}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="hero-service" className="block text-slate-700 font-semibold mb-2 text-sm">
                  Service
                </label>

                <div className="relative group">
                  <select
                    id="hero-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="
                      w-full
                      rounded-2xl
                      border border-slate-200
                      bg-white
                      px-4 py-3
                      pr-12
                      text-gray-700
                      text-sm
                      outline-none
                      appearance-none
                      transition-all duration-200
                      shadow-sm
                      hover:border-slate-300
                      focus:border-[#2563ff]
                      focus:ring-4
                      focus:ring-[#2563ff]/10
                    "
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Student Visa">🎓 Student Visa</option>
                    <option value="Career Consultation">💼 Career Consultation</option>
                    <option value="University Admission">🏫 University Admission</option>
                  </select>

                  <ChevronDown
                    size={20}
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-[#2563ff]
                      pointer-events-none
                      transition-transform
                      group-hover:scale-110
                    "
                  />
                </div>
              </div>

              
              <div className="mb-8">
                <label htmlFor="hero-date" className="block text-slate-700 font-semibold mb-2 text-sm">
                  Preferred Time
                </label>

                <div className="flex items-center justify-between border border-slate-200 rounded-2xl px-4 py-3 bg-white focus-within:border-[#2563ff] focus-within:ring-4 focus-within:ring-[#2563ff]/10 transition-all duration-300 shadow-sm">
                  
                  {isPickerActive ? (
                    <Suspense fallback={
                      <input
                        id="hero-date"
                        className="w-full outline-none text-gray-700 bg-transparent text-sm"
                        value={selectedDate ? selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""}
                        readOnly
                      />
                    }>
                      <DatePicker
                        id="hero-date"
                        selected={selectedDate}
                        onChange={(date: any) => setSelectedDate(date)}
                        dateFormat="MMMM d, yyyy"
                        placeholderText="Select a date"
                        className="w-full outline-none text-gray-700 bg-transparent text-sm"
                        required
                        autoFocus
                      />
                    </Suspense>
                  ) : (
                    <input
                      id="hero-date"
                      type="text"
                      readOnly
                      value={selectedDate ? selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""}
                      onClick={() => setIsPickerActive(true)}
                      onFocus={() => setIsPickerActive(true)}
                      placeholder="Select a date"
                      className="w-full outline-none text-gray-700 bg-transparent text-sm cursor-pointer"
                      required
                    />
                  )}

                  <CalendarDays
                    className="text-[#2563ff] opacity-80 flex-shrink-0"
                    size={20}
                  />
                </div>
              </div>

              
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#ff6b00] to-orange-500 hover:from-[#ea580c] hover:to-orange-600 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-white py-4 rounded-2xl text-xl font-bold shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 disabled:opacity-70 cursor-pointer"
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