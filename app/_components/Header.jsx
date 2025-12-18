"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Header({ profile }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-metal-400 bg-hazard-100 px-2 py-3 sm:p-4">
      {profile?.role === "user" ? (
        <>
          <div className="flex items-center justify-between">
            <div className="relative flex flex-none basis-[80%] items-center">
              <input
                type="search"
                placeholder="Search items...."
                className="w-full border border-metal-400 p-2 pr-9 text-sm"
              />
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-metal-700" />
              </span>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <button
                onClick={() => setIsOpen((open) => !open)}
                aria-label="Open menu"
                className="flex items-center p-1 text-2xl md:hidden"
              >
                {isOpen ? (
                  "X"
                ) : (
                  <Bars3Icon className="h-7 w-7 text-metal-800" />
                )}
              </button>
            </div>
          </div>

          {isOpen && <Navigation profile={profile} />}
        </>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <div className="relative mb-2 flex w-full items-center">
              <input
                type="search"
                placeholder="Admin Search ...."
                className="w-full border border-metal-400 p-2 pr-9 text-sm"
              />
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-metal-700" />
              </span>
            </div>
          </div>

          <Navigation profile={profile} />
        </>
      )}
    </header>
  );
}

export default Header;
