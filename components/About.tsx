"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import useSectionInView from "@/lib/hooks";
import Image from "next/image";
import { TbBrandReact } from "react-icons/tb";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[80rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row lg:gap-16">
        <figure className="block max-w-[90vw] rounded-xl bg-[#222124] text-center sm:px-10 md:max-w-[60vw] md:px-24">
          <Image
            className="rounded-t-xl"
            width={1075.5}
            height={1018.5}
            alt="performance scores of this portfolio"
            src="/portfolio-performance-scores.webp"
          />
          <figcaption className="italic text-gray-400">
            Performance scores of this website
          </figcaption>
        </figure>
        <div className="text-center sm:text-xl">
          <p>
            I'm an experienced front-end developer,{" "}
            <span className="bg-[#efd81bbb] px-1 font-bold text-black dark:bg-blue-500">
              JavaScript
            </span>{" "}
            programmer and{" "}
            <span className="bg-blue-500/60 px-1 font-bold text-white">
              open source software
            </span>{" "}
            enthusiast.
          </p>
          <p>
            My focus is on creating <strong>modern</strong>{" "}
            <span className="font-bold text-green-500 dark:text-green-400">
              high-performance
            </span>{" "}
            websites and apps that <strong>excel</strong> in{" "}
            <span className="bg-pink-200 px-1 font-bold dark:bg-pink-500">
              design, functionality, accessibility, and user experience.
            </span>
          </p>
          <p>
            I'm currently contributing to the translation of the official
            <a
              href="https://bn-react-dev.vercel.app/"
              target="_blank"
              className="inline-block !text-[#139cc8] underline underline-offset-4"
            >
              <div className="flex items-center font-medium">
                <TbBrandReact /> React
              </div>
            </a>{" "}
            documentation into Bengali.
            <span className="font-bold italic"></span>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
