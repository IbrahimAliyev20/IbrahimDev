// --- TİPLƏRİN TƏYİN EDİLMƏSİ ---
interface PortfolioFilter {
  key: string;
  label: string;
}

interface Stat {
  number: string;
  label: string;
  icon: string;
}

interface ProjectTechnology {
  name: string;
  description: string;
}

interface Project {
  id: string; // URL üçün istifadə olunacaq (məsələn, /portfolio/ecommerce-platform)
  title: string;
  shortDescription: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  status: string;
  liveUrl: string;
  githubUrl: string;
  // Detallı səhifə üçün məlumatlar
  subtitle: string;
  longDescription: string;
  gallery: string[];
  client: string;
  duration: string;
  team: string;
  challenges: string[];
  solutions: string[];
  technologies: ProjectTechnology[];
  results: string[];
}


// --- EXPORT EDİLƏN DATALAR ---

// 1. Səhifələrdə istifadə olunan BÜTÜN statik mətnlər
export const pageContent = {
  portfolio: {
    title: "My Portfolio",
    description: "Exploring the future of the web, one project at a time. My work focuses on building scalable, forward-thinking applications that are ready for tomorrow's challenges.",
    statsTitle: "Project Statistics",
    statsDescription: "Numbers that showcase my experience and dedication",
    viewDetailsButton: "View Details",
  },
  projectDetail: {
    backToPortfolio: "Back to Portfolio",
    viewLiveButton: "View Live Site",
    viewCodeButton: "View Code",
    year: "Year",
    duration: "Duration",
    team: "Team",
    status: "Status",
    galleryTitle: "Project Gallery",
    galleryDescription: "Visual showcase of key features and interfaces",
    techTitle: "Technologies Used",
    techDescription: "The tech stack that powered this project",
    challengesTitle: "Challenges",
    solutionsTitle: "Solutions",
    resultsTitle: "Project Results",
    resultsDescription: "Measurable impact and achievements",
  }
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
    duration: "4 months",
    team: "3 developers",
    challenges: [
      "Implementing real-time inventory synchronization across multiple warehouses",
      "Optimizing search performance for 100,000+ products",
      "Creating a seamless checkout experience with multiple payment methods",
    ],
    solutions: [
      "Implemented Redis caching and database indexing for lightning-fast search",
      "Used WebSocket connections for real-time inventory updates",
      "Integrated multiple payment gateways with fallback mechanisms",
    ],
    technologies: [
      { name: "Next.js 14", description: "React framework for production-grade applications" },
      { name: "TypeScript", description: "Type-safe JavaScript for better development experience" },
      { name: "Prisma", description: "Next-generation ORM for database management" },
      { name: "Stripe", description: "Secure payment processing platform" },
      { name: "PostgreSQL", description: "Robust relational database system" },
    ],
    results: [
      "40% increase in conversion rate",
      "60% faster page load times",
      "99.9% uptime since launch",
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
    duration: "6 months",
    team: "4 developers",
    challenges: ["Processing and visualizing large datasets in real-time", "Creating intuitive drag-and-drop dashboard builder"],
    solutions: ["Implemented data streaming with WebSocket connections", "Built custom drag-and-drop interface with React DnD"],
    technologies: [
        { name: "React 18", description: "Modern UI library with concurrent features" },
        { name: "D3.js", description: "Powerful data visualization library" },
        { name: "Node.js", description: "Server-side JavaScript runtime" },
        { name: "MongoDB", description: "Flexible NoSQL database" },
    ],
    results: ["50% reduction in report generation time", "300% increase in user engagement"],
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
    duration: "5 months",
    team: "4 developers",
    challenges: ["Implementing secure biometric authentication across platforms", "Ensuring PCI DSS compliance for financial transactions"],
    solutions: ["Integrated native biometric APIs with fallback authentication", "Implemented end-to-end encryption and secure key management"],
    technologies: [
        { name: "React Native", description: "Cross-platform mobile development framework" },
        { name: "TypeScript", description: "Type-safe JavaScript for mobile development" },
        { name: "Firebase", description: "Backend-as-a-Service platform" },
    ],
    results: ["95% user satisfaction rating", "Zero security incidents since launch"],
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
    duration: "3 months",
    team: "3 developers",
    challenges: ["Integrating multiple AI models for different content types", "Managing API costs and rate limiting for AI services"],
    solutions: ["Built modular AI service architecture with model switching", "Created intelligent caching and request optimization system"],
    technologies: [
        { name: "Next.js 14", description: "Full-stack React framework with App Router" },
        { name: "OpenAI GPT-4", description: "Advanced language model for content generation" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    ],
    results: ["80% faster content creation", "Currently in beta testing"],
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
    duration: "6 months",
    team: "5 developers",
    challenges: ["Handling large datasets of property listings efficiently", "Integrating multiple MLS (Multiple Listing Service) APIs"],
    solutions: ["Implemented efficient data pagination and caching strategies", "Built unified API layer to normalize different MLS data formats"],
    technologies: [
        { name: "Vue.js 3", description: "Progressive JavaScript framework" },
        { name: "Nuxt.js", description: "Vue.js framework for production applications" },
        { name: "Mapbox", description: "Interactive mapping and location services" },
    ],
    results: ["300% increase in user engagement", "25% increase in lead generation"],
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
    duration: "8 months",
    team: "6 developers",
    challenges: ["Integrating with multiple wearable device APIs", "Creating personalized AI workout recommendations"],
    solutions: ["Built unified device integration layer with standardized data formats", "Implemented machine learning algorithms"],
    technologies: [
        { name: "React 18", description: "Modern UI library with hooks and context" },
        { name: "Express.js", description: "Fast, unopinionated web framework for Node.js" },
        { name: "PostgreSQL", description: "Advanced relational database with JSON support" },
    ],
    results: ["150K+ registered users", "4.8/5 app store rating"],
  },
];