// @flow strict

import { experiences } from "@/utils/data/experience";
import { FiBriefcase, FiMapPin } from "react-icons/fi";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-[#f7f3ea1a] py-16 lg:py-24">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d98f45]">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#f7f3ea] sm:text-4xl">
            Practical web work, teaching, and team development.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#b8b0a2]">
          Two current tracks define my growth: building production-minded web features and teaching the same fundamentals to others.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#32d6b31a] text-[#32d6b3]">
                <FiBriefcase size={24} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#d98f45]">{experience.duration}</p>
                <h3 className="mt-2 text-xl font-bold text-[#f7f3ea]">{experience.title}</h3>
                <p className="mt-1 text-base text-[#d8d0c2]">{experience.company}</p>
                <p className="mt-3 flex items-center gap-2 text-sm text-[#b8b0a2]">
                  <FiMapPin size={16} />
                  {experience.location}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#b8b0a2]">{experience.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
