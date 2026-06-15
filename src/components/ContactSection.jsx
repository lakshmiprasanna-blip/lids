function ContactCard({ icon, title, content }) {
  return (
    <div
      className="flex items-start gap-5 rounded-3xl"
      style={{
        padding: "32px 24px",
        background: "rgba(158, 255, 238, 0.06)",
        border: "1px solid rgba(32, 178, 170, 0.3)",
        boxShadow: "inset 0px 2px 12px 0px rgba(255,255,255,0.25), 0px 13px 8px 0px rgba(158,255,238,0.05)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
        style={{ background: "rgba(32, 178, 170, 0.15)", border: "1px solid rgba(32,178,170,0.2)" }}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-base mb-1" style={{ color: "#107B71" }}>{title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" fill="#20B2AA" viewBox="0 0 24 24">
      <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" fill="#20B2AA" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" fill="#20B2AA" viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section
      className="w-full py-20 px-6"
     
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start justify-center">

        {/* Left — Send Us a Message */}
        <div
          className="w-full lg:w-[580px] shrink-0 rounded-3xl p-10 flex flex-col gap-5"
          style={{
            background: "rgb(22 135 125 / 77%)",
            boxShadow: "inset 0px 2px 12px 0px rgba(255,255,255,0.25), 0px 13px 8px 0px rgba(0,154,124,0.35)",
          }}
        >
          <h3 className="!text-white text-5xl font-semibold">Send Us a Message</h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-full px-5 py-3 bg-white text-sm text-gray-700 outline-none border-none placeholder:text-gray-400"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-full px-5 py-3 bg-white text-sm text-gray-700 outline-none border-none placeholder:text-gray-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-full px-5 py-3 bg-white text-sm text-gray-700 outline-none border-none placeholder:text-gray-400"
          />

          <div className="relative w-full">
            <select
              className="w-full rounded-full px-5 py-3 bg-white text-sm text-gray-500 outline-none border-none appearance-none"
            >
              <option value="" disabled defaultValue="">Select</option>
              <option>Admissions</option>
              <option>General Enquiry</option>
              <option>Other</option>
            </select>
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▾</span>
          </div>

          <textarea
            placeholder="Your message"
            rows={5}
            className="w-full rounded-2xl px-5 py-4 bg-white text-sm text-gray-700 outline-none border-none resize-none placeholder:text-gray-400"
          />

          <div>
            <button
              className="px-8 py-3 rounded-full text-white font-semibold text-sm"
              style={{ background: "#9B1C1C" }}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Right — Get in Touch */}
        <div className="w-full lg:w-[580px] flex flex-col gap-6">
          <div>
            <h2 className="text-4xl font-semibold text-gray-800">Get in touch</h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-md">
              Our admissions team is available Monday to Saturday, 9 AM – 5 PM.
              Feel free to visit us on campus or reach out through any of the channels below.
            </p>
          </div>

          <ContactCard
            icon={<LocationIcon />}
            title="Address"
            content={<>NH-16, Rajanagaram, near HP Petrol Pump,<br />Rajamahendravaram, Andhra Pradesh 533294.</>}
          />
          <ContactCard
            icon={<PhoneIcon />}
            title="Call Us"
            content={<>Admissions: +91 77997 71085<br />Office &amp; Enquiry: 08832484492</>}
          />
          <ContactCard
            icon={<MailIcon />}
            title="Mail Us"
            content={<>lids@lids.ac.in &nbsp;|&nbsp; Admission@lids.ac.in</>}
          />
        </div>

      </div>
    </section>
  );
}