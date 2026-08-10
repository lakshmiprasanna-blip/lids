import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import FAQs from "@/components/FAQs";
import DentalLegacyCTA from "@/components/DentalLegacyCTA";
import contactData from "@/app/data/contact.json";

const { faqs: contactFaqs } = contactData;

export default function ContactPage() {
  return (
    <main>
<DentalLegacyCTA
  align="left"
  title="Contact Us"
  description="Get in Touch"
  image="/assets/contact-banner.webp"
  showButton={false}
  priority={true}
  titleClassName="!text-[16px] md:!text-[16px] ![font-family:'Inter',sans-serif]"
  descriptionClassName="max-w-5xl !text-[32px] md:!text-[56px] [font-family:'Plus_Jakarta_Sans',sans-serif] font-semibold"
  mobileImagePosition="46% 65%"
  mobileImageStyle={{ transform: "scale(1.01)" }}
/>

<ContactSection/>
<section className=" w-full !py-5 px-6 ">
      <div className="container mx-auto flex flex-col items-center gap-8">
      <h3 className="!text-[32px] md:!text-5xl font-semibold text-gray-800 whitespace-nowrap">Find Us on the Map</h3>
      <p className="md:hidden text-[#9A9A9A] text-[16px] text-center max-w-2xl mx-auto xl:mx-0">
            Our admissions team is available Monday to Saturday, 9 AM – 5 PM.
            Feel free to visit us on campus or reach out through any of the channels below.
          </p>
        <div  className="w-full rounded-2xl overflow-hidden h-[327px] md:h-[473px]" style={{ border: "1px solid rgba(32,178,170,0.2)"}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123!2d81.7833!3d17.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sLenora%20Institute%20of%20Dental%20Sciences!5e0!3m2!1sen!2sin!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
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
  priority={true}
  mobileImagePosition="70% 95%"
  mobileImageStyle={{ transform: "scale(1.01)" }}
/>
    </main>
  );
}