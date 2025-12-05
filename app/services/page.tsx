"use client";

import { CheckCircle } from "lucide-react";

import SkillsCarousel from "../../components/SkillsCarousel";
import { pageContent, processSteps, services } from "../../data/services-data";
import { Card, CardContent } from "../../components/ui/card";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 overflow-x-hidden relative">
    

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-24 pb-12 px-6">
          <div className="container mx-auto text-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {pageContent.title}
              </h1>
              <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                {pageContent.description}
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 h-full shadow-lg hover:shadow-2xl text-white">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 ">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-50">{pageContent.processTitle}</h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">{pageContent.processDescription}</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-50">{item.title}</h3>
                  <p className="text-cyan-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SkillsCarousel />
      </div>
    </div>
  );
}
