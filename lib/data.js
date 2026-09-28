// ===== Portfolio Data — Single Source of Truth =====

// ===== Personal Details =====
export const personalDetails = {
  name: "Jaswanth Srighakollapu",
  firstName: "Jaswanth",
  lastName: "Srighakollapu",
  fullName: "N V K Jaswanth Srighakollapu",
  tagline: "Cybersecurity Explorer • Full Stack Developer • DevOps & Data Engineer",
  roles: [
    "Cybersecurity Explorer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Data Engineer",
    "Problem Solver",
  ],
  profileImg: "/images/profile.jpg",
  resumeUrl: "/Jaswanth_Res.pdf",
  about: `I'm N V K Jaswanth Srighakollapu, an Associate Software Engineer with 1+ year of professional experience at MAQ Software. I graduated with a B.Tech in Computer Science from LPU.

I build secure, scalable, and highly efficient systems by blending deep technical knowledge with robust engineering practices. I have strong expertise in creating multiple Agentic RAG-based POCs and deploying them into production-ready MVP products.

Proficient in C/C++, Rust, Python, React.js, and modern data platforms, I bring hands-on experience in cloud architectures, data pipelines, and security protocols. 

Certified in various Microsoft Azure data and AI stacks, I'm always exploring innovative ways to build the next generation of intelligent, scalable platforms.`,
  stats: [
    { label: "LeetCode Problems", value: "800+" },
    { label: "TryHackMe Rank", value: "Top 5%" },
    { label: "Projects Built", value: "6+" },
    { label: "Certifications", value: "2+" },
  ],
};

// ===== Social Media =====
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/jaswanth6988/",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/n-v-k-jaswanth-srighakollpu-491004251/",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://x.com/Jaswant15981967",
    icon: "Twitter",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/zneo_47/",
    icon: "Instagram",
  },
];

// ===== Work Experience =====
export const workExperience = [
  {
    title: "Associate Software Engineer",
    company: "MAQ Software",
    location: "Hyderabad, India",
    type: "Full-time",
    duration: "Nov 2025 — Present",
    description:
      "Spearheaded client architecture workshops to design a Python-based agentic web platform, integrating multiple LLM frameworks for autonomous decision-making and robust RAG pipelines. Owned a plug-and-play Document Intelligence Engine processing millions of records at 98% accuracy. Streamlined deployments via Terraform and Azure DevOps to Azure Container Services. Migrated 50+ enterprise repositories from SharePoint to Snowflake with zero production downtime.",
    icon: "Briefcase",
  },
  {
    title: "Freelance AI Web Developer",
    company: "Self-Employed",
    location: "Remote",
    type: "Freelance",
    duration: "Sep 2024 — Aug 2025",
    description:
      "Shipped multiple AI-integrated web applications for diverse clients using React and Python across 5+ engagements. Built RESTful APIs, ML/LLM capabilities, and workflow orchestration pipelines, expanding workflow coverage by 85%. Automated testing, validation, and development workflows through custom tooling, cutting manual QA effort by 60%.",
    icon: "Code",
  },
  {
    title: "Summer Training — DSA",
    company: "Board Infinity",
    location: "Online",
    type: "Training",
    duration: "May 2024 — July 2024",
    description:
      "Intensive data structures and algorithms training covering arrays, trees, graphs, dynamic programming, and competitive programming techniques.",
    icon: "Briefcase",
  },
];

// ===== Education =====
export const education = [
  {
    title: "Bachelor of Technology — CSE",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "Sep 2022 — Aug 2026",
    description: "Pursuing B.Tech in Computer Science & Engineering with focus on cybersecurity and full-stack development.",
    icon: "GraduationCap",
  },
];

// ===== Skills & Technologies =====
export const skillCategories = [
  {
    title: "Languages",
    icon: "Code2",
    skills: ["Python", "Rust", "C++", "C#", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "AI & Data Engineering",
    icon: "Server",
    skills: ["LLMs", "RAG", "Agentic AI", "Databricks", "Snowflake", "PySpark", "Vector DBs", "Power BI"],
  },
  {
    title: "Backend & Cloud",
    icon: "Cloud",
    skills: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Microsoft Azure", "REST APIs"],
  },
  {
    title: "Frontend Development",
    icon: "Layout",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Figma"],
  },
  {
    title: "Testing & Automation",
    icon: "Wrench",
    skills: ["Selenium", "Playwright", "Web Scraping", "BeautifulSoup", "Python Automation"],
  },
  {
    title: "DevOps & Security",
    icon: "Shield",
    skills: ["Git/GitHub", "Docker", "Terraform", "Azure DevOps", "CI/CD", "Linux", "Cybersecurity"],
  },
];

// ===== Projects =====
export const projects = [
  {
    title: "OneJob AI Portal",
    image: "/images/projects/project1.jpeg",
    description:
      "AI Job Apply Portal: Automated job discovery, resume matching, ATS optimization, and 1-click auto-apply with manual review fallback.",
    techStack: ["React", "Python", "FastAPI", "MongoDB", "LLMs"],
    liveUrl: "https://github.com/jaswanth6988/OneJob",
    githubUrl: "https://github.com/jaswanth6988/OneJob",
    category: "AI & Automation",
    featured: true,
  },
  {
    title: "Contextual Query Engine RAG",
    image: "/images/projects/project2.png",
    description:
      "Contextual RAG Engine: Semantic search over large-scale embedded vector databases; achieves 92% retrieval relevance and 40% lower query latency.",
    techStack: ["Python", "PostgreSQL", "Vector Embeddings", "LangChain"],
    liveUrl: "https://github.com/jaswanth6988/Contextual-Query-Engine-RAG-",
    githubUrl: "https://github.com/jaswanth6988/Contextual-Query-Engine-RAG-",
    category: "AI & Data",
    featured: true,
  },
  {
    title: "AI Safety Incident Log API",
    image: "/images/projects/project3.jpeg",
    description:
      "Ultra-high-throughput concurrent REST API handling 10,000+ req/min, benchmarked at up to 1,400x faster than Python and 78x faster than Node.js.",
    techStack: ["Rust", "Rocket", "Diesel ORM", "SQLite", "Docker"],
    liveUrl: "https://github.com/jaswanth6988/AI-Safety-Incidents-API",
    githubUrl: "https://github.com/jaswanth6988/AI-Safety-Incidents-API",
    category: "Systems & Backend",
    featured: true,
  },
  {
    title: "Instagram Automation Bot",
    image: "/images/projects/project4.jpeg",
    description:
      "Selenium automation with anti-bot detection bypass (user-agent rotation, randomized intervals, proxy chaining), reducing failure rate by 40%.",
    techStack: ["Python", "Selenium", "BeautifulSoup", "Proxy Rotation"],
    liveUrl: "https://github.com/jaswanth6988/Automation-Instagram-Reels-Sharing",
    githubUrl: "https://github.com/jaswanth6988/Automation-Instagram-Reels-Sharing",
    category: "Automation",
    featured: false,
  },
];

// ===== Practice Platforms =====
export const platforms = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/jaswanthsrighakollapu/",
    stat: "300+",
    statLabel: "Problems Solved",
    description:
      "Consistently maintained a rating of 1800+, ranking among the top competitive programmers.",
    icon: "Code",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "TryHackMe",
    url: "https://tryhackme.com/p/noPeace",
    stat: "Top 5%",
    statLabel: "Global Ranking",
    description:
      "Completed hands-on labs covering offensive security, networking, and real-world threat analysis.",
    icon: "Shield",
    color: "from-green-500 to-emerald-500",
  },
];

// ===== Certificates =====
export const certificates = [
  {
    title: "Microsoft Certified: Fabric Data Engineer Associate (DP-600)",
    issuer: "Microsoft",
    url: "#",
    icon: "Award",
  },
  {
    title: "Microsoft Certified: DP-700",
    issuer: "Microsoft",
    url: "#",
    icon: "Cloud",
  },
  {
    title: "Microsoft Certified: DP-800",
    issuer: "Microsoft",
    url: "#",
    icon: "Cloud",
  },
  {
    title: "Microsoft Certified: AB-100",
    issuer: "Microsoft",
    url: "#",
    icon: "Award",
  },
  {
    title: "Microsoft Certified: AI-103",
    issuer: "Microsoft",
    url: "#",
    icon: "Award",
  },
  {
    title: "Microsoft Certified: SC-500",
    issuer: "Microsoft",
    url: "#",
    icon: "ShieldCheck",
  },
  {
    title: "GitHub Certified: GH-300",
    issuer: "GitHub",
    url: "#",
    icon: "Award",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    url: "https://drive.google.com/file/d/1OCeOBJBwdVmOOnsS5Vt2TymUCzADRGtq/view",
    icon: "Cloud",
  },
  {
    title: "Cyber Incident Response",
    issuer: "Coursera | Infosec",
    url: "https://drive.google.com/file/d/1BNKzineWNDIz7PYVSW-90wg_wJIjxu4Q/view",
    icon: "ShieldCheck",
  }
];

// ===== Blog Posts =====
export const blogPosts = [
  {
    title: "Web 3.0 and the Decentralized Internet",
    url: "https://medium.com/@noPeace/web-3-0-and-the-decentralized-internet-whats-all-the-buzz-about-15995ee604dd",
    description:
      "A beginner's guide to understanding Web3 — what it is, how it works, and how it affects the future of the internet.",
    tag: "Web3",
  },
  {
    title: "UI/UX Design Principles",
    url: "https://yourblog.com/ui-ux-design",
    description:
      "Learn the key principles of creating user-friendly, accessible, and visually appealing digital interfaces.",
    tag: "Design",
  },
];

// ===== Contact Details =====
export const contactDetails = {
  email: "jaswanth123snvk@gmail.com",
};

// ===== Navigation Links =====
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
