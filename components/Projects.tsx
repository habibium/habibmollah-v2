"use client";

import useSectionInView from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import { Fragment } from "react";
import Project from "./Project";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </motion.div>
    </section>
  );
}
