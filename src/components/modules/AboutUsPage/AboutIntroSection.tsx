import { Card, CardContent } from "@/components/ui/card"
import introImage from "@/assets/images/aboutUs/intro.webp"
import introIcon1 from "@/assets/icons/aboutUs/introIcon1.png"
import introIcon2 from "@/assets/icons/aboutUs/introicon2.png"

function AboutIntroSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
                Established 2024
              </p>

              <h1 className="max-w-xl text-5xl font-extrabold leading-[1.1] tracking-tight text-[#2563EB]">
                Empowering Global Dreams Through Education
              </h1>

              <p className="max-w-lg text-base leading-7 text-gray-500">
                Skills Lab Consultancy is a premier educational advisory
                firm dedicated to bridging the gap between local talent
                and global opportunities.
              </p>
            </div>

           
            <div className="flex flex-wrap gap-5">
              <Card className="rounded-2xl border border-gray-100 bg-white shadow-sm">
                <CardContent className="flex items-center gap-3 px-5 py-4">
                  <div className="rounded-full bg-cyan-100 p-2">
                    <img
                      src={introIcon1}
                      alt="Success Icon"
                      className="h-5 w-5"
                      width={20}
                      height={20}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      95%
                    </h4>

                    <p className="text-sm text-gray-500">
                      Success Rate
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-gray-100 bg-white shadow-sm">
                <CardContent className="flex items-center gap-3 px-5 py-4">
                  <div className="rounded-full bg-orange-100 p-2">
                    <img
                      src={introIcon2}
                      alt="Students Icon"
                      className="h-5 w-5"
                      width={20}
                      height={20}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-orange-500">
                      500+
                    </h4>

                    <p className="text-sm text-gray-500">
                      Students Placed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

         
          <div className="relative flex justify-center">
            <div className="overflow-hidden rounded-[28px] shadow-2xl">
              <img
                src={introImage}
                alt="Students discussion"
                className="h-[520px] w-full max-w-[620px] object-cover"
                width={620}
                height={520}
              />
            </div>

            
            <div className="absolute left-[-144px] bottom-[-57px] rounded-2xl bg-[#2563EB] px-6 py-5 text-white shadow-2xl">
              <h3 className="text-3xl font-bold text-[#F97316]">
                2+
              </h3>

              <p className="mt-2 max-w-[210px] text-sm leading-6 text-blue-100">
                Years of consultancy expertise in global admissions
                and visa processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntroSection