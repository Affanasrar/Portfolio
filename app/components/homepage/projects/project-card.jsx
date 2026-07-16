// @flow strict

import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-6 transition-colors hover:border-[#32d6b366]">
      <div className="overflow-hidden rounded-md border border-[#f7f3ea1a] bg-[#11100f]">
        <div className="relative aspect-[16/10]">
          <Image
            src={project.screenshot}
            alt={`Screenshot of ${project.name}`}
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11100f] via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 rounded-full border border-[#f7f3ea26] bg-[#11100fe6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#f7f3ea]">
            {project.role}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold text-[#f7f3ea]">{project.name}</h3>
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

      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#d98f45]">
        Problem solved
      </p>
      <p className="mt-2 flex-1 text-sm leading-7 text-[#b8b0a2]">{project.problem}</p>

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

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-md border border-[#f7f3ea1a] bg-[#11100f] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d98f45]">
            Features
          </p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#d8d0c2]">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#32d6b3]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-[#f7f3ea1a] bg-[#11100f] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d98f45]">
            Architecture
          </p>
          <p className="mt-3 text-sm leading-6 text-[#d8d0c2]">{project.architecture}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={project.code}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md border border-[#f7f3ea26] bg-[#11100f] px-4 py-2 text-sm font-semibold text-[#f7f3ea] transition-colors hover:border-[#32d6b3] hover:text-[#32d6b3]"
        >
          GitHub
          <BsGithub size={16} />
        </Link>

        {project.demo ? (
          <Link
            href={project.demo}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-md bg-[#32d6b3] px-4 py-2 text-sm font-semibold text-[#10100f] transition-transform hover:-translate-y-0.5"
          >
            Live Demo
            <FiExternalLink size={16} />
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-[#f7f3ea26] px-4 py-2 text-sm font-semibold text-[#b8b0a2]">
            Live Demo available on request
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
