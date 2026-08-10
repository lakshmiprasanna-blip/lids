"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

const buildHref = (params, key, value) => {
  const usp = new URLSearchParams(
    Object.entries(params || {}).filter(([, v]) => v)
  );
  value ? usp.set(key, value) : usp.delete(key);
  return `?${usp.toString()}`;
};

function FilterDropdown({ label, options, paramKey, params }) {
  const current = params?.[paramKey] ?? "";
  return (
    <details name="filters" className="relative group">
      <summary className="list-none flex items-center gap-2 border border-white text-white text-md px-8 py-3 rounded-full whitespace-nowrap hover:bg-white hover:text-[#107B71] transition-all cursor-pointer [&::-webkit-details-marker]:hidden">
        {current || label}
        <ChevronDown size={14} className="transition-transform group-open:rotate-180" />
      </summary>
      <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-lg py-2 min-w-[180px] max-h-64 overflow-y-auto z-20">
        <Link href={buildHref(params, paramKey, "")} className="block px-4 py-2 text-sm text-[#3D3D3D] hover:bg-[#EAF8F7] no-underline">
          All {label}s
        </Link>
        {options.map((opt) => (
          <Link key={opt} href={buildHref(params, paramKey, String(opt))} className={`block px-4 py-2 text-sm hover:bg-[#EAF8F7] no-underline ${current === String(opt) ? "text-[#107B71] font-medium" : "text-[#3D3D3D]"}`}>
            {opt}
          </Link>
        ))}
      </div>
    </details>
  );
}

export default function ResearchFilterBar({ params, departments, years, types }) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-full py-8 px-0" style={{ background: "#107B71" }}>
      <form action="" method="get" className="container mx-auto flex items-center gap-3 md:gap-4 flex-wrap justify-center px-4 md:px-6">
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2.5 flex-1 min-w-[200px] max-w-7xl">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-[#20B2AA] shrink-0">
            <circle cx="10" cy="10" r="6.5" /><line x1="15.5" y1="15.5" x2="22" y2="22" />
          </svg>
          <input name="q" defaultValue={params?.q ?? ""} placeholder="Search research papers, authors, departments..." className="text-sm text-[#3D3D3D] outline-none w-full bg-transparent placeholder:text-transparent md:placeholder:text-[#9A9A9A]" />
        </div>

        <button type="button" onClick={() => setShowFilters((v) => !v)} className="md:hidden shrink-0 flex items-center justify-center rounded-2xl border border-white text-white w-12 h-12">
          <Menu size={20} />
        </button>

        {["department", "year", "type"].map((k) => params?.[k] && <input key={k} type="hidden" name={k} value={params[k]} />)}

        <div className={`${showFilters ? "flex" : "hidden"} md:flex items-center gap-3 md:gap-4 flex-wrap justify-center w-full md:w-auto`}>
          <FilterDropdown label="Department" options={departments} paramKey="department" params={params} />
          <FilterDropdown label="Year" options={years} paramKey="year" params={params} />
          <FilterDropdown label="Research" options={types} paramKey="type" params={params} />
        </div>
      </form>
    </div>
  );
}