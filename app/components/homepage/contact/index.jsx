// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from "./contact-form";

const contactLinks = [
  {
    label: "Email",
    value: personalData.email,
    href: `mailto:${personalData.email}`,
    icon: MdAlternateEmail,
  },
  {
    label: "Phone",
    value: personalData.phone,
    href: `tel:${personalData.phoneHref}`,
    icon: FiPhone,
  },
  {
    label: "Location",
    value: personalData.address,
    href: "https://maps.google.com/?q=Karachi%2C%20Pakistan",
    icon: FiMapPin,
  },
];

const socials = [
  { href: personalData.github, label: "GitHub", icon: IoLogoGithub },
  { href: personalData.linkedIn, label: "LinkedIn", icon: BiLogoLinkedin },
  { href: personalData.twitter, label: "X", icon: FaXTwitter },
  { href: personalData.instagram, label: "Instagram", icon: FaInstagram },
];

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-[#f7f3ea1a] py-16 lg:py-24">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d98f45]">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#f7f3ea] sm:text-4xl">
          Let&apos;s build something useful.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="grid gap-4">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.label === "Location" ? "_blank" : undefined}
                className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-5 transition-colors hover:border-[#32d6b366]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#32d6b31a] text-[#32d6b3]">
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d98f45]">
                      {item.label}
                    </p>
                    <p className="mt-1 break-all text-base font-semibold text-[#f7f3ea]">
                      {item.value}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}

          <div className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d98f45]">
              Social
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    target="_blank"
                    href={item.href}
                    aria-label={item.label}
                    className="rounded-md border border-[#f7f3ea1f] bg-[#11100f] p-3 text-[#f7f3ea] transition-colors hover:border-[#32d6b3] hover:text-[#32d6b3]"
                  >
                    <Icon size={22} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
