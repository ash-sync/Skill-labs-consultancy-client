import React from 'react'
import { useGetDestinationsQuery } from '../../../redux/api/dashboard.api'

function Destinations() {
  const { data: destinations = [] } = useGetDestinationsQuery({});

  return (
    <div className="bg-gray-100 py-12 px-4">

      <p className="text-center text-xs uppercase tracking-widest text-orange-400 font-semibold">
        Popular Destinations
      </p>

      <h2 className="text-center text-3xl font-bold text-orange-500 mb-10">
        Study & Work Destinations
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {destinations.length > 0 ? (
          destinations.map((dest: any) => (
            <div key={dest._id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row">

              <div className="md:w-1/2 relative">
                {dest.imageUrl ? (
                  <img
                    src={dest.imageUrl}
                    alt={dest.country}
                    className="w-full h-full min-h-[200px] object-cover"
                  />
                ) : (
                  <div className="w-full h-full min-h-[200px] bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                  📍 {dest.country}
                </div>
              </div>

              <div className="md:w-1/2 p-5 flex flex-col justify-between">

                <div className="space-y-3">
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">{dest.description}</p>
                  
                  <div className="flex justify-between text-sm border-b pb-2">
                    <span className="text-gray-500">
                      Processing Time
                    </span>
                    <span className="font-semibold text-gray-800">
                      {dest.processingTime || 'N/A'}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm border-b pb-2">
                    <span className="text-gray-500">
                      Top Institutes
                    </span>
                    <span className="font-semibold text-gray-800">
                      {dest.topInstitutes?.length || 0}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Average Cost
                    </span>
                    <span className="font-bold text-blue-700">
                      {dest.livingCost || 'N/A'}
                    </span>
                  </div>
                </div>

                <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-lg transition duration-300 w-full">
                  Explore Now
                </button>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No destinations available at the moment.</p>
        )}

      </div>
    </div>
  )
}

export default Destinations