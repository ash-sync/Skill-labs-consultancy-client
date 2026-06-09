function SuccessMetricsSection() {
  return (
    <section className="bg-[#f3f3f3] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
          {/* Blue card - full height left column */}
          <div className="bg-[#2563eb] rounded-xl p-5 sm:p-6 flex flex-col justify-between min-h-[180px] sm:min-h-[220px] row-span-2">
            <div>
              <span className="block text-[10px] sm:text-xs font-semibold text-white/90 uppercase tracking-wide mb-2">
                Global Reach, Local Impact.
              </span>
              <h2 className="text-white text-[36px] sm:text-[48px] font-bold leading-none">
                95%
              </h2>
            </div>
            <p className="text-white/70 text-[10px] sm:text-[11px] uppercase tracking-widest">
              Visa success rate across UK, USA, and Canada
            </p>
          </div>

          {/* Orange card - top right */}
          <div className="bg-[#f97316] rounded-xl p-5 sm:p-6 flex flex-col justify-center">
            <h3 className="text-white text-[28px] sm:text-[32px] font-bold leading-none">
              24/7
            </h3>
            <p className="text-white/90 text-[10px] sm:text-[11px] mt-2">
              Student Support system
            </p>
          </div>

          {/* Bottom right sub-grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Gray left */}
            <div className="bg-[#e5e7eb] rounded-xl p-4 sm:p-5">
              <h3 className="text-[#f97316] text-[22px] sm:text-[28px] font-bold leading-none">
                45+
              </h3>
              <p className="text-[#666] text-[10px] sm:text-[11px] mt-2">
                Partner Universities worldwide
              </p>
            </div>

            {/* Gray right */}
            <div className="bg-[#e5e7eb] rounded-xl p-4 sm:p-5 flex items-center justify-between gap-2">
              <div>
                <h3 className="text-[#10b981] text-[22px] sm:text-[28px] font-bold leading-none">
                  5k+
                </h3>
                <p className="text-[#666] text-[10px] sm:text-[11px] mt-2">
                  Successful Placements
                </p>
              </div>
              <span className="text-[28px] sm:text-[36px] hidden lg:block md:block">
                👍
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessMetricsSection;
