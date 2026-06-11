import malaysiaImage from "@/assets/images/destination/studyInMalaysia/malaysia.webp"
import calendarIcon from "@/assets/images/destination/studyInMalaysia/calenderIcon.webp"
import costIcon from "@/assets/images/destination/studyInMalaysia/costIcon.webp"

function StudyInMalaysia() {
  return (
    <section className="w-full bg-[#f3f3f3] py-8 px-4 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        
        <div className=" p-4 lg:p-5">
          
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-center">

            <div className="relative">
              
              <img
                src={malaysiaImage}
                alt="Malaysia"
                className="w-full h-[240px] sm:h-[300px] lg:h-[320px] object-cover rounded-[3px]"
                width={1200}
                height={320}
              />

             <div className="flex items-right justify-end">
                 <div className="absolute bottom-3 right-3 bg-white shadow-lg rounded-[3px] px-3 py-2 w-[145px]">
                <h3 className="text-[#2563eb] text-[12px] font-semibold leading-none">
                  Malaysia
                </h3>

                <p className="mt-1 text-[9px] text-[#777] leading-none">
                  Multicultural Learning Hub
                </p>
              </div>
             </div>
            </div>

            <div className="max-w-[520px]">
              
              <p className="text-[9px] uppercase tracking-[2px] text-[#3b82f6] font-semibold">
                Southeast Asia
              </p>

              <h2 className="mt-2 text-[22px] sm:text-[30px] lg:text-[32px] font-bold text-[#ff6b00] leading-tight">
                Study in Malaysia
              </h2>

              <div className="mt-4 p-3">
                <p className="text-[11px] sm:text-[12px] leading-6 text-[#666]">
                  Malaysia is rapidly becoming a leading hub for international
                  students, offering high-quality education at an affordable
                  cost. Its strategic location, English-taught programs,
                  vibrant culture, and growing global business connections
                  make it an attractive destination for students worldwide.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">

                <div className="bg-[#f7f7f7] border border-[#ececec] px-4 py-3">
                  
                  <img
                    src={calendarIcon}
                    alt="Deadline"
                    className="w-3.5 h-3.5 object-contain"
                    width={14}
                    height={14}
                  />

                  <p className="mt-2 text-[9px] text-[#777] leading-4">
                    Upcoming Deadline
                  </p>

                  <h3 className="mt-1 text-[18px] font-bold text-[#10b981] leading-none">
                    Oct 15, 2024
                  </h3>
                </div>

                <div className="bg-[#f7f7f7] border border-[#ececec] px-4 py-3">
                  
                  <img
                    src={costIcon}
                    alt="Living Cost"
                    className="w-3.5 h-3.5 object-contain"
                    width={14}
                    height={14}
                  />

                  <p className="mt-2 text-[9px] text-[#777] leading-4">
                    Living Cost
                  </p>

                  <h3 className="mt-1 text-[18px] font-bold text-[#10b981] leading-none">
                    Low/Mid
                  </h3>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default StudyInMalaysia