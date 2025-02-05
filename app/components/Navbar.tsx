"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion" // NEW: Import Framer Motion

type NavItem = {
  title: string
  href?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Business Setup",
    children: [
      {
        title: "MAIN LAND",
        children: [
          { title: "Overview", href: "#" },
          { title: "Business Activities", href: "#" },
          { title: "Sponsorship", href: "#" },
          { title: "Company Registration", href: "/company-registration" },
          { title: "Mainland Visas", href: "#" },
          { title: "VirtuFit", href: "#" },
        ],
      },
      {
        title: "FREE ZONE",
        children: [
          { title: "Overview", href: "/free-zone-company-setup" },
          { title: "Business Activities", href: "/free-zone-business-activities" },
          { title: "Free Zone License", href: "/free-zone-license-locations" },
          { title: "Locations and Pricing", href: "#" },
          { title: "UAE Residence Visa", href: "/uae-residence-visa" },
          { title: "Registration Process", href: "#" },
          { title: "Our Solution", href: "/our-solution" },
        ],
      },
    ],
  },
  {
    title: "Accounting & Tax",
    children: [
      { title: "Overview", href: "#" },
      { title: "Sponsorship", href: "#" },
      { title: "Dubai Mainland License", href: "#" },
    ],
  },
  {
    title: "Services",
    children: [
      {
        title: "CORPORATE SERVICES",
        children: [
          { title: "Business Consulting & Setup", href: "#" },
          { title: "Golden Visa Assistance", href: "#" },
          { title: "PRO Services", href: "#" },
          { title: "Accounting & Compliance", href: "#" },
          { title: "Government Services", href: "#" },
        ],
      },
      {
        title: "LUXURY SERVICES",
        children: [
          { title: "Jet Chartering", href: "#" },
          { title: "Luxury Real Estate", href: "#" },
          { title: "VIP Concierge", href: "#" },
        ],
      },
      {
        title: "SPECIALIZED SOLUTIONS",
        children: [
          { title: "Trademark Registration", href: "#" },
          { title: "HSE Compliance", href: "#" },
          { title: "Virtual Office Setup", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Resources",
    children: [
      { title: "About", href: "#" },
      { title: "Setup Guides", href: "#" },
      { title: "Press", href: "#" },
      { title: "Infographics", href: "#" },
      { title: "Get a Trade License", href: "#" },
      { title: "E-commerce licence", href: "#" },
      { title: "How to start a business in Dubai", href: "#" },
      { title: "Our Partners", href: "#" },
      { title: "FAQs", href: "#" },
      { title: "Support Services", href: "#" },
    ],
  },
  { title: "Contact Us", href: "/contact" },
]

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  // This function will be passed to mobile nav items to close the mobile menu when a link is clicked.
  const closeMobileNav = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src={'/logo/logo_001.png'}
              alt="Arbat Corporate Services"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button onClick={() => toggleDropdown("business")} className="text-gray-600 hover:text-gray-900 py-2">
                Business Setup
              </button>
              {activeDropdown === "business" && (
                <div className="absolute left-0 mt-2 w-[600px] bg-white border border-gray-200 rounded-md shadow-lg p-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-gray-500">MAIN LAND</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Business Activities
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Sponsorship
                          </Link>
                        </li>
                        <li>
                          <Link href="/company-registration" className="block text-sm hover:text-[#ac1b13]">
                            Company Registration
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Mainland Visas
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            VirtuFit
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-gray-500">FREE ZONE</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/free-zone-company-setup" className="block text-sm hover:text-[#ac1b13]">
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link href="/free-zone-business-activities" className="block text-sm hover:text-[#ac1b13]">
                            Business Activities
                          </Link>
                        </li>
                        <li>
                          <Link href="/free-zone-license-locations" className="block text-sm hover:text-[#ac1b13]">
                            Free Zone License
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Locations and Pricing
                          </Link>
                        </li>
                        <li>
                          <Link href="/uae-residence-visa" className="block text-sm hover:text-[#ac1b13]">
                            UAE Residence Visa
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Registration Process
                          </Link>
                        </li>
                        <li>
                          <Link href="/our-solution" className="block text-sm hover:text-[#ac1b13]">
                            Our Solution
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button onClick={() => toggleDropdown("accounting")} className="text-gray-600 hover:text-gray-900 py-2">
                Accounting & Tax
              </button>
              {activeDropdown === "accounting" && (
                <div className="absolute left-0 mt-2 w-[300px] bg-white border border-gray-200 rounded-md shadow-lg p-6">
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        Sponsorship
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        Dubai Mainland License
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative group">
              <button onClick={() => toggleDropdown("services")} className="text-gray-600 hover:text-gray-900 py-2">
                Services
              </button>
              {activeDropdown === "services" && (
                <div className="absolute -left-96 mt-2 w-[800px] bg-white border border-gray-200 rounded-md shadow-lg p-6">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-gray-500">CORPORATE SERVICES</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Business Consulting & Setup
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Golden Visa Assistance
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            PRO Services
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Accounting & Compliance
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Government Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-gray-500">LUXURY SERVICES</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Jet Chartering
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Luxury Real Estate
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            VIP Concierge
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-gray-500">SPECIALIZED SOLUTIONS</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Trademark Registration
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            HSE Compliance
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                            Virtual Office Setup
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button onClick={() => toggleDropdown("resources")} className="text-gray-600 hover:text-gray-900 py-2">
                Resources
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute left-0 mt-2 w-[300px] bg-white border border-gray-200 rounded-md shadow-lg p-6">
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        Setup Guides
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        Press
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        Infographics
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        Get a Trade License
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        E-commerce licence
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        How to start a business in Dubai
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        Our Partners
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block text-sm hover:text-[#ac1b13]">
                        Support Services
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>

            <button className="p-2 text-gray-600 hover:text-gray-900">
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

            <Link href="/cost-calculator" className="bg-[#ac1b13] hover:bg-[#ac1b13]/90 text-white px-4 py-2 rounded">
              Cost Calculator
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
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
                <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Framer Motion Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="h-screen"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <MobileNavItem key={index} item={item} closeMobileNav={closeMobileNav} />
              ))}
              <Link
                href="/cost-calculator"
                onClick={closeMobileNav}
                className="block px-4 py-2 mt-4 text-center border-t rounded-md text-base font-medium bg-[#ac1b13] text-white hover:bg-[#ac1b13]/90"
              >
                Cost Calculator
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

function MobileNavItem({
  item,
  depth = 0,
  closeMobileNav,
}: {
  item: NavItem
  depth?: number
  closeMobileNav?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  const paddingClass = `pl-${depth * 4}`

  if (item.children) {
    return (
      <div>
        <button
          onClick={toggleOpen}
          className={`w-full text-left py-2 flex justify-between border-t items-center font-poppins  ${paddingClass}`}
        >
          {item.title}
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Animate the children menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="ml-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.children.map((child, index) => (
                <MobileNavItem key={index} item={child} depth={depth + 1} closeMobileNav={closeMobileNav} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <Link
      href={item.href || "#"}
      // For leaf items, we call closeMobileNav so the entire mobile nav closes on link click.
      onClick={() => {
        if (closeMobileNav) closeMobileNav()
      }}
      className={`block  py-2 hover:text-rose-700 text-sm font-plus-jakarta border-t font-bold transform  ${paddingClass}`}
    >
      {item.title}
    </Link>
  )
}
