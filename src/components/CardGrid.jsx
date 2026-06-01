import Image from "next/image";

const cardStyle = {
  background: "#FFFFFF",
  border: "2px solid rgba(229, 243, 242, 0.63)",
  borderRadius: "16px",
  padding: "32px",
  boxShadow: "0px 6px 6px 0px #EBFDFF33, 0px 13px 8px 0px #C9F9FF33, 0px 22px 9px 0px #E8FCFF33",
  backdropFilter: "blur(13.3px)",
};

export default function CardGrid({ title, cards, cols = 3, minHeight = 352 }) {
  return (
    <section className="bg-white py-8">
      <div className="container">
        {title && <h3 className="text-[#1A1A1A] font-semibold mb-10">{title}</h3>}

        {/* MOBILE - 3 col only */}
        {cols === 3 && (
          <div className="md:hidden flex flex-col gap-8">
            <div className="w-full h-[220px] rounded-2xl overflow-hidden">
              <img src={cards[0].mobileImage} alt="Mission" className="w-full h-full object-cover" />
            </div>
            {[cards[0], cards[2]].map((card, i) => (
  <div key={i} className="flex flex-col gap-3">
    <p className="text-[#00B5AD] text-sm font-semibold tracking-widest uppercase">{card.title}</p>
    <p className="text-[#3D3D3D] text-sm leading-relaxed">{card.mobileDesc || card.desc}</p>
  </div>
))}
          </div>
        )}

        {/* DESKTOP - 3 col / ALL - 2 col */}
        <div className={`gap-6 ${cols === 2 ? "grid grid-cols-1 md:grid-cols-2" : "hidden md:grid md:grid-cols-3"}`}>
          {cards.map((card, i) => (
            <div key={i} style={{ ...cardStyle, minHeight: `${minHeight}px` }}>
              {card.icon && <Image src={card.icon} alt={card.title} width={48} height={48} className="mb-6" />}
              <h4 className="text-[#1A1A1A] font-semibold mb-3">{card.title}</h4>
              <p className="text-[#7A7A7A] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}