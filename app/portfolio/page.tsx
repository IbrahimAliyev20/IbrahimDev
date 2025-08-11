"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  Calendar,
  Tag,
  ArrowRight,
  Filter,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import { portfolioStatsData } from "@/data/portfolio-stats-data";
import Image from "next/image";
import FooterSection from "@/components/layout/footer/Footer";
import { useMousePosition } from "@/hooks/useMousePosition";


export default function PortfolioPage() {
  const { mousePosition } = useMousePosition(); 
  

  const portfolioTranslations = {
    title: "My Portfolio",
    description:
      "A showcase of my recent projects and creative solutions. Each project represents a unique challenge and innovative approach to modern web development.",
    filters: {
      all: "All",
      webapp: "Web App",
      mobileapp: "Mobile App",
      dashboard: "Dashboard",
      aitool: "AI Tool",
    },
    categories: {
      webapp: "Web App",
      mobileapp: "Mobile App",
      dashboard: "Dashboard",
      aitool: "AI Tool",
    },
    status: {
      completed: "Completed",
      inprogress: "In Progress",
    },
    projects: {
      ecommerce: {
        title: "E-Commerce Platform",
        description:
          "A full-stack e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
      },
      saas: {
        title: "SaaS Analytics Dashboard",
        description:
          "Modern analytics dashboard with real-time data visualization and interactive charts.",
      },
      banking: {
        title: "Mobile Banking Interface",
        description:
          "Secure mobile banking interface with biometric authentication and transaction management.",
      },
      ai: {
        title: "AI Content Generator",
        description:
          "AI-powered content creation tool with natural language processing and template system.",
      },
      realestate: {
        title: "Real Estate Platform",
        description:
          "Property listing platform with advanced search, virtual tours, and mortgage calculator.",
      },
      fitness: {
        title: "Fitness Tracking App",
        description:
          "Comprehensive fitness app with workout plans, progress tracking, and social features.",
      },
    },
    viewDetails: "View Details",
    stats: {
      title: "Project Statistics",
      description: "Numbers that showcase my experience and dedication",
      items: {
        projects: "Projects Completed",
        clients: "Happy Clients",
        experience: "Years Experience",
        satisfaction: "Client Satisfaction",
      },
    },
  };

  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web App", "Mobile App", "Dashboard", "AI Tool"];

  const filteredProjects =
    activeFilter === "All"
      ? portfolioData
      : portfolioData.filter((project) => project.category === activeFilter);

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

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="h-4 w-4 text-emerald-400/70" />
          </motion.div>
        ))}

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
      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {portfolioTranslations.title}
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              {portfolioTranslations.description}
            </p>
          </motion.div>
        </div>
      </div>
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-white text-blue-600 shadow-lg" 
                    : "bg-white/10 backdrop-blur-sm text-slate-200 border border-white/20 hover:bg-white/20 hover:border-white/30" // Qeyri-aktiv (şüşə) düymə stili
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Filter className="h-4 w-4 inline mr-2" />
                {
                  portfolioTranslations.filters[
                    category
                      .toLowerCase()
                      .replace(
                        " ",
                        ""
                      ) as keyof typeof portfolioTranslations.filters
                  ]
                }
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
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
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-500"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div className="flex space-x-2">
                          <motion.a
                            href={project.liveUrl}
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="h-4 w-4" />
                          </motion.a>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "Completed"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-yellow-500/20 text-yellow-300"
                          }`}
                        >
                          {
                            portfolioTranslations.status[
                              project.status.toLowerCase() as keyof typeof portfolioTranslations.status
                            ]
                          }
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-white/10 text-cyan-300 rounded-full text-sm font-medium">
                          {
                            portfolioTranslations.categories[
                              project.category
                                .toLowerCase()
                                .replace(
                                  " ",
                                  ""
                                ) as keyof typeof portfolioTranslations.categories
                            ]
                          }
                        </span>
                        <div className="flex items-center text-slate-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.date}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                        {
                          portfolioTranslations.projects[
                            project.key as keyof typeof portfolioTranslations.projects
                          ].title
                        }
                      </h3>

                      <p className="text-slate-300 mb-4 leading-relaxed line-clamp-3">
                        {
                          portfolioTranslations.projects[
                            project.key as keyof typeof portfolioTranslations.projects
                          ].description
                        }
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/10 text-slate-300 rounded-full text-sm flex items-center"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <motion.div whileHover={{ x: 5 }}>
                        <Link
                          href={`/portfolio/${project.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                        >
                          {portfolioTranslations.viewDetails}
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
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {portfolioTranslations.stats.title}
            </h2>
            <p className="text-xl text-slate-200">
              {portfolioTranslations.stats.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {portfolioStatsData.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-4xl mb-4 text-white"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-300 font-medium">
                  {
                    portfolioTranslations.stats.items[
                      stat.key as keyof typeof portfolioTranslations.stats.items
                    ]
                  }
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
