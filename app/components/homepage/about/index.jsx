// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { FiBookOpen, FiCloud, FiCode } from "react-icons/fi";

const strengths = [
  {
    icon: FiCode,
    title: "Product-minded development",
    text: "I focus on clear interfaces, practical user flows, and systems that solve real operating problems.",
  },
  {
    icon: FiCloud,
    title: "Cloud deployment practice",
    text: "My projects include AWS ECS, EC2, RDS, S3, Docker, Terraform, monitoring, and CI/CD workflows.",
  },
  {
    icon: FiBookOpen,
    title: "Teaching while learning",
    text: "As a web development instructor, I explain concepts clearly and keep fundamentals sharp through practice.",
  },
];

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-[#f7f3ea1a] py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d98f45]">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#f7f3ea] sm:text-4xl">
            Building useful web products from strong fundamentals.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-9 text-[#d8d0c2]">{personalData.description}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-5"
                >
                  <Icon className="text-[#32d6b3]" size={24} />
                  <h3 className="mt-4 text-base font-semibold text-[#f7f3ea]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#b8b0a2]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
