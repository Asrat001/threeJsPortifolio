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

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projrct",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
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

const experiences = [
  {
    title: "Junior web Developer",
    company_name: "Exceed IT Systems | Internship",
    icon: starbucks,
    iconBg: "#383E56",
    date: "jun 2022 - sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancer ",
    company_name: "Upwork | Fever | Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - present ",
    points: [
      "designing and developing   seamless, intuitive, and visually stunning interfaces  for clients",

      "Implementing responsive design and ensuring cross-browser compatibility for the client delevered on timeline",
   
    ],
  },
  {
    title: "Web Developer",
    company_name: "maya Media | Internship",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Worked on System website  which help the company manage there data digitally  ",
      "Designed and implemented the user interface with it's backend supports",
  
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "for Clients",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining mobile application using React Native ",
      "Designed and implemented the user interface with it's backend supports",
      "Integrate Online Payement System",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "Client",
    company: "Upwork",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Aron Hunde",
    designation: "Collige",
    company: " Bhair dar Universsity",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Adwa Film Production",
    description:
      "React website for Production company  in ethiopia  integrated with framer motion for smoother user experience  ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Asrat001/adwa-films",
    link:"https://adwa-films.netlify.app/"
  },
  {
    name: "Company Landing Page",
    description:
      "React website for tech company  in ethiopia  integrated with framer motion for smoother user experience  ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Asrat001/technacy",
    link:"https://technacydraft.netlify.app/"
  },
  {
    name: "Skin Cancer detector App",
    description:
      "skin cancer detector mobile application using flutter for front end and cnn  model to process the image picked from the phone camera ",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Tenserflow",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Asrat001/Flutter_tflite_skin_cancer-",
    link:"https://github.com/Asrat001/Flutter_tflite_skin_cancer-"
  },
  {
    name: "E-commerce App",
    description:
      "e-commerce application to sell ethiopian traditional clothing integrated  with chapa online payment system ",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Express Js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Asrat001/React-Native-EcommApp",
    link: "https://expo.dev/@asru/Ethio-cultural?serviceType=classic&distribution=expo-go",
  },
];

export { services, technologies, experiences, testimonials, projects };
