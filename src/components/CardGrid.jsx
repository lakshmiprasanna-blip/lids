import Image from "next/image";

const cardStyle = {
  background: "#FFFFFF",
  border: "2px solid rgba(229, 243, 242, 0.63)",
  borderRadius: "16px",
  padding: "32px",
  boxShadow: "inset 0 0 40px 10px rgba(207, 239, 237, 0.6), 0px 6px 6px 0px #EBFDFF33, 0px 13px 8px 0px #C9F9FF33, 0px 22px 9px 0px #E8FCFF33",
  backdropFilter: "blur(13.3px)",
};

export default function CardGrid({ title, cards, cols = 3, minHeight = 352, iconSize = 48, titleColor = "#1A1A1A", mobileClassName = "", desktopClassName = "",titleNoWrap = false }) {
  return (
    <section className="bg-white py-0 md:py-15">
      <div className="container">
        {title && <h3 className="text-[#1A1A1A] font-semibold mb-10">{title}</h3>}

        {/* MOBILE */}
        {cols === 3 && (
          <div className={`md:hidden flex flex-col gap-6 ${mobileClassName}`}>
            {cards.map((card, i) => (
              <div key={i} style={cardStyle}>
                {card.icon && <Image src={card.icon} alt={card.title} width={iconSize} height={iconSize} className="mb-6" />}
                <h4 className={`font-semibold mb-3 ${titleNoWrap ? "whitespace-nowrap" : ""}`} style={{ fontSize: "24px", color: titleColor }}>{card.title}</h4>
                <p className="text-[#7A7A7A] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* DESKTOP */}
        <div className={`gap-6 ${desktopClassName} ${cols === 2 ? "grid grid-cols-1 md:grid-cols-2" : "hidden md:grid md:grid-cols-3"}`}>
          {cards.map((card, i) => (
            <div key={i} style={{ ...cardStyle, minHeight: `${minHeight}px` }}>
              {card.icon && <Image src={card.icon} alt={card.title} width={iconSize} height={iconSize} className="mb-6" />}
              <h4 className="font-semibold mb-3" style={{ fontSize: "24px", color: titleColor }}>{card.title}</h4>
              <p className="text-[#7A7A7A] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}