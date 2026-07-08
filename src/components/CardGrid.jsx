import Image from "next/image";

const cardStyle = {
  background: "#FFFFFF",
  border: "2px solid #20B2AA66",
  borderRadius: "16px",
  padding: "32px",
   paddingTop: "50px",
  boxShadow: "inset 0 0 40px 10px rgba(207, 239, 237, 0.6), 0px 6px 6px 0px #EBFDFF33, 0px 13px 8px 0px #C9F9FF33, 0px 22px 9px 0px #E8FCFF33",
  backdropFilter: "blur(13.3px)",
  
};

const defaultBlobs = [
  { width: "368.38px", height: "470px", top: "-290px", right: 0, background: "rgba(207, 239, 237, 0.63)", filter: "blur(93px)", transform: "rotate(-91.53deg)", zIndex: 0 },
  { width: "368.38px", height: "470px", top: "60px", left: "-300px", background: "#CFEFED", filter: "blur(93px)", transform: "rotate(-135deg)", zIndex: 0 },
  { width: "199px", height: "254px", bottom: "-133px", left: "34px", background: "#CFEFED", filter: "blur(70px)", borderRadius: "50%", zIndex: 10 },
];

export default function CardGrid({ label, title, cards, cols = 3, minHeight = 352, iconSize = 64, titleColor = "#1A1A1A", mobileClassName = "", desktopClassName = "",titleNoWrap = false,titleFontSize = "24px", showBlob = false, blobs = defaultBlobs, bgColor="white",headingAlign="Left" }) {
  return (
    <section className="relative bg-white py-8 md:py-15" style={{backgroundColor:bgColor}}>
      {showBlob && (
        <div className="absolute inset-0 pointer-events-none">
          {blobs.map((blobStyle, i) => (
            <div key={i} className="absolute rounded-full hidden xl:block pointer-events-none" style={blobStyle} />
          ))}
        </div>
      )}

      <div className="container relative z-10">
        {(label || title) && (
         <div className={`mb-10 ${headingAlign === "center" ? "text-center" : "text-left"}`}>
  {label && <p className="text-[#9E2016] text-[18px] font-semibold uppercase mb-4">{label}</p>}
  {title && <h3 className="text-[#1A1A1A] font-semibold">{title}</h3>}
</div>
        )}
        {/* MOBILE */}
        {cols === 3 && (
          <div className={`md:hidden flex flex-col gap-6 ${mobileClassName}`}>
            {cards.map((card, i) => (
              <div key={i} style={cardStyle}>
                {card.icon && <Image src={card.icon} alt={card.title} width={iconSize} height={iconSize} className="mb-6" />}
                <h4 className={`font-semibold mb-3 ${titleNoWrap ? "whitespace-nowrap" : ""}`} style={{ fontSize: "24px", color: titleColor }}>{card.title}</h4>
                <p className="text-[#656C7B] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        )}
<div className={`gap-6 ${desktopClassName} ${cols === 2 ? "grid grid-cols-1 md:grid-cols-2" : "hidden md:grid md:grid-cols-3"}`}>
  {cards.map((card, i) => (
    <div key={i} className="group" style={{ ...cardStyle, minHeight: `${minHeight}px`, border: "1px solid #20B2AA30" }}>
 {card.icon && (
  <div className="relative mb-6 inline-block">
    <Image src={card.icon} alt={card.title} width={iconSize} height={iconSize} />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: "#9E2016", mixBlendMode: "color" }} />
  </div>
)}
  <h4 className="font-semibold mb-3" style={{ fontSize: titleFontSize, color: titleColor }}>{card.title}</h4>
  <p className="text-[#656C7B] text-[18px] leading-relaxed">{card.desc}</p>
</div>
  ))}
</div>
      </div>
    </section>
  );
}