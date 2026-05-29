"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const timelineItems = [
  {
    id: 1,
    side: "right",
    image: "/assets/story-founder.png",
    title: "The Aadarsh Story",
    text: "Over 20 years ago, Mr Manchukonda Narasimha, a prominent Rice Mill entrepreneur in Telangana, saw the immense potential and huge growth opportunities in the Gulf markets and entered the Rice import and distribution business in Dubai. In 2019, his elder son, Mr Manchukonda Bhanuprakash, established Aadarsh Foodstuff Trading LLC in Deira, Dubai, a key hub for food commodity trade in the UAE.",
  },
  {
    id: 2,
    side: "left",
    image: "/assets/story-products.png",
    title: null,
    text: "At Aadarsh, we specialise in sourcing and supplying essential commodities, including Rice, Sugar, and edible oils. Our products are procured from established manufacturers, adhere to defined quality specifications, and are supplied to wholesale distributors, hotel groups, hypermarket chains, and institutional buyers across the UAE.",
  },
  {
    id: 3,
    side: "right",
    image: "/assets/story-warehouse.png",
    title: null,
    text: "With three large warehouses of our own, an in-house inventory, our own brands, and full control over documentation and logistics using the latest software tools, we maintain consistency across every stage of the supply chain process. This ensures reliable quality, timely delivery, and a structured, end-to-end seamless trade experience for our partners.",
  },
  {
    id: 4,
    side: "left",
    image: "/assets/story-team.png",
    title: null,
    text: "Our team of experienced professionals spread across the seven Emirates of the UAE provides complete support to all our trade partners. A strong back office team in Hyderabad, India, supports all the initiatives that are taken at Aadarsh in the UAE market.",
  },
  {
    id: 5,
    side: "right",
    image: "/assets/story-vision.png",
    title: null,
    text: "At Aadarsh, we have drawn up aggressive growth plans to expand our product range, expand into newer geographies and invest in marketing and promotions. By 2030, we would like to be recognised as one of the largest, most respected, and innovative trading houses in the GCC.",
  },
];

const ORANGE = "#E87722";
const DOT_SIZE = 14;

export default function AadarshTimeline() {
  const itemRefs = useRef([]);
  const lineRef = useRef(null);
  const firstDotRef = useRef(null);
  const lastDotRef = useRef(null);

  useEffect(() => {
    const updateLine = () => {
      if (!firstDotRef.current || !lastDotRef.current || !lineRef.current) return;
      const container = lineRef.current.parentElement;
      const containerRect = container.getBoundingClientRect();
      const firstRect = firstDotRef.current.getBoundingClientRect();
      const lastRect = lastDotRef.current.getBoundingClientRect();
      const top = firstRect.top - containerRect.top + DOT_SIZE / 2;
      const bottom = containerRect.bottom - lastRect.bottom + DOT_SIZE / 2;
      lineRef.current.style.top = `${top}px`;
      lineRef.current.style.bottom = `${bottom}px`;
    };

    // Small delay to ensure DOM is painted
    setTimeout(updateLine, 100);
    window.addEventListener("resize", updateLine);

    const observers = [];
    itemRefs.current.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tl-visible");
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("resize", updateLine);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      <style>{`
        .tl-item {
          opacity: 0;
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .tl-item.from-left {
          transform: translateX(-50px);
        }
        .tl-item.from-right {
          transform: translateX(50px);
        }
        .tl-item.tl-visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>

      {/* Outer wrapper — full width with side padding to prevent image crop */}
      <div className="relative w-full max-w-5xl mx-auto px-16">

        {/* Vertical line — positioned at exact 50% */}
        <div
          ref={lineRef}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "2px",
            background: ORANGE,
            zIndex: 0,
          }}
        />

        {timelineItems.map((item, index) => {
          const isRight = item.side === "right"; // text right, image left
          const isFirst = index === 0;
          const isLast = index === timelineItems.length - 1;

          return (
            <div
              key={item.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`tl-item ${isRight ? "from-left" : "from-right"}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 40px 1fr",
                alignItems: "start",
                marginBottom: "80px",
                minHeight: "260px",
              }}
            >
              {/* LEFT COLUMN */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: isRight ? "flex-end" : "flex-start",
                  paddingRight: isRight ? "40px" : "0",
                  paddingLeft: isRight ? "0" : "0",
                  paddingTop: "0",
                }}
              >
                {isRight ? (
                  // Image on left when text is on right
                  <div
                    style={{
                      width: "220px",
                      height: "220px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title || `Story ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  // Text on left when image is on right
                  <div style={{ paddingRight: "20px", paddingTop: "4px" }}>
                    <p
                      className="text-[#3A3A3A] text-sm leading-relaxed"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {item.text}
                    </p>
                  </div>
                )}
              </div>

              {/* CENTER COLUMN — dot aligned to top of content */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "4px",
                  zIndex: 2,
                }}
              >
                <div
                  ref={isFirst ? firstDotRef : isLast ? lastDotRef : null}
                  style={{
                    width: `${DOT_SIZE}px`,
                    height: `${DOT_SIZE}px`,
                    borderRadius: "50%",
                    background: ORANGE,
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* RIGHT COLUMN */}
              <div
                style={{
                  paddingLeft: isRight ? "20px" : "40px",
                  paddingTop: "0",
                }}
              >
                {isRight ? (
                  // Text on right
                  <div>
                    {item.title && (
                      <h2
                        style={{
                          fontFamily: "Georgia, serif",
                          fontWeight: "700",
                          fontSize: "22px",
                          color: "#1A1A1A",
                          marginBottom: "12px",
                        }}
                      >
                        {item.title}
                      </h2>
                    )}
                    <p
                      className="text-[#3A3A3A] text-sm leading-relaxed"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {item.text}
                    </p>
                  </div>
                ) : (
                  // Image on right
                  <div
                    style={{
                      width: "220px",
                      height: "220px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`Story ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}