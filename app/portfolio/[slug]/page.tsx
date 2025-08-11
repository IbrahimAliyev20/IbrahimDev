"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock, Award, Lightbulb, Code, Zap, Sparkles } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projectsDetailData } from "@/data/projects-detail-data"
import Image from "next/image"
import { useMousePosition } from "@/hooks/useMousePosition"
import Footer from "@/components/layout/footer/Footer"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsDetailData[params.slug as keyof typeof projectsDetailData]
    const { mousePosition } = useMousePosition(); 
  

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 overflow-x-hidden relative">
      {/* Hero Section */}
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
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-200">{project.title}</h1>
              <p className="text-xl text-blue-100 mb-6 font-medium">{project.subtitle}</p>
              <p className="text-lg text-cyan-50 leading-relaxed mb-8">{project.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Site
                  </Button>
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-slate-300 text-cyan-50 hover:bg-slate-50 bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </motion.a>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center text-slate-600">
                  <Calendar className="h-5 w-5 mr-3 text-blue-500" />
                  <div>
                    <div className="font-medium text-cyan-300">Year</div>
                    <div className="text-cyan-50 font-medium">{project.year}</div>
                  </div>
                </div>
                <div className="flex items-center text-slate-600">
                  <Clock className="h-5 w-5 mr-3 text-green-500" />
                  <div>
                    <div className="font-medium text-cyan-300">Duration</div>
                    <div className="text-cyan-50 font-medium">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center text-slate-600">
                  <Users className="h-5 w-5 mr-3 text-purple-500" />
                  <div>
                    <div className="font-medium text-cyan-300">Team</div>
                    <div className="text-cyan-50 font-medium">{project.team}</div>
                  </div>
                </div>
                <div className="flex items-center text-slate-600">
                  <Award className="h-5 w-5 mr-3 text-orange-500" />
                  <div>
                    <div className="font-medium text-cyan-300">Status</div>
                    <div className="text-cyan-50 font-medium">{project.status}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80"
                animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-60"
                animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 ">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-200">Project Gallery</h2>
            <p className="text-lg text-cyan-50">Visual showcase of key features and interfaces</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   <section className="py-16 px-6">
  <div className="container mx-auto">
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-200">Technologies Used</h2>
      <p className="text-lg text-cyan-50">The tech stack that powered this project</p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {project.technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          // ===== DƏYİŞİKLİK: Kartların eyni hündürlükdə olması üçün əlavə edildi =====
          className="h-full"
        >
          {/* ===== DƏYİŞİKLİK: Kartların dizaynı və hündürlüyü yeniləndi ===== */}
          <Card className="h-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  {/* İkonun özü dinamik gəldiyi üçün Code komponenti saxlanılır */}
                  <Code className="h-5 w-5 text-white" />
                </div>
                {/* ===== DƏYİŞİKLİK: Mətn rəngi yeniləndi ===== */}
                <h3 className="text-lg font-bold text-white">{tech.name}</h3>
              </div>
              {/* ===== DƏYİŞİKLİK: Mətn rəngi yeniləndi ===== */}
              <p className="text-slate-300">{tech.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="py-16 px-6">
  <div className="container mx-auto">
    <div className="grid lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
            <Lightbulb className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">Challenges</h2>
        </div>
        <div className="space-y-4">
          {project.challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-slate-200">{challenge}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Solutions */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
            <Zap className="h-6 w-6 text-white" />
          </div>
          {/* ===== DƏYİŞİKLİK: Başlıq mətni ağ rəngə dəyişdirildi ===== */}
          <h2 className="text-3xl font-bold text-white">Solutions</h2>
        </div>
        <div className="space-y-4">
          {project.solutions.map((solution, index) => (
            <motion.div
              key={index}
              // ===== DƏYİŞİKLİK: Kartlar "dark state" stilinə gətirildi =====
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* ===== DƏYİŞİKLİK: Mətn rəngi açıq rəngə dəyişdirildi ===== */}
              <p className="text-slate-200">{solution}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>

 <section className="py-16 px-6">
  <div className="container mx-auto">
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== DƏYİŞİKLİK: Mətn rəngləri yeniləndi ===== */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Project Results</h2>
      <p className="text-lg text-slate-200">Measurable impact and achievements</p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {project.results.map((result, index) => (
        // ===== DƏYİŞİKLİK: Kartlar "dark state" stilinə gətirildi və hündürlükləri bərabərləşdirildi =====
        <motion.div
          key={index}
          className="h-full text-center bg-white/10 backdrop-blur-md text-white rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <motion.div
            className="text-3xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
          >
            📈
          </motion.div>
          {/* Mətn rəngi onsuz da ağ olduğu üçün dəyişiklik yoxdur */}
          <div className="text-2xl font-bold mb-2">{result}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  <Footer />
    </div>
  )
}
