// @flow strict

import { educations } from "@/utils/data/educations";
import { FiBookOpen, FiMapPin } from "react-icons/fi";

function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-[#f7f3ea1a] py-16 lg:py-24">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d98f45]">
          Education
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#f7f3ea] sm:text-4xl">
          Computer science foundation with a practical project track.
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {educations.map((education) => (
          <article
            key={education.id}
            className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#d98f451a] text-[#ffd29f]">
                <FiBookOpen size={24} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#d98f45]">{education.duration}</p>
                <h3 className="mt-2 text-xl font-bold text-[#f7f3ea]">{education.title}</h3>
                <p className="mt-1 text-base text-[#d8d0c2]">{education.institution}</p>
                <p className="mt-3 flex items-center gap-2 text-sm text-[#b8b0a2]">
                  <FiMapPin size={16} />
                  {education.location}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
