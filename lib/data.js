// ===== Portfolio Data — Single Source of Truth =====

// ===== Personal Details =====
export const personalDetails = {
  name: "Jaswanth Srighakollapu",
  firstName: "Jaswanth",
  lastName: "Srighakollapu",
  fullName: "N V K Jaswanth Srighakollapu",
  tagline: "Cybersecurity Explorer • Full Stack Developer • UI/UX Designer",
  roles: [
    "Cybersecurity Explorer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
  ],
  profileImg: "/images/profile.png",
  resumeUrl: "/Jaswanth_Res.pdf",
  about: `I'm N V K Jaswanth Srighakollapu — known as noPeace across popular platforms. I'm a Cybersecurity Enthusiast, Full Stack Developer, and UI/UX Designer currently pursuing B.Tech in Computer Science at LPU.

I build secure, efficient, and user-focused digital experiences by blending technical depth with creative design. Proficient in C/C++, Rust, Python, HTML, CSS, JavaScript, React.js, MySQL, and DSA.

I also bring hands-on knowledge in networking (TCP/IP, DNS), security tools (Wireshark, Nmap), and secure coding practices. With a strong grasp of design thinking and prototyping, I craft seamless interfaces.

Certified in Cloud Computing, Cyber Incident Response, and Deep Learning — I'm always exploring innovative ways to merge secure backends with intuitive frontends.`,
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
    duration: "Aug 2022 — Present",
    description: "Pursuing B.Tech in Computer Science & Engineering with focus on cybersecurity and full-stack development.",
    icon: "GraduationCap",
  },
  {
    title: "Intermediate (MPC)",
    institution: "Bhashyam Institute of School",
    location: "Guntur, Andhra Pradesh",
    duration: "Jun 2019 — Jul 2021",
    description: "Completed intermediate education with Mathematics, Physics, and Chemistry.",
    icon: "School",
  },
  {
    title: "Matriculation",
    institution: "Bhashyam School",
    location: "Est.Gdv, Andhra Pradesh",
    duration: "Jun 2018 — Apr 2019",
    description: "Completed secondary school education with distinction.",
    icon: "BookOpen",
  },
];

// ===== Skills & Technologies =====
export const skillCategories = [
  {
    title: "Languages",
    icon: "Code2",
    skills: ["C", "C++", "Python", "Rust", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Figma"],
  },
  {
    title: "Backend & Database",
    icon: "Server",
    skills: ["Node.js", "Express.js", "MySQL", "REST APIs"],
  },
  {
    title: "Security & Networking",
    icon: "Shield",
    skills: ["Wireshark", "Nmap", "TCP/IP", "DNS", "ARP", "SSL/TLS", "RBAC", "OpenVPN"],
  },
  {
    title: "DevOps & Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Vim", "NPM", "Cargo", "Pip", "Postman", "Docker"],
  },
];

// ===== Projects =====
export const projects = [
  {
    title: "Instagram Automation Bot",
    image: "/images/projects/project1.jpeg",
    description:
      "A Selenium-based Python bot automating likes, shares, and comments with proxy rotation and bot detection bypasses.",
    techStack: ["Python", "Selenium", "BeautifulSoup", "Proxy Servers"],
    liveUrl: "https://github.com/jaswanth6988/Automation-Instagram-Reels-Sharing/blob/main/README.md",
    githubUrl: "https://github.com/jaswanth6988/Automation-Instagram-Reels-Sharing",
    category: "Automation",
    featured: true,
  },
  {
    title: "Library Management System",
    image: "/images/projects/project2.png",
    description:
      "A console-based library system in C++ with book management, using DSA concepts like stacks and queues for performance.",
    techStack: ["C++", "DSA"],
    liveUrl: "https://github.com/jaswanth6988/PROJECT-REPORT-ON-SIMPLE-LIBRARY-MANAGEMENT-SYSTEM-USING-DSA/blob/main/README.md",
    githubUrl: "https://github.com/jaswanth6988/PROJECT-REPORT-ON-SIMPLE-LIBRARY-MANAGEMENT-SYSTEM-USING-DSA",
    category: "Systems",
    featured: false,
  },
  {
    title: "Travel App UI/UX Design",
    image: "/images/projects/project3.jpeg",
    description:
      "Designed a smooth and engaging travel app UI using Figma with user-centric research, reducing design iterations by 40%.",
    techStack: ["Figma", "Adobe XD", "UI/UX"],
    liveUrl: "https://www.figma.com/design/R93msMsDavEjnvWyt2iQO8/high-fedility?node-id=0-1&t=cZ0nqoQE1kwc3Kkd-1",
    githubUrl: "https://www.figma.com/design/R93msMsDavEjnvWyt2iQO8/high-fedility?node-id=0-1&t=cZ0nqoQE1kwc3Kkd-1",
    category: "Design",
    featured: true,
  },
  {
    title: "Enhance Dashboard Security",
    image: "/images/projects/project4.jpeg",
    description:
      "Implemented RBAC to restrict unauthorized dashboard access and secured sensitive data via HTTPS and SSL certificates.",
    techStack: ["Node.js", "Express.js", "HTTPS", "RBAC", "SSL"],
    liveUrl: "https://github.com/jaswanth6988/Enhance-Dashboard-security/blob/main/README.MD",
    githubUrl: "https://github.com/jaswanth6988/Enhance-Dashboard-security",
    category: "Security",
    featured: true,
  },
  {
    title: "Network Traffic Monitoring",
    image: "/images/projects/project5.jpeg",
    description:
      "Analyzed network traffic to detect ARP spoofing, unauthorized access, and DNS tunneling using Wireshark.",
    techStack: ["Wireshark", "TCP/IP", "ARP", "DNS"],
    liveUrl: "https://github.com/jaswanth6988/Network-Traffic-Monitoring-Using-Wireshark/blob/main/Readme.MD",
    githubUrl: "https://github.com/jaswanth6988/Network-Traffic-Monitoring-Using-Wireshark",
    category: "Security",
    featured: false,
  },
  {
    title: "Library Bookstore Website",
    image: "/images/projects/project6.png",
    description:
      "A responsive online bookstore built with HTML, CSS, and JavaScript allowing users to browse and purchase books.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://jaswanth6988.github.io/TimeFlys_KOC08_Cipherschools/",
    githubUrl: "https://github.com/jaswanth6988/TimeFlys_KOC08_Cipherschools",
    category: "Web Dev",
    featured: false,
  },
];

// ===== Practice Platforms =====
export const platforms = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/jaswanthsrighakollapu/",
    stat: "800+",
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
    title: "Cyber Incident Response",
    issuer: "Coursera | Infosec",
    url: "https://drive.google.com/file/d/1BNKzineWNDIz7PYVSW-90wg_wJIjxu4Q/view",
    icon: "ShieldCheck",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    url: "https://drive.google.com/file/d/1OCeOBJBwdVmOOnsS5Vt2TymUCzADRGtq/view",
    icon: "Cloud",
  },
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
  phone: "+91 6281276717",
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
