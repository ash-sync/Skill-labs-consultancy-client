
import {
  CalendarDays,
  ChevronDown,
  UserRound,
} from "lucide-react";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCreateBookingMutation } from "../../../redux/api/dashboard.api";

function HeroSection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  
  const [createBooking, { isLoading }] = useCreateBookingMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !service || !selectedDate) {
      alert("Please fill all fields");
      return;
    }

    try {
      await createBooking({
        name,
        email,
        service,
        time: selectedDate.toISOString(),
      }).unwrap();
      
      alert("Booking submitted successfully!");
      setName("");
      setEmail("");
      setService("");
      setSelectedDate(new Date());
    } catch (err: any) {
      alert(err?.data?.message || "Failed to submit booking");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f5f7fb] flex items-center justify-center">
      <div
        className="relative w-full min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580537782437-8d6a0ca13de6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        
        <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]" />

        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 h-full p-6 md:p-14">
          
          
          <div className="flex flex-col justify-center">
            <h1 className="text-[#2563ff] text-5xl md:text-7xl font-extrabold leading-[1.05]">
              Start Your
              <br />
              Global Career
              <br />
              Journey Today
            </h1>

            <p className="mt-8 text-[#1f2937] text-lg md:text-2xl max-w-xl leading-relaxed">
              From choosing the right program to securing your visa,
              we support you at every step of your journey.
            </p>

            
            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <button className="bg-[#2563ff] hover:bg-[#1d4ed8] transition-all duration-300 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg">
                Get Free Consultation
              </button>

              <button className="bg-white border border-[#f59e0b] hover:bg-orange-50 transition-all duration-300 text-[#1f2937] px-10 py-4 rounded-2xl text-lg font-semibold shadow-md">
                Explore Services
              </button>
            </div>
          </div>

          
          <div className="flex items-center justify-center lg:justify-end">
            <form onSubmit={handleSubmit} className="w-full max-w-[520px] bg-white rounded-[32px] shadow-2xl p-8 md:p-10">
              <h2 className="text-4xl font-bold text-[#1f2a44] mb-10">
                Book a consultant
              </h2>

              
              <div className="mb-7">
                <label className="block text-[#374151] font-medium mb-3">
                  Name
                </label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-5 py-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full outline-none text-gray-700 bg-transparent"
                    required
                  />

                  <UserRound
                    className="text-[#14b8a6]"
                    size={22}
                  />
                </div>
              </div>

              
              <div className="mb-7">
                <label className="block text-[#374151] font-medium mb-3">
                  Email
                </label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-5 py-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full outline-none text-gray-700 bg-transparent"
                    required
                  />

                  <UserRound
                    className="text-[#14b8a6]"
                    size={22}
                  />
                </div>
              </div>

              
              <div className="mb-7">
                <label className="block text-[#374151] font-medium mb-3">
                  Services
                </label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-5 py-4">
                  <select 
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full outline-none text-gray-700 bg-transparent appearance-none"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Career Consultation">Career Consultation</option>
                    <option value="University Admission">University Admission</option>
                  </select>

                  <ChevronDown
                    className="text-[#14b8a6]"
                    size={22}
                  />
                </div>
              </div>

              
              <div className="mb-10">
                <label className="block text-[#374151] font-medium mb-3">
                  Preferred Time
                </label>

                <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-4 shadow-sm hover:border-[#2563ff] transition-all duration-300">
  
  <DatePicker
    selected={selectedDate}
    onChange={(date:any) => setSelectedDate(date)}
    dateFormat="MMMM d, yyyy"
    placeholderText="Select a date"
    className="w-full outline-none text-gray-700 bg-transparent"
    required
  />

  <CalendarDays
    className="text-[#14b8a6] flex-shrink-0"
    size={22}
  />
</div>
              </div>

              
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[#ff6b00] hover:bg-[#ea580c] transition-all duration-300 text-white py-4 rounded-2xl text-2xl font-semibold shadow-lg disabled:opacity-70"
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