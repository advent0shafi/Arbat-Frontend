import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google"
import "./globals.css";
import { NavBar } from "./components/Navbar";
import Footer from "./components/Footer";
import { BASE_URL_FRONTEND } from "@/lib/endPoint";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(`${BASE_URL_FRONTEND}`),
  title: {
    default: "Arbat Corporate | Premium Business & Corporate Services in UAE",
    template: "%s | Arbat Corporate",
  },
  description:
    "Leading corporate services provider in UAE offering business setup, golden visa assistance, PRO services, luxury solutions, and specialized corporate services. Transform your vision into reality with Arbat Corporate.",
  keywords: [
    "Arbat Corporate",
    "UAE business setup",
    "Dubai company formation",
    "golden visa UAE",
    "PRO services Dubai",
    "business consulting UAE",
    "corporate services Dubai",
    "luxury real estate UAE",
    "jet charter Dubai",
    "VIP concierge UAE",
    "trademark registration Dubai",
    "virtual office UAE",
    "HSE compliance Dubai",
    "accounting services UAE",
  ],
  twitter: {
    card: "summary_large_image",
  },

  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${poppins.variable} antialiased`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
