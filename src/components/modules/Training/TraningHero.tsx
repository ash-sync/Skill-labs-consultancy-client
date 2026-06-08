function TrainingHero() {
  return (
   <section className="relative w-full min-h-[550px] sm:min-h-[600px] flex items-center bg-gray-900 overflow-hidden font-sans">
      
      
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
          alt="Expert Training Background" 
          className="w-full h-full object-cover object-center transform scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF]/95 via-[#1D4ED8]/85 to-[#2563EB]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0F172A]/30" />
      </div>

      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="max-w-2xl text-left">
          
          
          <span className="inline-block bg-[#2563EB]/40 border border-blue-400/30 text-blue-200 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md mb-6 backdrop-blur-sm">
            Empowering Ambition
          </span>

          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] mb-6 tracking-tight">
            Master Global Standards with <span className="text-[#EA580C]">Expert Training</span>
          </h1>

          
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal opacity-90">
            From high-stakes language proficiency to specialized vocational skills, our 
            certified programs bridge the gap between your current potential and 
            international success.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            
            <button className="bg-white hover:bg-gray-100 text-[#2563EB] font-bold text-sm px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center">
              Explore Programs
            </button>

            
            <button className="bg-transparent hover:bg-white/10 text-white font-bold text-sm px-6 py-3.5 rounded-lg border-2 border-[#EA580C] transition-all duration-200 text-center">
              View Schedule
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TrainingHero