"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface DotSpec {
  left: string
  top: string
  duration: number
  delay: number
}

export default function Footer() {
  const [dots, setDots] = useState<DotSpec[]>([])

  useEffect(function generateDotsOnClient() {
    const nextDots: DotSpec[] = Array.from({ length: 20 }).map(() => {
      const leftPct = `${Math.random() * 100}%`
      const topPct = `${Math.random() * 100}%`
      const duration = 3 + Math.random() * 2
      const delay = Math.random() * 2
      return { left: leftPct, top: topPct, duration, delay }
    })
    setDots(nextDots)
  }, [])
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {dots.map(function renderDot(dot, i) {
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{ left: dot.left, top: dot.top }}
              animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
              transition={{ duration: dot.duration, repeat: Number.POSITIVE_INFINITY, delay: dot.delay }}
            />
          )
        })}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
      <div className="flex items-center space-x-3">
            <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="w-12 h-12 md:w-36 md:h-36"
          />
            
          
          </Link>
   
  </div>

          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
              ].map((link, index) => {
                return (
                  <motion.div key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href={link.href} className="block text-slate-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/IbrahimAliyev20", color: "hover:bg-gray-700" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ibrahim-aliyev-668283307/", color: "hover:bg-blue-600" },
                { icon: Instagram, href: "https://www.instagram.com/iboaliyev020/", color: "hover:bg-pink-600"},
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-slate-300 hover:text-white ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <motion.a
              href="mailto:ibrahim.al@div.edu.az"
              className="flex items-center text-slate-300 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Mail className="h-4 w-4 mr-2" />
              ibrahim.al@div.edu.az
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} AliyevDev. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
