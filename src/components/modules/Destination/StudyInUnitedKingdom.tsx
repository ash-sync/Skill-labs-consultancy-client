import durationIcon from '@/assets/images/destination/studyInUnitedKingdom/durationIcon.webp'
import graduateIcon from '@/assets/images/destination/studyInUnitedKingdom/rankIcon.webp'
import unitedKingdomImage from '@/assets/images/destination/studyInUnitedKingdom/unitedKingdom.webp'


function StudyInUnitedKingdom() {
  return (
    <section className="w-full bg-[#f3f3f3] py-10 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          
          <div className="max-w-[520px]">
            
            
            <p className="text-[10px] uppercase tracking-[2px] text-[#3b82f6] font-semibold">
              Europe
            </p>

           
            <h2 className="mt-3 text-[28px] sm:text-[36px] lg:text-[42px] leading-tight font-bold text-[#ff6b00]">
              Study in the United Kingdom
            </h2>

            
            <p className="mt-5 text-[14px] leading-7 text-[#666]">
              Steeped in history and home to some of the world's oldest and
              most prestigious universities, the UK offers a rich academic
              heritage. Short-duration Master's programs and the Graduate
              Route visa make it a highly efficient destination for global
              careers.
            </p>

            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              
              <div className="bg-[#f7f7f7]  px-5 py-4 w-full sm:w-[180px]">
                
                <div className="flex items-center gap-2">
                  <img
                    src={durationIcon}
                    alt="Duration"
                    className="w-4 h-4 object-contain"
                    width={16}
                    height={16}
                  />
                </div>

                <p className="mt-2 text-[11px] text-[#777] leading-4">
                  Masters Duration
                </p>

                <h3 className="mt-1 text-[28px] font-bold text-[#10b981] leading-none">
                  1 Year
                </h3>
              </div>

        
              <div className="bg-[#f7f7f7]   px-5 py-4 w-full sm:w-[180px]">
                
                <div className="flex items-center gap-2">
                  <img
                    src={graduateIcon}
                    alt="Graduate"
                    className="w-4 h-4 object-contain"
                    width={16}
                    height={16}
                  />
                </div>

                <p className="mt-2 text-[11px] text-[#777] leading-4">
                  Top 100 Rank
                </p>

                <h3 className="mt-1 text-[28px] font-bold text-[#10b981] leading-none">
                  17+ Unis
                </h3>
              </div>
            </div>
          </div>

          
          <div className="relative flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-[520px]">
              
              <img
                src={unitedKingdomImage}
                alt="United Kingdom"
                className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover rounded-[6px]"
                width={1200}
                height={420}
              />

              
              <div className="absolute bottom-4 left-4 bg-white shadow-xl rounded-md px-4 py-3 w-[190px]">
                <h3 className="text-[#2563eb] text-[15px] font-semibold">
                  United Kingdom
                </h3>

                <p className="mt-1 text-[11px] text-[#777]">
                  The Royal Education Experience
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default StudyInUnitedKingdom