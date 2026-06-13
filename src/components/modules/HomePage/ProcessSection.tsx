import React from 'react'

import process1 from '../../../assets/images/process/process1.webp'
import process2 from '../../../assets/images/process/process2.webp'
import process3 from '../../../assets/images/process/process3.webp'
import process4 from '../../../assets/images/process/process4.webp'
import process5 from '../../../assets/images/process/process5.webp'
import process6 from '../../../assets/images/process/process6.webp'

function ProcessSection() {
  return (
 <div className="bg-gray-100 py-12 px-4">

  <p className="text-center text-blue-600 font-medium">
    Our Process
  </p>

  <h2 className="text-center text-4xl font-bold text-[#C2410C] mb-14">
    Your One-Stop Solution
  </h2>

  <div className="flex flex-nowrap justify-center items-center gap-4 overflow-x-auto max-w-7xl mx-auto" style={{height: '267px'}}>

    
    <div className="flex items-center">
      <div className="text-center w-28 relative">
        
        <div className="relative w-20 h-20 mx-auto rounded-full bg-blue-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            1
          </span>

          <img
            src={process1}
            alt="Assessment Service"
            className="w-10 h-10 object-contain"
            width={40}
            height={40}
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          Assessment Service
        </h3>

        <p className="text-xs text-gray-700 mt-2 leading-5">
          We evaluate your profile and suggest the best options.
        </p>
      </div>

      <div className="hidden lg:block w-20 border-t border-dotted border-gray-400 mb-20"></div>
    </div>

    
    <div className="flex items-center">
      <div className="text-center w-28 relative">
        
        <div className="relative w-20 h-20 mx-auto rounded-full bg-green-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            2
          </span>

          <img
            src={process2}
            alt="File Processing"
            className="w-10 h-10 object-contain"
            width={40}
            height={40}
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          File Processing
        </h3>

        <p className="text-xs text-gray-700 mt-2 leading-5">
          We prepare and verify your documents carefully.
        </p>
      </div>

      <div className="hidden lg:block w-20 border-t border-dotted border-gray-400 mb-20"></div>
    </div>

    
    <div className="flex items-center">
      <div className="text-center w-28 relative">
        
        <div className="relative w-20 h-20 mx-auto rounded-full bg-purple-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            3
          </span>

          <img
            src={process3}
            alt="Visa Processing"
            className="w-10 h-10 object-contain"
            width={40}
            height={40}
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          Visa Processing
        </h3>

        <p className="text-xs text-gray-700 mt-2 leading-5">
          Expert guidance for smooth visa application.
        </p>
      </div>

      <div className="hidden lg:block w-20 border-t border-dotted border-gray-400 mb-20"></div>
    </div>

    
    <div className="flex items-center">
      <div className="text-center w-28 relative">
        
        <div className="relative w-20 h-20 mx-auto rounded-full bg-orange-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            4
          </span>

          <img
            src={process4}
            alt="Processing Updates"
            className="w-10 h-10 object-contain"
            width={40}
            height={40}
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          Processing Updates
        </h3>

        <p className="text-xs text-gray-700 mt-2 leading-5">
          Stay updated with real-time updates on your application.
        </p>
      </div>

      <div className="hidden lg:block w-20 border-t border-dotted border-gray-400 mb-20"></div>
    </div>

    
    <div className="flex items-center">
      <div className="text-center w-28 relative">
        
        <div className="relative w-20 h-20 mx-auto rounded-full bg-pink-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            5
          </span>

          <img
            src={process5}
            alt="SOP Writing"
            className="w-10 h-10 object-contain"
            width={40}
            height={40}
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          SOP Writing
        </h3>

        <p className="text-xs text-gray-700 mt-2 leading-5">
          Professional SOPs that highlights your strengths.
        </p>
      </div>

      <div className="hidden lg:block w-20 border-t border-dotted border-gray-400 mb-20"></div>
    </div>

    
    <div className="flex items-center">
      <div className="text-center w-28 relative">
        
        <div className="relative w-20 h-20 mx-auto rounded-full bg-green-50 border-4 border-white shadow-lg flex items-center justify-center">

          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
            6
          </span>

          <img
            src={process6}
            alt="Scholarship/Waiver"
            className="w-10 h-10 object-contain"
            width={40}
            height={40}
          />
        </div>

        <h3 className="mt-4 text-sm font-bold text-blue-700">
          Scholarship/Waiver
        </h3>

        <p className="text-xs text-gray-700 mt-2 leading-5">
          We help you get scholarships and fee waivers.
        </p>
      </div>
    </div>

  </div>
</div>
    
  )
}

export default ProcessSection