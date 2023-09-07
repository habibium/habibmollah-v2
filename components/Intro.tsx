"use client";

import { useActiveSectionContext } from "@/contexts/active-session-context";
import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import HeroVideo from "./HeroVideo";
import { useEffect, useRef } from "react";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const codeRef = useRef<HTMLSpanElement>(null);

  // Hacker Effect
  useEffect(() => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    // Run the hacker effect every 2 seconds
    const intervalOne = setInterval(() => {
      let iterations = 0;
      // Change each character every 0.1 seconds
      const intervalTwo = setInterval(() => {
        if (codeRef.current) {
          codeRef.current.innerText = codeRef.current.innerText
            .split("")
            .map((letter, index) => {
              if (index < iterations) return "code"[index];
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
          if (iterations >= 4) clearInterval(intervalTwo);
          iterations++;
        }
      }, 100);
    }, 2000);

    return () => clearInterval(intervalOne);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mt-32 flex max-w-[80rem] scroll-mt-[100rem] flex-col-reverse items-start gap-8 text-center md:flex-row lg:max-w-[90rem]"
    >
      <div>
        <div className="mb-4">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="ml-2 text-left text-lg font-extralight"
          >
            Hey! I'm
          </motion.p>
          <motion.h1
            className="mx-auto select-none text-5xl font-extrabold leading-none !tracking-tighter sm:text-6xl md:text-8xl lg:text-8xl"
            aria-label="Habib Mollah"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span
              data-content="Habib"
              className="relative inline-block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:inline-block before:w-full before:animate-gradient-background-1 before:text-center before:text-black before:content-[attr(data-content)] before:dark:text-white"
            >
              <span className="inline-block animate-gradient-foreground-1 bg-gradient-to-r from-gradient-1-start to-gradient-1-end bg-clip-text px-1 text-transparent">
                Habib
              </span>
            </span>{" "}
            <span
              data-content="Mollah"
              className="relative inline-block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:inline-block before:w-full before:animate-gradient-background-2 before:text-center before:text-black before:content-[attr(data-content)] before:dark:text-white"
            >
              <span className="inline-block animate-gradient-foreground-2 bg-gradient-to-r from-gradient-2-start to-gradient-2-end bg-clip-text text-transparent">
                Mollah
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-xl text-gray-600 dark:text-gray-300"
          >
            A front-end engineer crafting imagination through{" "}
            <span
              ref={codeRef}
              className="bg-black px-1 py-[1px] font-mono text-green-400"
            >
              code
            </span>
            .
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 text-center text-sm text-gray-400"
          >
            Fun fact: I really really LOVE TypeScript and React.js
          </motion.p>
        </div>
        <motion.div
          className="mt-2 flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
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
          <div className="flex gap-2">
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-gray-900 px-2 py-1 text-xs text-white outline-none duration-300 hover:scale-110 focus:scale-110 active:scale-105 sm:px-7 sm:py-3"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
            </Link>
            <a
              className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-2 py-1 text-xs outline-none duration-300 hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 sm:px-7 sm:py-3"
              href="/Habib-Resume.pdf"
              download
            >
              Download Resume{" "}
              <HiDownload className="opacity-60 transition group-hover:translate-x-1" />
            </a>
          </div>
          <div className="flex">
            <a
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-1 text-gray-700 duration-300 hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60 sm:p-3"
              href="https://www.linkedin.com/in/habib-ibn-tofazzal/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/habibmollah"
              target="_blank"
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-1 text-gray-700 duration-300 hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60 sm:p-3"
            >
              <FaGithubSquare />
            </a>
          </div>
        </motion.div>
      </div>
      <HeroVideo />
    </section>
  );
}
