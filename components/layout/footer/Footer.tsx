"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              AliyevDev
            </motion.div>
            <p className="text-slate-300 leading-relaxed">
              Transforming ideas into exceptional digital experiences through innovative design and cutting-edge
              development.
            </p>
          </motion.div>

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
                { icon: Github, href: "#", color: "hover:bg-gray-700" },
                { icon: Linkedin, href: "#", color: "hover:bg-blue-600" },
                { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-slate-300 hover:text-white ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
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
              href="mailto:hello@devportfolio.com"
              className="flex items-center text-slate-300 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Mail className="h-4 w-4 mr-2" />
              hello@devportfolio.com
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
          <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
