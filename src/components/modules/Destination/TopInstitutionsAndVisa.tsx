function TopInstitutionsAndVisa() {
  const universities = [
    {
      name: "University of Oxford",
      rank: "Global Rank: #3",
      fee: "£28k – £45k",
      duration: "per year",
    },
    {
      name: "University of Cambridge",
      rank: "Global Rank: #2",
      fee: "£25k – £42k",
      duration: "per year",
    },
    {
      name: "Imperial College London",
      rank: "Global Rank: #6",
      fee: "£30k – £48k",
      duration: "per year",
    },
  ]

  const visaSteps = [
    "Student Visa (formerly Tier 4)",
    "CAS Letter from Institution",
    "IHS Medical Surcharge",
    "Tuberculosis (TB) Test Results",
  ]

  return (
    <section className="w-full bg-[#f3f3f3] py-10 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

          
          <div className="bg-white border border-[#e5e5e5] rounded-[6px] p-5 sm:p-6">
            
            
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#2563eb]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4L3 9l9 5 9-5-9-5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 14l9 5 9-5"
                />
              </svg>

              <h2 className="text-[#2563eb] text-[16px] font-semibold">
                Top Institutions & Estimated Fees
              </h2>
            </div>

            
            <div className="mt-6 space-y-6">
              {universities.map((uni, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-4 border-b border-[#f1f1f1] pb-5 last:border-none last:pb-0"
                >
                  
                  
                  <div>
                    <h3 className="text-[#ff6b00] text-[14px] font-medium">
                      {uni.name}
                    </h3>

                    <p className="mt-1 text-[12px] text-[#888]">
                      {uni.rank}
                    </p>
                  </div>

                  
                  <div className="text-right">
                    <h4 className="text-[#00a884] text-[13px] font-semibold">
                      {uni.fee}
                    </h4>

                    <p className="text-[11px] text-[#888]">
                      {uni.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="bg-[#2563eb] rounded-[6px] p-5 sm:p-6 text-white">
            
            
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                />
              </svg>

              <h2 className="text-[16px] font-semibold">
                Visa Process
              </h2>
            </div>

            
            <div className="mt-6 space-y-4">
              {visaSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center mt-[2px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>

                  <p className="text-[13px] leading-5 text-white/95">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            
            <button className="w-full mt-8 bg-white text-[#2563eb] text-[11px] font-semibold py-3 rounded-[4px] hover:bg-gray-100 transition-all duration-300">
              DOWNLOAD UK GUIDE
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TopInstitutionsAndVisa