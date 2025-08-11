"use client";

import { skills } from "@/data/services-data";
import Marquee from "react-fast-marquee";

export default function SkillsCarousel() {
  return (
      <div>
        <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl border border-slate-700 py-10 overflow-x-hidden">
          <h3 className="text-3xl font-bold mb-12 text-center text-cyan-50">
            Technologies & Tools
          </h3>
          <Marquee
            gradient={false}
            gradientColor="rgb(30, 41, 59)" 
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
          >
            {skills.map((skill, index) => (
              <div key={index} className="mx-12">
                <p className="text-2xl font-semibold text-slate-300 transition-colors hover:text-white whitespace-nowrap">
                  {skill}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

  );
}