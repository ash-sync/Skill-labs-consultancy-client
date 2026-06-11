import { MapPin, GraduationCap } from "lucide-react"
import { optimizeImageUrl } from "../../../utils/imageOptimizer"

interface CountryProps {
  country: any;
  index: number;
}

function StudyDestinationSection({ country, index }: CountryProps) {
  const isEven = index % 2 === 0;

  return (
    <div>
        <section className={`w-full ${isEven ? 'bg-[#f3f3f3]' : 'bg-white'} px-4 py-10 md:px-8 lg:px-12`}>
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden border-0 shadow-none">
          <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
            
            <div className={`flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-14 ${!isEven ? 'lg:order-2' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-blue-500">
                Destination
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-orange-500 sm:text-4xl">
                Study in {country.name}
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                Discover the best opportunities for studying in {country.name}. Explore top institutions, 
                understand the visa requirements, and prepare for an exciting educational journey.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border bg-gray-50 p-5">
                  <MapPin className="mb-3 h-6 w-6 text-teal-500" />
                  <p className="text-sm text-gray-500">
                    Est. Tuition Fees
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">
                    {country.fees || "Varies"}
                  </h3>
                </div>

                <div className="rounded-2xl border bg-gray-50 p-5">
                  <GraduationCap className="mb-3 h-6 w-6 text-teal-500" />
                  <p className="text-sm text-gray-500">
                    Application Deadline
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">
                    {country.deadline || "Ongoing"}
                  </h3>
                </div>
              </div>
              
              {country.institutes && country.institutes.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Featured Institutes</p>
                  <div className="flex flex-wrap gap-2">
                    {country.institutes.map((inst: string, idx: number) => (
                      <span key={idx} className="bg-white border border-gray-200 text-gray-600 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        {inst}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={`relative min-h-[320px] sm:min-h-[450px] lg:min-h-full ${!isEven ? 'lg:order-1' : ''}`}>
              <img
                src={optimizeImageUrl(country.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop", 800)}
                alt={country.name}
                className="object-cover w-full h-full rounded-2xl"
                width={800}
                height={533}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default StudyDestinationSection