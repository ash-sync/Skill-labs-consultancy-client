import melbourneImage from '../../../assets/images/universities/melbourne.webp'
import sydneyImage from '../../../assets/images/universities/sydney.webp'
import deakin from '../../../assets/images/universities/deakin.webp'
import curtin from '../../../assets/images/universities/curtin.webp'
import monash from '../../../assets/images/universities/monash.webp'
import northSouth from '../../../assets/images/universities/northSouth.webp'

function PartnersSection() {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] sm:text-xs font-bold tracking-[3px] uppercase text-[#2563EB] mb-2">
            Our Partners
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-poppins text-[#C2410C]">
            Universities & Partners
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-5 py-4 w-[140px] h-[80px] flex items-center justify-center">
            <img
              src={sydneyImage}
              alt="Sydney University"
              className="max-h-12 object-contain"
              width={144}
              height={48}
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-5 py-4 w-[140px] h-[80px] flex items-center justify-center">
            <img
              src={monash}
              alt="Monash University"
              className="max-h-12 object-contain"
              width={144}
              height={48}
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-5 py-4 w-[140px] h-[80px] flex items-center justify-center">
            <img
              src={melbourneImage}
              alt="Melbourne University"
              className="max-h-12 object-contain"
              width={144}
              height={48}
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-5 py-4 w-[140px] h-[80px] flex items-center justify-center">
            <img
              src={northSouth}
              alt="North South University"
              className="max-h-12 object-contain"
              width={144}
              height={48}
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-5 py-4 w-[140px] h-[80px] flex items-center justify-center">
            <img
              src={deakin}
              alt="Deakin University"
              className="max-h-12 object-contain"
              width={144}
              height={48}
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-5 py-4 w-[140px] h-[80px] flex items-center justify-center">
            <img
              src={curtin}
              alt="Curtin University"
              className="max-h-12 object-contain"
              width={144}
              height={48}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection