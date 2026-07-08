import Link from "next/link";

export default function OutlineBtn({ href = "/", children = "View all", width = "160px", height = "48px" }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center hover:bg-[#9E2016] hover:!text-white transition-all duration-200 whitespace-nowrap"
      style={{
        width,
        height,
        border: "1px solid #9E2016",
        borderRadius: "65px",
        color: "#9E2016",
        fontSize: "16px",
        fontWeight: 600,
        gap: "10px",
         boxShadow: "0px 4px 4px 0px #0000001A, 0px 6px 6px 0px #1A1A1A08, 0px 13px 8px 0px #1A1A1A05, 0px 22px 9px 0px #1A1A1A03, 0px 35px 10px 0px #1A1A1A00, 0px 2px 12px 0px #FFFFFF40 inset",
      }}
    >
      {children}
    </Link>
  );
}
