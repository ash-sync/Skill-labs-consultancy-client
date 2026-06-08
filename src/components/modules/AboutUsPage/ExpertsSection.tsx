import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useGetExpertsQuery } from "../../../redux/api/dashboard.api";

function ExpertsSection() {
  const { data: allExperts = [] } = useGetExpertsQuery({});
  

  const experts = allExperts.filter((expert: any) => expert.category === 'Meet Our Experts');
  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="max-w-[1320px] mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-[34px] leading-none font-bold text-[#ff6b00]">
            Meet Our Experts
          </h2>

          <p className="text-[#666] text-[13px] mt-4 max-w-[620px] mx-auto leading-[22px]">
            Behind every success story is a dedicated consultant. Our team
            combines decades of experience in international education.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert: any, index: number) => (
            <Card
              key={expert._id || index}
              className="rounded-[10px] overflow-hidden border border-[#e7e7e7] bg-white shadow-none p-0"
            >
              
              <div className="h-[270px] overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>

              
              <CardContent className="p-[18px]">
                <h3 className="text-[15px] font-semibold text-[#111] leading-none">
                  {expert.name}
                </h3>

                <p className="text-[10px] font-bold tracking-[1.4px] text-[#1e4ed8] uppercase mt-3">
                  {expert.role}
                </p>

                <p className="text-[12px] text-[#666] leading-[20px] mt-4">
                  {expert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertsSection