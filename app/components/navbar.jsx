// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { MdDownload } from "react-icons/md";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-[90] -mx-5 border-b border-[#f7f3ea1a] bg-[#11100ee6] px-5 backdrop-blur-md sm:-mx-8 sm:px-8">
      <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-[#f7f3ea26] bg-[#1a1815] text-sm font-bold text-[#32d6b3] transition-colors group-hover:border-[#32d6b3]">
            AA
          </span>
          <span className="text-base font-semibold text-[#f7f3ea] sm:text-lg">
            {personalData.name}
          </span>
        </Link>

        <div className="flex flex-1 flex-wrap items-center justify-end gap-1.5 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-[#b8b0a2] transition-colors hover:bg-[#f7f3ea12] hover:text-[#f7f3ea]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={personalData.resume}
            target="_blank"
            className="ml-1 inline-flex items-center gap-2 rounded-md bg-[#32d6b3] px-3 py-2 font-semibold text-[#10100f] transition-transform hover:-translate-y-0.5"
          >
            <MdDownload size={18} />
            CV
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
