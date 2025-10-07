"use client";

import Link from "next/link";
import { useState } from "react";

export function DashboardHeader() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-yellow-400 rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-white">Signalist</span>
          </div>

          <nav className="flex gap-8 text-sm">
            <Link
              href="/dashboard"
              className="text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1"
            >
              Dashboard
            </Link>
            <Link
              href="/search"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Search
            </Link>
            <Link
              href="/watchlist"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Watchlist
            </Link>
            <Link
              href="/news"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              News
            </Link>
          </nav>
        </div>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors"
          >
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium">JS</span>
            </div>
            <span className="text-sm font-medium text-white">Jane Smith</span>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform ${
                isProfileOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
              <div className="py-2">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Settings
                </Link>
                <Link
                  href="/help"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Help
                </Link>
                <hr className="my-2 border-gray-700" />
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                >
                  Sign Out
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
