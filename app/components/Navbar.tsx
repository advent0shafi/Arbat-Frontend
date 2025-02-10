"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // NEW: Import Framer Motion
import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";

type NavItem = {
  title: string;
  href?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: "Business Setup",
    children: [
      {
        title: "MAIN LAND",
        children: [
          { title: "Overview", href: "/main-land-overview" },
          { title: "Sponsorship", href: "/main-land-sponsorship" },
          { title: "Company Registration", href: "/company-registration" },
          {
            title: "Dubai Mainland License",
            href: "/main-land-dubai-mainland-license",
          },
          {
            title: "Business Activities",
            href: "/main-land-business-activities",
          },
        ],
      },
      {
        title: "FREE ZONE",
        children: [
          { title: "Overview", href: "/free-zone-overview" },
          {
            title: "Business Activities",
            href: "/free-zone-business-activities",
          },
          { title: "Free Zone License", href: "/free-zone-license-locations" },
          { title: "Locations and Pricing", href: "#" },
          { title: "UAE Residence Visa", href: "/uae-residence-visa" },
          { title: "Registration Process", href: "/free-zone-registration-process" },
          { title: "Our Solution", href: "/our-solution" },
        ],
      },
    ],
  },
  {
    title: "Accounting & Tax",
    href: "/contact",
  },
  {
    title: "Services",
    href: "/contact",
  },
  {
    title: "Resources",
    href: "/contact",
  },
  { title: "Contact Us", href: "/contact" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // This function will be passed to mobile nav items to close the mobile menu when a link is clicked.
  const closeMobileNav = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src={"/logo/logo_001.png"}
              alt="Arbat Corporate Services"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("business")}
                className="text-gray-600 hover:text-gray-900 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#ac1b13] after:transition-all after:duration-300"
              >
                Business Setup
              </button>
              {activeDropdown === "business" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 mt-2 w-[600px] bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md shadow-lg p-6"
                >
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-gray-500">
                        MAIN LAND
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/main-land-overview"
                            className="block text-sm transition-all duration-200 hover:text-[#ac1b13] hover:translate-x-1"
                          >
                            Overview
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/main-land-sponsorship"
                            className="block text-sm transition-all duration-200 hover:text-[#ac1b13] hover:translate-x-1"
                          >
                            Sponsorship
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/main-land-dubai-mainland-license"
                            className="block text-sm transition-all duration-200 hover:text-[#ac1b13] hover:translate-x-1"
                          >
                            Dubai Mainland License
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/main-land-business-activities"
                            className="block text-sm transition-all duration-200 hover:text-[#ac1b13] hover:translate-x-1"
                          >
                            Business Activities
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-gray-500">
                        FREE ZONE
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/free-zone-overview"
                            className="block text-sm transition-all duration-200 hover:text-[#ac1b13] hover:translate-x-1"
                          >
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/free-zone-business-activities"
                            className="block text-sm transition-all duration-200 hover:text-[#ac1b13] hover:translate-x-1"
                          >
                            Business Activities
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/free-zone-license-locations"
                            className="block text-sm transition-all duration-200 hover:text-[#ac1b13] hover:translate-x-1"
                          >
                            Free Zone License And Location And Price
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/uae-residence-visa"
                            className="block text-sm transition-all duration-200 hover:text-[#ac1b13] hover:translate-x-1"
                          >
                            UAE Residence Visa
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/free-zone-registration-process"
                            className="block text-sm transition-all duration-200 hover:text-[#ac1b13] hover:translate-x-1"
                          >
                            Registration Process
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/our-solution"
                            className="block text-sm transition-all duration-200 hover:text-[#ac1b13] hover:translate-x-1"
                          >
                            Our Solution
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("accounting")}
                className="text-gray-600 hover:text-gray-900 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#ac1b13] after:transition-all after:duration-300"
              >
                Accounting & Tax
              </button>
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("services")}
                className="text-gray-600 hover:text-gray-900 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#ac1b13] after:transition-all after:duration-300"
              >
                Services
              </button>
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("resources")}
                className="text-gray-600 hover:text-gray-900 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#ac1b13] after:transition-all after:duration-300"
              >
                Resources
              </button>
            </div>

            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:translate-x-1"
            >
              Contact Us
            </Link>

            <button className="p-2 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:translate-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <Link
              href="/cost-calculator"
              className="bg-[#ac1b13] hover:bg-[#ac1b13]/90 text-white px-4 py-2 rounded transition-all duration-200 hover:translate-x-1"
            >
              Cost Calculator
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-all duration-200 hover:translate-x-1"
            >
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Framer Motion Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 right-0 w-full  bg-white  shadow-2xl overflow-y-auto flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Company Logo */}
              <div className="flex justify-center items-center py-6 border-b border-gray-100">
                <Image
                  src={"/logo/logo_001.png"}
                  alt="Arbat Corporate Services"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto px-4 py-6">
                {navItems.map((item, index) => (
                  <MobileNavItem
                    key={index}
                    item={item}
                    closeMobileNav={closeMobileNav}
                  />
                ))}
              </div>

              {/* Cost Calculator Button */}
              <Link
                href="/cost-calculator"
                onClick={closeMobileNav}
                className="mx-4 my-4 text-center rounded-md text-base font-medium bg-[#ac1b13] text-white hover:bg-[#ac1b13]/90 transition-all duration-200 hover:scale-[0.98] py-3"
              >
                Cost Calculator
              </Link>

              {/* Social Media Icons */}
              <div className="border-t border-gray-100 p-6">
                <div className="flex justify-center space-x-6">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#ac1b13] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#ac1b13] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#ac1b13] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#ac1b13] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function MobileNavItem({
  item,
  depth = 0,
  closeMobileNav,
}: {
  item: NavItem;
  depth?: number;
  closeMobileNav?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const paddingClass = `pl-${depth * 4}`;

  if (item.children) {
    return (
      <div>
        <button
          onClick={toggleOpen}
          className={`w-full text-left py-3 flex justify-between items-center font-plus-jakarta text-base font-medium text-gray-800 border-b border-gray-100 transition-all duration-200 hover:text-[#ac1b13] ${paddingClass}`}
        >
          {item.title}
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {/* Animate the children menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="ml-4"
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: "auto" }}
              exit={{ opacity: 0, x: -20, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {item.children.map((child, index) => (
                <MobileNavItem
                  key={index}
                  item={child}
                  depth={depth + 1}
                  closeMobileNav={closeMobileNav}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      // For leaf items, we call closeMobileNav so the entire mobile nav closes on link click.
      onClick={() => {
        if (closeMobileNav) closeMobileNav();
      }}
      className={`block py-3 text-gray-800 text-base font-plus-jakarta border-b border-gray-100 font-medium transform transition-all duration-200 hover:text-[#ac1b13] hover:pl-2 ${paddingClass}`}
    >
      {item.title}
    </Link>
  );
}
