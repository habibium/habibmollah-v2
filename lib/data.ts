import { createElement } from "react";
import {
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandFirebase,
  TbBrandFramerMotion,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTailwind,
  TbBrandTypescript,
  TbMarkdown,
} from "react-icons/tb";
import { SiMui, SiNextdotjs } from "react-icons/si";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaSass } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tiktokFind from "@/public/tiktok-find.webp";
import affling from "@/public/affling.webp";
import gamepedia from "@/public/gamepedia.webp";
import calculator from "@/public/calculator-full.webp";
import portfolioV2 from "@/public/porfolio-v2.webp";
import moneymate from "@/public/moneymate-phone.webp";
import portfolioV1 from "@/public/portfolio-v1.webp";
import drumMachine from "@/public/drum-machine.webp";
import pomodoro from "@/public/pomodoro.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "TikTok Find (freelance project)",
    description:
      "Single vendor e-commerce site with admin panel and user & admin authentication. Products can be added, updated, deleted with ease.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Redux", "Firebase"],
    imageUrl: tiktokFind,
    sourceCode: "",
    live: "",
    demo: "https://youtu.be/_unb9NCeEaQ",
  },
  {
    title: "Affling (ongoing freelance project)",
    description:
      "A social-media like website for a affiliate marketing stuff, where people can register a profile and show there services",
    tags: ["Next.js", "TypeScript", "Zod", "...", "...", "..."],
    imageUrl: affling,
    sourceCode: "",
    live: "",
    demo: "",
  },
  {
    title: "GamePedia",
    description:
      "A multi-genre, multi-platform game discovery website with powerful search, multi level filtering and sorting",
    tags: ["TypeScript", "React", "Vite", "Chakra UI"],
    imageUrl: gamepedia,
    sourceCode: "https://github.com/HabibMollah/gamepedia",
    live: "https://gamepedia-pi.vercel.app/",
    demo: "",
  },
  {
    title: "React Calculator",
    description:
      "A calculator made with React that can do all arithmetic calculations",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: calculator,
    sourceCode: "",
    live: "",
    demo: "",
  },
  {
    title: "This portfolio",
    description: "The website you're looking at right now.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    imageUrl: portfolioV2,
    sourceCode: "",
    live: "",
    demo: "",
  },
  {
    title: "MoneyMate",
    description:
      "A simple but powerful expense tracker app with the ability to filter items with specific category.",
    tags: ["React", "Vite", "Daisy UI"],
    imageUrl: moneymate,
    sourceCode: "",
    live: "",
    demo: "",
  },
  {
    title: "Drum Machine",
    description: "A drum machine made with React 17",
    tags: ["React", "Vite"],
    imageUrl: drumMachine,
    sourceCode: "",
    live: "",
    demo: "",
  },
  {
    title: "Pomodoro",
    description:
      "A clock where you can set a timer for your work and for break. After you timer ends you will get notified and break timer will start. After the break ends your work timer will start. This will go on until you stop the timer or reset it.",
    tags: ["React", "Vite"],
    imageUrl: pomodoro,
    sourceCode: "",
    live: "",
    demo: "",
  },
  {
    title: "HTML CSS only Portfolio",
    description: "My first porfolio made only with HTML and CSS.",
    tags: ["HTML5", "CSS3"],
    imageUrl: portfolioV1,
    sourceCode: "",
    live: "",
    demo: "",
  },
] as const;

export const skillsData = [
  { name: "JavaScript", icon: createElement(TbBrandJavascript) },
  { name: "TypeScript", icon: createElement(TbBrandTypescript) },
  { name: "React", icon: createElement(TbBrandReact) },
  { name: "Next.js", icon: createElement(SiNextdotjs) },
  { name: "Framer Motion", icon: createElement(TbBrandFramerMotion) },
  { name: "Redux", icon: createElement(TbBrandRedux) },
  { name: "Firebase", icon: createElement(TbBrandFirebase) },
  { name: "Tailwind", icon: createElement(TbBrandTailwind) },
  { name: "MUI", icon: createElement(SiMui) },
  { name: "Bootstrap", icon: createElement(TbBrandBootstrap) },
  { name: "SASS", icon: createElement(FaSass) },
  { name: "CSS", icon: createElement(TbBrandCss3) },
  { name: "Markdown", icon: createElement(TbMarkdown) },
  { name: "HTML", icon: createElement(TbBrandHtml5) },
  { name: "Git", icon: createElement(TbBrandGit) },
] as const;

export const experiencesData = [
  {
    title: "Front-End Development Libraries Certification",
    location: "freeCodeCamp.org",
    description:
      "Through this course I learned to use popular front-end libraries which boost development speed like: Bootstrap, SASS, jQuery and Redux and mastered React.js. To achieve the certification, I had to submit 5 projects built with React: 1) Random quote machine, 2) Drum machine, 3) Markdown previewer, 4) Calculator, 5) Pomodoro (25 + 5) clock. These projects honed my React skills and taught me how to use it as a sword for creating interactive UI.",
    icon: createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "Advanced React and its Ecosystem",
    location: "codewithmosh.com",
    description:
      "I dived into React's giant ecosystem with many ways to handle routing, caching, data fetching, testing, animations, state management and so on.",
    icon: createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "TypeScript (Beginner to Advanced)",
    location: "codewithmosh.com",
    description:
      "JavaScript has a lot of limitations. It is a dynamically typed language. Because of the lack of a type system it behaves unexpectedly often. TypeScript is a superset of JavaScript that was made to overcome the limitations of JavaScript. I learned almost all the nitty gritty stuff about TypeScript in this course.",
    icon: createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "JavaScript Algorithms and Data Structures Certification",
    location: "freeCodeCamp.org",
    description:
      "I entered the world of programming with JavaScript. Along this course I learned the basic to advanced topics of a programming language particularly in JavaScript and solved many many problems, scripted many advance algorithms.",
    icon: createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Responsive Web Design Certification",
    location: "freeCodeCamp.org",
    description:
      "I gained a strong foundation of web development by learning the building blocks of the web HTML5 and CSS3 including semantic HTML elements, HTML Best Practices for SEO, CSS animations, media queries, box-model, flex, grid etc.",
    icon: createElement(LuGraduationCap),
    date: "2019",
  },
] as const;
