import React from "react";
import { Award, Loader2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGetServicesQuery } from "../../../redux/api/dashboard.api";
import { Link } from "react-router";

function ServicesForStudent() {
  const { data: services = [], isLoading, error } = useGetServicesQuery({});

  return (
    <section className="bg-[#ececec] px-4 py-14 sm:py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex items-center gap-3 sm:gap-4 mb-8">
          <h3 className="text-[#F97316] text-[18px] sm:text-[20px] md:text-[22px] font-bold whitespace-nowrap">
            Our Services
          </h3>
          <div className="w-full h-[1px] bg-[#d1d5db]" />
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">Failed to load services.</div>
        ) : services.length === 0 ? (
          <div className="text-center text-gray-500 py-10">No services available.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {services.map((service: any) => (
              <Card key={service._id} className="bg-[#f5f5f5] border border-[#d9d9d9] rounded-[14px] shadow-none flex flex-col justify-between">
                <CardContent className="p-7 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-[#dbeafe] flex items-center justify-center overflow-hidden">
                    {service.icon ? (
                      <img src={service.icon} alt={service.title} className="w-full h-full object-cover" />
                    ) : (
                      <Award className="text-blue-600 w-6 h-6" />
                    )}
                  </div>

                  <h3 className="text-[#2563EB] text-[22px] font-bold mt-6">
                    {service.title}
                  </h3>

                  <p className="text-[#666] text-[13px] leading-[22px] mt-4 flex-grow line-clamp-3">
                    {service.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="mt-8 p-0 h-auto hover:bg-transparent text-[#2563EB] text-[11px] uppercase tracking-[1px] font-semibold justify-start"
                  >
                    Explore Program →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesForStudent;