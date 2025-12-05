"use client"

import Link from "next/link"

interface NavItem {
  href: string
  label: string
}

interface NavProps {
  navItems: NavItem[]
  pathname: string
}

export default function Nav({ navItems, pathname }: NavProps) {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-md group ${
              isActive
                ? "text-white"
                : "text-cyan-300/70 hover:text-white hover:bg-cyan-400/10"
            }`}
          >
            {item.label}
            {isActive && (
              <>
                <span className="absolute inset-0 bg-cyan-400/10 rounded-md"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></span>
              </>
            )}
          </Link>
        )
      })}
    </nav>
  )
}
