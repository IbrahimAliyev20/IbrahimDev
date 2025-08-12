"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useScrollY } from "@/hooks/useScrollY"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

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
    link.href = "/cv.pdf"
    link.download = "cv.pdf"
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
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 border-2 border-blue-400 rounded-full"></div>
              <div className="absolute top-1 left-1 w-6 h-6 border-2 border-purple-400 rounded-full"></div>
              <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
            <div className="text-xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                AliyevDev
              </span>
            </div>
          </Link>

          <Nav navItems={navItems} pathname={pathname} />

          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleDownloadCV}
                className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
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
