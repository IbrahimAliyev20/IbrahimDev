"use client";

import React from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Clock,
  Award,
  Lightbulb,
  Code,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { pageContent } from "../../../data/portfolio-page-data";
import { projects } from "../../../data/portfolio-page-data";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = React.use(params);
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 overflow-x-hidden relative">
  

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-6">
          <div className="container mx-auto">
            <div className="mb-8">
              <Link
                href="/portfolio"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                {pageContent.projectDetail.backToPortfolio}
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <span className="px-4 py-2 bg-white/10 text-cyan-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-300 mb-6 font-medium">
                  {project.subtitle}
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {pageContent.projectDetail.viewLiveButton}
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-slate-300 text-white hover:bg-white/20 bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {pageContent.projectDetail.viewCodeButton}
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-blue-500" />
                    <div>
                      <div className="font-medium text-slate-400">
                        {pageContent.projectDetail.year}
                      </div>
                      <div className="text-white font-medium">
                        {project.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-green-500" />
                    <div>
                      <div className="font-medium text-slate-400">
                        {pageContent.projectDetail.duration}
                      </div>
                      <div className="text-white font-medium">
                        {project.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-purple-500" />
                    <div>
                      <div className="font-medium text-slate-400">
                        {pageContent.projectDetail.team}
                      </div>
                      <div className="text-white font-medium">
                        {project.team}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-3 text-orange-500" />
                    <div>
                      <div className="font-medium text-slate-400">
                        {pageContent.projectDetail.status}
                      </div>
                      <div className="text-white font-medium">
                        {project.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
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
              </div>
            </div>
          </div>
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section className="py-16 px-6">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {pageContent.projectDetail.galleryTitle}
                </h2>
                <p className="text-lg text-slate-300">
                  {pageContent.projectDetail.galleryDescription}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
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
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {pageContent.projectDetail.techTitle}
              </h2>
              <p className="text-lg text-slate-300">
                {pageContent.projectDetail.techDescription}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="h-full"
                >
                  <Card className="h-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                          <Code className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {tech.name}
                        </h3>
                      </div>
                      <p className="text-slate-300">{tech.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {pageContent.projectDetail.challengesTitle}
                  </h2>
                </div>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-sm"
                    >
                      <p className="text-slate-200">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {pageContent.projectDetail.solutionsTitle}
                  </h2>
                </div>
                <div className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-sm"
                    >
                      <p className="text-slate-200">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {pageContent.projectDetail.resultsTitle}
              </h2>
              <p className="text-lg text-slate-300">
                {pageContent.projectDetail.resultsDescription}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="h-full text-center bg-white/10 backdrop-blur-md text-white rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-2xl font-bold">{result}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
