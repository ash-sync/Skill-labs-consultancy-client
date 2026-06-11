import Luminedge from "@/assets/images/brand/Luminage 1.webp";
import BritishCouncil from "@/assets/images/brand/britishCouncil.webp";
import EDVoy from "@/assets/images/brand/edvoy 1.webp";
import ICDP from "@/assets/images/brand/IDP 1.webp";
import IELTS from "@/assets/images/brand/IELTS 1.webp";

export default function PartnersSection() {

  const partners = [
    Luminedge,
    BritishCouncil,
    EDVoy,
    ICDP,
    IELTS,
  ];

  return (
    <section className="bg-[#f3f3f3] py-10 border-b border-[#ddd]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {partners.map((partner, index) => (
            <img
              src={partner}
              key={index}
              className="h-14 md:h-16 object-contain"
              alt="partner"
              width={150}
              height={64}
            />
          ))}
        </div>
      </div>
    </section>
  );
}