import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Afeef",
  lastName: "Firdaus",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineering Student | Seeking Internship",
  avatar: "/images/avatar.jpg", // Replace with your own image if available
  email: "afeefz2003@gmail.com",
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
    href: "/work/e-khairat-system", // Update this once you create the page
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
    link: "https://cal.com",  // You can replace this with Calendly or Google Calendar
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Afeef is a final-year Software Engineering student at Universiti Kuala Lumpur specializing in fullstack development. With strong communication and problem-solving skills, he creates applications that simplify daily tasks and improve user experiences. His proudest project, E-Khairat, digitally transforms funeral welfare contribution management. When not coding, Afeef enjoys exploring new places through hiking, swimming, and travel-bringing fresh perspectives to his technical work. He's currently seeking internship opportunities in innovative environments, with particular interest in fintech applications.
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
        description: <>Bachelor of Information Technology (Hons) in Software Engineering · CGPA: 3.69</>,
      },
    ],
  },

 technical: {
    display: true, 
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma for my Assignment Project</>,
        images: [
          {
            src: "/images/projects/project-figma/Reporting Dashboard.Png",
            alt: "Project image",
            width: 16,
            height: 12,
          },
          {
            src: "/images/projects/project-figma/Registration Module.Png",
            alt: "Project image",
            width: 16,
            height:8,
          },
        ],
      },
      {
        title: "Laravel",
        description: <>Building robust web applications using Laravel with MySQL and TALL Stack.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
    skillBadges: {
      display: true,
      title: "Technology Stack",
      badges: [
        { name: "C#", icon: "csharp" },
        { name: "HTML5", icon: "html" },
        { name: "Java", icon: "java" },
        { name: "PHP", icon: "php" },
        { name: "Dart", icon: "dart" },
        { name: "JavaScript", icon: "javascript" },
        { name: "DigitalOcean", icon: "digitalocean" },
        { name: ".Net", icon: "dotnet" },
        { name: "Alpine.js", icon: "alpinejs" },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "DaisyUI", icon: "daisyui" },
        { name: "Filament", icon: "filament" },
        { name: "Flutter", icon: "flutter" },
        { name: "Laravel", icon: "laravel" },
        { name: "JavaFX", icon: "javafx" },
        { name: "NPM", icon: "npm" },
        { name: "TailwindCSS", icon: "tailwindcss" },
        { name: "Nginx", icon: "nginx" },
        { name: "Apache", icon: "apache" },
        { name: "MySQL", icon: "database" },
        { name: "SQLite", icon: "sqlite" },
        { name: "Figma", icon: "figma" },
        { name: "Git", icon: "git" },
        { name: "GitHub Actions", icon: "githubactions" },
        { name: "Docker", icon: "docker" },
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
