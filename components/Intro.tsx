"use client";

import { useActiveSectionContext } from "@/contexts/active-session-context";
import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0 lg:max-w-[70rem]"
    >
      <motion.h1
        className="mb-10 mt-4 select-none py-14 text-4xl font-extrabold leading-none !tracking-tighter sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem]"
        aria-label="Habib Mollah"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span
          data-content="Habibur"
          className="before:animate-gradient-background-1 relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:text-center before:text-black before:content-[attr(data-content)]"
        >
          <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 block bg-gradient-to-r bg-clip-text text-transparent">
            Habibur
          </span>
        </span>
        <span
          data-content="Rahman"
          className="before:animate-gradient-background-2 relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:text-center before:text-black before:content-[attr(data-content)]"
        >
          <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 block bg-gradient-to-r bg-clip-text text-transparent">
            Rahman
          </span>
        </span>
        <span
          data-content="Mollah"
          className="before:animate-gradient-background-3 relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:text-center before:text-black before:content-[attr(data-content)]"
        >
          <span className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 block bg-gradient-to-r bg-clip-text text-transparent">
            Mollah
          </span>
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none duration-300 hover:scale-110 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none duration-300 hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href="/Habib-Resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-x-1" />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 duration-300 hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/habibmollah"
          target="_blank"
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 duration-300 hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
