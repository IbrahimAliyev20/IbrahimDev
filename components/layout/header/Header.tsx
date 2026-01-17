"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { Button } from "../../ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
  ]

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/ibrahimAliyevCV.pdf"
    link.download = "ibrahimAliyevCV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "backdrop-blur-md bg-slate-900/50 border-b border-slate-800/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group relative">
            <div className="absolute inset-0 bg-cyan-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="relative w-10 h-10 md:w-12 md:h-12 object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <Nav navItems={navItems} pathname={pathname} />

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <button
                onClick={handleDownloadCV}
                className="h-11 rounded-md flex items-center justify-center relative bg-transparent border-2 border-cyan-400/80 text-white hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-500/70 hover:border-cyan-400 px-5 py-5 text-lg font-semibold group transition-all duration-500  backdrop-blur-sm hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Download CV</span>
                <span className="absolute inset-0 bg-cyan-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
            </div>
            <button
              className="md:hidden p-2.5 rounded-lg text-cyan-300 hover:text-white hover:bg-cyan-400/10 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <MobileNav
          isMenuOpen={isMenuOpen}
          navItems={navItems}
          pathname={pathname}
          onClose={() => setIsMenuOpen(false)}
          onDownloadCV={handleDownloadCV}
        />
      </nav>
    </header>
  )
}
