import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-[#f7f3ea1a] py-16 lg:py-24">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d98f45]">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#f7f3ea] sm:text-4xl">
            Selected builds from web, cloud, and machine learning.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#b8b0a2]">
          These projects are pulled from my CV and public GitHub profile, with emphasis on real systems and deployment practice.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
