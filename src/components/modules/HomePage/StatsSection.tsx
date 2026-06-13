import React from 'react'

import stats1 from '../../../assets/images/stats/stats1.png'
import stats2 from '../../../assets/images/stats/stats2.png'
import stats3 from '../../../assets/images/stats/stats3.png'
import stats4 from '../../../assets/images/stats/stats4.png'

function StatsSection() {
  return (
    <div className="bg-blue-600 py-8 px-4">

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">

        
        <div className="border-r border-white/30 last:border-none flex flex-col items-center">

          <img
            src={stats1}
            alt="Students placed"
            className="w-14 h-14 object-contain mb-3"
          />

          <h2 className="text-2xl font-bold">
            500+
          </h2>

          <p className="text-sm text-white">
            Students placed
          </p>
        </div>

        
        <div className="border-r border-white/30 last:border-none flex flex-col items-center">

          <img
            src={stats2}
            alt="Visa success rate"
            className="w-14 h-14 object-contain mb-3"
          />

          <h2 className="text-2xl font-bold">
            95%
          </h2>

          <p className="text-sm text-white">
            Visa success rate
          </p>
        </div>

        
        <div className="border-r border-white/30 last:border-none flex flex-col items-center">

          <img
            src={stats3}
            alt="Partner Countries"
            className="w-14 h-14 object-contain mb-3"
          />

          <h2 className="text-2xl font-bold">
            10+
          </h2>

          <p className="text-sm text-white">
            Partner Countries
          </p>
        </div>

        
        <div className="flex flex-col items-center">

          <img
            src={stats4}
            alt="Years experience"
            className="w-14 h-14 object-contain mb-3"
          />

          <h2 className="text-2xl font-bold">
            5+
          </h2>

          <p className="text-sm text-white">
            Years experience
          </p>
        </div>

      </div>
    </div>
  )
}

export default StatsSection