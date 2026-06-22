"use client";
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { isValidEmail } from "@/utils/check-email";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";

function ContactForm() {
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendMail = (event) => {
    event.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    if (!isValidEmail(userInput.email)) {
      setError("Please provide a valid email address.");
      return;
    }

    setError("");

    const subject = encodeURIComponent(`Portfolio inquiry from ${userInput.name}`);
    const body = encodeURIComponent(
      `Name: ${userInput.name}\nEmail: ${userInput.email}\n\n${userInput.message}`
    );

    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="rounded-md border border-[#f7f3ea1f] bg-[#1a1815cc] p-5 sm:p-6" onSubmit={handleSendMail}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d98f45]">
        Send a message
      </p>
      <p className="mt-3 text-sm leading-6 text-[#b8b0a2]">
        I am open to internships, junior full-stack opportunities, cloud-focused projects, and collaborative builds.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm text-[#d8d0c2]">
          Name
          <input
            className="rounded-md border border-[#f7f3ea26] bg-[#11100f] px-3 py-3 text-[#f7f3ea] outline-none transition-colors focus:border-[#32d6b3]"
            type="text"
            maxLength="100"
            value={userInput.name}
            onChange={(event) => setUserInput({ ...userInput, name: event.target.value })}
          />
        </label>

        <label className="grid gap-2 text-sm text-[#d8d0c2]">
          Email
          <input
            className="rounded-md border border-[#f7f3ea26] bg-[#11100f] px-3 py-3 text-[#f7f3ea] outline-none transition-colors focus:border-[#32d6b3]"
            type="email"
            maxLength="100"
            value={userInput.email}
            onChange={(event) => setUserInput({ ...userInput, email: event.target.value })}
          />
        </label>

        <label className="grid gap-2 text-sm text-[#d8d0c2]">
          Message
          <textarea
            className="min-h-36 rounded-md border border-[#f7f3ea26] bg-[#11100f] px-3 py-3 text-[#f7f3ea] outline-none transition-colors focus:border-[#32d6b3]"
            maxLength="700"
            value={userInput.message}
            onChange={(event) => setUserInput({ ...userInput, message: event.target.value })}
          />
        </label>
      </div>

      {error && <p className="mt-4 text-sm text-[#ff9a9a]">{error}</p>}

      <button
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#32d6b3] px-5 py-3 font-semibold text-[#10100f] transition-transform hover:-translate-y-0.5"
        type="submit"
      >
        Send Email
        <TbMailForward size={20} />
      </button>
    </form>
  );
}

export default ContactForm;
