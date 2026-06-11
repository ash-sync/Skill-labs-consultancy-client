import { Card } from "@/components/ui/card"
import { MapPin, GraduationCap } from "lucide-react"
import canadaDestinationImage from "@/assets/images/destination/destinationBanner.webp"

function StudyInCanadaSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-8 sm:py-10 lg:py-14 px-3 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="relative  p-3 sm:p-5 lg:p-6 overflow-hidden">
          
          
          <div className=" rounded-sm p-3 sm:p-4 lg:p-5">
            
            
            <div className="grid grid-cols-1 lg:grid-cols-[430px_1fr] gap-6 lg:gap-10 items-center">
              
              
              <div className="relative w-full">
                
                
                <img
                  src={canadaDestinationImage}
                  alt="Canada"
                  className="w-full h-[260px] sm:h-[320px] lg:h-[340px] object-cover rounded-sm"
                  width={1200}
                  height={340}
                />

               
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white rounded-md shadow-lg px-4 py-3 w-[170px]">
                  <h3 className="text-[#1b56fd] font-semibold text-sm sm:text-base">
                    Canada
                  </h3>

                  <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                    The Land of the Maple Leaf
                  </p>
                </div>
              </div>

             
              <div className="w-full">
                
                
                <p className="uppercase tracking-[3px] text-[10px] sm:text-xs text-gray-400 font-semibold">
                  North America
                </p>

                
                <h2 className="mt-2 text-[26px] sm:text-[34px] lg:text-[42px] font-bold text-[#f97316] leading-tight">
                  Study in Canada
                </h2>

                
                <p className="mt-4 text-gray-500 text-sm sm:text-base leading-7 max-w-[560px]">
                  Canada is consistently ranked as one of the best countries
                  in the world for quality of life and education. With its
                  welcoming culture, diverse population, and post-graduation
                  work opportunities, it’s a top choice for international
                  students.
                </p>

                
                <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-10">
                  
                 
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#17b26a] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#17b26a]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 11c0 2.761-2.239 5-5 5S2 13.761 2 11s2.239-5 5-5 5 2.239 5 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M22 11c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5 5 2.239 5 5z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 className="text-[#17b26a] font-bold text-lg">
                        PGWP
                      </h4>

                      <p className="text-gray-400 text-xs">
                        Post Study Work Permit
                      </p>
                    </div>
                  </div>

                 
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#17b26a] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#17b26a]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2 12h2m16 0h2M12 2v2m0 16v2"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 className="text-[#17b26a] font-bold text-lg">
                        100+
                      </h4>

                      <p className="text-gray-400 text-xs">
                        Public Universities
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudyInCanadaSection