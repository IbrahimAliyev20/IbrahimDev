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
  { key: "Dashboard", label: "Dashboard" },
  { key: "Landing Page", label: "Landing Page" }, 
  { key: "B2B E-catalog App", label: "B2B E-catalog App" }, 
];

// 3. Statistika datası
export const stats: Stat[] = [
  { number: "15+", label: "Projects Completed", icon: "🚀" },
  { number: "1+", label: "Years Experience", icon: "⏰" },
  { number: "100%", label: "Client Satisfaction", icon: "⭐" },
];

// 4. Bütün layihələrin vahid və tam datası
export const projects: Project[] = [
 {
  id: "platinium-17",
  title: "Platinium-17 E-catalog",
  shortDescription: "A product catalog website for Platinium-17 to showcase their professional kitchen equipment online, allowing customers to easily browse the product range.",
  image: "/images/platinium.png",
  category: "Web App", // "B2B E-catalog App" Web App-in bir növü olduğu üçün bu daha ümumi və uyğundur.
  tags: ["Next.js", "TailwindCSS", "Shadcn/ui", "TypeScript"],
  date: "2025",
  status: "Completed",
  liveUrl: "https://platinium-17.az",
  githubUrl: "https://github.com/MarkUpAgency/platinium",
  
  // Detallı səhifə üçün məlumatlar
  subtitle: "A Modern B2B E-catalog Platform",
  longDescription: "The primary goal of this project was to develop a modern B2B digital platform for Platinium-17, designed to professionally showcase their extensive range of industrial kitchen equipment. Key objectives included creating a user-friendly and responsive online catalog for potential clients, and building a simple, custom Content Management System (CMS) to allow the Platinium-17 team to easily manage their content independently. The platform serves as both a digital storefront and an effective tool for generating new business leads.",
  gallery: [
    "/images/platinium17-1.png",
    "/images/platinium17-2.png"
  ],
  client: "Platinium-17", // "client" yerinə şirkətin adını yazmaq daha doğrudur
  duration: "1 month",
  team: "2 developers, 1 designer",
  
  challenges: [
    "Implementing a dynamic, multi-level product categorization (category -> sub-category).",
    "Ensuring the client could easily manage their own content without technical skills.",
    "Developing a fast and responsive user interface for a large product inventory."
  ],

  solutions: [
    "A self-referencing database structure and recursive functions were used to create a flexible and navigable category system.",
    "A minimalist, custom Content Management System (CMS) was built to provide a simple and intuitive content management experience.",
    "Next.js's Server-Side Rendering (SSR) and static generation capabilities were leveraged for optimal performance and fast page loads."
  ],

  technologies: [
    { name: "Next.js", description: "A React framework for building high-performance, server-rendered web applications." },
    { name: "Tailwind CSS", description: "A utility-first CSS framework for rapidly building custom user interfaces." },
    { name: "Shadcn/ui", description: "A collection of beautifully designed and reusable components for faster UI development." },
    { name: "TypeScript", description: "A strongly typed superset of JavaScript that enhances code quality and maintainability." }
  ],
  results: [
    "The client received a modern digital platform that professionally represents their brand online.",
    "The new user-friendly interface improved the product discovery experience for potential customers.",
    "The custom CMS empowered the client to manage their product catalog independently, reducing operational overhead."
  ]
}
];