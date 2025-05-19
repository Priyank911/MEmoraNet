// components/DashboardNavbar.jsx
import React from "react";
import { UserButton } from "@clerk/clerk-react";

export default function chatcredential() {
  return (
    <nav className="w-full max-w-screen sticky top-0 z-10 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="MEmoraNet Logo"
          className="w-8 h-7 object-contain"
        />
        <span className="text-gray-500 dark:text-gray-400">/</span>
        <span className="text-lg font-extrabold tracking-tight dark:text-white">
          MEmoraNet
        </span>
      </div>
      <div className="flex items-center gap-3">
        <UserButton />
      </div>
    </nav>
  );
}
