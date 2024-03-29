import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sushi,
  ibba,
  vinuri,
  mit,
  nagarra,
  codegen,
  rootcode,
  hemasc,
  enadoc,
  hemas,
  mas,
  unilever,
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Schedule",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Networking opportunities",
    icon: web,
  },
  {
    title: "Job opportunities",
    icon: mobile,
  },
  {
    title: "Industry insights",
    icon: backend,
  },
  {
    title: "Professional Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: nagarra,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const schedule = [
  {
    title: "Day 1 | 25th April",
    company_name: "Computing ",
    icon: mit,
    iconBg: "#383E56",
    date: "25th April 2023",
    points: [
      "MillenniumIT ESP",
      "Nagarro",
      "CodeGen International (Pvt) Ltd",
      "Rootcode",
      "Infomate",
      "Hemas Pharmaceuticals (Pvt) Ltd & Hemas Surgicals & Diagnostics (Pvt) Ltd",
      "Enadoc",
    ],
    logo: [mit, nagarra, codegen, rootcode, hemas, enadoc ],
  },
  {
    title: "Day 2 | 26th April",
    company_name: "Engineering | Business | Humanity & Sc",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "26th April 2023",
    points: [
      "MillenniumIT ESP",
      "CodeGen International (Pvt) Ltd",
      "Hemas",
      "Infomate",
      "Unilever ",
      "Nestle ",
      "Mas Holdings",
    ],
    logo: [mit,codegen, hemas, unilever, mas],
  },
];

const testimonials = [
  {
    testimonial:
      "Attending the Career Expo provided me with valuable opportunities for career exploration and networking. As the project manager, I gained experience in event planning and execution. I also secured an opportunity at MAS Holdings as a student participant. Overall, the experience has been remarkable and I highly recommend the Career Expo for professional development.",
    name: "Shashini Hewadewa",
    designation: "Executive - Talent Management",
    company: "MAS Holdings",
    image: sushi,
  },
  {
    testimonial:
      "Having attended Career Expo allowed me to network with a multitude of companies and understand their requirements of an ideal candidate. This experience definitely helped me professionally and I would recommend Career Expo for stepping stone for the future.",
    name: "Ibraheem Rifthie",
    designation: "Intern Mechanical Engineer",
    company: "Atlas Labs",
    image: ibba,
  },
  {
    testimonial:
      "The Career Expo opened the door for every undergraduate and fresh graduate to explore different career options and talk to industry professionals to find the right path for them. I was fortunate enough to get the opportunity to join and work with one of the best-known companies in the software industry thanks to the Career Expo organized by SLIIT. Attending the Career Expo will definitely be worth it.",
    name: "Vinuri Galagoda",
    designation: "Business Analyst - Graduate Trainee",
    company: "Codegen International",
    image: vinuri,
  },
];

const projects = [
];

const memories = [
  {
    name: "1",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "career expo",
        color: "blue-text-gradient",
      },
      {
        name: "2022",
        color: "green-text-gradient",
      },
      {
        name: "SLIIT",
        color: "pink-text-gradient",
      },
    ],
    image: company1,
  },
  {
    name: "2",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Professional development",
        color: "blue-text-gradient",
      },
      {
        name: "career expo",
        color: "green-text-gradient",
      },
      {
        name: "RACSLIIT",
        color: "pink-text-gradient",
      },
    ],
    image: company6,
  },
  {
    name: "2",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Career Expo",
        color: "green-text-gradient",
      },
      {
        name: "RACSLIIT",
        color: "pink-text-gradient",
      },
    ],
    image: company5,
  },
  {
    name: "3",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "MillenniumIT ESP",
        color: "blue-text-gradient",
      },
      {
        name: "IT",
        color: "green-text-gradient",
      },
      {
        name: "Career Expo",
        color: "pink-text-gradient",
      },
    ],
    image: company2,
  },
  {
    name: "4",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "infomate",
        color: "blue-text-gradient",
      },
      {
        name: "Career Expo",
        color: "green-text-gradient",
      },
      {
        name: "tech",
        color: "pink-text-gradient",
      },
    ],
    image: company7,
  },
  {
    name: "5",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "tech",
        color: "blue-text-gradient",
      },
      {
        name: "Career Expo",
        color: "green-text-gradient",
      },
      {
        name: "RACSLIIT",
        color: "pink-text-gradient",
      },
    ],
    image: company8,
  },
];

export { services, technologies, schedule, testimonials, projects, memories };
