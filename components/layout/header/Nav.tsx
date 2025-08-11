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
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`font-medium transition-all duration-300 ${
              isActive ? "text-cyan-50" : "text-cyan-200 hover:text-cyan-300"
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}
