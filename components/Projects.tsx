"use client";

import useSectionInView from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import { Fragment } from "react";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, index) => (
        <Fragment key={index}>{project.title}</Fragment>
      ))}
    </section>
  );
}
