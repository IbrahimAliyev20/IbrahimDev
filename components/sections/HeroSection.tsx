"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react"
import Link from "next/link"
import type { RefObject } from "react"
import type { MotionValue } from "framer-motion"
import Image from "next/image"

interface HeroSectionProps {
  heroRef: RefObject<HTMLElement>
  heroOpacity: MotionValue<number>
  heroScale: MotionValue<number>
}

export default function HeroSection({ heroRef, heroOpacity, heroScale }: HeroSectionProps) {
  const heroTranslations = {
    title: {
      line1: "Ibrahim Aliyev",
      line2: "Frontend Developer",
    },
    description:
      "Building clean, efficient, and high-performance web interfaces with modern technologies.",
    buttons: {
      primary: "View My Work",
      secondary: "CV",
    },
    stats: {
      projects: "Projects Completed",
      experience: "Years Experience",
      satisfaction: "Client Satisfaction",
    },
  }

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  }

  const sparkleAnimation = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  }

  return (
    <motion.section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative px-6 pt-20"
      style={{ opacity: heroOpacity, scale: heroScale }}
    >
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          className="absolute -top-20 -left-20 text-blue-400/30"
          variants={floatingAnimation}
          animate="animate"
        >
          <Zap size={60} />
        </motion.div>
        <motion.div
          className="absolute -top-10 -right-20 text-purple-400/30"
          variants={sparkleAnimation}
          animate="animate"
        >
          <Sparkles size={40} />
        </motion.div>
        <motion.div
          className="absolute -bottom-20 left-10 text-pink-400/30"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Image 
            src="/images/js.png"
            alt="js"
            width={30}
            height={30}
          />  
                  </motion.div>
        <motion.div
          className="absolute -bottom-20 right-10 text-pink-400/30"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Image 
            src="/images/react.png"
            alt="react"
            width={50}
            height={50}
          />  
                  </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #10B981, #3B82F6)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {heroTranslations.title.line1}
            <br />
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl"
            >
              {heroTranslations.title.line2}
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          {heroTranslations.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            <Link href="/portfolio">
              <Button
                size="lg"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 text-lg group transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              >
                {heroTranslations.buttons.primary}
                <motion.div
                  className="ml-2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Zap className="h-5 w-5" />
                </motion.div>
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/cv"
          rel="noopener noreferrer"
        > 
             <Button
                size="lg"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 text-lg group transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              >
              {heroTranslations.buttons.secondary}
            </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        >
          {[
            { number: "15+", labelKey: "projects" },
            { number: "1+", labelKey: "experience" },
            { number: "100%", labelKey: "satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-cyan-800 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-cyan-100 font-medium">
                {heroTranslations.stats[stat.labelKey as keyof typeof heroTranslations.stats]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}