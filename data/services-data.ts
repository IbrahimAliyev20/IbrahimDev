import { Code2, Palette, Smartphone, Zap, Globe, Layers } from "lucide-react"

export const servicesData = [
  {
    key: "frontend",
    icon: Code2,
    features: ["react", "typescript", "performance", "css"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    key: "uiux",
    icon: Palette,
    features: ["research", "wireframing", "prototyping", "systems"],
    color: "from-purple-500 to-pink-500",
  },
  {
    key: "responsive",
    icon: Smartphone,
    features: ["mobile", "testing", "pwa", "touch"],
    color: "from-green-500 to-teal-500",
  },
  {
    key: "performance",
    icon: Zap,
    features: ["vitals", "bundle", "images", "caching"],
    color: "from-orange-500 to-red-500",
  },
  {
    key: "fullstack",
    icon: Globe,
    features: ["api", "database", "deployment", "security"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    key: "design",
    icon: Layers,
    features: ["components", "guides", "documentation", "consistency"],
    color: "from-pink-500 to-rose-500",
  },
]
