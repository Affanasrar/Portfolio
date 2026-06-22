// @flow strict

import { skillsData } from "@/utils/data/skills";
import { FiCpu } from "react-icons/fi";

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-[#f7f3ea1a] py-16 lg:py-24">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d98f45]">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#f7f3ea] sm:text-4xl">
          A stack built around full-stack delivery and deployable systems.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillsData.map((group) => (
          <article
            key={group.title}
            className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#d98f451a] text-[#ffd29f]">
                <FiCpu size={21} />
              </span>
              <h3 className="text-xl font-bold text-[#f7f3ea]">{group.title}</h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-[#f7f3ea1a] bg-[#11100f] px-3 py-2 text-sm text-[#d8d0c2]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
