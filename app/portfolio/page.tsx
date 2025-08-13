"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { ExternalLink, Github, Calendar, Tag, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { portfolioFilters, stats, projects } from "../../data/portfolio-page-data";
import useMousePosition from "../../hooks/useMousePosition";

export default function PortfolioPage() {
  const { mousePosition } = useMousePosition();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 overflow-x-hidden relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-xl" animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.8, 1] }} transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
        <motion.div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-lg blur-xl rotate-45" animate={{ x: [0, -80, 40, 0], y: [0, 80, -40, 0], rotate: [45, 135, 225, 45] }} transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-emerald-500/25 to-cyan-500/25 rounded-full blur-2xl" animate={{ x: [0, 120, -60, 0], y: [0, -80, 40, 0], scale: [1, 0.8, 1.3, 1] }} transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
        <motion.div className="absolute w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" animate={{ x: mousePosition.x - 192, y: mousePosition.y - 192 }} transition={{ type: "spring", damping: 30, stiffness: 200 }} />
      </div>
      <div className="relative z-10">
        <div className="pt-24 pb-12 px-6">
          <div className="container mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Portfolio
              </h1>
              <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                A showcase of my recent projects and creative solutions. Each project represents a unique challenge and innovative approach to modern web development.
              </p>
            </motion.div>
          </div>
        </div>

        <section className="py-8 px-6">
          <div className="container mx-auto">
            <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              {portfolioFilters.map((filter, index) => (
                <motion.button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.key ? "bg-white text-blue-600 shadow-lg" : "bg-white/10 backdrop-blur-sm text-slate-200 border border-white/20 hover:bg-white/20 hover:border-white/30"}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Filter className="h-4 w-4 inline mr-2" />
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-8 px-6">
          <div className="container mx-auto">
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group"
                >
                  <Card className="h-full flex flex-col bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl">
                    <div className="relative overflow-hidden">
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Image src={project.image || "/placeholder.svg"} alt={project.title} width={400} height={300} className="w-full h-48 object-cover transition-transform duration-500" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                          <div className="flex space-x-2">
                            <motion.a href={project.liveUrl} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <ExternalLink className="h-4 w-4" />
                            </motion.a>
                            <motion.a href={project.githubUrl} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Github className="h-4 w-4" />
                            </motion.a>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === "Completed" ? "bg-green-500/20 text-green-300" : "bg-yellow-500/20 text-yellow-300"}`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-white/10 text-cyan-300 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                          <div className="flex items-center text-slate-400 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.date}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 mb-4 leading-relaxed line-clamp-3">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span key={tagIndex} className="px-3 py-1 bg-white/10 text-slate-300 rounded-full text-sm flex items-center" whileHover={{ scale: 1.05 }}>
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <motion.div whileHover={{ x: 5 }}>
                          <Link href={`/portfolio/${project.id}`} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                            Read more
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Project Statistics
              </h2>
              <p className="text-xl text-slate-200">
                Numbers that showcase my experience and dedication.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div key={index} className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }}>
                  <motion.div className="text-4xl mb-4 text-white" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}>
                    {stat.icon}
                  </motion.div>
                  <motion.div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}>
                    {stat.number}
                  </motion.div>
                  <div className="text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}