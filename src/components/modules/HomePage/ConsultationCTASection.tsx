import consultationCTAImage from '../../../assets/images/consultationBg.webp'

function ConsultationCTASection() {
  return (
    <div>
        <section className="relative overflow-hidden">
  <div
    className="bg-gradient-to-r from-[#162C9A] via-[#4A1DCC] to-[#A020F0] py-8 px-6 relative"
  >
    <div className="absolute inset-0 opacity-20">
      <img
        src={consultationCTAImage}
        alt=""
        className="w-full h-full object-cover"
        width={1600}
        height={350}
      />
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center text-center">
      <h2 className="text-white text-[24px] md:text-[28px] font-bold leading-none">
        Ready to start your journey?
      </h2>

      <p className="text-white/80 text-[12px] mt-2">
        Book free consultation with our experts today!
      </p>

      <button
        className="mt-5 border border-white/40 bg-white/10 backdrop-blur-sm text-white text-[12px] px-6 py-2 rounded-sm hover:bg-white/20 transition-all duration-300"
      >
        Book a free consultation
      </button>
    </div>
  </div>
</section>
    </div>
  )
}

export default ConsultationCTASection