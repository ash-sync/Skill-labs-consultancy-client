import React from 'react'
import visionIcon from '@/assets/icons/aboutUs/visionIcon.png'
import missionIcon from '@/assets/icons/aboutUs/missionIcon.png'

function VisionMissionSection() {
  return (
    <div>
         <section className="w-full bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        
        
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
            Our Purpose
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#111827]">
            Vision & Mission
          </h2>
        </div>

        
        <div className="grid gap-6 md:grid-cols-2">
          
          
          <div className="rounded-2xl border border-gray-200 bg-[#F9FAFB] p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <img
                src={visionIcon}
                alt="Vision Icon"
                className="h-5 w-5"
              />
            </div>

            <h3 className="mb-3 text-2xl font-bold text-[#2563EB]">
              Our Vision
            </h3>

            <p className="leading-7 text-gray-600">
              To be the most trusted global bridge for students and
              professionals, helping unlock worldwide opportunities
              through education and career success.
            </p>
          </div>

          
          <div className="rounded-2xl bg-[#2563EB] p-8 text-white shadow-lg transition hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <img
                src={missionIcon}
                alt="Mission Icon"
                className="h-5 w-5"
              />
            </div>

            <h3 className="mb-3 text-2xl font-bold">
              Our Mission
            </h3>

            <p className="leading-7 text-blue-100">
              To guide students, immigrants, and skilled professionals
              toward international education and career opportunities
              with honesty, expertise, and personalized support.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default VisionMissionSection