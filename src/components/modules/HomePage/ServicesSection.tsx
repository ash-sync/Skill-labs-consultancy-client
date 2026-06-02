import React from 'react'
import { useGetServicesQuery } from '../../../redux/api/dashboard.api'


const DEFAULT_ICON = 'https://cdn-icons-png.flaticon.com/512/1046/1046777.png';

const colors = [
  'bg-blue-100',
  'bg-green-100',
  'bg-purple-100',
  'bg-orange-100',
  'bg-yellow-100',
  'bg-pink-100'
];

function ServicesSection() {
  const { data: services = [] } = useGetServicesQuery({});

  return (
    <div>
        <div className="bg-gray-100 py-12 px-4">

  <p className="text-center text-blue-600 font-semibold uppercase">
    What We Offer
  </p>

  <h2 className="text-center text-4xl font-bold text-orange-500 mb-12">
    Our Core Services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {services.length > 0 ? (
      services.map((service: any, index: number) => {
        const bgColorClass = colors[index % colors.length];

        return (
          <div key={service._id} className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${bgColorClass}`}>
              <img
                src={service.icon || DEFAULT_ICON}
                alt={service.title}
                className="w-8 h-8 object-contain"
              />
            </div>
      
            <div>
              <h3 className="text-xl font-bold text-blue-700">
                {service.title}
              </h3>
      
              <p className="text-gray-500 text-sm mt-2 leading-6 line-clamp-3">
                {service.description}
              </p>
            </div>
          </div>
        );
      })
    ) : (
      <p className="text-center text-gray-500 col-span-full">No services available at the moment.</p>
    )}
  </div>
</div>
    </div>
  )
}

export default ServicesSection