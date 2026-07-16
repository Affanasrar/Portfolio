// @flow strict

import { FiCheckCircle, FiClock, FiServer, FiTrendingUp } from "react-icons/fi";

const specialties = [
  "SaaS",
  "Admin Panels",
  "Dashboards",
  "AI Apps",
  "Cloud Deployment",
  "REST APIs",
];

const metrics = [
  { value: "8+", label: "Projects built" },
  { value: "300+", label: "GitHub commits" },
  { value: "2+", label: "Years coding" },
  { value: "100+", label: "Students taught" },
];

const proofPoints = [
  { icon: FiServer, text: "Ship production-ready APIs, integrations, and deployment workflows." },
  { icon: FiTrendingUp, text: "Turn product ideas into recruiter-friendly demos with measurable outcomes." },
  { icon: FiClock, text: "Build quickly without skipping the structure needed for scale." },
];

function WhatIBuild() {
  return (
    <section className="scroll-mt-24 border-t border-[#f7f3ea1a] py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d98f45]">
            What I Build
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold text-[#f7f3ea] sm:text-4xl">
            I specialize in products recruiters can understand in one glance.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {specialties.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] px-4 py-4"
              >
                <FiCheckCircle className="shrink-0 text-[#32d6b3]" size={20} />
                <span className="text-base font-semibold text-[#f7f3ea]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-6"
            >
              <p className="text-4xl font-black text-[#32d6b3] sm:text-5xl">{item.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#d98f45]">
                {item.label}
              </p>
            </div>
          ))}

          <div className="sm:col-span-2 rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d98f45]">
              Proof
            </p>
            <div className="mt-5 grid gap-4">
              {proofPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon className="mt-0.5 shrink-0 text-[#32d6b3]" size={20} />
                    <p className="text-sm leading-6 text-[#d8d0c2]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIBuild;