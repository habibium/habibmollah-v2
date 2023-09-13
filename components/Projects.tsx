"use client";

import useSectionInView from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import { Fragment, useEffect, useState } from "react";
import Project from "./Project";
import { motion } from "framer-motion";

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref } = useSectionInView("Projects", 0.1);

  useEffect(() => {
    const projectsSection = document.getElementById("projects");

    if (!isExpanded && projectsSection) projectsSection.scrollIntoView();
  }, [isExpanded]);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {isExpanded
          ? projectsData.map((project, index) => (
              <Fragment key={index}>
                <Project {...project} />
              </Fragment>
            ))
          : projectsData.slice(0, 3).map((project, index) => (
              <Fragment key={index}>
                <Project {...project} />
              </Fragment>
            ))}
      </motion.div>
      <button
        id="show-all-button"
        className="mx-auto mt-8 block rounded-xl bg-black px-3 py-1 text-lg font-medium text-white dark:bg-white dark:text-black"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Show less" : "Show all"}
      </button>
    </section>
  );
}
