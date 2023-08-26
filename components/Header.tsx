"use client";

import { useActiveSectionContext } from "@/contexts/active-session-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  console.log(Date.now());
  return (
    <header className="relative z-[999]">
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[inital] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <Link
              className={clsx(
                "flex w-full items-center justify-center p-3 duration-300 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-100",
                {
                  "!text-gray-950 dark:!text-gray-50":
                    activeSection === link.name,
                },
              )}
              href={link.hash}
              key={link.name}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
