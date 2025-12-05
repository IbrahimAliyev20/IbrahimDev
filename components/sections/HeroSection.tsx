"use client";

import { Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import CountUp from "../CountUp";
import RotatingText from "../RotatingText";

export default function HeroSection() {
  const heroTranslations = {
    title: {
      line1: "Ibrahim Aliyev",
      line2: "Frontend Developer",
    },
    description: {
      static: "Building",
      rotatingWords1: ["clean", "efficient", "beautiful", "modern", "responsive"],
      staticMiddle: "and",
      rotatingWords2: ["high-performance", "scalable", "interactive", "innovative", "user-friendly"],
      staticEnd: "web interfaces with modern technologies.",
    },
    buttons: {
      primary: "View My Work",
      secondary: "View CV",
    },
    stats: {
      projects: "Projects Completed",
      experience: "Years Experience",
      satisfaction: "Client Satisfaction",
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="container mx-auto text-center relative z-10">
        <div className="absolute -bottom-20 left-10 text-pink-400/30">
          <Image src="/images/js.png" alt="js" width={30} height={30} />
        </div>
        <div className="absolute -bottom-20 right-10 text-pink-400/30">
          <Image src="/images/react.png" alt="react" width={50} height={50} />
        </div>

        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            {heroTranslations.title.line1}
            <br />
            <span className="text-4xl font-bold shiny-text">{heroTranslations.title.line2}</span>
          </h1>
        </div>

        <div className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto leading-relaxed min-h-[4rem] flex items-center justify-center">
          <p className="text-center">
            <span className="text-cyan-100">{heroTranslations.description.static} </span>
            <span className="inline-block text-white bg-cyan-500/80 px-2 py-1 rounded font-semibold mx-1 uppercase">
              <RotatingText
                texts={heroTranslations.description.rotatingWords1}
                rotationInterval={2500}
                auto={true}
                loop={true}
                splitBy="characters"
                staggerDuration={0.03}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                mainClassName="inline-block uppercase"
                elementLevelClassName="text-white font-semibold uppercase"
              />
            </span>
            <span className="text-cyan-100"> {heroTranslations.description.staticMiddle} </span>
            <span className="inline-block text-white bg-cyan-500/80 px-2 py-1 rounded font-semibold mx-1 uppercase">
              <RotatingText
                texts={heroTranslations.description.rotatingWords2}
                rotationInterval={2500}
                auto={true}
                loop={true}
                splitBy="characters"
                staggerDuration={0.03}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                mainClassName="inline-block uppercase"
                elementLevelClassName="text-white font-semibold uppercase"
              />
            </span>
            <span className="text-cyan-100"> {heroTranslations.description.staticEnd}</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div>
            <Link href="/portfolio">
              <Button
                size="lg"
                className="relative bg-transparent border-2 border-cyan-400/80 text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-300 px-10 py-5 text-lg font-semibold group transition-all duration-500 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8),0_0_80px_rgba(59,130,246,0.4)] rounded-3xl backdrop-blur-sm hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">{heroTranslations.buttons.primary}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              </Button>
            </Link>
          </div>
          <div>
            <Link href="/cv" rel="noopener noreferrer">
              <Button
                size="lg"
                className="relative bg-transparent border-2 border-cyan-400/80 text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-300 px-10 py-5 text-lg font-semibold group transition-all duration-500 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8),0_0_80px_rgba(59,130,246,0.4)] rounded-3xl backdrop-blur-sm hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">{heroTranslations.buttons.secondary}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          {[
            { number: "25+", labelKey: "projects" },
            { number: "2+", labelKey: "experience" },
            { number: "100%", labelKey: "satisfaction" },
          ].map((stat, index) => {
            const numericValue = parseInt(stat.number);
            const suffix = stat.number.replace(/^\d+/, "");
            return (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-cyan-800 bg-clip-text text-transparent">
                  <CountUp
                    from={0}
                    to={numericValue}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />
                  {suffix}
                </div>
              <div className="text-cyan-100 font-medium">
                {
                  heroTranslations.stats[
                    stat.labelKey as keyof typeof heroTranslations.stats
                  ]
                }
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
