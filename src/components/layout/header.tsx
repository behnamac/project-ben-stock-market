"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/images/logo.png"
              alt="Signalist"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-white">Signalist</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="yellow-btn">
              Get Started
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
