// Portfolio data

export interface Skill {
  name: string;
  percentage: number;
}

export interface ServiceSkill {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  color: string;
}

export interface SkillCard {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface OtherSkill {
  name: string;
  icon: string;
  stars: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  color: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  subjects: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

const data = {
  name: "Milan Bhimani",
  title: "Full Stack Developer",
  intro:
    "Developing modern web applications with React, Next.js, and MERN stack technologies. Building responsive, user-friendly digital experiences.",
  about: {
    description: [
      "I'm a Full Stack Developer currently pursuing my B.Tech in Computer Science at L J Institute Of Engineering and Technology, Ahmedabad. I specialize in web development with a focus on the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js.",
      "My professional journey includes internships at J M Shah & Co. and Nuclear Power Corporation of India Limited, where I've gained valuable experience in developing and optimizing web applications for real-world business needs.",
      "I'm passionate about creating efficient, user-friendly digital solutions and constantly enhancing my skills through continuous learning and practical application of new technologies.",
    ],
    qualities: [
      "Quick Learner",
      "Team Collaboration",
      "Problem-Solving",
      "Time Management",
      "Adaptability",
      "Goal Setting",
    ],
    stats: [
      {
        label: "Experience",
        value: "6+ M  onths",
        icon: "fa-briefcase",
        color: "primary",
      },
      {
        label: "Education",
        value: "B.Tech Computer Science",
        icon: "fa-graduation-cap",
        color: "accent",
      },
      {
        label: "Certifications",
        value: "5+ Technical Certs",
        icon: "fa-certificate",
        color: "secondary",
      },
      {
        label: "Projects",
        value: "4+ Projects",
        icon: "fa-code",
        color: "green-500",
      },
    ],
  },
  frontendSkills: [
    { name: "HTML/CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React.js", percentage: 80 },
    { name: "Next.js", percentage: 75 },
    { name: "Tailwind CSS", percentage: 85 },
  ],
  backendSkills: [
    { name: "Node.js", percentage: 75 },
    { name: "Express.js", percentage: 70 },
    { name: "MongoDB", percentage: 70 },
    { name: "SQL", percentage: 65 },
    { name: "Python", percentage: 60 },
  ],
  serviceSkills: [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with modern JavaScript frameworks and libraries.",
      icon: "fas fa-code",
      technologies: [
        "React",
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "HTML/CSS",
      ],
      color: "primary",
    },
    {
      title: "Backend Development",
      description:
        "Creating scalable server-side applications and APIs to power web applications.",
      icon: "fas fa-server",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      color: "secondary",
    },
    {
      title: "Full-Stack Development",
      description:
        "End-to-end application development from database design to user interface implementation.",
      icon: "fas fa-layer-group",
      technologies: [
        "MERN Stack",
        "Next.js",
        "RESTful APIs",
        "Database Design",
      ],
      color: "accent",
    },
    {
      title: "Responsive Design",
      description:
        "Creating web applications that work seamlessly across all devices and screen sizes.",
      icon: "fas fa-mobile-alt",
      technologies: ["Media Queries", "Flexbox", "CSS Grid", "Tailwind CSS"],
      color: "pink-500",
    },
  ],
  toolsSkills: [
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "VS Code", icon: "fas fa-code" },
    { name: "npm", icon: "fab fa-npm" },
    { name: "Terminal", icon: "fas fa-terminal" },
  ],
  skillCards: [
    {
      name: "HTML/CSS",
      icon: "fab fa-html5",
      description:
        "Crafting semantic and accessible web pages with modern HTML5 and CSS3 standards.",
      color: "pink-500",
    },
    {
      name: "Javascript",
      icon: "fab fa-js-square",
      description:
        "Implementing dynamic and interactive features using JavaScript ES6+ syntax and best practices.",
      color: "pink-500",
    },
    {
      name: "React.js",
      icon: "fab fa-react",
      description:
        "Building interactive user interfaces with reusable components and efficient state management for modern web applications.",
      color: "pink-500",
    },
    {
      name: "Next.js",
      icon: "fas fa-code",
      description:
        "Developing fast, SEO-friendly applications with server-side rendering and static site generation capabilities.",
      color: "pink-500",
    },
    {
      name: "Node.js",
      icon: "fab fa-node-js",
      description:
        "Creating scalable backend services and APIs that power responsive and dynamic web applications.",
      color: "pink-500",
    },
    {
      name: "Express.js",
      icon: "fas fa-server",
      description:
        "Building robust server-side applications with minimalist and flexible Node.js web framework.",
      color: "pink-500",
    },
    {
      name: "MongoDB",
      icon: "fas fa-database",
      description:
        "Implementing flexible, document-based database solutions for modern web applications.",
      color: "pink-500",
    },
    {
      name: "Tailwind CSS",
      icon: "fas fa-paint-brush",
      description:
        "Crafting responsive, utility-first designs that streamline the development process and maintain consistency.",
      color: "pink-500",
    },
    {
      name: "JavaScript",
      icon: "fab fa-js-square",
      description:
        "Utilizing core language features to create dynamic and interactive web experiences.",
      color: "pink-500",
    },
    {
      name: "Python",
      icon: "fab fa-python",
      description:
        "Implementing data processing, analysis, and machine learning solutions for various applications.",
      color: "pink-500",
    },
    {
      name: "PostgreSQL",
      icon: "fas fa-database",
      description:
        "Utilizing relational database management systems for structured data storage and complex queries.",
      color: "pink-500",
    },
    {
      name: "Git",
      icon: "fab fa-git-alt",
      description:
        "Maintaining version control and facilitating collaboration through distributed repository management.",
      color: "pink-500",
    },
  ],
  otherSkills: [
    { name: "Responsive Design", icon: "fas fa-mobile-alt", stars: 4.5 },
    { name: "User Authentication", icon: "fas fa-user-lock", stars: 4 },
    { name: "Database Management", icon: "fas fa-database", stars: 4 },
    { name: "Version Control", icon: "fas fa-code-branch", stars: 4.5 },
  ],
  projects: [
    {
      id: 1,
      title: "J M Shah & Co. - Industrial Products Website",
      description:
        "A full-fledged product catalog and inquiry system for an industrial supplier with dynamic listings, customer inquiry system, and admin panel for product management.",
      image:
        "https://images.unsplash.com/photo-1578852612716-854e527abf2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Web Apps",
      technologies: ["Next.js", "Tailwind CSS", "Express.js"],
      liveUrl: "https://jmshahandco.com/",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "EDUZONE - Educational Resources Platform",
      description:
        "A MERN stack-based educational platform providing study materials, quizzes, and video courses with secure user authentication and role-based access.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Web Apps",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Crowdfunding Website",
      description:
        "A MERN-based fundraising platform supporting environmental initiatives with real-time donation tracking, donor leaderboard, and educational content.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Web Apps",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "House Rent Prediction Model",
      description:
        "A machine learning model using Python to predict rental prices in Ahmedabad based on key housing attributes with data preprocessing and model optimization.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Data Science",
      technologies: ["Python", "scikit-learn", "Data Analysis"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  experiences: [
    {
      id: 1,
      role: "SDE Intern",
      company: "J M Shah & Co.",
      duration: "November 2024 - Present",
      description:
        "Developed and deployed a web-based platform for J M Shah & Co., enhancing their digital presence. Collaborated with a teammate to ensure the website meets industry standards and goes live smoothly.",
      technologies: ["Next.js", "Tailwind CSS", "Express.js"],
      color: "primary",
    },
    {
      id: 2,
      role: "Web Developer Intern",
      company: "Nuclear Power Corporation of India Limited",
      duration: "February 2024 - March 2024",
      description:
        "Designed and optimized web applications to automate internal processes and enhance operational efficiency. Worked with cross-functional teams to develop user-friendly interfaces and improve accessibility.",
      technologies: ["HTML/CSS", "JavaScript", "Responsive Design","PHP","React"],
      color: "secondary",
    },
  ],
  education: {
    degree: "B.Tech. in Computer Science",
    institution: "L J Institute Of Engineering and Technology, Ahmedabad",
    duration: "2021 - 2025",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science, focusing on software development and web technologies.",
    subjects: [],
  },
  contactInfo: {
    email: "milanbhimani0001@gmail.com",
    phone: "+91 7016215529",
    location: "Ahmedabad, India",
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Milan0702",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: "fab fa-linkedin-in",
    },
  ],
  certificates: [
    {
      name: "The Complete 2024 Web Development Bootcamp",
      issuer: "Dr. Angela Yu, Udemy",
      date: "October 2024",
      url: "https://www.udemy.com/certificate/UC-7bb9f600-fa49-4fec-8041-0034d852af50/",
    },
    {
      name: "Algorithmic Thinking (Part 1)",
      issuer: "Rice University",
      date: "December 2023",
      url: "https://www.coursera.org/account/accomplishments/certificate/CMYTRDX4H6LE",
    },
    {
      name: "Algorithmic Thinking (Part 2)",
      issuer: "Rice University",
      date: "December 2023",
      url: "https://www.coursera.org/account/accomplishments/certificate/TY2XNUDBQRS5",
    },
    {
      name: "HTML, CSS, and JavaScript for Web Developers",
      issuer: "Johns Hopkins University",
      date: "January 2023",
      url: "https://www.coursera.org/account/accomplishments/certificate/KQYLR9XNFS4G",
    },
    {
      name: "Data Structures",
      issuer: "University of California San Diego",
      date: "August 2022",
      url: "https://www.coursera.org/account/accomplishments/certificate/BG3HK6MJBK2Y",
    },
    {
      name: "Machine Learning with Python",
      issuer: "IBM",
      date: "August 2022",
      url: "https://www.coursera.org/account/accomplishments/certificate/UBWLJ66TZACE",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1tuw68a24SO4_VwDx2NYyZZppetLF-fdT/view?usp=sharing",
};

export default data;
