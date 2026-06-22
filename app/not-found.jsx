// @flow strict

import Link from "next/link";

function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d98f45]">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold text-[#f7f3ea] sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-[#b8b0a2]">
        This page is not part of Affan&apos;s portfolio yet.
      </p>
      <Link
        className="mt-8 rounded-md bg-[#32d6b3] px-5 py-3 font-semibold text-[#10100f] transition-transform hover:-translate-y-0.5"
        href="/"
      >
        Go Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
