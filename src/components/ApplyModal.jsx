"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import EnquirySelect from "./EnquirySelect";

export default function ApplyModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [enquiryType, setEnquiryType] = useState("Admissions");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, enquiry_type: enquiryType }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)" }} onClick={onClose}>
      <div
        className="relative w-full max-w-[580px] rounded-3xl p-8 md:p-10 flex flex-col gap-5"
        style={{ background: "#107B71", boxShadow: "inset 0px 2px 12px 0px #FFFFFF40, 0px 6px 6px 0px #E5F3F208, 0px 13px 8px 0px #009A7CAB, 0px 22px 9px 0px #009A7C00, 0px 35px 10px 0px #C9F9FF00" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} className="absolute top-5 right-5 text-white/80 hover:text-white cursor-pointer">
          <X size={22} />
        </button>
        <h3 className="!text-white !text-[24px] md:text-4xl font-semibold pr-8">Apply Now</h3>
        <form className="flex flex-col gap-5" autoComplete="on" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" autoComplete="name" value={form.name} onChange={handleChange} required className="w-full rounded-full px-5 py-3 bg-white text-sm text-gray-700 outline-none border-none placeholder:text-gray-400" />
          <input type="email" name="email" placeholder="Email address" autoComplete="email" value={form.email} onChange={handleChange} required className="w-full rounded-full px-5 py-3 bg-white text-sm text-gray-700 outline-none border-none placeholder:text-gray-400" />
          <input type="tel" name="phone" placeholder="Phone Number" autoComplete="tel" value={form.phone} onChange={handleChange} required className="w-full rounded-full px-5 py-3 bg-white text-sm text-gray-700 outline-none border-none placeholder:text-gray-400" />
          <EnquirySelect value={enquiryType} onChange={setEnquiryType} />
          <textarea name="message" placeholder="Your message" rows={4} value={form.message} onChange={handleChange} className="w-full rounded-2xl px-5 py-4 bg-white text-sm text-gray-700 outline-none border-none resize-none placeholder:text-gray-400" />
          <div>
            <button type="submit" disabled={status === "submitting"} className="px-8 py-3 rounded-full text-white font-semibold text-sm cursor-pointer disabled:opacity-60" style={{ backgroundColor: "#9E2016", borderRadius: "65px", border: "1px solid #9E2016", fontSize: "16px", fontWeight: 500, boxShadow: "0px 4px 4px 0px #0000001A, 0px 6px 6px 0px #1A1A1A08, 0px 13px 8px 0px #1A1A1A05, 0px 22px 9px 0px #1A1A1A03, 0px 35px 10px 0px #1A1A1A00, 0px 2px 12px 0px #FFFFFF40 inset" }}>
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>
            {status === "success" && <p className="text-white text-sm mt-2">Thanks! We'll get back to you soon.</p>}
            {status === "error" && <p className="text-red-200 text-sm mt-2">Something went wrong. Please try again.</p>}
          </div>
        </form>
      </div>
    </div>
  );
}