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
import { FaSass } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import tiktokFind from "@/public/tiktok-find.webp";
import affling from "@/public/affling.webp";
import gamepedia from "@/public/gamepedia.webp";
import qwikit from "@/public/qwikit.png";
import calculator from "@/public/calculator-full.webp";
import portfolioV2 from "@/public/porfolio-v2.webp";
import moneymate from "@/public/moneymate-phone.webp";
import portfolioV1 from "@/public/portfolio-v1.webp";
import drumMachine from "@/public/drum-machine.webp";
import pomodoro from "@/public/pomodoro.webp";
import markdown from "@/public/mdpreviewer.png";
import quoteGenerator from "@/public/quote-generator.webp";
import ticTacToe from "@/public/tictactoe.png";
import rockPaperScissors from "@/public/rockpaperscissors.png";

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
    live: "https://tiktokfind.io/",
    demo: "https://youtu.be/_unb9NCeEaQ",
  },
  {
    title: "MySQL+ERN CRUD",
    description:
      "A full stack app I built all by myself in a weekend using MySQL, Express.js and Next.js 13 with server components.",
    tags: ["MySQL", "Express.js", "Next.js", "Server Components"],
    imageUrl: qwikit,
    sourceCode: "https://github.com/HabibMollah/qwikit-groceries",
    live: "https://qwikit-groceries-frontend.vercel.app/",
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
    title: "Affling (freelance project)",
    description:
      "A social-media like website for a affiliate marketing stuff, where people can register a profile and show there services",
    tags: ["Next.js", "TypeScript", "Zod", "...", "...", "..."],
    imageUrl: affling,
    sourceCode: "",
    live: "https://affling.vercel.app/",
    demo: "",
  },
  {
    title: "This portfolio",
    description: "The website you're looking at right now.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    imageUrl: portfolioV2,
    sourceCode: "https://github.com/HabibMollah/habibmollah-v2",
    live: "",
    demo: "",
  },
  {
    title: "Markdown Previewer",
    description:
      "Write in Markdown syntax and see the result in real time in GitHub style.",
    tags: ["React", "TypeScript", "MDX", "Vite"],
    imageUrl: markdown,
    sourceCode: "https://github.com/HabibMollah/markdown-previewer-fcc-project",
    live: "https://markdown-previewer-fcc-project.vercel.app/",
    demo: "",
  },
  {
    title: "Pomodoro",
    description:
      "Set a timer. Focus on you task meanwhile. Get notified when the time ends. Take a short break. Repeat.",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: pomodoro,
    sourceCode: "https://github.com/HabibMollah/pomodoro-fcc-project",
    live: "https://pomodoro-fcc-project.vercel.app/",
    demo: "",
  },
  {
    title: "React Calculator",
    description:
      "A calculator made with React that can do all arithmetic calculations",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: calculator,
    sourceCode: "https://github.com/HabibMollah/js-calculator-fcc-project",
    live: "https://js-calculator-fcc-project.vercel.app/",
    demo: "",
  },
  {
    title: "MoneyMate",
    description:
      "A simple but powerful expense tracker app with the ability to filter items with specific category.",
    tags: ["React", "TypeScript", "Vite", "Daisy UI"],
    imageUrl: moneymate,
    sourceCode: "https://github.com/HabibMollah/expense-tracker",
    live: "https://moneymate-ten.vercel.app/",
    demo: "",
  },
  {
    title: "Drum Machine",
    description: "A drum machine made with React 17",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: drumMachine,
    sourceCode: "https://github.com/HabibMollah/drum-machine-fcc-project",
    live: "https://drum-machine-fcc-project.vercel.app/",
    demo: "",
  },
  {
    title: "Quote Generator",
    description: "A beautiful quote generator made with React 17",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: quoteGenerator,
    sourceCode:
      "https://github.com/HabibMollah/random-quote-generator-fcc-project",
    live: "https://random-quote-generator-fcc-project.vercel.app/",
    demo: "",
  },
  {
    title: "React Tic-Tac-Toe",
    description: "The classic tic-tac-toe game.",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: ticTacToe,
    sourceCode: "https://github.com/HabibMollah/react-tic-tac-toe",
    live: "https://react-tic-tac-toe-indol.vercel.app/",
    demo: "",
  },
  {
    title: "React Rock Paper Scissors",
    description: "Play rock paper scissors with robot",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: rockPaperScissors,
    sourceCode: "https://github.com/HabibMollah/react-rock-paper-scissors",
    live: "https://react-rock-paper-scissors-gamma.vercel.app/",
    demo: "",
  },
  {
    title: "HTML CSS only Portfolio",
    description: "My first porfolio made only with HTML and CSS.",
    tags: ["HTML5", "CSS3"],
    imageUrl: portfolioV1,
    sourceCode: "https://github.com/HabibMollah/first-portfolio",
    live: "https://habibmollah.github.io/first-portfolio/",
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
    title: "Front End Engineer",
    location: "ImernTech",
    description:
      "I am working part-time as a front-end engineer within this organization. My stack is React, TypeScript, Next.js.",
    icon: createElement(MdWorkOutline),
    date: "2021 - present",
  },
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
