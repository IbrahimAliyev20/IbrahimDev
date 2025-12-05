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
  duration: string;
  team: string;
  challenges: string[];
  solutions: string[];
  technologies: ProjectTechnology[];
  results: string[];
}

export const pageContent = {
  portfolio: {
    title: "My Portfolio",
    description:
      "Exploring the future of the web, one project at a time. My work focuses on building scalable, forward-thinking applications that are ready for tomorrow's challenges.",
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
  },
};

export const portfolioFilters: PortfolioFilter[] = [
  { key: "All", label: "All" },
  { key: "Web App", label: "Web App" },
  { key: "Dashboard", label: "Dashboard" },
];

export const stats: Stat[] = [
  { number: "10+", label: "Projects Completed", icon: "🚀" },
  { number: "1+", label: "Years Experience", icon: "⏰" },
  { number: "100%", label: "Client Satisfaction", icon: "⭐" },
];

export const projects: Project[] = [
  {
    id: "platinium-17",
    title: "Platinium-17 E-catalog",
    shortDescription:
      "A product catalog website for Platinium-17 to showcase their professional kitchen equipment online, allowing customers to easily browse the product range.",
    image: "/images/platinium.png",
    category: "Web App",
    tags: ["Next.js", "Material-UI", "TypeScript", "i18n"],
    date: "2025",
    status: "Completed",
    liveUrl: "https://platinium-17.az",
    githubUrl: "https://github.com/MarkUpAgency/platinium",

    subtitle: "A Modern B2B E-catalog Platform",
    longDescription:
      "The primary goal of this project was to develop a modern B2B digital platform for Platinium-17, designed to professionally showcase their extensive range of industrial kitchen equipment. Key objectives included creating a user-friendly and responsive online catalog for potential clients, and building a simple, custom Content Management System (CMS) to allow the Platinium-17 team to easily manage their content independently. The platform serves as both a digital storefront and an effective tool for generating new business leads.",
    gallery: ["/images/platinium17-1.png", "/images/platinium17-2.png"],
    client: "Platinium-17",
    duration: "1 month",
    team: "1 frontend developer, 1 backend developer, 1 designer",

    challenges: [
      "Integrating a complex, multi-level product categorization API from the backend.",
      "Ensuring the client could easily manage their own content via a custom-built CMS.",
      "Developing a fast and responsive user interface for a large product inventory.",
    ],

    solutions: [
      "Collaborated with the backend developer to integrate a powerful API for dynamic, multi-level category navigation.",
      "Built a clean and intuitive frontend for the custom CMS, allowing the client to manage content without technical skills.",
      "Leveraged Next.js's static generation capabilities for optimal performance and fast page loads across the catalog.",
    ],

    technologies: [
      {
        name: "Next.js",
        description:
          "A React framework for building high-performance, server-rendered web applications.",
      },
      {
        name: "TypeScript",
        description:
          "A strongly typed superset of JavaScript that enhances code quality and maintainability.",
      },
      {
        name: "Material-UI (MUI)",
        description:
          "A comprehensive React UI framework with a large collection of pre-built components, used to create a clean and functional interface.",
      },
      {
        name: "Tailwind CSS",
        description:
          "A utility-first CSS framework used alongside MUI for rapid custom styling and layout adjustments.",
      },
      {
        name: "Next-Intl",
        description:
          "A library for internationalization (i18n), used to provide the website's content in multiple languages.",
      },
      {
        name: "Swiper.js",
        description:
          "A modern touch slider/carousel library, used for creating interactive product showcases and galleries.",
      },
      {
        name: "Axios",
        description:
          "A promise-based HTTP client for making API requests to fetch product data and manage content.",
      },
      {
        name: "Next Sitemap",
        description:
          "A tool for automatically generating sitemaps, improving the website's SEO and search engine visibility.",
      },
    ],

    results: [
      "The client received a modern digital platform that professionally represents their brand online.",
      "The new user-friendly interface improved the product discovery experience for potential customers.",
      "The custom CMS empowered the client to manage their product catalog independently, reducing operational overhead.",
    ],
  },
  {
    id: "gbaru-dashboard",
    title: "Gbaru",
    shortDescription:
      "A central web portal for the construction and real estate sector, bringing together companies, users, and professionals.",
    image: "/images/gbaru.png",
    category: "Dashboard",
    tags: ["Next.js", "TypeScript", "Real-time", "Tanstack Query"],
    date: "2024-2025",
    status: "Completed",
    liveUrl: "https://gbaru.com",
    githubUrl: "https://github.com/MarkUpAgency/Baru-Frontend",

    subtitle: "The Digital Hub for the Construction & Real Estate Industry",
    longDescription:
      "This project involved creating a multi-functional B2B platform to serve as the central digital hub for the global construction and real estate industry. The primary goal was to unite fragmented markets by providing a single ecosystem where companies and professionals can connect. The platform enables users to post various ads, find procurement tenders and job vacancies, participate in auctions, and access integrated banking services. Ultimately, it functions as a comprehensive tool designed to foster business connections, increase transparency within the sector, and build a stronger professional community.",
    gallery: ["/images/gbaru-1.png", "/images/gbaru-2.png"],
    client: "Gbaru",
    duration: "2 Months",
    team: "3 developers, 1 designer",

    challenges: [
      "Managing complex server state across a multi-functional platform with ads, tenders, and user data.",
      "Integrating various distinct features (jobs, auctions, banking) into a single, cohesive, and intuitive dashboard.",
      "Ensuring all user-submitted data through numerous forms was secure, validated, and correctly formatted.",
    ],

    solutions: [
      "Leveraged Tanstack Query for powerful server-state management, simplifying data fetching, caching, and synchronization.",
      "Built a modular UI with a component-based architecture using Shadcn/ui to ensure design consistency and manage complexity.",
      "Combined React Hook Form with Zod for robust, end-to-end type-safe form handling, guaranteeing data integrity.",
    ],

    technologies: [
      {
        name: "Next.js",
        description:
          "A React framework for building high-performance, server-rendered web applications with features like SSR, SSG, and API routing.",
      },
      {
        name: "TypeScript",
        description:
          "A superset of JavaScript that adds static typing, reducing errors and improving code readability in large projects.",
      },
      {
        name: "TailwindCSS",
        description:
          "A utility-first CSS framework that allows for building fast and customizable designs directly within the HTML.",
      },
      {
        name: "Tanstack Query",
        description:
          "A powerful library for managing server state, simplifying the processes of fetching, caching, and updating API data.",
      },
      {
        name: "Tanstack Table",
        description:
          "A headless library for building complex, performant, and feature-rich data tables and grids, essential for dashboards.",
      },
      {
        name: "Shadcn/ui",
        description:
          "A collection of reusable components built on Radix UI and Tailwind CSS, used to build the entire UI with a consistent design system.",
      },
      {
        name: "React Hook Form & Zod",
        description:
          "Combined for robust, end-to-end type-safe form management, ensuring data integrity and a great user experience.",
      },
      {
        name: "TipTap Rich Text Editor",
        description:
          "A modern, headless rich-text editor framework used for creating custom text editing experiences for ads and posts.",
      },
      {
        name: "Socket.IO",
        description:
          "A library for enabling real-time, bidirectional communication, used for features like live notifications or chat.",
      },
      {
        name: "Next-Intl",
        description:
          "A powerful internationalization (i18n) library for Next.js, providing complete multilingual support for the platform.",
      },
      {
        name: "Axios",
        description:
          "A promise-based HTTP client used for making reliable and structured API requests to the backend.",
      },
    ],

    results: [
      "Launched a centralized industry hub connecting thousands of professionals and companies in the construction sector.",
      "Delivered a high-performance user experience with fast load times and a responsive interface, despite the platform's complexity.",
      "Fostered a more connected and transparent business environment by providing easy access to tenders, jobs, and company information.",
    ],
  },
  {
    id: "fonderra-dashboard",
    title: "Fonderra",
    shortDescription:
      "A FinTech platform designed to connect innovative startups with potential investors, featuring a public-facing site and a comprehensive user dashboard.",
    image: "/images/fondera.png",
    category: "Dashboard",
    tags: ["Next.js", "TypeScript", "Recharts", "Tanstack Query"],
    date: "2025",
    status: "In Progress",
    liveUrl: "https://fondera.vercel.app/",
    githubUrl: "https://github.com/IbrahimAliyev20/Fonderra",

    subtitle: "The Investment Bridge for Startups & Investors",
    longDescription:
      "This project is a full-featured FinTech platform (Fondera) designed to bridge the gap between innovative startups seeking funding and investors looking for promising opportunities. The platform consists of two main components: a public-facing website to showcase featured startups and attract new users, and a secure, comprehensive user dashboard for registered members. After registration, users gain access to a powerful control panel where they can submit their own startup projects, browse and invest in other ventures, manage their portfolio, track financial performance, and communicate with other users. The ultimate goal is to democratize startup funding by creating a transparent, accessible, and efficient online ecosystem for both entrepreneurs and investors.",
    gallery: ["/images/fondera1.png", "/images/fondera2.png"],
    client: "Markup",
    duration: "In Progress",
    team: "1 developer, 1 designer",

    challenges: [
      "Presenting complex financial and portfolio data in a clear and interactive way using charts.",
      "Building a secure, user-friendly, multi-step form for detailed startup project submissions.",
      "Managing a large amount of interconnected client-side state efficiently for a responsive dashboard experience.",
    ],

    solutions: [
      "Implemented reusable and dynamic chart components with Recharts to effectively visualize financial analytics.",
      "Developed a modular, multi-step form using React Hook Form to ensure a better user experience and robust validation.",
      "Leveraged Tanstack Query for all server-state management, handling caching and data synchronization to keep the UI fast.",
    ],

    technologies: [
      {
        name: "Next.js",
        description:
          "A React framework for building high-performance and SEO-friendly web applications with SSR.",
      },
      {
        name: "TypeScript",
        description:
          "A superset of JavaScript that adds static typing, reducing errors and increasing code stability.",
      },
      {
        name: "TailwindCSS",
        description:
          "A utility-first CSS framework for building fast and customizable modern interfaces.",
      },
      {
        name: "Tanstack Query",
        description:
          "A library for managing server state, efficiently handling data fetching, caching, and synchronization.",
      },
      {
        name: "Shadcn/ui",
        description:
          "A collection of reusable components built on Radix UI and Tailwind CSS for easy project integration.",
      },
      {
        name: "Recharts",
        description:
          "A composable charting library built with React and D3, used to visualize financial performance and portfolio data.",
      },
      {
        name: "React Hook Form",
        description:
          "A library for creating performant and flexible forms, simplifying state management and validation.",
      },
      {
        name: "Tanstack Table",
        description:
          "A headless library for building powerful data tables to display startup listings and investment data.",
      },
      {
        name: "React Dropzone",
        description:
          "A library for creating a file upload interface with drag-and-drop functionality for startup documents.",
      },
      {
        name: "Axios",
        description:
          "A promise-based HTTP client for making reliable API requests to fetch and submit platform data.",
      },
      {
        name: "React Day Picker",
        description:
          "A flexible and customizable date picker component for selecting dates in forms and filters.",
      },
    ],

    results: [
      "The core dashboard functionality, including user registration and project submission, has been successfully developed.",
      "A live, functional prototype is available, allowing for early-stage user testing and feedback collection.",
      "Currently focusing on refining the UI and integrating advanced analytics for the official launch.",
    ],
  },
  {
    id: "consaltex-webapp",
    title: "Consaltex",
    shortDescription:
      "A corporate website for Consaltex, a consulting company specializing in pharmaceutical product registration and healthcare compliance in Azerbaijan.",
    image: "/images/consaltex.png",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "i18n"],
    date: "2025",
    status: "Completed",
    liveUrl: "https://consaltex-markup.vercel.app/en",
    githubUrl: "https://github.com/IbrahimAliyev20/Consaltex",

    subtitle: "Corporate Website for a Pharmaceutical Consulting Agency",
    longDescription:
      "The project was to create a professional and authoritative corporate website for Consaltex, a specialized consulting firm focused on the pharmaceutical and healthcare sectors. The primary goal was to build a strong digital presence to establish Consaltex as a credible expert for international and local companies. Key objectives included clearly articulating their complex services—such as drug registration and regulatory compliance—to a B2B audience, and designing the site to function as a primary tool for lead generation. The final website reflects the company's core values of a scientific approach and strategic solutions through a clean, professional, and trustworthy design.",
    gallery: ["/images/consaltex1.png", "/images/consaltex2.png"],
    client: "Consaltex",
    duration: "1 week",
    team: "1 developer, 1 designer",

    challenges: [
      "Conveying the authority and credibility required for a specialized pharmaceutical consulting firm.",
      "Structuring complex, regulated information in a clear and easily digestible manner for a B2B audience.",
      "Implementing a seamless multilingual experience to cater to both local and international clients.",
    ],

    solutions: [
      "A minimalist, clean design was implemented using Shadcn/ui to establish a sense of trust and expertise.",
      "A logical content architecture was designed with clear navigation to effectively communicate the company's services.",
      "The `next-i18next` library was integrated to efficiently manage translations and provide a smooth user experience.",
    ],

    technologies: [
      {
        name: "Next.js",
        description:
          "A React framework utilizing Static Site Generation (SSG) for high performance and SEO.",
      },
      {
        name: "TypeScript",
        description:
          "Statically typed JavaScript that reduces errors and increases project stability.",
      },
      {
        name: "TailwindCSS",
        description:
          "A utility-first CSS framework used for building fast and customizable designs.",
      },
      {
        name: "Shadcn/ui",
        description:
          "A collection of components used to create a clean and professional user interface.",
      },
      {
        name: "next-i18next",
        description:
          "An internationalization library for Next.js, used to provide the site in multiple languages.",
      },
    ],

    results: [
      "Delivered a modern corporate website that enhances Consaltex's brand credibility in the consulting market.",
      "The website now serves as an effective channel for generating new business leads through clear calls-to-action.",
      "Full multilingual support makes the company accessible to a wider international and local audience.",
    ],
  },
  {
    id: "gcg-webapp",
    title: "Green Caspian",
    shortDescription:
      "A clean and professional corporate website for a company in the maritime industry, designed to build a strong online presence.",
    image: "/images/gcg.png",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui"],
    date: "2025",
    status: "Completed",
    liveUrl: "https://greencaspian.global/",
    githubUrl: "https://github.com/IbrahimAliyev20/gcg-sayt",

    subtitle: "A Minimalist Corporate Website for the Maritime Sector",
    longDescription:
      "This project involved the creation of a clean and professional corporate website for a company in the maritime industry, with a strong focus on simplicity and clarity. The main objective was to establish an effective online presence that clearly communicates the company's identity, values, and services to a B2B audience. The website was built with a minimalist design and a standard informational structure, serving as a digital business card to provide essential information to potential clients and stakeholders in a direct and accessible way.",
    gallery: ["/images/gcg1.png", "/images/gcg2.png"],
    client: "Green Caspian",
    duration: "3 days",
    team: "1 developer, 1 designer",

    challenges: [
      "Delivering a complete and professional website within a very tight 3-day deadline.",
      "Ensuring a high-quality, responsive final product despite the fast development pace.",
    ],

    solutions: [
      "Leveraged the speed of Next.js and ready-to-use components from Shadcn/ui to accelerate development.",
      "Prioritized core features and a minimalist design to meet the deadline without sacrificing quality.",
    ],

    technologies: [
      {
        name: "Next.js",
        description:
          "A React framework utilizing Static Site Generation (SSG) for high performance and SEO.",
      },
      {
        name: "TypeScript",
        description:
          "Statically typed JavaScript that reduces errors in code and increases project stability.",
      },
      {
        name: "TailwindCSS",
        description:
          "A utility-first CSS framework used for building fast and customizable designs.",
      },
      {
        name: "Shadcn/ui",
        description:
          "A collection of components used to create a clean and professional user interface.",
      },
    ],

    results: [
      "A fully functional corporate website was successfully launched in just three days, meeting the client's urgent need.",
      "The client quickly established a clean and professional online presence to serve as their digital business card.",
    ],
  },
  {
    id: "ecosoft-b2b",
    title: "Ecosoft",
    shortDescription:
      "A professional product catalog website for Ecosoft, an international manufacturer of water purification systems, designed to showcase their product line and generate sales leads.",
    image: "/images/ecosoft.png",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "i18n"],
    date: "2025",
    status: "Completed",
    liveUrl: "https://ecosoft-markup.vercel.app/az",
    githubUrl: "https://github.com/IbrahimAliyev20/Ecosoft",

    subtitle: "A Modern E-catalog & Lead Generation Website",
    longDescription:
      "This project involved building a professional and modern product catalog website for Ecosoft, a leading international company in water purification solutions. The primary goal was to create a detailed and user-friendly digital showroom for their extensive product line. Key objectives included building customer trust through comprehensive product pages, highlighting value propositions like free delivery and secure payment, and strategically driving sales through lead generation. Instead of a direct purchase system, the site encourages users to connect via WhatsApp or contact forms for personalized offers, effectively bridging the gap between product discovery and sales consultation.",
    gallery: ["/images/ecosoft1.png", "/images/ecosoft2.png"],
    client: "Ecosoft",
    duration: "1 week",
    team: "1 developer, 1 designer",

    challenges: [
      "Designing a user journey that effectively converts product interest into sales leads via contact forms and WhatsApp.",
      "Building customer trust for technical products through professional design and clear value propositions.",
    ],

    solutions: [
      "Strategically placed Calls-to-Action and direct contact links were implemented to simplify the inquiry process.",
      "A clean, informative UI with detailed product pages was built to foster credibility and user confidence.",
    ],

    technologies: [
      {
        name: "Next.js",
        description:
          "A React framework utilizing Static Site Generation (SSG) for high performance and SEO.",
      },
      {
        name: "TypeScript",
        description:
          "Statically typed JavaScript that reduces errors in code and increases project stability.",
      },
      {
        name: "TailwindCSS",
        description:
          "A utility-first CSS framework used for building fast and customizable designs.",
      },
      {
        name: "Shadcn/ui",
        description:
          "A collection of components used to create a clean and professional user interface.",
      },
      {
        name: "next-i18next",
        description:
          "An internationalization (i18n) library for Next.js, used to provide the site in multiple languages.",
      },
    ],

    results: [
      "Ecosoft now has a modern digital showroom that professionally showcases its product range.",
      "The website successfully functions as a lead generation tool, connecting potential customers directly with the sales team.",
    ],
  },
  {
    id: "fitvibe-webapp",
    title: "FitVibe",
    shortDescription:
      "A clean and serene multi-language website for Fit Vibe, a brand focused on wellness, yoga, and mental harmony.",
    image: "/images/fitvibe.png",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "i18n"],
    date: "2025",
    status: "Completed",
    liveUrl: "https://fitvibe-markup.vercel.app/en",
    githubUrl: "https://github.com/IbrahimAliyev20/Retreat",

    subtitle: "Multi-Language Website for a Fitness & Wellness Studio",
    longDescription:
      "This project involved creating a serene and professional multi-language website for 'Fit Vibe,' a brand dedicated to wellness and inner harmony. The primary goal was to design a digital space that reflects the brand's calming ethos through a minimalist design and a soothing color palette. Key objectives included clearly presenting their services and unique 'wellness marathons,' engaging the community through a blog, and catering to a diverse audience with support for three languages. The result is an intuitive and aesthetically pleasing website that serves as a tranquil online entry point for the brand, effectively communicating its values and attracting new clients.",
    gallery: ["/images/fitvibe1.png", "/images/fitvibe2.png"],
    client: "FitVibe",
    duration: "15 days",
    team: "2 developers",

    challenges: [
      "Translating the brand's abstract ethos of 'serenity' and 'harmony' into a tangible and calming digital experience.",
      "Organizing diverse content—services, 'marathon' events, and a blog—into an intuitive and engaging layout.",
    ],

    solutions: [
      "A minimalist design system was created using TailwindCSS, focusing on a soothing color palette and ample white space.",
      "A clear information architecture with intuitive navigation was developed to guide users effortlessly through the content.",
    ],

    technologies: [
      {
        name: "Next.js",
        description:
          "A React framework for fast, SEO-friendly, statically generated websites, perfect for content-driven sites.",
      },
      {
        name: "TypeScript",
        description:
          "A superset of JavaScript that adds static typing, ensuring code reliability and easier maintenance.",
      },
      {
        name: "TailwindCSS",
        description:
          "A utility-first CSS framework used to rapidly create the clean, minimalist, and fully responsive design.",
      },
      {
        name: "Shadcn/ui",
        description:
          "A collection of accessible and reusable components used to build a consistent and aesthetically pleasing UI.",
      },
      {
        name: "React Hook Form",
        description:
          "A performant library for managing user input, used for contact and marathon sign-up forms.",
      },
      {
        name: "Embla Carousel",
        description:
          "A lightweight carousel library used for creating interactive sliders for galleries or testimonials.",
      },
      {
        name: "next-i18next",
        description:
          "An internationalization framework implemented to provide the website's content in three different languages.",
      },
      {
        name: "Next.js API Routes",
        description:
          "Used for server-side logic, such as processing submissions from contact and sign-up forms.",
      },
      {
        name: "Git & GitHub",
        description:
          "Standard tools for version control, tracking code changes, and managing the project's source code.",
      },
      {
        name: "Vercel",
        description:
          "An optimal deployment platform for Next.js applications, providing seamless automated builds and global hosting.",
      },
    ],

    results: [
      "Successfully launched a professional website that captures and communicates the brand's core values of wellness and serenity.",
      "The site serves as an effective community hub with a blog and easy sign-ups for wellness events, improving user engagement.",
    ],
  },
];