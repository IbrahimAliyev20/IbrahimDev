"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useRef } from "react"
import { useMousePosition } from "@/hooks/useMousePosition"
import { useScrollY } from "@/hooks/useScrollY"
import HeroSection from "@/components/sections/HeroSection"
import QuickLinksSection from "@/components/sections/QuickLinksSection"
import FooterSection from "@/components/layout/footer/Footer"

export default function HomePage() {
  const { mousePosition } = useMousePosition()
  const { scrollY } = useScrollY()

  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 overflow-x-hidden relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-lg blur-xl rotate-45"
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 80, -40, 0],
            rotate: [45, 135, 225, 45],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-emerald-500/25 to-cyan-500/25 rounded-full blur-2xl"
          animate={{
            x: [0, 120, -60, 0],
            y: [0, -80, 40, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

       

        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
        />
      </div>

      <HeroSection heroRef={heroRef} heroOpacity={heroOpacity} heroScale={heroScale} />

      <QuickLinksSection />

    </div>
  )
}
