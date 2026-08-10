"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CarouselArrowButton({ direction = "prev", onClick, size = 48, variant = "active", className = "", style }) {
  const [pressed, setPressed] = useState(false);
  const Icon = direction === "next" ? ArrowRight : ArrowLeft;
  const isActiveVariant = variant !== "hover";

  const press = () => isActiveVariant && setPressed(true);
  const release = () => isActiveVariant && setPressed(false);

  const stateClasses = variant === "hover" ? "bg-white hover:bg-[#9E2016] hover:text-white cursor-pointer" : "";

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseDown={press}
      onMouseUp={release}
      onMouseLeave={release}
      onTouchStart={press}
      onTouchEnd={release}
      className={`shrink-0 flex items-center justify-center rounded-full border border-[#9E2016] transition-all duration-200 ${stateClasses} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...(isActiveVariant ? { backgroundColor: pressed ? "#9E2016" : "#FFFFFF", color: pressed ? "#FFFFFF" : "#9E2016" } : {}),
        ...style,
      }}
    >
      <Icon size={20} />
    </button>
  );
}
