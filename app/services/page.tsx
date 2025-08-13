"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";

import { pageContent, services, processSteps } from "@/data/services-data";
import SkillsCarousel from "@/components/SkillsCarousel";

export default function ServicesPage() {
  const { mousePosition } = useMousePosition();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 overflow-x-hidden relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-xl"
          animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-lg blur-xl rotate-45"
          animate={{ x: [0, -80, 40, 0], y: [0, 80, -40, 0], rotate: [45, 135, 225, 45] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-emerald-500/25 to-cyan-500/25 rounded-full blur-2xl"
          animate={{ x: [0, 120, -60, 0], y: [0, -80, 40, 0], scale: [1, 0.8, 1.3, 1] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{ x: mousePosition.x - 192, y: mousePosition.y - 192 }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-24 pb-12 px-6">
          <div className="container mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {pageContent.title}
              </h1>
              <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                {pageContent.description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, staggerChildren: 0.1 }}>
              {services.map((service, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -10 }} className="group">
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 h-full shadow-lg hover:shadow-2xl text-white">
                    <CardContent className="p-8">
                      <motion.div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">{service.title}</h3>
                      <p className="text-slate-200 leading-relaxed mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-slate-200">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 ">
          <div className="container mx-auto">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-50">{pageContent.processTitle}</h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">{pageContent.processDescription}</p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <motion.div key={index} className="text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }} whileHover={{ scale: 1.05 }}>
                  <motion.div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}>
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-50">{item.title}</h3>
                  <p className="text-cyan-100">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

              <SkillsCarousel />
      </div>
    </div>
  );
}