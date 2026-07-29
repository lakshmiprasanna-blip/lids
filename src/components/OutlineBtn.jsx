import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OutlineBtn({
  href = "/",
  children = "View all",
  width,
  height = "56px",
  icon = false,
  className = "",
  bgColor,           // NEW — optional background color override
  textColor,         // NEW — optional text color override (pairs with bgColor)
  disableHover = false, // NEW — skip hover state entirely
}) {
  return (
    <Link
      href={href}
      style={{
        ...(width && { width }),
        height,
        ...(bgColor && { backgroundColor: bgColor }),
        ...(textColor && { color: textColor }),
      }}
      className={`inline-flex items-center justify-center gap-[10px] whitespace-nowrap border border-[#9E2016] rounded-[65px] ${
        !bgColor ? "text-[#9E2016]" : ""
      } text-base font-semibold shadow-[0px_4px_4px_0px_#0000001A,0px_6px_6px_0px_#1A1A1A08,0px_13px_8px_0px_#1A1A1A05,0px_22px_9px_0px_#1A1A1A03,0px_35px_10px_0px_#1A1A1A00,0px_2px_12px_0px_#FFFFFF40_inset] ${
        !disableHover ? "hover:bg-[#9E2016] hover:!text-white group-hover:bg-[#9E2016] group-hover:!text-white" : ""
      } transition-all duration-200 ${className}`}
    >
      {children}
      {icon && <ArrowRight size={16} />}
    </Link>
  );
}