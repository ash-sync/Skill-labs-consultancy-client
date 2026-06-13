import React from 'react'
import ratingStar from '../../../assets/images/ratingStar.png'
import { useGetTestimonialsQuery } from '../../../redux/api/dashboard.api'

function ReviewsSection() {
  const { data: allTestimonials = [], isLoading } = useGetTestimonialsQuery({});
  

  const testimonials = allTestimonials.filter((t: any) => t.status === 'approved');

  return (
    <div className="bg-gray-100 py-10 px-4">
         <p className="text-[10px] text-center sm:text-xs font-bold tracking-[3px] uppercase text-[#2563EB] mb-2">
            Student Stories
          </p>
      <h2 className="text-center text-[#C2410C] text-2xl font-bold mb-8">
        What our Students say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {isLoading ? (
          [...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-5 animate-pulse min-h-[180px] flex flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                </div>
              </div>
              <div className="space-y-2 mt-4 flex-1">
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
                <div className="h-3 bg-gray-200 rounded w-4/5" />
              </div>
            </div>
          ))
        ) : testimonials.length > 0 ? (
          testimonials.map((test: any) => (
            <div key={test._id} className="bg-white rounded-lg shadow p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-black rounded-full overflow-hidden flex items-center justify-center text-white font-bold">
                   {test.image ? (
                     <img src={test.image} alt={test.name} className="w-full h-full object-cover" />
                   ) : (
                     test.name ? test.name.charAt(0) : 'U'
                   )}
                </div>

                <div>
                  <h3 className="font-semibold text-sm">{test.name || 'Anonymous'}</h3>
                  <p className="text-xs text-gray-500">{test.role || 'Student'}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(test.rating || 5)].map((_, index) => (
                  <img
                    key={index}
                    src={ratingStar}
                    alt="star"
                    className="w-5 h-5 object-contain"
                  />
                ))}
              </div>

              <p className="text-sm text-gray-600">
                {test.text}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No reviews available at the moment.</p>
        )}
      </div>
    </div>
  )
}

export default ReviewsSection