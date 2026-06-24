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
      }}
    >
      {children}
    </Link>
  );
}