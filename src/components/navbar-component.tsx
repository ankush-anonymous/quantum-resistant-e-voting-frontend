// components/navbar.tsx
"use client"

import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Menu, X, Building2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Navbar() {
  const [open, setOpen] = useState(false)

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

        {/* Empty right side on desktop */}
        <div className="hidden lg:flex gap-6" />
      </div>

      {/* Mobile menu - empty since no links */}
      {open && <div className="lg:hidden px-6 pb-4" />}
    </nav>
  )
}
