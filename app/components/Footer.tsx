"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EmailSVG, PhoneSVG, WhatsaAppSVG } from "./svg-components";

export default function Footer() {
  // State for mobile accordion sections
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Toggle section visibility
  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      title: "Free Zone",
      links: [
        { name: "Overview", href: "/free-zone/overview" },
        { name: "Sponsorship", href: "/free-zone/sponsorship" },
        {
          name: "Dubai Mainland License",
          href: "/free-zone/dubai-mainland-license",
        },
        { name: "Business Activities", href: "/free-zone/business-activities" },
        { name: "Mainland Visas", href: "/free-zone/mainland-visas" },
        { name: "VirtuFit", href: "/free-zone/virtufit" },
      ],
    },
    {
      title: "Main Land",
      links: [
        { name: "Overview", href: "/free-zone-overview" },
        {
          name: "Business Activities",
          href: "/free-zone-business-activities",
        },
        { name: "Free Zone License", href: "/free-zone-license-locations" },
        { name: "Locations and Pricing", href: "#" },
        { name: "UAE Residence Visa", href: "/uae-residence-visa" },
       
        { name: "Our Solution", href: "/our-solution" },
      ],
    },
    {
      title: "Financial Services",
      links: [
        {
          name: "Accounting & Tax",
          href: "/accounting-tax",
        },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Our Solutions", href: "/luxury-services/jet-chartering" },
        { name: "Cost Calculator", href: "/cost-calculator" },
      ],
    },
    {
      title: "Support Center",
      links: [
        {
          name: "Resources",
          href: "/resources",
        },
        { name: "Contact Us", href: "/specialized-solution/hse-compliance" },
      ],
    },
  ];

  return (
    <footer className="bg-[#E5E5E5] w-full">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        {/* Logo */}
        <div className="flex justify-center mb-8 md:mb-[80px]">
          <Image
            src={"/logo/logo_001.png"}
            alt="Arbat Corporate Services Logo"
            width={258}
            height={128}
            className="h-8 md:h-[128px] w-auto object-contain"
          />
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-x-[91px] gap-y-12 mb-[48px]">
          {sections.map((section, idx) => (
            <div key={`${section.title}-${idx}`} className="space-y-4">
              <h2 className="font-semibold font-plus-jakarta  text-[18px] leading-[26px] text-[#333333]">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={`${link.name}-${linkIdx}`}>
                    <Link
                      href={link.href}
                      className="text-gray-600 font-poppins hover:text-gray-900 transition-colors duration-200 text-sm md:text-[14px] md:leading-[21px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Navigation - Mobile Accordion */}
        <div className="md:hidden space-y-4 mb-8 ">
          {sections.map((section, idx) => (
            <div
              key={`mobile-${section.title}-${idx}`}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="flex justify-between items-center w-full py-4 text-left"
              >
                <span className="font-semibold text-[#333333]">
                  {section.title}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openSections[section.title] ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openSections[section.title] ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={`mobile-${link.name}-${linkIdx}`}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="flex md:flex-row flex-col md:justify-center items-start  md:items-center gap-6 md:gap-[48px] ">
          {/* Phone */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center flex-shrink-0">
              <PhoneSVG />
            </div>
            <div className="text-left">
              <div className="text-sm text-[#E91E63] font-medium">
                Phone Number
              </div>
              <a
                href="tel:+97150515786"
                className="text-gray-900 text-sm hover:text-[#E91E63] transition-colors duration-200"
              >
                +971 50 515 7864
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center flex-shrink-0">
              <EmailSVG />
            </div>
            <div className="text-left">
              <div className="text-sm text-[#E91E63] font-medium">Email</div>
              <a
                href="mailto:info@arbatcorporate.com"
                className="text-gray-900 text-sm hover:text-[#E91E63] transition-colors duration-200 break-all"
              >
                info@arbatcorporate.com
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center flex-shrink-0">
              <WhatsaAppSVG />
            </div>
            <div className="text-left">
              <div className="text-sm text-[#25D366] font-medium">
                What&apos;sapp
              </div>
              <a
                href="https://wa.me/971505157864"
                className="text-gray-900 text-sm hover:text-[#25D366] transition-colors duration-200 underline"
              >
                Start Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
