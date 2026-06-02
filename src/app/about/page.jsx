import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import CardGrid from "@/components/CardGrid";
import ShapeDental from "@/components/ShapeDental";

const mvvCards = [
  { 
    icon: "/assets/about-mission.svg", 
    mobileImage: "/assets/about-mission-mob.webp", 
    title: "Our Mission", 
    mobileDesc: "To empower students by combining strong theoretical knowledge with meaningful practical training. We provide extensive hands-on learning and regular access to patient care so students gain sufficient clinical experience and become well-rounded professionals. ",
    desc: "To empower the next generation of dental professionals by bridging the gap between classroom theory and real-world practice." 
  },
  { 
    icon: "/assets/about-mission.svg", 
    title: "Our Purpose", 
    desc: "Inspired by the vision of Dr. K. Lakshma Reddy (KLR Garu), our purpose remains clear: to make quality dental care accessible to all, while developing dentists who create meaningful impact in every life they touch." 
  },
  { 
    icon: "/assets/about-mission.svg", 
    title: "Our Vision", 
    mobileDesc: "To create a positive impact on society through quality dental education, community service, and oral health awareness. We aim to be recognised for academic excellence, research, and responsible practice, while nurturing future dental professionals.",
    desc: "To transform society through exceptional dental education, dedicated community service, and proactive oral health advocacy." 
  },
];

const coreValues = [
  { icon: "/assets/corevalues.svg",   title: "Entrepreneurial Growth",  desc: "Guided to grow with confidence and independence. With close mentorship and personal support, they learn at their own pace while developing the skills and mindset to lead, manage, and build their own dental careers." },
  { icon: "/assets/corevalues.svg",title: "Service to Community",    desc: "Dentistry goes beyond the classroom. Through regular outreach camps and public health initiatives, students actively serve communities while gaining meaningful real-world experience." },
  { icon: "/assets/corevalues.svg", title: "Practice First Learning", desc: "We believe confidence comes from doing. From early clinical exposure to direct patient care, students learn through real-world practice under supervision preparing them for independent clinical work from day one." },
  { icon: "/assets/corevalues.svg",  title: "Continuous Improvement",  desc: "We encourage curiosity and growth. Through ongoing research, skill development programs, and clinical learning, students and faculty stay updated and keep evolving together." },
];

const doctors = [
  { image: "/assets/doctor1.webp", name: "Mrs. K. Nagamani", role: "Founder & Director" },
  { image: "/assets/doctor1.webp", name: "Mrs. K. Nagamani", role: "Founder & Director" },
  { image: "/assets/doctor1.webp", name: "Mrs. K. Nagamani", role: "Founder & Director" },
  { image: "/assets/doctor1.webp", name: "Mrs. K. Nagamani", role: "Founder & Director" },
];

export default function AboutPage() {
  return (
    <main>
      <CTABanner />
      <section className="bg-white py-20 md:py-20">
        <div className="container">
          <div className="relative w-full md:max-w-5xl md:mx-auto h-[280px] md:h-[477px] rounded-2xl overflow-hidden mb-6 md:mb-8"
  style={{ boxShadow: "inset 0 0 0 4px rgba(255, 255, 255, 0.5)" }}>
  <Image src="/assets/lids-building.webp" alt="LIDS Building" fill className="object-cover" />
</div>
          <h3 className="md:hidden text-[#1A1A1A] font-semibold text-3xl mb-4">About LIDS</h3>
          <div className="hidden md:block text-center mb-6">
            <p className="text-[#9E2016] text-xl font-semibold tracking-widest uppercase mb-4">
              Lenora Institute of Dental Sciences (LIDS)
            </p>
            <h3 className="text-[#1A1A1A] font-semibold">Shaping the Future of Oral Healthcare</h3>
          </div>
          <p className="text-[#7A7A7A] text-sm leading-relaxed w-full md:w-[935px] md:mx-auto md:text-center">
            Situated in Rajahmundry, Andhra Pradesh, LIDS is more than a dental institution — 
            it's a vibrant hub for innovation, academic excellence, and patient-centric care. 
            As a premier institution under the KLR Group, we empower the next generation of 
            dental leaders through a dynamic blend of high-tech research, hands-on clinical 
            training, and passionate mentorship. Whether you are a future student or looking 
            for cutting-edge dentistry, LIDS is where expertise meets compassion.
          </p>
        </div>
      </section>

      <CardGrid cards={mvvCards} cols={3} />
      <ShapeDental
  label="APPROACH"
  title="Our Philosophy"
  desc="At LIDS, we believe dental education must go beyond knowledge shaping professionals with skill, ethics, and a deep sense of responsibility. Every student learns not just to treat, but to serve. Through real patient exposure and guided clinical practice, learning extends far beyond the classroom, building both competence and compassion."
  imageSrc="/assets/philosophy.webp"
  imageAlt="Our Philosophy"
/>
      <CardGrid title="Our Core Values" cards={coreValues} cols={2} minHeight={280} />
<ShapeDental
  label="LEGACY"
  title="KLR Group of Institutions"
  desc="KLR Group of Institutions, founded under The Boon Education, Environment, and Rural Development Society, has been dedicated to transforming lives through education for over 25 years..."
  imageSrc="/assets/instituition.webp"
  imageAlt="KLR Group"
  buttonText="Visit our Website"
  buttonHref="https://klr.edu.in"
  imageLeft={false}
/>
{/* FOUNDER MESSAGE */}
<section className="w-full py-8 bg-white md:bg-[#35908D]">
  <div className="container">

    {/* MOBILE */}
    <div className="md:hidden flex flex-col items-center gap-6 text-center">
      <div className="overflow-hidden" style={{ width: "327px", height: "264px", borderRadius: "240px" }}>
        <Image src="/assets/founder.webp" alt="Dr. Katireddy Lakshma Reddy" width={327} height={264} className="object-cover w-full h-full" />
      </div>
      <p className="text-[#FCAF16] text-sm font-semibold tracking-widest uppercase">Founder</p>
      <h3 className="!text-[#232323] font-semibold" style={{ fontSize: "24px" }}>A Message from Our Founder</h3>
      <p className="text-[#9A9A9A] text-sm leading-relaxed">
        At Lenora Institute of Dental Sciences, we have always believed in providing the best educational opportunities for our students. Our mission is simple – to offer a comprehensive, research-driven, and patient-focused dental education that will prepare students for the challenges and opportunities of tomorrow. I invite you to explore our programs, faculty, and campus. Our dedicated team is here to support your journey to dental excellence.
      </p>
      <button className="border border-[#FCAF16] text-[#FCAF16] rounded-[65px] px-8 py-3 text-sm font-medium">Read More</button>
    </div>

    {/* DESKTOP */}
    <div className="hidden md:flex items-center gap-10 rounded-[24px] p-[40px]"
      style={{ border: "1px solid rgba(32, 178, 170, 0.19)", boxShadow: "0px 2px 12px 0px rgba(255,255,255,0.25) inset" }}>
      <div className="shrink-0 w-[460px] max-w-full h-[521px] rounded-[12px] overflow-hidden">
        <Image src="/assets/founder.webp" alt="Dr. Katireddy Lakshma Reddy" width={460} height={521} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col gap-6 flex-1">
        <p className="text-white text-sm font-semibold tracking-widest uppercase opacity-80">MESSAGE</p>
        <h3 className="!text-white font-semibold whitespace-nowrap">A Message from Our Founder</h3>
        <p className="text-white text-sm leading-relaxed opacity-90">For 37 remarkable years, the KLR Group of Institutions has been a beacon of knowledge, shaping futures with unwavering dedication. At its heart lies the visionary spirit of Dr. Katireddy Lakshma Reddy Garu, whose belief in the transformative power of education has inspired generations. His vision is not just a dream it is a living legacy that continues to uplift and empower.</p>
        <p className="text-white text-sm leading-relaxed opacity-90">Dr. KLR envisioned an institution where students grow not just academically, but as confident, innovative & socially responsible individuals. His mission extended beyond classrooms, aiming to create a better society. Over the years, we've embraced challenges as Stepping stones, turning them into opportunities for growth.</p>
        <div>
          <p className="text-white font-semibold text-sm">Dr. Katireddy Lakshma Reddy</p>
          <p className="text-sm" style={{ color: "#A5E7F0" }}>Founder & Chairman, KLR group</p>
        </div>
      </div>
    </div>

  </div>
</section>
<section className="bg-white py-24">
  <div className="container">
    <div className="text-center mb-12">
      <p className="text-[#9E2016] text-sm font-semibold tracking-widest uppercase mb-4">OUR CORE TEAM</p>
      <h3 className="text-[#1A1A1A] font-semibold">Meet Our Professional Doctors</h3>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {doctors.map((doc, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
  <div className="w-[340px] max-w-full h-[440px] rounded-[16px] overflow-hidden" style={{ border: "4px solid rgba(229, 243, 242, 0.63)" }}>
  <Image 
    src={doc.image} 
    alt={doc.name} 
    width={340} 
    height={440} 
    className="object-cover w-full h-full scale-125 translate-y-[-5%]"
  />
</div>
  <p className="text-[#1A1A1A] font-semibold text-sm">{doc.name}</p>
  <p className="text-[#7A7A7A] text-sm">{doc.role}</p>
</div>
      ))}
    </div>
  </div>
</section>
<section className="relative w-full h-[604px] overflow-hidden flex items-center justify-center">
  <Image
    src="/assets/dentallegacy.webp"
    alt="CTA Banner"
    fill
    className="object-cover"
    style={{ filter: "blur(0px)", transform: "scale(1.05)", zIndex: 0 }}
  />
  <div
    className="absolute inset-0"
    style={{background: "linear-gradient(90deg, rgba(32,178,170,0.85) 0%, rgba(16,123,113,0.85) 100%)", zIndex: 1, }}/>
  <div className="relative text-center flex flex-col items-center gap-6 px-6 max-w-4xl" style={{ zIndex: 2 }}>
    <h3 className="font-semibold" style={{ color: "white" }}>
      Design Your Dental Legacy at LIDS
    </h3>
    <p className="text-base leading-relaxed max-w-2xl" style={{ color: "white", opacity: 0.9 }}>
      Whether you are pursuing a BDS or MDS, you will cultivate clinical mastery and
      professional independence in a tech-forward environment. Master the art of
      dentistry at your own pace, supported by experts dedicated to your success.
    </p>
    <Link
      href="/admissions"
      className="hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
      style={{
        backgroundColor: "#9E2016",
        color: "white",
        fontSize: "14px",
        fontWeight: 500,
        padding: "16px 32px",
        borderRadius: "65px",
      }}
    >
      Apply Now
    </Link>
  </div>

</section>
    </main>
  );
}