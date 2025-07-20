import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Afeef",
  lastName: "Firdaus",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineering Student | Available for Internship Aug 2025 - Feb 2026",
  avatar: "/images/avatar.jpg", // Replace with your own image if available
  email: "afeef.firdaus14@gmail.com",
  phone: "(+60)13-8163793",
  location: "Asia/Kuala_Lumpur", // IANA time zone identifier
  languages: ["English", "Bahasa"], // optional
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software development, tech tools, and my journey as a student developer.
    </>
  ),
};


const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/afeefnih", 
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/afeef-firdaus/", 
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  }
];



const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building impactful software through creativity and engineering</>,
  featured: {
    display: true,
    title: <>Recent Project: <strong className="ml-4">E-Khairat System</strong></>,
    href: "/work/e-khairat", // Update this once you create the page
  },
  subline: (
    <>
      I'm Afeef, a passionate Software Engineering student building full-stack solutions. From web to mobile apps, I enjoy solving problems using technology.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Kuala Lumpur, Malaysia.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/afeef-firdaus",  // You can replace this with Calendly or Google Calendar
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Software Engineering student with strong hands-on experience in backend development, API integration, and full-stack web solutions using Laravel, PHP, MySQL, and Docker. Developed real-world systems like a digital funeral fund platform (E-Khairat) and a containerized catering booking system with ToyyibPay integration. Passionate about solving community-based problems through impactful software. Fast learner and team player with a strong foundation in database logic and collaborative development. Currently maintaining a 3.67 CGPA and available for a full-time internship from 11 August 2025 to 11 February 2026.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Riconis Marketing",
        timeframe: "Jul 2024 - Oct 2024",
        role: "Technical Assistant",
        achievements: [
          <>
            Set up and configured photostat machines for clients, ensuring smooth installation and functionality.
          </>,
          <>
            Configured IP addresses and network routes to ensure seamless device communication and minimize downtime.
          </>,
          <>
            Provided technical support and troubleshooting during installations, contributing to high customer satisfaction.
          </>,
          <>
            Delivered efficient, timely setup services, ensuring smooth integration of equipment for clients.
          </>,
          <>
            Contributed to a 15% improvement in setup efficiency by streamlining configuration processes.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [

      {
        name: "Sijil Peperiksaan Malaysia",
        description: <>SPM (Malaysian Certificate of Education) · SMK Sungai Ramal · 2020</>,
      },
     
      {
        name: "Universiti Kuala Lumpur",
        description: <>Foundation in Computer Technology · CGPA: 3.77</>,
      },

       {
        name: "Universiti Kuala Lumpur",
        description: <>Bachelor of Information Technology (Hons) in Software Engineering · CGPA: 3.67</>,
      },
    ],
  },
  
  achievements: {
    display: true,
    title: "Achievements & Certifications",
    items: [
      {
        title: "Top Coders Malaysia 2024 – 3rd Place",
        description: "Achieved 3rd place out of 24 participants in Python programming, problem-solving, and critical thinking competition organized by Data Science Association, Thulija Technologies Sdn. Bhd., and UniKL MIIT, supported by MDEC.",
      },
      {
        title: "Dean's List Recognition",
        description: "Dean's list for Semester 1, 2, and 5 - consistently maintaining high academic performance throughout university studies.",
      },
      {
        title: "Google Project Management Professional Certificate",
        description: "Completed comprehensive project management certification program, gaining skills in project planning, execution, and stakeholder management.",
      },
      {
        title: "UMPSA Hackathon Participant",
        description: "Contributed to the development of Raska, a hunger mitigation app using Flutter, addressing food insecurity through innovative technological solutions.",
      },
    ],
  },

 technical: {
    display: true, 
    title: "Technical skills",
    skills: [
      {
        title: "Backend Development",
        description: <>Strong experience in Laravel, PHP, and MySQL for building scalable web applications with API integration and secure payment processing.</>,
        images: [
          {
            src: "/images/projects/E-Khairat/Cover.png",
            alt: "E-Khairat Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Full-Stack Development",
        description: <>Proficient in TALL Stack (Tailwind CSS, Alpine.js, Laravel, Livewire) and ASP.NET MVC with C# for comprehensive web solutions.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Mobile Development",
        description: <>Flutter application development with user authentication, data management, and cross-platform compatibility.</>,
        images: [
          {
            src: "/images/projects/Homestay/homestay.svg",
            alt: "Homestay App",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "DevOps & Containerization",
        description: <>Docker expertise for containerized deployment, environment management, and team collaboration workflows.</>,
        images: [
          {
            src: "/images/projects/project-figma/Reporting Dashboard.png",
            alt: "Project image",
            width: 16,
            height: 12,
          },
        ],
      },
    ],
    skillBadges: {
      display: true,
      title: "Technology Stack",
      badges: [
        { name: "PHP", icon: "php" },
        { name: "Python", icon: "python" },
        { name: "Java", icon: "java" },
        { name: "C#", icon: "csharp" },
        { name: "Laravel", icon: "laravel" },
        { name: "ASP.NET", icon: "dotnet" },
        { name: "Flutter", icon: "flutter" },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "TailwindCSS", icon: "tailwindcss" },
        { name: "MySQL", icon: "database" },
        { name: "SQLite", icon: "sqlite" },
        { name: "Docker", icon: "docker" },
        { name: "Git", icon: "git" },
        { name: "HTML5", icon: "html" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Alpine.js", icon: "alpinejs" },
        { name: "Livewire", icon: "laravel" },
        { name: "Dart", icon: "dart" },
        { name: "Visual Studio Code", icon: "vscode" },
        { name: "GitHub", icon: "github" },
      ]
    }
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
