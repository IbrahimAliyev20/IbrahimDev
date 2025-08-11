"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NavItem {
  href: string
  label: string
}

interface MobileNavProps {
  isMenuOpen: boolean
  navItems: NavItem[]
  pathname: string
  onClose: () => void
}

export default function MobileNav({ isMenuOpen, navItems, pathname, onClose }: MobileNavProps) {
  return (
    <motion.div
      className={`md:hidden overflow-hidden ${isMenuOpen ? "block" : "hidden"}`}
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: isMenuOpen ? 1 : 0,
        height: isMenuOpen ? "auto" : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col space-y-4 py-6 border-t border-slate-200 bg-white/50 backdrop-blur-sm rounded-b-2xl mt-4"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
      >
        {navItems.map((item, index) => {
          const isActive = pathname === item.href

          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Link
                href={item.href}
                className={`block font-medium px-4 transition-colors ${
                  isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                }`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </motion.div>
          )
        })}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="px-4"
        >
          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">Contact Me</Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
