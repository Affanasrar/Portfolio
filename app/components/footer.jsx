// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MdDownload } from "react-icons/md";

function Footer() {
  return (
    <footer className="border-t border-[#f7f3ea1a] bg-[#11100f] text-[#f7f3ea]">
      <div className="mx-auto flex flex-col gap-4 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:max-w-[72rem] xl:max-w-[80rem] 2xl:max-w-[92rem]">
        <p className="text-sm text-[#b8b0a2]">
          © {new Date().getFullYear()} {personalData.name}. Built with Next.js.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            target="_blank"
            href={personalData.github}
            className="inline-flex items-center gap-2 rounded-md border border-[#f7f3ea1f] px-3 py-2 text-sm text-[#d8d0c2] transition-colors hover:border-[#32d6b3] hover:text-[#32d6b3]"
          >
            <BsGithub />
            GitHub
          </Link>
          <Link
            target="_blank"
            href={personalData.resume}
            className="inline-flex items-center gap-2 rounded-md border border-[#f7f3ea1f] px-3 py-2 text-sm text-[#d8d0c2] transition-colors hover:border-[#d98f45] hover:text-[#ffd29f]"
          >
            <MdDownload />
            CV
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
