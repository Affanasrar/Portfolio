// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdDownload, MdOutlineMail } from "react-icons/md";

const highlights = [
  { label: "Current focus", value: "Full-stack web apps" },
  { label: "Cloud practice", value: "AWS, Docker, ECS" },
  { label: "Based in", value: "Karachi, Pakistan" },
];

function HeroSection() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-md border border-[#32d6b34d] bg-[#32d6b312] px-3 py-2 text-sm font-medium text-[#32d6b3]">
            Undergraduate CS Student | Full-Stack Developer | Instructor
          </p>

          <h1 className="text-5xl font-black leading-[1.02] text-[#f7f3ea] sm:text-6xl lg:text-7xl">
            Affan Ahmed
          </h1>

          <p className="mt-5 max-w-2xl text-xl leading-8 text-[#d8d0c2] sm:text-2xl">
            {personalData.headline}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#b8b0a2] sm:text-lg">
            I build responsive interfaces, practical dashboards, database-backed systems, and cloud deployment projects while sharpening my craft through teaching and internships.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#32d6b3] px-5 py-3 font-semibold text-[#10100f] transition-transform hover:-translate-y-0.5"
            >
              <MdOutlineMail size={20} />
              Contact Me
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md border border-[#f7f3ea26] bg-[#1a1815] px-5 py-3 font-semibold text-[#f7f3ea] transition-colors hover:border-[#d98f45] hover:text-[#ffd29f]"
            >
              <MdDownload size={20} />
              Download CV
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Link
              href={personalData.github}
              target="_blank"
              aria-label="GitHub profile"
              className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815] p-3 text-[#f7f3ea] transition-colors hover:border-[#32d6b3] hover:text-[#32d6b3]"
            >
              <BsGithub size={21} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              aria-label="LinkedIn profile"
              className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815] p-3 text-[#f7f3ea] transition-colors hover:border-[#32d6b3] hover:text-[#32d6b3]"
            >
              <BsLinkedin size={21} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              aria-label="X profile"
              className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815] p-3 text-[#f7f3ea] transition-colors hover:border-[#32d6b3] hover:text-[#32d6b3]"
            >
              <FaXTwitter size={21} />
            </Link>
            <Link
              href={personalData.instagram}
              target="_blank"
              aria-label="Instagram profile"
              className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815] p-3 text-[#f7f3ea] transition-colors hover:border-[#32d6b3] hover:text-[#32d6b3]"
            >
              <FaInstagram size={21} />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:ml-auto">
          <div className="overflow-hidden rounded-lg border border-[#f7f3ea26] bg-[#1a1815] shadow-2xl shadow-black/40">
            <Image
              src={personalData.profile}
              alt="Affan Ahmed"
              width={1024}
              height={1024}
              priority
              className="aspect-square w-full object-cover object-[56%_50%]"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d98f45]">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-[#f7f3ea]">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
