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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? " backdrop-blur-xl border-b border-slate-200/50 shadow-lg shadow-slate-200/20" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 ">
        <div className="flex items-center justify-between">
          <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full"
          />
            
          
          </Link>

          <Nav navItems={navItems} pathname={pathname} />

          <div className="flex items-center space-x-4">
            <div>
              <Button
                onClick={handleDownloadCV}
                className=" bg-transparent border-2 border-cyan-400 text-white hover:bg-cyan-400 hover:text-gray-900 px-4 py-2 md:px-8 md:py-0  text-sm md:text-lg group transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              >
                Download CV
              </Button>
            </div>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        <MobileNav
          isMenuOpen={isMenuOpen}
          navItems={navItems}
          pathname={pathname}
          onClose={() => setIsMenuOpen(false)}
        />
      </nav>
    </header>
  )
}
