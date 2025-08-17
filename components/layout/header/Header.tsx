"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { useScrollY } from "../../../hooks/useScrollY"
import { Button } from "../../ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScrollY()
  const pathname = usePathname()

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
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? " backdrop-blur-xl border-b border-slate-200/50 shadow-lg shadow-slate-200/20" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleDownloadCV}
                className=" bg-transparent border-2 border-cyan-400 text-white hover:bg-cyan-400 hover:text-gray-900 px-4 py-2 md:px-8 md:py-0  text-sm md:text-lg group transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              >
                Download CV
              </Button>
            </motion.div>
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        <MobileNav
          isMenuOpen={isMenuOpen}
          navItems={navItems}
          pathname={pathname}
          onClose={() => setIsMenuOpen(false)}
        />
      </nav>
    </motion.header>
  )
}
