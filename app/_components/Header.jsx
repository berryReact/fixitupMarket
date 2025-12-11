"use client";

import { useState } from "react";
import Navigation from "./Navigation";

import { Bars3Icon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="px-2 py-4 sm:p-4">
      <div className="flex items-center justify-between">
        <div className="relative flex flex-none basis-[80%] items-center">
          <input
            type="search"
            placeholder="Search items...."
            className="border-metal-400 w-full border p-2 pr-9 text-sm"
          />
          <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
            <MagnifyingGlassIcon className="text-metal-700 h-5 w-5" />
          </span>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <button
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Open menu"
            className="flex items-center p-1 text-2xl md:hidden"
          >
            {isOpen ? "X" : <Bars3Icon className="text-metal-800 h-7 w-7" />}
          </button>
        </div>
      </div>
      {isOpen && <Navigation />}
    </header>
  );
}

export default Header;
