// const stats = [
//   {
//     title: "95%",
//     subtitle: "Visa Success Rate in the Last Year",
//     className: "bg-[#2563eb] text-white col-span-2 row-span-2",
//   },
//   {
//     title: "24/7",
//     subtitle: "Student Support System",
//     className: "bg-[#f97316] text-white",
//   },
//   {
//     title: "45+",
//     subtitle: "Partner Universities Worldwide",
//     className: "bg-[#e5e7eb] text-[#f97316]",
//   },
//   {
//     title: "5k+",
//     subtitle: "Successful Placements",
//     className: "bg-[#e5e7eb] text-[#10b981]",
//   },
// ];

function SuccessMetricsSection() {
  return (
    <div>
      <section className="bg-[#f3f3f3] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {/* Blue card */}
            <div
              className="bg-[#2563eb] rounded-xl p-6 flex flex-col justify-between min-h-[180px]
                        max-sm:col-span-2 max-sm:row-span-1 col-start-1 col-end-2 row-start-1 row-end-3"
            >
              <div>
                <span className="block text-xs font-semibold text-white/90 uppercase tracking-wide mb-2">
                  Global Reach, Local Impact.
                </span>
                <h2 className="text-white text-[48px] max-sm:text-[36px] font-bold leading-none">
                  95%
                </h2>
              </div>
              <p className="text-white/70 text-[11px] uppercase tracking-widest">
                Visa success rate across UK, USA, and Canada
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f3] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-4 gap-5">
            <div className="bg-[#2563eb] rounded-[12px] p-6 flex flex-col justify-between h-[180px] col-span-2">
              <div>
                <p className="text-white font-semibold text-[20px]">
                  Global Reach, Local Impact.
                </p>
              </div>

              {/* Orange card */}
              <div
                className="bg-[#f97316] rounded-xl p-6 flex flex-col justify-center  
                        max-sm:col-span-1 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2"
              >
                <h3 className="text-white text-[32px] font-bold leading-none">
                  24/7
                </h3>
                <p className="text-white/90 text-[11px] mt-2">
                  Student Support system
                </p>
              </div>

              {/* Gray left */}
              <div className="bg-[#e5e7eb] rounded-xl p-6 col-start-2 col-end-3 row-start-2 row-end-3">
                <h3 className="text-[#f97316] text-[28px] font-bold leading-none">
                  45+
                </h3>
                <p className="text-[#666] text-[11px] mt-2">
                  Partner Universities worldwide
                </p>
              </div>

              {/* Gray right */}
              <div className="bg-[#e5e7eb] rounded-xl p-6 flex items-center justify-between col-start-3 col-end-4 row-start-2 row-end-3">
                <div>
                  <h3 className="text-[#10b981] text-[28px] font-bold leading-none">
                    5k+
                  </h3>
                  <p className="text-[#666] text-[11px] mt-2">
                    Successful Placements
                  </p>
                </div>
                <span className="text-[#2563eb] text-[36px]">👍</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuccessMetricsSection;
