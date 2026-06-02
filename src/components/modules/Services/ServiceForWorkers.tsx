import { Card, CardContent } from "@/components/ui/card"
import { Coffee, ChefHat, Hotel, Wrench } from "lucide-react"

const categories = [
  {
    title: "Hotel management",
    description:
      "Strategic career placement in global hospitality chains.",
    icon: Hotel,
    tag: "HOSPITALITY",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Barista",
    description:
      "Professional training and certification for coffee artisans.",
    icon: Coffee,
    tag: "SERVICE",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Chef services",
    description:
      "Placement in culinary hotspots and high-end hospitality groups.",
    icon: ChefHat,
    tag: "CULINARY",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Plumbers",
    description:
      "Licensed trade opportunities in residential infrastructure.",
    icon: Wrench,
    tag: "TRADES",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  },
]

function ServiceForWorkers() {
  return (
    <section className="bg-[#f5f5f5] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-[#f97316] text-xl md:text-2xl font-bold whitespace-nowrap">
            For Students
          </h2>

          <div className="h-[1px] w-full bg-gray-300" />
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((item, index) => {
            const Icon = item.icon

            return (
              <Card
                key={index}
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  bg-white
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                  p-0
                "
              >
                
                <div className="h-[140px] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-4 w-4 text-gray-700" />

                    <h3 className="text-[15px] font-semibold text-black leading-none">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[12px] leading-5 text-gray-500 mb-4">
                    {item.description}
                  </p>

                  <span
                    className="
                      inline-block
                      text-[10px]
                      font-semibold
                      tracking-wide
                      text-blue-700
                      bg-blue-100
                      px-2.5
                      py-1
                      rounded-md
                    "
                  >
                    {item.tag}
                  </span>
                </CardContent>
              </Card>
            )
          })}
          
        </div>
      </div>
    </section>
  )
}

export default ServiceForWorkers