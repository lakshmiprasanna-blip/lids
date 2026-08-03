import Image from "next/image";
import OutlineBtn from "@/components/OutlineBtn"

const defaultCardStyle = {
  background: "#FFFFFF",
  border: "2px solid #20B2AA66",
  borderRadius: "16px",
  padding: "32px",
  boxShadow: "inset 0 0 10px 10px rgba(207, 239, 237, 0.6), 0px 6px 6px 0px #EBFDFF33, 0px 13px 8px 0px #C9F9FF33, 0px 22px 9px 0px #E8FCFF33",
  backdropFilter: "blur(13.3px)",
};

const defaultBlobs = [
  { width: "368.38px", height: "470px", top: "-290px", right: 0, background: "rgba(207, 239, 237, 0.63)", filter: "blur(93px)", transform: "rotate(-91.53deg)", zIndex: 0 },
  { width: "368.38px", height: "470px", top: "60px", left: "-300px", background: "#CFEFED", filter: "blur(93px)", transform: "rotate(-135deg)", zIndex: 0 },
  { width: "199px", height: "254px", bottom: "-133px", left: "34px", background: "#CFEFED", filter: "blur(70px)", borderRadius: "50%", zIndex: 10 },
];

export default function CardGrid({
  label, title, cards, cols = 3, minHeight = 352, iconSize = 48,
  titleColor = "#1A1A1A", mobileClassName = "", desktopClassName = "",
  titleNoWrap = false, titleFontSize = "24px", showBlob = false,
  blobs = defaultBlobs, bgColor = "white", headingAlign = "Left",
  mobileBlobs = [], cardPaddingTop = "60px",
  cardStyle = defaultCardStyle,        
  cardBorder = "1px solid #20B2AA30", 
   mobileButtonText,        
  mobileButtonHref,  
  className="",   
}) {
  return (
    <section className={`relative bg-white !py-15 md:!py-14 lg:!py-24 ${className}`} style={{ backgroundColor: bgColor }}>
      {showBlob && (
        <div className="absolute inset-0 pointer-events-none">
          {blobs.map((blobStyle, i) => (
            <div key={`d-${i}`} className="absolute rounded-full hidden xl:block pointer-events-none" style={blobStyle} />
          ))}
          {mobileBlobs.map((blobStyle, i) => (
            <div key={`m-${i}`} className="absolute rounded-full xl:hidden pointer-events-none" style={blobStyle} />
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
        <div className={`md:hidden flex flex-col gap-6 ${mobileClassName}`}>
          {cards.map((card, i) => (
            <div key={i} style={{ ...cardStyle, paddingTop: cardPaddingTop }}>
              {card.icon && <Image src={card.icon} alt={card.title} width={iconSize} height={iconSize} className="mb-6" />}
              <h4 className={`font-semibold mb-3 ${titleNoWrap ? "whitespace-nowrap" : ""}`} style={{ fontSize: "24px", color: titleColor }}>{card.title}</h4>
              <p className="text-[#656C7B] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
           {mobileButtonText && mobileButtonHref && (
            <div className="flex justify-center mt-2">
              <OutlineBtn href={mobileButtonHref} width="159px" height="48px" bgColor="#9E2016" textColor="#FFFFFF" disableHover>
                {mobileButtonText}
              </OutlineBtn>
            </div>
          )}
        </div>
        {/* DESKTOP */}
        <div className={`hidden md:grid gap-6 ${desktopClassName} ${cols === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
          {cards.map((card, i) => {
            const isLastOdd = cols === 3 && cards.length % 2 !== 0 && i === cards.length - 1;
            return (
              <div key={i} className={`group ${isLastOdd ? "md:col-span-2 lg:col-span-1 md:justify-self-center lg:justify-self-stretch md:max-w-[calc(50%-12px)] lg:max-w-none w-full" : ""}`} style={{ ...cardStyle, paddingTop: cardPaddingTop, minHeight: `${minHeight}px`, border: cardBorder }}
              >
                {card.icon && (
                  <div className="relative mb-6 inline-block">
                    <Image src={card.icon} alt={card.title} width={iconSize} height={iconSize} />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: "#9E2016", mixBlendMode: "color" }} />
                  </div>
                )}
                <h4 className="font-semibold mb-3" style={{ fontSize: titleFontSize, color: titleColor }}>{card.title}</h4>
                <p className="text-[#656C7B] text-[16px] md:text-[18px] leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}