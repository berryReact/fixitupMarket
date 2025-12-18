"use client";

import AdminNavigation from "./AdminNavigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function AdminHeader({ profile }) {
  return (
    <header className="border-b border-metal-400 bg-hazard-100 px-2 py-3 sm:p-4">
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

      <AdminNavigation profile={profile} />
    </header>
  );
}

export default AdminHeader;
