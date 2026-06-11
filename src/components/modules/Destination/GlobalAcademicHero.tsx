import destinationBanner from "../../../assets/images/destination/destinationBanner.webp";

function GlobalAcademicHero() {
  return (
     <section className="relative overflow-hidden">
      
      
      <div className="relative h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full">
        <img
          src={destinationBanner}
          alt="Global Academic Destinations"
          className="object-cover w-full h-full"
          width={1200}
          height={700}
        />

       
        <div className="absolute inset-0 bg-black/60" />

       
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-black/40 to-blue-950/80" />

       
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            
           
           <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tight whitespace-nowrap sm:text-5xl md:text-6xl lg:text-7xl">
  <span className="text-blue-500">Global</span>{" "}
  <span className="text-white">Academic</span>{" "}
  <span className="text-orange-500">Destinations</span>
</h1>

           
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg">
              Explore curated opportunities for higher education and career
              growth in the world’s most prestigious learning hubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalAcademicHero