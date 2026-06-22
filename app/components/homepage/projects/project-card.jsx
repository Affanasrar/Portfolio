// @flow strict

import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-6 transition-colors hover:border-[#32d6b366]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#d98f45]">{project.role}</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f7f3ea]">{project.name}</h3>
        </div>

        {project.code && (
          <Link
            href={project.code}
            target="_blank"
            aria-label={`${project.name} source code`}
            className="rounded-md border border-[#f7f3ea1f] bg-[#11100f] p-3 text-[#f7f3ea] transition-colors hover:border-[#32d6b3] hover:text-[#32d6b3]"
          >
            <BsGithub size={20} />
          </Link>
        )}
      </div>

      <p className="mt-5 flex-1 text-sm leading-7 text-[#b8b0a2]">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-[#f7f3ea1a] bg-[#11100f] px-3 py-1.5 text-xs font-medium text-[#d8d0c2]"
          >
            {tool}
          </span>
        ))}
      </div>

      {project.demo && (
        <Link
          href={project.demo}
          target="_blank"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-[#32d6b3] px-4 py-2 text-sm font-semibold text-[#10100f] transition-transform hover:-translate-y-0.5"
        >
          Live Demo
          <FiExternalLink size={16} />
        </Link>
      )}
    </article>
  );
}

export default ProjectCard;
