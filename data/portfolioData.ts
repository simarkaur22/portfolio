import { 
  PersonalInfo, 
  SkillCategory, 
  WorkExperience, 
  Project, 
  Service, 
  WhyHireMePoint, 
  Testimonial, 
  EducationItem 
} from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Simarjeet Kaur",
  title: "Laravel & Full Stack Web Developer",
  subtitle: "PHP & Laravel Developer with Full Stack experience — Building scalable backend systems, custom APIs, Shopify storefronts, and modern React/Next.js web applications.",
  status: "Open to Work",
  location: "Jalandhar, Punjab, India",
  email: "kaursimar1230@gmail.com",
  phone: "+91 8872711430",
  website: "https://yourmedicals.co.uk",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  bio: "Full Stack Web Developer with 2+ years of hands-on experience centered on PHP, Laravel, MySQL, and REST API development. Proven expertise building enterprise portals, database-driven backends, and Shopify eCommerce storefronts. AI-augmented developer proficient in building modern full-stack web products with React.js, Next.js, and TypeScript.",
  stats: {
    experienceYears: "2+",
    projectsCompleted: "9+",
    techMastered: "15+",
    satisfactionRate: "100%"
  }
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & API Architecture (Primary)",
    description: "Designing robust server-side applications, Eloquent ORM operations, REST APIs, and relational database schemas.",
    skills: [
      { name: "Laravel", level: 96, badge: "Expert / Primary" },
      { name: "PHP", level: 94, badge: "Expert" },
      { name: "RESTful APIs", level: 95, badge: "Expert" },
      { name: "Eloquent ORM", level: 94, badge: "Expert" },
      { name: "Blade Templates", level: 92, badge: "Advanced" },
      { name: "MVC Architecture", level: 95, badge: "Expert" },
      { name: "Node.js", level: 86, badge: "Proficient" },
      { name: "RBAC (Role-Based Access)", level: 92, badge: "Advanced" }
    ]
  },
  {
    title: "Databases & Cloud",
    description: "Managing high-integrity relational databases, schema migrations, and cloud file storage.",
    skills: [
      { name: "MySQL", level: 90, badge: "Advanced" },
      { name: "PostgreSQL", level: 86, badge: "Proficient" },
      { name: "MariaDB", level: 85, badge: "Proficient" },
      { name: "Schema Migrations", level: 92, badge: "Advanced" },
      { name: "AWS S3", level: 85, badge: "Proficient" },
      { name: "Heroku", level: 82, badge: "Proficient" }
    ]
  },
  {
    title: "Frontend Development",
    description: "Building responsive web interfaces, DOM scripting, and modern component frameworks.",
    skills: [
      { name: "HTML5 / CSS3", level: 98, badge: "Expert" },
      { name: "JavaScript (ES6+)", level: 90, badge: "Advanced" },
      { name: "Bootstrap", level: 90, badge: "Advanced" },
      { name: "jQuery", level: 85, badge: "Proficient" },
      { name: "Tailwind CSS", level: 88, badge: "Proficient" },
      { name: "React.js", level: 42, badge: "AI-Augmented" },
      { name: "Next.js", level: 38, badge: "AI-Augmented" },
      { name: "TypeScript", level: 38, badge: "AI-Augmented" }
    ]
  },
  {
    title: "eCommerce Solutions",
    description: "Delivering high-converting custom Shopify themes, Liquid templates, and headless eCommerce workflows.",
    skills: [
      { name: "Shopify Custom Themes", level: 95, badge: "Expert" },
      { name: "Shopify Liquid", level: 94, badge: "Expert" },
      { name: "Storefront Optimisation", level: 92, badge: "Advanced" },
      { name: "Shopify App Integration", level: 88, badge: "Proficient" },
      { name: "Medusa.js (Headless)", level: 80, badge: "Working Knowledge" }
    ]
  },
  {
    title: "AI & Developer Tools",
    description: "Leveraging cutting-edge AI tools to boost code velocity, refactoring, and learning modern tech stacks.",
    skills: [
      { name: "Claude AI", level: 95, badge: "AI Workflow" },
      { name: "GitHub Copilot", level: 94, badge: "AI Workflow" },
      { name: "ChatGPT", level: 96, badge: "AI Workflow" },
      { name: "Perplexity AI & Gemini", level: 90, badge: "AI Workflow" },
      { name: "Git & GitHub", level: 92, badge: "Essential" },
      { name: "Postman", level: 90, badge: "Essential" },
      { name: "Bitbucket & XAMPP", level: 86, badge: "Essential" }
    ]
  }
];

export const workExperiences: WorkExperience[] = [
  {
    id: "exp-1",
    company: "C Sharma Consultancy",
    location: "Jalandhar, Punjab, India",
    position: "Full Stack Developer",
    period: "Feb 2026 – Jul 2026",
    isCurrent: false,
    summary: "Architected Laravel backends, enterprise web portals, custom Shopify eCommerce storefronts, and headless platforms.",
    responsibilities: [
      "Architected backend microservices, custom controllers, and RESTful API routes in Laravel.",
      "Engineered enterprise healthcare portals (NHS Portal) with role-based access control and patient data management.",
      "Delivered custom Shopify eCommerce storefronts with Liquid theme development, app integrations, and conversion-optimized UX.",
      "Built responsive frontend interfaces with Bootstrap, Tailwind CSS, JavaScript, React.js, and Next.js.",
      "Managed relational database schemas (MySQL, PostgreSQL) and designed data integrity migrations.",
      "Configured AWS S3 for scalable asset storage and managed Heroku deployment environment configurations.",
      "Utilized AI toolsets (Claude, GitHub Copilot, ChatGPT) to accelerate development velocity, documentation, and code reviews."
    ],
    technologies: ["Laravel", "PHP", "MySQL", "REST API", "Shopify", "Liquid", "JavaScript", "Bootstrap", "Tailwind CSS", "React.js", "Next.js", "AWS S3"],
    achievements: [
      "Architected robust Laravel backend services for enterprise healthcare stakeholders.",
      "Delivered conversion-optimised Shopify storefronts serving live client traffic.",
      "Boosted development velocity by 40% using AI-augmented workflows."
    ]
  },
  {
    id: "exp-2",
    company: "Gem Labs",
    location: "Amritsar, Punjab, India",
    position: "Full Stack Developer",
    period: "Sept 2025 – Jan 2026",
    isCurrent: false,
    summary: "Enhanced and scaled the ERP44 enterprise portal backends and Eloquent database layers.",
    responsibilities: [
      "Enhanced and maintained the ERP44 enterprise portal, introducing critical backend feature additions using Laravel.",
      "Optimized complex database queries and Eloquent ORM operations to maximize portal response times and reliability.",
      "Designed and delivered internal REST API endpoints supporting key business operations.",
      "Designed and implemented clean, responsive frontend UI views ensuring cross-portal interface consistency."
    ],
    technologies: ["Laravel", "PHP", "Eloquent ORM", "MySQL", "REST APIs", "Blade Templates", "JavaScript", "Bootstrap"],
    achievements: [
      "Improved database query response times across high-traffic ERP operations.",
      "Delivered key backend modules for business-critical administrative workflows."
    ]
  },
  {
    id: "exp-3",
    company: "International Knowledge Academy",
    location: "Jalandhar, Punjab, India",
    position: "Full Stack Developer",
    period: "Feb 2024 – Aug 2025",
    isCurrent: false,
    summary: "Full stack engineering centered on Laravel backends, internal web portals, role-based admin panels, and interactive data tables.",
    responsibilities: [
      "Architected backend web features using Laravel Controllers, Blade templates, MVC routing, and Eloquent ORM.",
      "Maintained role-based admin and user access panels handling end-to-end data workflows.",
      "Developed responsive landing pages and UI components using HTML5, CSS3, Bootstrap, and jQuery.",
      "Implemented dynamic data tables and AJAX-driven client components using Yajra Datatables."
    ],
    technologies: ["Laravel", "PHP", "Blade", "MySQL", "jQuery", "Bootstrap", "Yajra Datatables", "AJAX"],
    achievements: [
      "Scaled internal portals to manage multi-role user hierarchies seamlessly.",
      "Streamlined reporting pipelines using Yajra Datatables AJAX integration."
    ]
  },
  {
    id: "exp-4",
    company: "International Knowledge Academy",
    location: "Jalandhar, Punjab, India",
    position: "Quality Control Representative",
    period: "Sept 2021 – Feb 2023",
    isCurrent: false,
    summary: "Quality assurance management, system metrics tracking, and department complaint resolution.",
    responsibilities: [
      "Maintained department QA dashboards and performed systematic issue analysis, significantly reducing resolution cycles.",
      "Operated internal software platforms to monitor and audit quality metrics across cross-functional departments."
    ],
    technologies: ["QA Systems", "Data Dashboards", "Process Optimization", "Quality Assurance"],
    achievements: [
      "Reduced department resolution times through structured QA feedback loops.",
      "Laid foundational QA rigor later applied directly to software development quality control."
    ]
  }
];

export const projects: Project[] = [
  {
    id: "nhs-portal",
    title: "NHS Healthcare Portal",
    tagline: "Enterprise portal featuring Role-Based Access Control and patient management in Laravel",
    category: "Healthcare",
    projectType: "Professional Project",
    isLive: false,
    availabilityNote: "Enterprise Client Codebase — Details & Architectural Demonstration Available Upon Request",
    shortDescription: "Enterprise-grade healthcare application built on Laravel, serving medical stakeholders with strict data security and administrative controls.",
    problemSolved: "Required a secure, compliant web application to manage complex patient records, clinical workflows, and multi-tier user role permissions.",
    role: "Full Stack Engineer (C Sharma Consultancy)",
    contributions: [
      "Architected backend RESTful API endpoints and authentication controllers in Laravel.",
      "Engineered Role-Based Access Control (RBAC) middleware for granular permissions.",
      "Designed MySQL database schemas for patient data logging and reporting audit trails.",
      "Implemented responsive admin dashboard views with dynamic data filtering."
    ],
    technologies: ["Laravel", "PHP", "MySQL", "REST API", "Blade", "Eloquent ORM", "Bootstrap"],
    challenges: [
      "Enforcing strict data integrity and audit trails across concurrent multi-user sessions.",
      "Optimizing complex multi-table JOIN queries for real-time patient status dashboards."
    ],
    businessImpact: "Provided a centralized healthcare portal that streamlined administrative tasks while maintaining high security standards.",
    image: "/assets/projects/nhs_portal.png",
    featured: true
  },
  {
    id: "healthfarmnutrition",
    title: "healthfarmnutrition.com",
    tagline: "High-performance eCommerce storefront for a premium health & nutrition brand",
    category: "eCommerce",
    projectType: "Freelance Project",
    isLive: true,
    liveUrl: "https://healthfarmnutrition.com",
    availabilityNote: "Live eCommerce Storefront",
    shortDescription: "Custom Shopify storefront built with bespoke Liquid themes, conversion-focused UX, and optimized product checkout flows.",
    problemSolved: "The client needed a fast, custom-branded online storefront capable of handling high product catalogs and mobile traffic without relying on bloated off-the-shelf templates.",
    role: "Freelance Shopify Developer",
    contributions: [
      "Developed custom Shopify Liquid theme components from scratch.",
      "Engineered dynamic JavaScript scripts for interactive product options and cart drawer updates.",
      "Optimized storefront page loading speed and mobile responsive layouts.",
      "Configured app integrations for inventory sync and checkout enhancements."
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5", "Storefront API"],
    challenges: [
      "Ensuring sub-second load times while maintaining high-resolution product imagery.",
      "Building responsive custom collection filters without heavy third-party app dependencies."
    ],
    businessImpact: "Delivered a clean, conversion-focused storefront that significantly elevated brand presentation and reduced customer checkout drop-off.",
    image: "/assets/projects/healthfarm.png",
    featured: true
  },
  {
    id: "consultation-yourmedicals",
    title: "consultation.yourmedicals.co.uk",
    tagline: "Medical consultation & digital healthcare booking system on Shopify",
    category: "Healthcare",
    projectType: "Client Work",
    isLive: true,
    liveUrl: "https://consultation.yourmedicals.co.uk",
    availabilityNote: "Live Client Platform",
    shortDescription: "Customized medical consultation workflow built on Shopify, combining Liquid theme mechanics with JavaScript business logic.",
    problemSolved: "Needed an intuitive online consultation flow that collects medical questionnaire inputs securely before directing patients to prescription services.",
    role: "Full Stack Developer",
    contributions: [
      "Customized Shopify Liquid files to render complex multi-step consultation forms.",
      "Wrote client-side JavaScript for real-time form validation and dynamic pricing logic.",
      "Integrated custom UI components tailored specifically for healthcare consultation UX."
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS", "HTML5"],
    challenges: [
      "Implementing custom questionnaire logic within the constraints of Shopify's liquid liquid structure.",
      "Creating seamless UI transitions for patient intake forms."
    ],
    businessImpact: "Automated the patient intake consultation process, significantly reducing manual intake times.",
    image: "/assets/projects/consultation.png",
    featured: true
  },
  {
    id: "medusa-ecommerce",
    title: "Medusa.js Headless Platform",
    tagline: "Headless eCommerce architecture exploration with Next.js storefront & PostgreSQL",
    category: "eCommerce",
    projectType: "Professional Project",
    isLive: false,
    availabilityNote: "Enterprise Headless Architecture — Full Code Architecture Demo Available Upon Request",
    shortDescription: "Headless eCommerce setup coupling Medusa.js backend engine with a Next.js storefront.",
    problemSolved: "Traditional monolithic platforms struggled to deliver high speed and dynamic custom user experiences required by modern brands.",
    role: "Frontend Developer (C Sharma Consultancy)",
    contributions: [
      "Built Next.js storefront views including product detail pages, collection grids, and checkout flows.",
      "Integrated Medusa.js client SDK for cart state management and checkout processing.",
      "Implemented responsive styling with smooth micro-interactions."
    ],
    technologies: ["Medusa.js", "Next.js", "React.js", "PostgreSQL", "JavaScript", "Tailwind CSS"],
    challenges: [
      "Handling dynamic client-side state for real-time product inventory updates.",
      "Managing state between Next.js frontend and API backend."
    ],
    businessImpact: "Achieved sub-second page transitions and complete flexibility over the purchase funnel experience.",
    image: "/assets/projects/medusa.png",
    featured: true
  },
  {
    id: "yourmedicals",
    title: "yourmedicals.co.uk",
    tagline: "Healthcare services web platform for medical consultation & services",
    category: "Healthcare",
    projectType: "Client Work",
    isLive: true,
    liveUrl: "https://yourmedicals.co.uk",
    availabilityNote: "Live Healthcare Site",
    shortDescription: "Official digital presence for healthcare services providing patient information, medical offerings, and booking pathways.",
    problemSolved: "Establishing a trusted, accessible healthcare website optimized for local patient discovery and mobile responsiveness.",
    role: "Full Stack Developer",
    contributions: [
      "Developed responsive frontend layouts and service overview cards.",
      "Optimized SEO tags, structured schema, and page load speed metrics.",
      "Built clean contact and inquiry forms with backend notification routes."
    ],
    technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    challenges: [
      "Designing accessible UI elements compliant with healthcare web standards.",
      "Optimizing mobile viewport performance across diverse device sizes."
    ],
    businessImpact: "Created a trusted digital gateway for patients searching for reliable UK healthcare services.",
    image: "/assets/projects/yourmedicals.png",
    featured: false
  },
  {
    id: "mpeslearning",
    title: "mpeslearning.com",
    tagline: "Online eLearning platform delivering professional training modules",
    category: "Full Stack",
    projectType: "Client Work",
    isLive: true,
    liveUrl: "https://mpeslearning.com",
    availabilityNote: "Live eLearning Site",
    shortDescription: "eLearning platform offering structured course catalogs, learning tracks, and enrollment management.",
    problemSolved: "Needed an organized platform to present educational courses clearly to prospective students with easy course navigation.",
    role: "Full Stack Developer",
    contributions: [
      "Built intuitive course detail layouts and interactive curriculum views.",
      "Integrated registration and inquiry lead workflows.",
      "Ensured cross-browser compatibility and rapid page rendering."
    ],
    technologies: ["PHP", "Laravel", "JavaScript", "HTML5", "CSS3", "MySQL"],
    challenges: [
      "Organizing large course catalogs into digestible visual hierarchies.",
      "Maintaining fast load times across media-heavy course preview pages."
    ],
    businessImpact: "Increased course inquiry conversions through streamlined navigation and clear information architecture.",
    image: "/assets/projects/mpeslearning.png",
    featured: false
  },
  {
    id: "oakwoodinternational",
    title: "oakwoodinternational.com",
    tagline: "Corporate website for international consultancy & business services",
    category: "Full Stack",
    projectType: "Client Work",
    isLive: true,
    liveUrl: "https://oakwoodinternational.com",
    availabilityNote: "Live Corporate Platform",
    shortDescription: "Corporate web presence featuring service portfolios, team insights, and global client case studies.",
    problemSolved: "Delivering an authoritative digital brand presence that conveys corporate professionalism to international stakeholders.",
    role: "Full Stack Developer",
    contributions: [
      "Architected clean corporate layouts and responsive navigation structures.",
      "Implemented dynamic UI interactions and smooth scrolling sections.",
      "Integrated performance optimizations for global load speeds."
    ],
    technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    challenges: [
      "Refining typography and spacing to align with high-end corporate branding guidelines.",
      "Cross-device testing for international user demographics."
    ],
    businessImpact: "Strengthened brand credibility among corporate clients and global partners.",
    image: "/assets/projects/oakwood.png",
    featured: false
  },
  {
    id: "pmpcertificationcourse",
    title: "pmpcertificationcourse.com",
    tagline: "Specialized training portal for PMP certification candidates",
    category: "Full Stack",
    projectType: "Client Work",
    isLive: true,
    liveUrl: "https://pmpcertificationcourse.com",
    availabilityNote: "Live Training Portal",
    shortDescription: "Targeted educational portal providing PMP certification course breakdowns, exam prep guides, and student registration.",
    problemSolved: "Converting certification search traffic into enrolled students through clear value proposition pages.",
    role: "Full Stack Developer",
    contributions: [
      "Designed and coded conversion-focused landing pages.",
      "Created structured exam module guides and enrollment call-to-actions.",
      "Optimized form submission routes and analytics integration."
    ],
    technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    challenges: [
      "Synthesizing detailed certification requirements into clear user flows.",
      "Achieving sub-second mobile page load speed."
    ],
    businessImpact: "Boosted student registration inquiries for professional PMP training cohorts.",
    image: "/assets/projects/pmp.png",
    featured: false
  }
];

export const services: Service[] = [
  {
    id: "srv-1",
    title: "Laravel & PHP Engineering",
    description: "Enterprise Laravel backend design, Eloquent ORM optimization, custom MVC architecture, RESTful API development, and secure authentication.",
    icon: "Server",
    deliverables: ["Custom Laravel Controllers", "RESTful API Routes", "Eloquent Query Tuning", "Role-Based Access Control (RBAC)"],
    popular: true
  },
  {
    id: "srv-2",
    title: "Full Stack Web Development",
    description: "End-to-end web application development using Laravel, PHP, MySQL, and modern frontend techniques with React & Next.js.",
    icon: "Code2",
    deliverables: ["Laravel/PHP Backend Services", "Database Schemas", "Responsive Frontend UI", "Deployment Setup"],
    popular: true
  },
  {
    id: "srv-3",
    title: "Shopify Custom Theme & eCommerce",
    description: "Custom Shopify Liquid theme creation, conversion rate optimization, dynamic cart drawers, and app integrations.",
    icon: "ShoppingBag",
    deliverables: ["Custom Liquid Themes", "Dynamic JS Cart Drawers", "App Integrations", "Speed Optimization"]
  },
  {
    id: "srv-4",
    title: "Admin Dashboards & RBAC",
    description: "Custom administrative portals built on Laravel with granular user roles, multi-level permissions, and real-time data tables.",
    icon: "LayoutDashboard",
    deliverables: ["Role-Based Access Control", "Yajra Datatables Setup", "Analytics Charts", "Audit Log Tracking"]
  },
  {
    id: "srv-5",
    title: "Performance & Database Optimization",
    description: "Refactoring slow MySQL queries, optimizing Eloquent operations, setting up indexes, and speeding up page load times.",
    icon: "Gauge",
    deliverables: ["Database Query Tuning", "Eloquent Optimization", "Sub-second Page Speeds", "Code Quality Audits"]
  },
  {
    id: "srv-6",
    title: "Modern React & Next.js Integration",
    description: "Building modern frontend client interfaces using React, Next.js, and AI-assisted workflows paired with robust Laravel backends.",
    icon: "Zap",
    deliverables: ["React Components", "Next.js Pages", "API Integration", "AI-Augmented Velocity"]
  }
];

export const whyHireMe: WhyHireMePoint[] = [
  {
    id: "whm-1",
    title: "Laravel & PHP Core Strength",
    description: "Strong foundation in Laravel MVC architecture, Eloquent ORM, custom APIs, and secure database-driven backend workflows.",
    icon: "Server",
    highlight: "Laravel + PHP Expert"
  },
  {
    id: "whm-2",
    title: "Modern React & Next.js Integration",
    description: "Proficient in building modern full-stack web applications using React.js, Next.js, and TypeScript paired with Laravel backends.",
    icon: "Layers",
    highlight: "Full-Stack Ecosystem"
  },
  {
    id: "whm-3",
    title: "Custom eCommerce (Shopify Liquid)",
    description: "Proven track record delivering custom Shopify Liquid storefronts and eCommerce solutions optimized for conversions.",
    icon: "ShoppingCart",
    highlight: "Shopify & Liquid Dev"
  },
  {
    id: "whm-4",
    title: "QA-Grounded Quality Mindset",
    description: "Having worked as a Quality Control Representative, I write code with defensive validation, edge-case checks, and bug-resistant patterns.",
    icon: "ShieldCheck",
    highlight: "Zero-Defect Philosophy"
  },
  {
    id: "whm-5",
    title: "AI-Augmented Velocity",
    description: "Leverage Claude, GitHub Copilot, and ChatGPT to accelerate dev speed, write clean code, and execute thorough code reviews.",
    icon: "Sparkles",
    highlight: "Accelerated Delivery"
  },
  {
    id: "whm-6",
    title: "Clean, Scalable Architecture",
    description: "Focus on maintainable code structures, type safety, modular design patterns, and documented APIs that teams love working with.",
    icon: "FileCode2",
    highlight: "Production Ready"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Simarjeet's mastery of Laravel backends and query optimization made our portal delivery smooth and highly reliable.",
    author: "Senior Engineering Lead",
    role: "Consultancy Supervisor",
    company: "C Sharma Consultancy",
    avatar: "/assets/avatars/user1.png",
    rating: 5
  },
  {
    id: "t2",
    quote: "She delivered our custom Shopify Liquid storefront on time with impressive page load speed and smooth mobile UX. Highly recommended!",
    author: "Brand Director",
    role: "Founder",
    company: "Health Farm Nutrition",
    avatar: "/assets/avatars/user2.png",
    rating: 5
  },
  {
    id: "t3",
    quote: "Simarjeet's quality control background really shows in her code. Her attention to detail on Laravel Eloquent queries saved our team countless hours.",
    author: "Lead Tech Architect",
    role: "Project Supervisor",
    company: "Gem Labs",
    avatar: "/assets/avatars/user3.png",
    rating: 5
  }
];

export const education: EducationItem[] = [
  {
    degree: "M.C.A. — Master of Computer Applications",
    institution: "Lovely Professional University",
    period: "2021 – 2023",
    description: "Advanced study in Software Engineering, Web Architecture, Database Systems, Cloud Concepts, and Distributed Applications."
  },
  {
    degree: "B.C.A. — Bachelor of Computer Applications",
    institution: "Guru Nanak Dev University",
    period: "2018 – 2021",
    description: "Core foundation in Computer Science, Programming Languages (C++, Java, PHP), Data Structures, Algorithms, and Web Development."
  }
];
