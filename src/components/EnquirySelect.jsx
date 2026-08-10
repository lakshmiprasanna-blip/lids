"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const OPTIONS = ["Admissions", "General Enquiry", "Other"];

export default function EnquirySelect({ value, onChange, error }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button type="button" onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between rounded-full px-5 py-3 bg-white text-sm text-left outline-none border-none" style={{ color: value ? "#374151" : "#9CA3AF" }}>
        {value || "Select"}
        <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg overflow-hidden z-50">
          {OPTIONS.map((opt) => (
            <button key={opt} type="button" onClick={() => { onChange(opt); setOpen(false); }} className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#F5FFFE]">
              {opt}
            </button>
          ))}
        </div>
      )}
      <input type="hidden" name="enquiry_type" value={value} />
      {error && <p className="text-red-200 text-xs mt-1 px-2">{error}</p>}
    </div>
  );
}
