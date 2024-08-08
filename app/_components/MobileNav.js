"use client";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function MobileNav({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={`flex flex-col gap-2 z-10 text-xl sm:hidden w-2/3 h-[100vh] absolute right-0 top-0  backdrop-blur-md transition-all duration-[3000] ease-in ${
          isOpen ? "translate-x-0" : "translate-x-full hidden"
        }`}
      >
        <button
          className="z-10 lg:hidden block self-end"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon className="size-10 z-10 pt-[10px]" />
        </button>
        <ul className="flex flex-col gap-2 items-center">
          <li>
            <Link
              href="/cabins"
              className="hover:text-accent-400 transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
              >
                <img
                  className="h-8 rounded-full"
                  src={session.user.image}
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
                <span>Guest area</span>
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <button
        className={`z-10 sm:hidden ${isOpen ? "hidden" : "block"}`}
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon className="size-10 z-10" />
      </button>
    </>
  );
}
