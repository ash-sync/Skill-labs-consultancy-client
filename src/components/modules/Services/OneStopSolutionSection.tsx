import React from 'react'
import {
  FileText,
  Globe,
  GraduationCap,
  ClipboardCheck,
  Circle,
} from "lucide-react";
import ServiceCard from '@/components/ServiceCard';

function OneStopSolutionSection() {
   const steps = [
    {
      number: "1",
      title: "Documentation Prep",
      desc: "Collecting and verifying required information for all submissions.",
    },
    {
      number: "2",
      title: "Application Filing",
      desc: "Submission to selected universities or employers.",
    },
    {
      number: "3",
      title: "Visa Processing",
      desc: "Managing visa documentation and consulate meetings.",
    },
    {
      number: "4",
      title: "Travel Coordination",
      desc: "Flight arrangements and pre-departure briefing.",
    },
  ];
  return (
   <main className="min-h-screen bg-[#f5f5f5] px-4 py-10">
      <div className="mx-auto max-w-7xl">
        
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
            The{" "}
            <span className="text-orange-500">One-Stop</span>
            -Solution
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-gray-500">
            From your initial inquiry to your arrival at your destination,
            we handle every detail with precision and care.
          </p>
        </div>

        
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          <div className="flex flex-col gap-6">
            <ServiceCard
              icon={<ClipboardCheck className="h-5 w-5 text-teal-500" />}
              title="Assessment Service"
              desc="Personalized profile evaluation to determine the best-fit programs and countries based on your goals."
            />

            <ServiceCard
              icon={<FileText className="h-5 w-5 text-teal-500" />}
              title="SOP Writing Service"
              desc="Expert assistance in crafting compelling Statements of Purpose that highlight your unique strengths."
            />

            <ServiceCard
              icon={<Globe className="h-5 w-5 text-teal-500" />}
              title="Visa Processing"
              desc="Dedicated support for complete documentation and visa submission accuracy."
              tags={["MBBS EXAM PREP", "PTE ACADEMIC"]}
            />
          </div>

          
          <div className="relative overflow-hidden rounded-2xl bg-[#2d5cff] p-6 text-white shadow-lg">
            <div className="absolute left-10 top-10 h-[75%] w-[2px] bg-white/30" />

            <div className="space-y-8">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Circle className="h-3 w-3 fill-white text-white" />
                Processing Updates
              </div>

              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-4">
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-[#2d5cff]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/80">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/20 pt-4 text-xs text-white/80">
              <p>
                <span className="text-red-400">LIVE STATUS</span>
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Active Monitoring for 1,300+ clients
              </div>
            </div>
          </div>

          
          <div className="flex flex-col gap-6">
            <ServiceCard
              icon={<FileText className="h-5 w-5 text-teal-500" />}
              title="File Processing"
              desc="Streamlined handling of academic and professional records with high accuracy."
            />

            <ServiceCard
              icon={<GraduationCap className="h-5 w-5 text-teal-500" />}
              title="Scholarship Service"
              desc="Maximum waiver and scholarship identification to make your journey affordable."
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default OneStopSolutionSection