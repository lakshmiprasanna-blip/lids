import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import FAQs from "@/components/FAQs";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";

const contactFaqs = [
  { question: "What is the eligibility for BDS admission?", answer: "..." },
  { question: "Is LIDS recognized by the Dental Council of India?", answer: "..." },
  { question: "What is the eligibility for BDS admission?", answer: "..." },
  { question: "Is LIDS recognized by the Dental Council of India?", answer: "..." },
 
];



export default function ContactPage() {
  return (
    <main>
 <CTABanner
  label="Contact Us"
  title="Get in Touch"
  align="left"
  desktopImage="/assets/contact-banner.webp"
  mobileImage="/assets/about-mob.webp"
  imageStyle={{ zIndex: 0, objectPosition: "center center" }}
/>
<ContactSection/>
<section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <h3 className="text-5xl font-semibold text-gray-800">Find Us on the Map</h3>
        <div className="w-full rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(32,178,170,0.2)", height: "473px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123!2d81.7833!3d17.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sLenora%20Institute%20of%20Dental%20Sciences!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
<FAQs columns={2} faqs={contactFaqs} fullWidth />
<DentalLegacyCTA
  align="left"
 title={<>Ready to Shape<br />Your Future in Dentistry?</>}
  description="Embark on a transformative journey with Lenora Institute of Dental Sciences. Whether you're pursuing a BDS (Undergraduate) or MDS (Postgraduate) degree, LIDS provides you with the skills, clinical experience, and mentorship needed to succeed as a dental professional."
  buttonText="Apply Now"
  buttonHref="/academics"
  image="/assets/transparent-banner.webp"
/>
    </main>
  );
}