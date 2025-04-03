// components/navbar.tsx
"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X, Building2, LogOut } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const handleLogout = () => {
    // Add your logout logic here (clear session, redirect, etc.)
    console.log("Logging out...");
  };
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Mobile menu toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Centered icon + name */}
        <div className="flex-1 flex justify-center lg:justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            <span className="font-semibold text-lg">YourCompany</span>
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="text-white hover:text-red-500"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
        {/* Empty right side on desktop */}
        <div className="hidden lg:flex gap-6" />
      </div>

      {/* Mobile menu - empty since no links */}
      {open && <div className="lg:hidden px-6 pb-4" />}
    </nav>
  );
}
