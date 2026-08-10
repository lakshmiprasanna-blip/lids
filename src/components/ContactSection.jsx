"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import contactData from "@/app/data/contact.json";
import EnquirySelect from "./EnquirySelect";

function ContactCard({ icon, title, content }) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:text-left lg:gap-5 rounded-3xl" style={{ padding: "24px", background: "rgba(158, 255, 238, 0.06)", border: "1px solid #20B2AA30", boxShadow: "inset 0px 2px 12px 0px rgba(255,255,255,0.25), 0px 13px 8px 0px rgba(158,255,238,0.05)", backdropFilter: "blur(8px)" }}>
      <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 relative" style={{ background: "#9EFFEE1F", boxShadow: "0px 1px 3px 0px #1A1A1A0A, 0px 6px 6px 0px #1A1A1A08, 0px 13px 8px 0px #1A1A1A05, 0px 22px 9px 0px #1A1A1A03, 0px 0px 10px 0px #1A1A1A00, inset 0px 2px 12px 0px #FFFFFF40" }}>
        <div className="absolute inset-0 rounded-full pointer-events-none" style={{ padding: "1px", background: "linear-gradient(0deg, rgba(255,255,255,0.48) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.48) 100%)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
        {icon}
      </div>
      <div>
        <h4 className="font-semibold !text-[24px] mb-1" style={{ color: "#20B2AA" }}>{title}</h4>
        <p className="text-[16px] text-[#656C7B] leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

const LocationIcon = () => (
  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70877 0C3.9067 0 0 3.90675 0 8.70877C0 10.6309 0.44025 12.6173 1.30847 14.6129C1.99495 16.1906 2.94952 17.7781 4.14567 19.3311C6.17372 21.9643 8.1788 23.5767 8.26312 23.6442L8.70881 24L9.15455 23.6441C9.23887 23.5767 11.244 21.9643 13.272 19.3311C14.4682 17.778 15.4227 16.1906 16.1092 14.6128C16.9774 12.6173 17.4177 10.6309 17.4177 8.70872C17.4176 3.90675 13.5108 0 8.70877 0ZM8.70877 11.2262C7.32061 11.2262 6.1913 10.0969 6.1913 8.70877C6.1913 7.32066 7.32066 6.1913 8.70877 6.1913C10.0969 6.1913 11.2262 7.32066 11.2262 8.70877C11.2262 10.0969 10.0969 11.2262 8.70877 11.2262ZM13.6075 8.70877C13.6075 6.00759 11.4099 3.81 8.70872 3.81V2.38125C12.1977 2.38125 15.0362 5.21977 15.0362 8.70877H13.6075Z" fill="#20B2AA" /></svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5388 14.9414C19.628 15.3372 21.3107 16.2111 22.9247 17.5945C23.2816 17.9004 23.455 18.3636 23.3871 18.8114C23.2202 19.9118 22.979 20.9452 22.626 21.8978C22.2564 22.8953 21.1658 23.5436 19.9712 23.3727C14.9179 22.6496 10.4112 20.5951 6.90878 17.0927C3.40625 13.5902 1.35191 9.0836 0.628869 4.03036C0.45794 2.83578 1.10625 1.74516 2.10373 1.37553C3.0563 1.02255 4.08973 0.781361 5.19013 0.614479C5.63794 0.546564 6.10109 0.719911 6.40705 1.07688C7.79043 2.69086 8.66438 4.37348 9.06017 6.4627C9.13984 6.88326 9.01872 7.31224 8.73502 7.60905C7.99205 8.38638 7.49714 8.75738 6.6612 9.77545C6.43582 10.0499 6.41042 10.4687 6.61711 10.8248C7.3987 12.1713 8.35581 13.4207 9.46834 14.5332C10.5813 15.6462 11.8289 16.6064 13.1776 17.3864C13.5333 17.5922 13.951 17.5661 14.225 17.3412C15.2439 16.5048 15.6149 16.0097 16.3925 15.2665C16.6893 14.9828 17.1183 14.8617 17.5388 14.9414Z" fill="#20B2AA" /></svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.9995 18.3369V6.89905L17.4844 12.0124L23.9995 18.3369Z" fill="#20B2AA" />
    <path d="M0 6.88647V18.3592L6.70909 12.0471L0 6.88647Z" fill="#20B2AA" />
    <path d="M14.1293 14.6441C12.9412 15.5733 11.2731 15.5738 10.0845 14.6452L7.58657 12.7239L0.242188 19.6338C0.541211 20.1197 1.07098 20.4159 1.64163 20.4164H22.3539C22.9262 20.4161 23.4573 20.1182 23.7559 19.6297L16.6127 12.6957L14.1293 14.6441Z" fill="#20B2AA" />
    <path d="M22.3561 3.61572H1.64388C0.736322 3.61679 0.00107023 4.35226 0 5.2596V5.5034L10.758 13.7787C11.5502 14.3994 12.6632 14.4003 13.4565 13.781L24 5.50597V5.2596C23.9989 4.35226 23.2635 3.61679 22.3561 3.61572Z" fill="#20B2AA" />
  </svg>
);

const CARD_ICONS = { location: LocationIcon, phone: PhoneIcon, mail: MailIcon };

function renderCardContent({ lines, separator }) {
  return lines.map((line, i) => (
    <span key={i}>
      {line.label && <span style={{ color: "#333333" }}>{line.label}</span>}
      {line.label && ": "}
      {line.colored ? <span style={{ color: "#333333" }}>{line.value}</span> : line.value}
      {i < lines.length - 1 && (separator === "br" ? <br /> : ` ${separator} `)}
    </span>
  ));
}

const contactCards = contactData.cards.map((card) => {
  const Icon = CARD_ICONS[card.icon];
  return { icon: <Icon />, title: card.title, content: renderCardContent(card) };
});

const FIELDS = [
  { name: "name", type: "text", placeholder: "Your Name", autoComplete: "name" },
  { name: "email", type: "email", placeholder: "Email address", autoComplete: "email" },
  { name: "phone", type: "tel", placeholder: "Phone Number", autoComplete: "tel" },
];

export default function ContactSection() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [enquiryType, setEnquiryType] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    else if (form.name.trim().length < 2) errs.name = "Name is too short";
    else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) errs.name = "Name should not contain numbers";

    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";

    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, ""))) errs.phone = "Enter a valid 10-digit phone number";

    if (!enquiryType) errs.enquiryType = "Please select an enquiry type";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, enquiry_type: enquiryType }) });
      if (!res.ok) throw new Error("Request failed");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="w-full xl:!py-25 overflow-hidden">
      <div className="absolute pointer-events-none rounded-full hidden xl:block" style={{ width: "800px", height: "800px", top: "-80px", right: "300px", background: "#8ddeda59", filter: "blur(120px)", zIndex: 0 }} />
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-5 md:gap-5 xl:gap-27 items-start justify-center">
          <div className="w-full xl:w-[700px] order-1 xl:order-2 flex flex-col gap-6">
            <div className="text-center xl:text-left">
              <h2 className="text-[32px] xl:text-[40px] font-semibold text-gray-800">Get in touch</h2>
              <p className="text-[#9A9A9A] md:text-[#656C7B] text-[16px] xl:text-[18px] mt-3 leading-relaxed max-w-2xl mx-auto xl:mx-0">
                Our admissions team is available Monday to Saturday, 9 AM – 5 PM. Feel free to visit us on campus or reach out through any of the channels below.
              </p>
            </div>
            <div className="hidden xl:flex flex-col gap-6">
              {contactCards.map((c, i) => <ContactCard key={i} {...c} />)}
            </div>
          </div>

          <div className="w-full xl:w-[580px] shrink-0 rounded-3xl p-8 md:p-14 flex flex-col gap-5 order-2 xl:order-1" style={{ background: "#107B71", boxShadow: "inset 0px 2px 12px 0px #FFFFFF40, 0px 6px 6px 0px #E5F3F208, 0px 13px 8px 0px #009A7CAB, 0px 22px 9px 0px #009A7C00, 0px 35px 10px 0px #C9F9FF00" }}>
            <h3 className="!text-white !text-[24px] md:!text-5xl font-semibold">Send Us a Message</h3>
            <form className="flex flex-col gap-5" autoComplete="on" onSubmit={handleSubmit} noValidate>
              {FIELDS.map(f => (
                <div key={f.name}>
                  <input type={f.type} name={f.name} id={`contact-${f.name}`} placeholder={f.placeholder} autoComplete={f.autoComplete} value={form[f.name]} onChange={handleChange} className="w-full rounded-full px-5 py-3 bg-white text-sm text-gray-700 outline-none border-none placeholder:text-gray-400" />
                  {errors[f.name] && <p className="text-red-200 text-xs mt-1 px-2">{errors[f.name]}</p>}
                </div>
              ))}

              <EnquirySelect value={enquiryType} onChange={setEnquiryType} error={errors.enquiryType} />

              <textarea name="message" id="contact-message" placeholder="Your message" rows={5} value={form.message} onChange={handleChange} className="w-full rounded-2xl px-5 py-4 bg-white text-sm text-gray-700 outline-none border-none resize-none placeholder:text-gray-400" />

              <div>
                <button type="submit" disabled={status === "submitting"} className="px-8 xl:px-13 py-3 rounded-full text-white font-semibold text-sm cursor-pointer mx-auto block xl:mx-0 xl:inline-block disabled:opacity-60" style={{ backgroundColor: "#9E2016", borderRadius: "65px", border: "1px solid #9E2016", fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 500, color: "#ffffff", whiteSpace: "nowrap", flexShrink: 0, boxShadow: "0px 4px 4px 0px #0000001A, 0px 6px 6px 0px #1A1A1A08, 0px 13px 8px 0px #1A1A1A05, 0px 22px 9px 0px #1A1A1A03, 0px 35px 10px 0px #1A1A1A00, 0px 2px 12px 0px #FFFFFF40 inset" }}>
                  {status === "submitting" ? "Sending..." : "Submit"}
                </button>
                {status === "success" && <p className="text-white text-sm mt-2">Thanks! We'll get back to you soon.</p>}
                {status === "error" && <p className="text-red-200 text-sm mt-2">Something went wrong. Please try again.</p>}
              </div>
            </form>
          </div>

          {/* Mobile/tablet-only cards, shown third after form (up to 1280px) */}
          <div className="w-full xl:hidden flex flex-col gap-6 order-3">
            {contactCards.map((c, i) => <ContactCard key={i} {...c} />)}
          </div>
        </div>
      </div>
    </section>
  );
}