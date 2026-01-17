interface PortfolioFilter {
  key: string;
  label: string;
}

interface Stat {
  number: string;
  label: string;
}

interface ProjectTechnology {
  name: string;
  description: string;
}

export interface Project {
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
  { key: "E-commerce", label: "E-commerce" },
];

export const stats: Stat[] = [
  { number: "10+", label: "Projects Completed" },
  { number: "1+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
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
    team: "2 frontend developer, 1 backend developer, 1 designer",

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
    team: "2 frontend developers, 1 backend developer, 1 designer",

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
    team: "1 frontend developers,1 backend developer, 1 designer",

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
    team: "1 frontend developers,1 backend developer, 1 designer",

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
    team: "1 frontend developers,1 backend developer, 1 designer",

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
    team: "1 frontend developers,1 backend developer, 1 designer",

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
  {
    id: "agrogubre",
    title: "AgroGübrə",
    shortDescription:
      "Online marketplace for certified fertilizers, seeds, and crop protection products in Azerbaijan.",
    image: "/images/agrogubre.png",
    category: "Web App",
    tags: [
          "Next.js",
          "TypeScript",
          "Tanstack Query",
          "i18n",
          "TailwindCSS",
        ],
    date: "2025",
    status: "Completed",
    liveUrl: "https://agrogubre.com",
    githubUrl: "https://github.com/IbrahimAliyev20",

    subtitle: "Your Trusted Online Fertilizer Marketplace in Azerbaijan",
    longDescription:
      "Agrogubre.com is a modern e-commerce platform designed specifically for Azerbaijani farmers and agricultural businesses, serving as a comprehensive online marketplace for high-quality agricultural inputs. The primary goal was to address the challenges faced by local farmers in accessing certified, eco-friendly fertilizers, seeds, and crop protection products efficiently and affordably.\n\nThe platform brings together a wide range of certified products — including mineral and organic fertilizers, high-germination seeds, plant protection agents, biostimulants, disinfectants, and pheromone traps — all focused on improving soil health, increasing crop yields, and supporting sustainable farming practices while preserving natural balance.\n\nUsers can easily browse categorized products, place orders online, and benefit from professional agronomic consulting services to select the right solutions for their specific crops and soil conditions. By emphasizing quality, ecology, and measurable results, Agrogubre.com helps farmers reduce costs, minimize resource waste, and achieve higher productivity in a transparent and convenient digital environment.\n\nUltimately, the platform acts as a reliable digital partner for the Azerbaijani agricultural community, connecting producers with premium agro supplies and expert knowledge to foster stronger, more sustainable farming practices across the country.",
    gallery: [
          "/images/agrogubre1.png",
          "/images/agrogubre2.png",
        ],
    client: "AgroGübrə",
    duration: "2 week",
    team: "1 frontend developers,1 backend developer, 1 designer",

    challenges: [
          "Handling a large and diverse product catalog (fertilizers, seeds, plant protection products, biostimulants, traps) with accurate categorization, detailed specs, compatibility info, and regulatory compliance for certified agrochemicals in Azerbaijan.",
          "Ensuring reliable delivery and logistics to remote rural areas across the country, where infrastructure is limited and many farmers are in hard-to-reach regions.",
          "Building trust with traditional farmers who prefer in-person purchases, dealing with low digital literacy, cash-preferred payments, and skepticism toward online agro-product quality.",
          "Implementing secure and user-friendly product selection/advice system (e.g., soil/crop-specific recommendations) while integrating professional agronomic consulting features.",
          "Managing seasonal demand spikes, inventory accuracy for perishable/expiry-sensitive items (like certain stimulants or seeds), and real-time stock synchronization with suppliers.",
        ],

    solutions: [
          "Built a scalable, categorized product catalog with advanced filters and detailed specs to simplify browsing of diverse certified agro products.",
          "Created an accessible, intuitive UI/UX tailored for Azerbaijani farmers, with multilingual support and easy consulting request integration.",
          "Added trust-building features like certification badges, agronomic guides, and secure forms to overcome skepticism toward online purchases.",
          "Optimized the platform for seasonal usage and rural delivery needs through efficient inventory and order management.",
        ],

        technologies: [
          {
            name: "Next.js",
            description: "React framework used for building a fast, SEO-friendly e-commerce platform with server-side rendering and API routes for product and order management."
          },
          {
            name: "TypeScript",
            description: "Ensures type safety across the entire codebase, reducing bugs in complex features like product filtering, forms, and order processing."
          },
          {
            name: "Tailwind CSS",
            description: "Utility-first CSS framework for creating a clean, responsive, and consistent design that works well on both desktop and mobile devices used by farmers."
          },
          {
            name: "React Hook Form + Zod",
            description: "Powerful combination for building and validating complex forms (product search, order checkout, consulting requests) with end-to-end type safety."
          },
          {
            name: "TanStack Query",
            description: "Manages server-state, caching, and background updates for product listings, filters, stock availability, and order status – essential for a smooth shopping experience."
          },
          {
            name: "Shadcn/ui",
            description: "Collection of reusable, accessible UI components built on Radix UI and Tailwind, used to create a modern and user-friendly interface for all pages."
          },
          {
            name: "Next-Intl",
            description: "Handles internationalization, providing full support for Azerbaijani language across the platform to make it accessible for local farmers."
          },
          {
            name: "Axios",
            description: "Reliable HTTP client for making API calls to fetch products, submit orders, and handle consulting requests securely and efficiently."
          },
          {
            name: "Lucide React",
            description: "Modern icon library integrated for clear, consistent icons throughout the interface (cart, filters, product categories, etc.)."
          }
        ],

        results: [
          "Successfully delivered a centralized digital marketplace connecting farmers with premium agro products, resulting in improved access to quality inputs for hundreds of users across Azerbaijan.",
          "Enabled measurable improvements in farming efficiency through expert consulting and eco-conscious solutions, aligning with national goals for higher yields and sustainable agriculture.",
          "Built a trusted online presence that reduces reliance on traditional supply chains, minimizing costs and environmental impact for the agricultural community."
        ],
  },
  {
    id: "casio",
    title: "Casio Azerbaijan",
    shortDescription:
      "A Next.js-powered demo e-commerce site showcasing Casio watches in Azerbaijani language.",
    image: "/images/casio.png",
    category: "E-commerce",
    tags: [
      "Online Store",
      "Casio Brand",
      "Luxury Watches",
      "Azerbaijan Market",
      "UI/UX Design",
      "Discount System",
      "Local Language"
    ],
    date: "2026",
    status: "In Progress",
    liveUrl: "https://casio-aze.vercel.app/",
    githubUrl: "https://github.com/IbrahimAliyev20",

    subtitle: "Official Casio Online Store for Stylish Watches and Tools in Azerbaijan",
    longDescription:
      "Casio  is a modern, Azerbaijani-language online showcase and e-commerce-style platform built to bring the iconic Casio brand directly to users in Azerbaijan. The main objective was to create an accessible digital presence for Casio's high-performance watches, emphasizing style, durability, and innovation while tailoring the experience to local preferences.\n\nThe site features a clean, responsive design with sections for 'Seçilmiş Məhsullar' (Featured Products) and 'Endirimli Məhsullar' (Discounted Products), highlighting popular models like the BA-110 series (including variants such as BA-110YK-2ADR, BA-110YK-3ADR, and BA-110-1ASDR). It incorporates attractive discount displays (up to 97% off in demo mode), original vs. sale pricing, and intuitive 'Səbətə at' (Add to Cart) functionality to simulate a real shopping flow.\n\nPowered by the memorable tagline 'Sənin Üslubun, Sənin Zamanın' ('Your Style, Your Time'), the platform communicates Casio's core values of reliability, performance, and personal expression. It provides Azerbaijani users with a seamless browsing experience, making premium timepieces more approachable and relevant in the local market.\n\nUltimately, this project serves as a polished demonstration of building a localized brand experience: combining strong visual identity, user-centric design, and e-commerce best practices to connect a global brand like Casio with its Azerbaijani audience.",
    gallery: [
          "/images/casio1.png",
          "/images/casio2.png",
        ],
    client: "Casio Azerbaijan",
    duration: "1 month",
    team: "1 frontend developers,1 backend developer, 1 designer",

    challenges: [
      "Full Azerbaijani localization of a global brand's product showcase while preserving Casio's premium and stylish identity.",
      "Building a visually appealing, responsive demo e-commerce interface with dynamic discounts and product highlighting.",
      "Simulating realistic shopping features (pricing, cart, stock) in a frontend-only environment without real backend integration.",
      "Optimizing image-heavy pages for fast performance and smooth user experience on various devices."
    ],

    solutions: [
      "Achieved complete Azerbaijani language support and cultural adaptation using Next-Intl for a seamless local user experience.",
      "Built a highly responsive, visually appealing product showcase with Tailwind CSS and Shadcn/ui, optimized for both desktop and mobile.",
      "Simulated realistic e-commerce functionality (dynamic discounts, pricing, cart) purely on the frontend to create an engaging demo without backend dependency.",
      "Ensured fast performance and premium brand feel through image optimization, clean design, and careful UI balance."
    ],
    technologies: [
      {
        name: "Next.js",
        description: "React framework used for building a fast, SEO-optimized product showcase with server-side rendering and static generation for better performance."
      },
      {
        name: "TypeScript",
        description: "Provides type safety throughout the application, ensuring reliable handling of product data, variants, pricing, and UI states."
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework that enabled rapid development of a clean, responsive, and brand-consistent design with custom color schemes."
      },
      {
        name: "Shadcn/ui",
        description: "Collection of reusable, accessible components (buttons, cards, badges) built on Radix UI and Tailwind, used for modern and consistent UI elements."
      },
      {
        name: "Next-Intl",
        description: "Powerful internationalization library that handled full Azerbaijani language support, including translations for all UI strings and product information."
      },
      {
        name: "React Hook Form",
        description: "Used for building and managing interactive forms (e.g., simulated checkout or contact), with easy validation and user-friendly experience."
      },
      {
        name: "Zustand",
        description: "Lightweight state management solution for handling cart simulation, selected products, and dynamic UI states without heavy boilerplate."
      },
      {
        name: "Next.js Image",
        description: "Optimized image handling with automatic resizing, lazy loading, and WebP format support for high-quality product photos with minimal load times."
      },
      {
        name: "Vercel",
        description: "Deployment platform that ensured fast global CDN delivery, automatic previews, and easy CI/CD for the Azerbaijani-focused showcase."
      }
    ],

    results: [
      "Delivered a polished Azerbaijani Casio product showcase with full language support, dynamic discount displays, and responsive design optimized for local users.",
      "Successfully simulated an engaging shopping experience that aligns with Casio's brand identity of style, durability, and innovation in the Azerbaijan market.",
    ],
  },

  {
    id: "designed-shalala",
    title: "Designed Shalala",
    shortDescription:
      "Elegant e-commerce experience for premium handmade gift compositions and bouquets, tailored for Azerbaijani users with custom options.",
    image: "/images/shalala.png",
    category: "E-commerce",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Multilingual",
      "E-commerce",
      "Responsive Design",
      "Custom Forms"
    ],
    date: "2025",
    status: "Completed",
    liveUrl: "https://shalala-ten.vercel.app",
    githubUrl: "https://github.com/IbrahimAliyev20",

    subtitle: "A Digital Showcase for Artisanal Gifts – Where Every Detail Tells a Story",
    longDescription:
      "Designed Shalala  is a beautifully crafted, Azerbaijani-language digital platform showcasing 'Designed Shalala - Zərif Toxunuşlar', a handmade gift business specializing in elegant compositions, trays (xonça), and flower bouquets. The primary goal was to create an inviting online presence that captures the essence of artisanal craftsmanship, where every product is made with love to make special moments unforgettable.\n\nBuilt around the core philosophy 'Hər Detalda Bir Hekayə' (A Story in Every Detail), the site emphasizes that the most meaningful gifts come from careful, handmade creation. It features dedicated sections for products, a comprehensive FAQ addressing common questions (order process, handmade nature, custom designs, advance booking), and a prominent invitation for personalization: 'Xəyalınızdakı Dizaynı Birlikdə Yaradaq' (Let's Create Your Dream Design Together), allowing users to share ideas for unique trays, bouquets, or gift compositions.\n\nThe platform includes quality highlights ('Keyfiyyətimiz Rəqəmlərdə' – Our Quality in Numbers), responsive design optimized for Azerbaijani users, and intuitive navigation to explore categories like hədiyyə kompozisiyaları, xonça, and gül buketləri. It serves as a complete digital hub that bridges traditional handmade artistry with modern online accessibility, helping artisans present their delicate work to customers seeking emotional and personalized gifts.\n\nUltimately, this project demonstrates the development of a heartfelt, localized e-commerce showcase: combining emotional storytelling, cultural relevance, user-friendly features, and strong visual identity to elevate a small business's presence in the Azerbaijani market.",
    gallery: [
          "/images/shalala1.png",
          "/images/shalala2.png",
        ],
    client: "Shalal Designed",
    duration: "2 week",
    team: "1 frontend developers",

    challenges: [
      "Showcasing visually rich handmade products (xonça, kompozisiyalar, buketlər) with optimal performance and responsive gallery design.",
      "Supporting custom/personalized orders through intuitive contact and idea-sharing flows in Azerbaijani.",
      "Maintaining a premium, emotional brand feel ('Zərif Toxunuşlar' və 'Hər Detalda Bir Hekayə') in a localized, user-friendly interface.",
      "Integrating FAQ, quality stats, and product sections effectively despite potential static/demo constraints."
    ],

    solutions: [
      "Optimized image-heavy artisanal product showcase with Next.js Image for fast loading and responsive galleries of xonça, kompozisiyalar, and buketlər.",
      "Created seamless custom order invitation ('Xəyalınızdakı Dizaynı Birlikdə Yaradaq') using accessible forms and clear CTAs to encourage personalized requests.",
      "Preserved emotional, premium brand feel ('Hər Detalda Bir Hekayə') with Tailwind CSS, elegant design patterns, and full Azerbaijani localization via Next-Intl.",
      "Structured static content (FAQ, quality stats) modularly for a polished look and easy future expansion to dynamic features."
    ],

    technologies: [
      {
        name: "Next.js",
        description: "Fast, SEO-optimized framework for the entire platform."
      },
      {
        name: "TypeScript",
        description: "Type-safe codebase for reliable development."
      },
      {
        name: "Tailwind CSS + Shadcn/ui",
        description: "Elegant, responsive, and brand-consistent UI."
      },
      {
        name: "Next-Intl",
        description: "Full Azerbaijani language support."
      },
      {
        name: "React Hook Form & Zod",
        description: "Robust custom order and contact forms."
      },
      {
        name: "Next.js Image",
        description: "Optimized handling of high-quality product images."
      }
    ],

    results: [
      "Successfully launched a heartfelt, Azerbaijani-language digital showcase for 'Zərif Toxunuşlar', effectively presenting artisanal handmade gift compositions, trays (xonça), and bouquets with a strong emphasis on emotional storytelling and premium craftsmanship.",
      "Delivered an inviting and user-centric platform that seamlessly integrates custom design requests ('Xəyalınızdakı Dizaynı Birlikdə Yaradaq'), comprehensive FAQ, and quality highlights, making personalized gifting accessible and meaningful for Azerbaijani customers.",
      "Demonstrated expertise in creating a localized, visually appealing e-commerce-style experience that preserves the delicate brand identity ('Hər Detalda Bir Hekayə') while optimizing performance for image-rich content, helping elevate a small artisanal business's online presence.",
    ],
  },
  {
    id: "shoplink",
    title: "Shoplink",
    shortDescription:
      "Multi-vendor e-commerce platform enabling Azerbaijani sellers to create and manage their own online stores with integrated dashboards.",
    image: "/images/shoplink.png",
    category: "Dashboard",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Multi-Vendor E-Commerce",
      "Admin Panel",
      "Seller Dashboard",
      "Full-Stack Development",
      "Marketplace Platform",
      "Azerbaijani Market"
    ],
    date: "2025",
    status: "Completed",
    liveUrl: "https://shoplink.az",
    githubUrl: "https://github.com/IbrahimAliyev20",

    subtitle: "Multi-Vendor E-Commerce Platform: Empowering Azerbaijani Sellers to Build & Manage Their Own Online Stores",
    longDescription:
      "Shoplink is a comprehensive multi-vendor e-commerce platform developed to empower Azerbaijani entrepreneurs, small businesses, and social media sellers to establish and manage their own professional online stores without technical expertise. The core objective was to create an accessible, all-in-one ecosystem that simplifies the transition from offline or social selling to full-fledged digital commerce in the local market.\n\nThe platform allows sellers to create a personalized online shop in just one click, complete with custom branding, product listings, inventory and stock management, order tracking, and sales optimization tools. Vendors receive their own subdomain (e.g., mystore.shoplink.az), enabling independent yet interconnected operations within the marketplace. Key features include seamless integration with popular local channels like Instagram for product syncing, WhatsApp for direct customer communication, and cash-on-delivery or WhatsApp-based payments – perfectly tailored to Azerbaijani consumer preferences.\n\nBuilt with a unified admin and vendor dashboard, the system provides robust controls for both platform owners (global moderation, analytics) and individual sellers (product upload, stock monitoring, performance insights). It emphasizes reliability with 24/7 technical support, secure management, and a 1-week free trial period to encourage adoption.\n\nUltimately, Shoplink.az serves as a powerful digital infrastructure that removes barriers to online selling in Azerbaijan, helping users turn ideas into sales ('İDEYANI GƏTİR, BİZ SATIŞA ÇEVİRƏK!') while demonstrating advanced multi-tenant architecture, user-centric design, and localization for a growing e-commerce landscape.",
    gallery: [
          "/images/shoplink1.png",
          "/images/shoplink2.png",
        ],
    client: "Markup",
    duration: "2 months",
    team: " 2 frontend developers, 1 backend developer, 1 designer",

    challenges: [
      "Implementing a robust multi-tenant architecture where hundreds of independent sellers can create and manage their own stores (with custom subdomains, branding, and isolated data) while maintaining global admin controls, security isolation, and performance under varying loads.",
      "Handling complex seller workflows including product upload, inventory/stock synchronization, real-time order management, and analytics dashboards for both individual vendors and platform admins, all in a unified yet role-based system.",
      "Integrating local Azerbaijani preferences such as WhatsApp-based communication/orders, cash-on-delivery payments, and Instagram product syncing, while dealing with limited reliable digital payment infrastructure and user trust issues in e-commerce.",
      "Ensuring high security, data privacy, and compliance (e.g., preventing cross-vendor data leaks, fraud in vendor onboarding, IP protection) in a multi-vendor environment with potentially untrusted sellers, especially in a market with weak IPR enforcement.",
      "Optimizing for scalability and performance: managing seasonal spikes, large product catalogs from multiple vendors, fast loading for mobile users (common in Azerbaijan), and seamless experience despite varying internet quality in regions.",
      "Overcoming low digital adoption among small/local sellers by creating an extremely simple onboarding ('one-click store creation') and user-friendly interface in Azerbaijani, while providing 24/7 support simulation in a complex full-stack system."
    ],
    solutions: [
      "Developed a warm, emotionally resonant UI/UX using Tailwind CSS and Shadcn/ui components, with soft color palettes, elegant typography, and high-quality product photography to reflect the handmade, artisanal nature of each gift composition and bouquet.",
      "Implemented a fully Azerbaijani-localized experience with Next-Intl, including natural translations for all UI elements, product descriptions, FAQ section, and custom order forms to make the platform feel native and welcoming for local users.",
      "Created an intuitive custom order flow allowing users to describe their dream design ('Xəyalınızdakı Dizaynı Birlikdə Yaradaq'), with text area inputs, file upload for reference images, and seamless form validation using React Hook Form + Zod.",
      "Structured a clean product showcase with categorized sections (hədiyyə kompozisiyaları, xonça, gül buketləri), responsive grid layouts, and hover effects to highlight details, making it easy for customers to explore and get inspired.",
      "Added trust-building features such as a detailed FAQ page addressing handmade production time, advance booking, quality guarantees, and a prominent contact/consultation section to reduce customer hesitation and support the personal, story-driven sales process."
    ],

    technologies: [
      {
        name: "Next.js",
        description: "React framework for building a fast, SEO-optimized showcase with server-side rendering and static generation for product and about pages.",
      },
      {
        name: "TypeScript",
        description: "Type-safe codebase for reliable handling of custom order data, forms, and multilingual content.",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS for creating a soft, elegant, and responsive design that matches the delicate handmade aesthetic.",
      },
      {
        name: "Shadcn/ui",
        description: "Reusable accessible components for cards, buttons, accordions (FAQ), and forms, ensuring consistent modern UI.",
      },
      {
        name: "Next-Intl",
        description: "Complete support for Azerbaijani language across all sections, slogans, and user-facing text.",
      },
      {
        name: "React Hook Form + Zod",
        description: "Powerful form management and validation for custom design requests, contact forms, and potential file uploads.",
      },
      {
        name: "Framer Motion",
        description: "Subtle animations and transitions to enhance the emotional, story-driven feel of the site (hover effects, section reveals).",
      },
      {
        name: "Next.js Image",
        description: "Optimized handling of high-quality product photos with lazy loading and automatic format conversion.",
      },
      {
        name: "Vercel",
        description: "Deployment platform providing fast global delivery, automatic previews, and easy hosting on shalala-ten.vercel.app subdomain.",
      }
    ],

    results: [
      "Successfully launched a visually captivating and fully Azerbaijani-localized digital showcase for 'Zərif Toxunuşlar', transforming a handmade gift business into an inviting online presence that emphasizes emotional storytelling and artisanal craftsmanship.",
      "Delivered an elegant, user-centric platform with seamless custom order functionality, detailed FAQ, quality highlights, and responsive design, making it easy for customers to explore, get inspired, and request personalized gift compositions, trays, and bouquets.",
      "Demonstrated strong ability to blend emotional branding ('Hər Detalda Bir Hekayə') with modern web development practices, creating a heartfelt digital hub that supports local artisans and enhances accessibility for Azerbaijani users seeking meaningful, handmade gifts."
    ],
  },

  {
    id: "glass-house",
    title: "Glass House",
    shortDescription:
      "Corporate website for Glass House MMC, Azerbaijan's leading glass processing manufacturer since 2000.",
    image: "/images/glasshouse.png",
    category: "Web App",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Multilingual",
      "Corporate",
      "Product Catalog",
      "SEO Optimized"
    ],
    date: "2025",
    status: "Completed",
    liveUrl: "https://glasshouse.az",
    githubUrl: "https://github.com/IbrahimAliyev20",

    subtitle: "Corporate Web Platform for Azerbaijan's Premier Glass Processing & Manufacturing Company",
    longDescription:
      "Glass House is a modern corporate website developed for Glass House MMC, Azerbaijan's leading glass processing and manufacturing company established in 2000. The platform serves as a comprehensive digital showcase for the company's expertise in high-performance glass solutions, targeting the construction, architecture, and security sectors across Azerbaijan.\n\nThe site provides detailed information on a wide range of specialized products, including tempered glass (with enhanced impact, bending, and thermal resistance), laminated glass (with various PVB interlayers for acoustic and solar control), bulletproof glass (certified for specific ballistic threats), multifunctional insulated glass units (featuring LOW-E coatings and argon filling for energy efficiency), and painted/enamel glass for functional and decorative applications. It highlights the use of advanced international technologies and partnerships with global leaders such as Guardian Glass (USA), Pilkington (UK), AGC (Japan), Saint-Gobain (France), Şişecam (Turkey), and local Azerfloat.\n\nKey sections include an overview of the company's history and advantages (modern equipment, professional team, precision processing), a full product catalog with technical specifications, an impressive portfolio of realized projects (e.g., Jumeirah Bilgah Beach Hotel, Central Botanical Garden, various ASAN centers, Olympic complexes, and business plazas), partner logos, and a contact form for inquiries. The platform supports bilingual presentation (Azerbaijani and English) to reach both local and international audiences.\n\nUltimately, this project demonstrates the creation of a structured, informative corporate site that effectively communicates technical excellence, industry leadership, and real-world applications, helping Glass House MMC strengthen its position as the address of quality and trust in modern architecture and construction in Azerbaijan.",
    gallery: [
          "/images/glasshouse1.png",
          "/images/glasshouse2.png",
        ],
    client: "Glass House",
    duration: "1 months",
    team: "2 frontend developers, 1 backend developer, 1 designer",

    challenges: [
      "Presenting highly technical product specifications (tempered, laminated, bulletproof, multifunctional glass with PVB interlayers, LOW-E coatings, argon filling, ballistic certifications) in a clear, accessible, yet professional manner for both architects and end-clients.",
      "Organizing and displaying an extensive portfolio of realized projects (hotels, botanical gardens, ASAN centers, business plazas, Olympic complexes) with high-quality visuals, while maintaining fast loading times and responsive design across devices.",
      "Balancing bilingual content (Azerbaijani and English) with consistent layout, accurate translations of technical terms, and cultural appropriateness for international partners and local construction sector.",
      "Ensuring visual hierarchy and trust-building elements (partner logos from Guardian, Pilkington, AGC, Saint-Gobain, Şişecam; quality highlights since 2000) without overwhelming the clean corporate aesthetic.",
      "Handling large image assets of glass samples, production process, and completed installations while optimizing performance, SEO, and accessibility on a content-heavy corporate site."
    ],

    solutions: [
      "Organized technical product information with clear visuals, tables, and simplified descriptions to make specialized glass solutions understandable for professional audiences.",
      "Built a high-performance project portfolio section with responsive galleries and optimized images to effectively display prestigious architectural realizations.",
      "Integrated full bilingual support (Azerbaijani & English) using Next-Intl, ensuring accurate technical terminology and consistent design across languages.",
      "Created a trustworthy corporate layout with strategic partner integrations, quality highlights, and fast-loading media to strengthen brand credibility."
    ],

    technologies: [
      {
        name: "Next.js + TypeScript",
        description: "Modern, performant, and type-safe foundation for corporate web application.",
      },
      {
        name: "Tailwind CSS + Shadcn/ui",
        description: "Clean, responsive, and professional UI design system.",
      },
      {
        name: "Next-Intl",
        description: "Full bilingual (Azerbaijani/English) support.",
      },
      {
        name: "Next.js Image",
        description: "Optimized handling of high-resolution product and project images.",
      },
      {
        name: "Vercel",
        description: "Fast deployment and hosting.",
      }
    ],
    results: [
      "Built and deployed a complete localized online showcase for premium handmade gift compositions, trays, and bouquets in Azerbaijan.",
      "Empowered the brand with a modern digital presence that highlights custom designs, emotional value, and artisan quality through intuitive UI and strong visual storytelling.",
    ],
  },

  {
    id: "seed-academy",
    title: "Seed Academy",
    shortDescription:
      "A modern educational platform in Azerbaijan offering practical training in technology, design, and programming, empowering youth with in-demand skills and career support.",
    image: "/images/seedacademy.png",
    category: "Web App",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GSAP / AOS Animations", "Education Platform"],
    date: "2025",
    status: "Completed",
    liveUrl: "https://seededu.az",
    githubUrl: "https://github.com/IbrahimAliyev20",
  
    subtitle: "Building the Future of Tech Talent – One Practical Step at a Time",
  
    longDescription:
      "Seed Academy is a forward-thinking educational platform in Azerbaijan dedicated to equipping young people and career changers with high-demand skills in creative and technical fields. The main goal is to deliver practical, industry-relevant training in areas such as Graphic Design, Python Programming, iOS Development, Artificial Intelligence Fundamentals, Robotics, Arduino, and Web Programming.\n\nBuilt with classic web technologies (HTML, CSS, JavaScript), the site stands out with smooth scroll-triggered animations, interactive elements, and a clean, motivational design. It offers free trial lessons, scholarship programs (including special support for women in tech), personalized mentorship, hands-on labs, graduation projects, and a dedicated career center to help students transition into real jobs. The platform emphasizes accessibility, motivation, and real-world application to inspire the next generation of tech professionals.",
  
    gallery: [
      "/images/seedacademy1.png",
      "/images/seedacademy2.png",
    ],
  
    client: "Seed Academy",
    duration: "3 weeks",
    team: "2 frontend developer,1 backend developer, 1 designer",
  
    challenges: [
      "Creating an engaging, modern, and highly interactive experience without modern frameworks like React or Next.js",
      "Presenting a wide variety of technical courses in a clear, visually appealing, and motivational way",
      "Achieving smooth performance and fluid animations across desktop and mobile devices",
      "Balancing a professional yet inspiring tone to build trust and excitement among young learners"
    ],
  
    solutions: [
      "Utilized vanilla JavaScript combined with animation libraries (likely AOS or GSAP) to deliver rich scroll-based and hover effects",
      "Implemented a modular, responsive CSS structure with flexible grids to ensure perfect display on all devices",
      "Designed attention-grabbing interactive elements, course cards, testimonials, and strong CTAs to increase user engagement",
      "Integrated student success stories, mentor highlights, and clear value propositions to build credibility and motivation"
    ],
  
    technologies: [
      {
        name: "HTML5",
        description: "Semantic and accessible structure as the foundation of the site"
      },
      {
        name: "CSS3",
        description: "Modern responsive layouts, custom animations, and visual styling"
      },
      {
        name: "JavaScript (Vanilla)",
        description: "Interactive features, form handling, and dynamic behavior without frameworks"
      },
      {
        name: "AOS / GSAP",
        description: "Scroll-triggered animations and smooth transitions for enhanced user experience"
      },
      {
        name: "Responsive Design",
        description: "Fully mobile-friendly layout optimized for all screen sizes"
      }
    ],
  
    results: [
      "Delivered a modern, premium-feeling education platform using only classic web technologies",
      "Created a highly motivational and professional online presence that resonates with young people in Azerbaijan",
      "Established an effective lead-generation system through trial lesson sign-ups and scholarship registrations",
      "Achieved excellent mobile performance and user satisfaction with smooth animations and intuitive navigation"
    ]
  },
  {
    id: "markup-agency", 
    title: "Markup Agency",
    shortDescription:
      "The official portfolio website of Markup Agency – a modern, animated showcase of our design & development services, built to attract startups and established businesses in Azerbaijan.",
    image: "/images/markupagency.png", // add your hero / main screenshot here
    category: "Web App",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Framer Motion", "React Bits", "Animated UI", "Agency Portfolio"],
    date: "2025",
    status: "Completed",
    liveUrl: "https://markup-agency-v2.vercel.app",
    githubUrl: "https://github.com/IbrahimAliyev20",
  
    subtitle: "Where Creativity Meets Cutting-Edge Technology – Our Digital Home",
  
    longDescription:
      "Markup Agency v2 is the redesigned and upgraded official website of our digital agency, serving as a powerful portfolio and lead-generation tool. The primary goal was to create a visually stunning, highly interactive, and conversion-focused online presence that reflects our expertise in UI/UX design, web development, branding, and technical solutions.\n\nBuilt entirely with Next.js 16+ and TypeScript, the site features buttery-smooth animations, elegant component design, and a modern minimalist aesthetic. It highlights our core services (UI/UX Design, Custom Web Development, Logo & Branding, Technical Support), showcases our unique approach (creativity, strategy, innovation, customer focus), and presents key metrics and results. The platform is optimized for performance, SEO, and multilingual readiness, making it an ideal digital business card for collaborating with early-stage startups and successful companies in Azerbaijan and beyond.",
  
    gallery: [
      "/images/markupagency1.png",
      "/images/markupagency2.png",
    ],
  
    client: "Markup Agency",
    duration: "1 month",
    team: "2 frontend developers, 1 backend developer, 1 designer",
  
    challenges: [
      "Creating a premium, high-end agency feel with advanced animations and interactions without sacrificing performance",
      "Balancing beautiful visual storytelling with clear information architecture for services, results, and contact conversion",
      "Implementing reusable, accessible, and customizable UI components while keeping the codebase clean and maintainable",
      "Showcasing the agency's capabilities through the website itself (meta-portfolio approach)"
    ],
  
    solutions: [
      "Leveraged Framer Motion and React Bits for smooth scroll-triggered animations, page transitions, and micro-interactions",
      "Built the entire UI with Shadcn/ui + Tailwind CSS for consistent, modern, and highly customizable components",
      "Used Next.js App Router, TypeScript, and server components for optimal performance, SEO, and developer experience",
      "Designed a motivational hero section, clear service cards, results counters, and strong CTAs to drive inquiries"
    ],
  
    technologies: [
      {
        name: "Next.js 16+",
        description: "App Router, Server Components, and static generation for blazing-fast performance and SEO"
      },
      {
        name: "TypeScript",
        description: "Full type safety across the codebase for scalable and error-free development"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling for rapid, responsive, and consistent design"
      },
      {
        name: "Shadcn/ui",
        description: "Beautiful, accessible, and customizable UI components built on Radix UI"
      },
      {
        name: "Framer Motion",
        description: "Powerful animation library for scroll effects, transitions, and interactive elements"
      },
      {
        name: "React Bits",
        description: "Additional high-quality animated UI components and utilities"
      },
      {
        name: "Next.js Image",
        description: "Optimized image loading with automatic format conversion and lazy loading"
      }
    ],
  
    results: [
      "Created a stunning, animated portfolio site that positions Markup Agency as a premium, modern digital partner",
      "Achieved excellent performance and user experience across devices with Next.js optimizations",
      "Established a strong lead-generation funnel through clear services presentation and contact forms",
      "Demonstrated our own capabilities by building a meta-portfolio that reflects the quality we deliver to clients"
    ]
  },


  {
    id: "birtoy",
    title: "BirToy",
    shortDescription:
      "A comprehensive wedding services platform in Azerbaijan that brings together venues, bridal shops, photographers, videographers, music groups, and exclusive deals – simplifying wedding planning in one place.",
    image: "/images/birtoy.png",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Wedding Marketplace", "Azerbaijan Local", "In Progress"],
    date: "2025-2026",
    status: "In Progress",
    liveUrl: "https://toy-xi.vercel.app",
    githubUrl: "https://github.com/IbrahimAliyev20", 
  
    subtitle: "Your All-in-One Wedding Planning Hub – From Venue to Music, Everything in One Click",
  
    longDescription:
      "Toy XI is an ambitious marketplace platform designed specifically for the Azerbaijani wedding industry, aiming to become the go-to destination for couples planning their special day. The core objective is to centralize fragmented wedding services – luxury venues (e.g., Alyans Şadlıq Sarayı), bridal gown stores (e.g., Lavin Wedding House), professional photo & video teams, live music groups, and ongoing campaigns/discounts – into a single, user-friendly digital ecosystem.\n\nBuilt with Next.js and TypeScript, the site offers intuitive navigation, category-based browsing, minimum price indicators (e.g., starting from 99 AZN for photo services), and quick access to detailed listings. It targets engaged couples, families, and event planners in Baku and across Azerbaijan, making wedding preparation more convenient, transparent, and budget-friendly. Features include user login, dedicated category pages, and promotional campaigns to drive engagement and bookings. The project is actively under development, with a focus on expanding listings, adding filters/search, and implementing vendor dashboards in future iterations.",
  
    gallery: [
      "/images/birtoy1.png",
      "/images/birtoy2.png",
    ],
    client: "BirToy",
    duration: "In Progress",
    team: "1 frontend developers, 1 backend developer, 1 designer",
  
    challenges: [
      "Aggregating and organizing diverse, real-world wedding service providers with accurate pricing, availability, and visuals in a single platform",
      "Creating an intuitive, emotionally appealing experience for users planning one of life's biggest events while keeping the site fast and mobile-friendly",
      "Handling localized content (Azerbaijani language, Baku-centric venues) with potential for future multilingual expansion",
      "Building scalable category pages and dynamic listings without a full backend yet (using static/mock data during development)"
    ],
  
    solutions: [
      "Structured the site with clear category sections (venues, bridal, photo/video, music) and prominent 'View All' CTAs for easy discovery",
      "Leveraged Next.js for fast loading, SEO-friendly pages, and smooth navigation between service types",
      "Used modern UI components for elegant cards, price badges, and campaign highlights to evoke trust and excitement",
      "Implemented user authentication flow early to support future personalized features like favorites or bookings"
    ],
  
    technologies: [
      {
        name: "Next.js",
        description: "App Router and server-side rendering for high performance and SEO in a dynamic marketplace"
      },
      {
        name: "TypeScript",
        description: "Strong typing for reliable data handling across service listings and user features"
      },
      {
        name: "Tailwind CSS",
        description: "Rapid, responsive styling with custom themes suitable for wedding elegance"
      },
      {
        name: "Shadcn/ui",
        description: "Beautiful, accessible components for cards, buttons, and navigation"
      },
      {
        name: "React Hook Form",
        description: "Planned for future forms (e.g., contact vendors, login, filters)"
      },
      {
        name: "Next.js Image",
        description: "Optimized loading of high-quality venue, bridal, and service photos"
      }
    ],
  
    results: [
      "Launched a live prototype that already showcases core wedding service categories and real Baku providers",
      "Created an appealing, localized digital solution addressing a real pain point in Azerbaijani wedding planning",
      "Established strong foundation for future growth: vendor onboarding, search/filter, and booking integration",
      "Demonstrated ability to build emotionally resonant marketplaces with clean modern tech stack"
    ]
  }
];