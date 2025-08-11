interface PortfolioFilter {
  key: string;
  label: string;
}

interface Stat {
  number: string;
  label: string;
  icon: string;
}

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  status: string;
  liveUrl: string;
  githubUrl: string;
  subtitle: string;
  longDescription: string;
  gallery: string[];
  client: string;
  challenges: string[];
  solutions: string[];
}

export const pageContent = {
  title: "My Portfolio",
  description: "Exploring the future of the web, one project at a time. My work focuses on building scalable, forward-thinking applications that are ready for tomorrow's challenges.",
  statsTitle: "Project Statistics",
  statsDescription: "Numbers that showcase my experience and dedication",
  viewDetailsButton: "View Details",
};

// 2. Portfolio filterləri
export const portfolioFilters: PortfolioFilter[] = [
  { key: "All", label: "All" },
  { key: "Web App", label: "Web App" },
  { key: "Mobile App", label: "Mobile App" },
  { key: "Dashboard", label: "Dashboard" },
  { key: "AI Tool", label: "AI Tool" },
];

// 3. Statistika datası
export const stats: Stat[] = [
  { number: "50+", label: "Projects Completed", icon: "🚀" },
  { number: "25+", label: "Happy Clients", icon: "😊" },
  { number: "3+", label: "Years Experience", icon: "⏰" },
  { number: "100%", label: "Client Satisfaction", icon: "⭐" },
];

// 4. Bütün layihələrin vahid və tam datası
export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A full-stack e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
    image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    date: "2024",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
    subtitle: "Modern Online Shopping Experience",
    longDescription: "This project represents a complete overhaul of traditional e-commerce experiences. Built from the ground up with performance and user experience in mind, the platform handles thousands of products with lightning-fast search and filtering capabilities. The integration with Stripe ensures secure payment processing, while the custom admin dashboard provides real-time analytics and inventory management.",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Homepage+Design",
      "/placeholder.svg?height=400&width=600&text=Product+Listing",
      "/placeholder.svg?height=400&width=600&text=Shopping+Cart",
      "/placeholder.svg?height=400&width=600&text=Admin+Dashboard",
    ],
    client: "RetailCorp Inc.",
    challenges: [
      "Implementing real-time inventory synchronization across multiple warehouses",
      "Optimizing search performance for 100,000+ products",
    ],
    solutions: [
      "Implemented Redis caching and database indexing for lightning-fast search",
      "Used WebSocket connections for real-time inventory updates",
    ],
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    shortDescription: "Modern analytics dashboard with real-time data visualization and interactive charts.",
    image: "/placeholder.svg?height=400&width=600&text=SaaS+Dashboard",
    category: "Dashboard",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    date: "2024",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
    subtitle: "Data-Driven Business Intelligence",
    longDescription: "This SaaS dashboard transforms complex business data into actionable insights through beautiful, interactive visualizations. Built with performance in mind, it handles millions of data points while maintaining smooth user interactions.",
    gallery: [
        "/placeholder.svg?height=400&width=600&text=Main+Dashboard",
        "/placeholder.svg?height=400&width=600&text=Analytics+Charts",
    ],
    client: "DataTech Solutions",
    challenges: ["Processing and visualizing large datasets in real-time"],
    solutions: ["Implemented data streaming with WebSocket connections"],
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking Interface",
    shortDescription: "Secure mobile banking interface with biometric authentication and transaction management.",
    image: "/placeholder.svg?height=400&width=600&text=Banking+App",
    category: "Mobile App",
    tags: ["React Native", "TypeScript", "Firebase"],
    date: "2023",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
    subtitle: "Secure Financial Management",
    longDescription: "This mobile banking application prioritizes security and user experience, featuring advanced biometric authentication, comprehensive transaction management, and real-time financial insights.",
    gallery: [],
    client: "SecureBank Ltd.",
    challenges: ["Implementing secure biometric authentication across platforms"],
    solutions: ["Integrated native biometric APIs with fallback authentication"],
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    shortDescription: "AI-powered content creation tool with natural language processing and template system.",
    image: "/placeholder.svg?height=400&width=600&text=AI+Generator",
    category: "AI Tool",
    tags: ["Next.js", "OpenAI", "Tailwind", "Vercel"],
    date: "2024",
    status: "In Progress",
    liveUrl: "#",
    githubUrl: "#",
    subtitle: "Intelligent Content Creation Platform",
    longDescription: "This cutting-edge AI platform revolutionizes content creation by leveraging advanced natural language processing and machine learning algorithms.",
    gallery: [],
    client: "ContentCorp Media",
    challenges: ["Integrating multiple AI models for different content types"],
    solutions: ["Built modular AI service architecture with model switching"],
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    shortDescription: "Property listing platform with advanced search, virtual tours, and mortgage calculator.",
    image: "/placeholder.svg?height=400&width=600&text=Real+Estate",
    category: "Web App",
    tags: ["Vue.js", "Nuxt.js", "Mapbox", "Strapi"],
    date: "2023",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
    subtitle: "Modern Property Discovery Experience",
    longDescription: "This innovative real estate platform transforms the property search experience with advanced filtering, interactive maps, and virtual tour integration.",
    gallery: [],
    client: "PropertyPro Realty",
    challenges: ["Handling large datasets of property listings efficiently"],
    solutions: ["Implemented efficient data pagination and caching strategies"],
  },
  {
    id: "fitness-tracking-app",
    title: "Fitness Tracking App",
    shortDescription: "Comprehensive fitness app with workout plans, progress tracking, and social features.",
    image: "/placeholder.svg?height=400&width=600&text=Fitness+App",
    category: "Mobile App",
    tags: ["React", "Express", "PostgreSQL", "AWS"],
    date: "2023",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
    subtitle: "Comprehensive Health & Wellness Platform",
    longDescription: "This comprehensive fitness platform combines workout planning, progress tracking, and social networking to create a complete health and wellness ecosystem.",
    gallery: [],
    client: "FitLife Technologies",
    challenges: ["Integrating with multiple wearable device APIs"],
    solutions: ["Built unified device integration layer with standardized data formats"],
  },
];