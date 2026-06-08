import React from 'react';
import { ArrowRight } from 'lucide-react';
import london from "@/assets/images/consultants/globalPresense/London.png"
import newyork from "@/assets/images/consultants/globalPresense/New York.png"
import sydney from "@/assets/images/consultants/globalPresense/Sydney.png"
import malaysia from "@/assets/images/consultants/globalPresense/Dubai.png"

const locations = [
  {
    title: 'London, UK',
    address: '22 Baker Street, Marylebone, London NW1 6XE',
    image: london,
    mapLink: '#'
  },
  {
    title: 'Ontario, NA',
    address: '77 Martin Ross Avenue Toronto, Ontario M3J 2L',
    image: newyork,
    mapLink: '#'
  },
  {
    title: 'Sydney, AU',
    address: '100 George St, The Rocks, Sydney NSW 2000',
    image: sydney,
    mapLink: '#'
  },
  {
    title: 'Malaysia, SEA',
    address: 'Suite 12-A, Level 12, Wisma Goldhill, 50200 Kuala Lumpur, Malaysia',
    image: malaysia,
    mapLink: '#'
  }
];

export default function GlobalPresence() {
  return (
    <section className="w-full bg-[#F8F9FA] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#111827]">
            <span className="text-[#EA580C]">Global</span> Presence
          </h2>
          <p className="mt-2 text-sm text-[#2563EB] font-medium">
            Visit our regional hubs for personalized assistance
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {locations.map((loc, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between h-full max-w-[340px] mx-auto w-full"
            >
              <div>
                
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-5">
                  <img 
                    src={loc.image} 
                    alt={loc.title} 
                    className="w-full h-full object-cover grayscale-[20%] contrast-[110%]"
                  />
                </div>

                
                <h3 className="text-[#2563EB] font-bold text-[15px] mb-2 tracking-wide">
                  {loc.title}
                </h3>

                
                <p className="text-[#4B5563] text-xs leading-relaxed font-normal mb-6 min-h-[36px]">
                  {loc.address}
                </p>
              </div>

              
              <a 
                href={loc.mapLink}
                className="inline-flex items-center gap-1.5 text-[#EA580C] hover:text-[#C2410C] text-xs font-bold tracking-wide group transition-colors w-max"
              >
                View on Map
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}