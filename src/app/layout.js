import "./globals.css";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "LIDS — KLR's Lenora Institute of Dental Sciences",
  description: "Shaping the future of dental excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body>
        {/* <div className="overflow-x-hidden w-full"> */}
         <div style={{ overflowX: "clip" }}>
        <Header/>
        {children}
        <Footer/>
        {/* </div> */}
        </div>
      </body>
    </html>
  );
}