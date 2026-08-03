import Link from "next/link";

export const metadata = {
  title: "Thank You | LIDS",
  description: "Thank you for reaching out to LIDS. Our team will get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center py-20 relative overflow-hidden">
      <div
        className="absolute pointer-events-none rounded-full hidden xl:block"
        style={{
          width: "800px",
          height: "800px",
          top: "-80px",
          right: "300px",
          background: "#8ddeda59",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
      <div className="container relative z-10">
        <div
          className="max-w-xl mx-auto rounded-3xl p-10 md:p-14 flex flex-col items-center text-center gap-6"
          style={{
            background: "#107B71",
            boxShadow: `inset 0px 2px 12px 0px #FFFFFF40, 0px 6px 6px 0px #E5F3F208, 0px 13px 8px 0px #009A7CAB, 0px 22px 9px 0px #009A7C00, 0px 35px 10px 0px #C9F9FF00`,
          }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center relative"
            style={{
              background: "#9EFFEE1F",
              boxShadow: `0px 1px 3px 0px #1A1A1A0A, 0px 6px 6px 0px #1A1A1A08, 0px 13px 8px 0px #1A1A1A05, inset 0px 2px 12px 0px #FFFFFF40`,
            }}
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                padding: "1px",
                background:
                  "linear-gradient(0deg, rgba(255,255,255,0.48) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.48) 100%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 6L9 17L4 12"
                stroke="#20B2AA"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1
            className="!text-[28px] md:!text-[36px] font-semibold"
            style={{ color: "#ffffff" }}
          >
            Thank You!
          </h1>

          <p
            className="!text-[16px] md:!text-[18px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Your message has been received. Our admissions team will get back
            to you shortly — usually within 1 business day.
          </p>

          <Link
            href="/"
            className="px-8 py-3 rounded-full font-semibold text-sm cursor-pointer mt-2 inline-block"
            style={{
              backgroundColor: "#9E2016",
              borderRadius: "65px",
              border: "1px solid #9E2016",
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              color: "#ffffff",
              whiteSpace: "nowrap",
              boxShadow:
                "0px 4px 4px 0px #0000001A, 0px 6px 6px 0px #1A1A1A08, 0px 2px 12px 0px #FFFFFF40 inset",
            }}
          >
            <span style={{ color: "#ffffff" }}>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}