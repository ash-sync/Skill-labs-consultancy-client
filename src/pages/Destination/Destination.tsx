import DestinationCTA from '@/components/modules/Destination/DestinationCTA'
import GlobalAcademicHero from '@/components/modules/Destination/GlobalAcademicHero'
import StudyDestinationSection from '@/components/modules/Destination/StudyDestinationSection'
import React from 'react'
import { useGetCountriesQuery } from '../../redux/api/dashboard.api'
import { Loader2 } from 'lucide-react'

function Destination() {
  const { data: countries = [], isLoading, error } = useGetCountriesQuery({});

  return (
    <div>
        <GlobalAcademicHero></GlobalAcademicHero>

        {isLoading ? (
          <div className="flex items-center justify-center py-32 bg-[#f3f3f3]">
            <Loader2 className="w-10 h-10 animate-spin text-orange-500" />
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-32 bg-[#f3f3f3]">
            <p className="text-red-500 font-semibold">Failed to load destination countries.</p>
          </div>
        ) : countries.length === 0 ? (
          <div className="flex items-center justify-center py-32 bg-[#f3f3f3]">
            <p className="text-gray-500 font-semibold">No countries available yet.</p>
          </div>
        ) : (
          countries.map((country: any, index: number) => (
            <StudyDestinationSection key={country._id} country={country} index={index} />
          ))
        )}

        <DestinationCTA></DestinationCTA>
    </div>
  )
}

export default Destination