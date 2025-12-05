"use client"

import { Briefcase, Rocket } from "lucide-react" 
import { QuickLinkCard } from "../card/QuickLinkCard";

export default function QuickLinksSection() {
  const quickLinksData = [
    {
      href: "/services",
      gradientClasses: "bg-gradient-to-br from-blue-500 to-purple-600",
      icon: <Rocket />,
      title: "My Services",
      description: "Comprehensive front-end solutions tailored to your needs.",
      cta: "Learn More",
      textColorClass: "text-blue-100",
      backgroundImage: "/images/ServicesBg.png",
    },
    {
      href: "/portfolio",
      gradientClasses: "bg-gradient-to-br from-pink-500 to-orange-500",
      icon: <Briefcase />,
      title: "Portfolio",
      description: "Showcase of my recent projects and creative solutions.",
      cta: "View Projects",
      textColorClass: "text-pink-100",
      backgroundImage: "/images/PortfolioBg.png", 
    }
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-100">Explore My Work</h2>
          <p className="text-xl text-cyan-50">Discover what I can do for you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {quickLinksData.map((card, index) => (
            <QuickLinkCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
