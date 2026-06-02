 const stats = [
    {
      title: "95%",
      subtitle: "Visa Success Rate in the Last Year",
      className: "bg-[#2563eb] text-white col-span-2 row-span-2",
    },
    {
      title: "24/7",
      subtitle: "Student Support System",
      className: "bg-[#f97316] text-white",
    },
    {
      title: "45+",
      subtitle: "Partner Universities Worldwide",
      className: "bg-[#e5e7eb] text-[#f97316]",
    },
    {
      title: "5k+",
      subtitle: "Successful Placements",
      className: "bg-[#e5e7eb] text-[#10b981]",
    },
  ];

function SuccessMetricsSection() {
  return (
    <div>
        <section className="bg-[#f3f3f3] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-4 gap-5">
          
          <div className="bg-[#2563eb] rounded-[12px] p-6 flex flex-col justify-between h-[180px] col-span-2">
            <div>
              <p className="text-white font-semibold text-[20px]">
                Global Reach, Local Impact.
              </p>

              <h2 className="text-white text-[54px] font-bold leading-none mt-4">
                95%
              </h2>
            </div>

            <p className="text-white/80 uppercase text-[11px] tracking-[1px]">
              Visa Success Rate in the Last Year
            </p>
          </div>

          {/* orange card */}
          <div className="bg-[#f97316] rounded-[12px] p-6 h-[85px] flex flex-col justify-center">
            <h3 className="text-white text-[32px] font-bold leading-none">
              24/7
            </h3>

            <p className="text-white/90 text-[11px] mt-2">
              Student Support System
            </p>
          </div>

          {/* empty space like design */}
          <div />

          {/* gray left */}
          <div className="bg-[#e5e7eb] rounded-[12px] p-6 h-[85px] flex flex-col justify-center">
            <h3 className="text-[#f97316] text-[28px] font-bold leading-none">
              45+
            </h3>

            <p className="text-[#666] text-[11px] mt-2 leading-[16px]">
              Partner Universities Worldwide
            </p>
          </div>

          {/* gray right */}
          <div className="bg-[#e5e7eb] rounded-[12px] p-6 h-[85px] flex items-center justify-between">
            <div>
              <h3 className="text-[#10b981] text-[28px] font-bold leading-none">
                5k+
              </h3>

              <p className="text-[#666] text-[11px] mt-2">
                Successful Placements
              </p>
            </div>

            <div className="text-[#2563eb] text-[40px]">👍</div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default SuccessMetricsSection