"use client";

import useSectionInView from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import { Fragment } from "react";
import Project from "./Project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
