"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {  CheckCircle, Star, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services-data";
import { testimonialsData } from "@/data/testimonials-data";
import { processData } from "@/data/process-data";
import { useMousePosition } from "@/hooks/useMousePosition"; 
import FooterSection from "@/components/layout/footer/Footer"


export default function ServicesPage() {
  const { mousePosition } = useMousePosition(); // <-- YENİ: Hook istifadəsi

  const serviceTranslations = {
    title: "My Services",
    description:
      "Comprehensive front-end solutions designed to bring your digital vision to life with cutting-edge technology and exceptional user experience.",
    services: {
      frontend: {
        title: "Frontend Development",
        description:
          "Building responsive, performant web applications with modern frameworks and best practices.",
        features: {
          react: "React & Next.js",
          typescript: "TypeScript",
          performance: "Performance Optimization",
          css: "Modern CSS",
        },
      },
      uiux: {
        title: "UI/UX Design",
        description:
          "Creating intuitive, beautiful user interfaces with a focus on user experience and accessibility.",
        features: {
          research: "User Research",
          wireframing: "Wireframing",
          prototyping: "Prototyping",
          systems: "Design Systems",
        },
      },
      responsive: {
        title: "Responsive Web Apps",
        description:
          "Developing mobile-first applications that work seamlessly across all devices and screen sizes.",
        features: {
          mobile: "Mobile-First Design",
          testing: "Cross-Browser Testing",
          pwa: "PWA Development",
          touch: "Touch Optimization",
        },
      },
      performance: {
        title: "Performance Optimization",
        description:
          "Enhancing website speed and performance for better user experience and SEO rankings.",
        features: {
          vitals: "Core Web Vitals",
          bundle: "Bundle Optimization",
          images: "Image Optimization",
          caching: "Caching Strategies",
        },
      },
      fullstack: {
        title: "Web Development",
        description:
          "Full-stack web development solutions from concept to deployment and maintenance.",
        features: {
          api: "API Integration",
          database: "Database Design",
          deployment: "Cloud Deployment",
          security: "Security Implementation",
        },
      },
      design: {
        title: "Design Systems",
        description:
          "Creating scalable design systems and component libraries for consistent user experiences.",
        features: {
          components: "Component Libraries",
          guides: "Style Guides",
          documentation: "Documentation",
          consistency: "Brand Consistency",
        },
      },
    },
    process: {
      title: "My Process",
      description: "A structured approach to deliver exceptional results",
      steps: {
        discovery: {
          title: "Discovery",
          description: "Understanding your goals and requirements",
        },
        design: {
          title: "Design",
          description: "Creating wireframes and visual designs",
        },
        development: {
          title: "Development",
          description: "Building with modern technologies",
        },
        launch: {
          title: "Launch",
          description: "Testing, optimization, and deployment",
        },
      },
    },
    testimonials: {
      title: "Client Testimonials",
      description: "What my clients say about working with me",
      items: {
        sarah: {
          name: "Sarah Johnson",
          role: "Product Manager",
          company: "TechCorp",
          content:
            "Exceptional work! The website exceeded our expectations in both design and performance.",
        },
        mike: {
          name: "Mike Chen",
          role: "CEO",
          company: "StartupXYZ",
          content:
            "Professional, creative, and delivered on time. Highly recommend for any web project.",
        },
        emily: {
          name: "Emily Davis",
          role: "Marketing Director",
          company: "GrowthCo",
          content:
            "The attention to detail and user experience focus made all the difference for our brand.",
        },
      },
    },
  };

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

        {/* Floating sparkles */}
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

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-24 pb-12 px-6">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {serviceTranslations.title}
              </h1>
              <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                {serviceTranslations.description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
            >
              {servicesData.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group"
                >
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 h-full shadow-lg hover:shadow-2xl text-white">
                    <CardContent className="p-8">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">
                        {
                          serviceTranslations.services[
                            service.key as keyof typeof serviceTranslations.services
                          ].title
                        }
                      </h3>
                      <p className="text-slate-200 leading-relaxed mb-6">
                        {
                          serviceTranslations.services[
                            service.key as keyof typeof serviceTranslations.services
                          ].description
                        }
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((featureKey, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-slate-200"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {
                              serviceTranslations.services[
                                service.key as keyof typeof serviceTranslations.services
                              ].features[
                                featureKey as keyof typeof serviceTranslations.services.frontend.features
                              ]
                            }
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
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-50">
                {serviceTranslations.process.title}
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                {serviceTranslations.process.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {processData.map((process, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    {process.step}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-50">
                    {
                      serviceTranslations.process.steps[
                        process.key as keyof typeof serviceTranslations.process.steps
                      ].title
                    }
                  </h3>
                  <p className="text-cyan-100">
                    {
                      serviceTranslations.process.steps[
                        process.key as keyof typeof serviceTranslations.process.steps
                      ].description
                    }
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-50">
                {serviceTranslations.testimonials.title}
              </h2>
              <p className="text-xl text-cyan-100">
                {serviceTranslations.testimonials.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-slate-200 mb-6 italic">
                        "
                        {
                          serviceTranslations.testimonials.items[
                            testimonial.key as keyof typeof serviceTranslations.testimonials.items
                          ].content
                        }
                        "
                      </p>
                      <div>
                        <div className="font-bold text-white">
                          {
                            serviceTranslations.testimonials.items[
                              testimonial.key as keyof typeof serviceTranslations.testimonials.items
                            ].name
                          }
                        </div>
                        <div className="text-slate-300">
                          {
                            serviceTranslations.testimonials.items[
                              testimonial.key as keyof typeof serviceTranslations.testimonials.items
                            ].role
                          }{" "}
                          at{" "}
                          {
                            serviceTranslations.testimonials.items[
                              testimonial.key as keyof typeof serviceTranslations.testimonials.items
                            ].company
                          }
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
                    <FooterSection />
        
      </div>
    </div>
  );
}
