import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export const metadata = {
  title: "Notes | Affan Ahmed",
  description: "Future writing and project notes from Affan Ahmed.",
};

export default function BlogPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d98f45]">
          Notes
        </p>
        <h1 className="mt-3 text-4xl font-bold text-[#f7f3ea] sm:text-5xl">
          Writing space coming soon.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#b8b0a2]">
          I am keeping this page ready for technical notes, project breakdowns, and lessons from full-stack and cloud work. For now, my active work is easiest to follow on GitHub.
        </p>

        <Link
          href={personalData.github}
          target="_blank"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#32d6b3] px-5 py-3 font-semibold text-[#10100f] transition-transform hover:-translate-y-0.5"
        >
          <BsGithub size={20} />
          View GitHub
        </Link>
      </div>
    </section>
  );
}
