import luminedgeLogo from '../../../assets/images/brand/Luminage 1.webp'
import britishCouncilLogo from '../../../assets/images/brand/britishCouncil.webp'
import edvoyLogo from '../../../assets/images/brand/edvoy 1.webp'
import idpLogo from '../../../assets/images/brand/IDP 1.webp'
import ieltsLogo from '../../../assets/images/brand/IELTS 1.webp'

function BrandSection() {
  return (
  <div className="bg-blue-50/50 py-5 px-4 border-y border-slate-100">

  <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-6 overflow-x-auto md:overflow-x-visible md:justify-center md:gap-10 lg:gap-14 scrollbar-none">

    <p className="text-sm md:text-base text-slate-500 font-semibold whitespace-nowrap flex-shrink-0">
      Trusted by 500+ students
    </p>

    <img
      src={luminedgeLogo}
      alt="Luminedge"
      className="h-8 md:h-10 object-contain flex-shrink-0 filter grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition duration-300"
      width={100}
      height={40}
    />

    <img
      src={britishCouncilLogo}
      alt="British Council"
      className="h-8 md:h-10 object-contain flex-shrink-0 filter grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition duration-300"
      width={100}
      height={40}
    />

    <img
      src={edvoyLogo}
      alt="Edvoy"
      className="h-8 md:h-10 object-contain flex-shrink-0 filter grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition duration-300"
      width={100}
      height={40}
    />

    <img
      src={idpLogo}
      alt="IDP"
      className="h-8 md:h-10 object-contain flex-shrink-0 filter grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition duration-300"
      width={100}
      height={40}
    />

    <img
      src={ieltsLogo}
      alt="IELTS"
      className="h-8 md:h-10 object-contain flex-shrink-0 filter grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition duration-300"
      width={100}
      height={40}
    />

  </div>
</div>
  )
}

export default BrandSection