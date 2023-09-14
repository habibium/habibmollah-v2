"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

type Props = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  demo,
  live,
  sourceCode,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8">
        <Image
          alt="Project image"
          src={imageUrl}
          // width={500}
          // height={500}
          loading="lazy"
          className="block h-[240px] w-full object-cover object-top sm:hidden"
        />
        <div className="flex h-full flex-col gap-3 px-5 py-7 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="flex justify-start gap-3">
            {live && (
              <a
                href={live}
                target="_blank"
                className="flex items-center gap-1 rounded-lg bg-red-300 px-2 text-black"
              >
                <HiOutlineExternalLink />
                Live
              </a>
            )}
            {
              <a
                href={sourceCode ? sourceCode : "#"}
                target="_blank"
                className={`flex ${
                  sourceCode ? "" : "cursor-not-allowed opacity-50"
                } items-center gap-1 rounded-lg bg-[#161b22] px-2 text-white`}
              >
                <FaGithub />
                {sourceCode ? "Code" : "Private"}
              </a>
            }
            {demo && (
              <a
                href={demo}
                target="_blank"
                className="flex items-center gap-1 rounded-lg bg-[#ff0000] px-2 text-white"
              >
                <FaYoutube />
                Video
              </a>
            )}
          </div>
          <ul className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-2 py-[2px] text-[0.575rem] font-medium uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project image"
          quality={95}
          loading="lazy"
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition duration-700 
          
          group-even:-left-40 
          
          group-even:right-[initial] 
          
          group-hover:-translate-x-3
          
          group-hover:-translate-y-3 
          
          group-hover:-rotate-[15deg]

          group-even:group-hover:translate-x-3
          group-even:group-hover:rotate-[15deg]
          sm:block
          "
        />
      </section>
    </motion.div>
  );
}
