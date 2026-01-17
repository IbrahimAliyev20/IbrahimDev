"use client";

import { Card, CardContent } from "../../components/ui/card";
import { ExternalLink, Github, Calendar, Tag, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { portfolioFilters, stats, projects } from "../../data/portfolio-page-data";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 overflow-x-hidden relative">
   
      <div className="relative z-10">
        <div className="pt-24 pb-12 px-6">
          <div className="container mx-auto text-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Portfolio
              </h1>
              <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                A showcase of my recent projects and creative solutions. Each project represents a unique challenge and innovative approach to modern web development.
              </p>
            </div>
          </div>
        </div>

        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {portfolioFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full font-bold font-[roboto] transition-all  duration-300 ${activeFilter === filter.key ? "bg-white/90 text-blue-600 " : "bg-white/10 backdrop-blur-sm text-slate-200 border border-white/20 hover:bg-white/20 hover:border-white/30"}`}
                >
                  <Filter className="h-4 w-4 inline mr-2" />
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group"
                >
                  <Card className="h-full flex flex-col bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl">
                    <div className="relative overflow-hidden">
                      <div>
                        <Image src={project.image || "/placeholder.svg"} alt={project.title} width={400} height={300} className="w-full h-48 object-cover transition-transform duration-500" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                          <div className="flex space-x-2">
                            <a href={project.liveUrl} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                            <a href={project.githubUrl} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                              <Github className="h-4 w-4" />
                            </a>
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
                            <span key={tagIndex} className="px-3 py-1 bg-white/10 text-slate-300 rounded-full text-sm flex items-center">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div>
                          <Link href={`/portfolio/${project.id}`} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                            Read more
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Project Statistics
              </h2>
              <p className="text-xl text-slate-200">
                Numbers that showcase my experience and dedication.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
