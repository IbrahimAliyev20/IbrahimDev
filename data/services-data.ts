
import { Code2, Palette, Zap, Sparkles, LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  rating: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

export const pageContent = {
  title: "My Services",
  description: "With a priority on performance and clean code: Web solutions that meet the highest modern front-end standards.",
  processTitle: "My Process",
  processDescription: "A structured approach to deliver exceptional results",
  testimonialsTitle: "Client Testimonials",
  testimonialsDescription: "What my clients say about working with me",
};

export const services: Service[] = [
  {
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    title: "Frontend Development",
    description: "Building responsive, performant web applications with modern frameworks and best practices.",
    features: [
      "React & Next.js",
      "TypeScript",
      "Mobile-First & Responsive Design",
      "Modern CSS & Animations",
    ],
  },
  {
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    title: "Design to Code",
    description: "Precisely converting designs from Figma into pixel-perfect web pages and creating interactive prototypes.",
    features: [
      "Figma",
      "Design Slicing & Asset Export",
      "Pixel-Perfect Development",
      "Interactive Prototyping",
    ],
  },
  {
    icon: Zap,
    color: "from-orange-500 to-red-500",
    title: "Performance Optimization",
    description: "Enhancing website speed and performance for better user experience and SEO rankings.",
    features: [
      "Core Web Vitals Analysis",
      "Bundle Size Reduction",
      "Image & Font Optimization",
      "Effective Caching Strategies",
    ],
  },
  {
    icon: Sparkles,
    color: "from-yellow-400 to-amber-500",
    title: "AI-Enhanced Workflow",
    description: "Leveraging cutting-edge AI tools like GitHub Copilot to accelerate development, improve code quality, and solve complex problems faster.",
    features: [
      "Accelerated Development",
      "Prompt Engineering for Code",
      "AI-Assisted Debugging",
      "Automated Code Refactoring",
    ],
  },
];


export const processSteps: ProcessStep[] = [
    { 
        step: "01", 
        title: "Discovery & Planning", 
        description: "Understanding project goals, analyzing requirements, and planning the technical solution." 
    },
    { 
        step: "02", 
        title: "Design Review & Strategy", 
        description: "Analyzing the provided Figma design, breaking it into components, and building the development strategy." 
    },
    { 
        step: "03", 
        title: "Agile Development & AI", 
        description: "Building components flexibly by writing clean, performant code and leveraging AI tools." 
    },
    { 
        step: "04", 
        title: "Testing & Launch", 
        description: "Ensuring flawless functionality across all devices and browsers, then successfully launching the project." 
    },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "TailwindCSS",
  "Git",
];