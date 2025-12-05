"use client";

import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

interface MobileNavProps {
  isMenuOpen: boolean;
  navItems: NavItem[];
  pathname: string;
  onClose: () => void;
}

export default function MobileNav({
  isMenuOpen,
  navItems,
  pathname,
  onClose,
}: MobileNavProps) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-400 ${isMenuOpen ? "block opacity-100" : "hidden opacity-0"}`}
    >
      <div className="flex flex-col space-y-4 py-6 border-t border-slate-200  backdrop-blur-lg rounded-b-2xl mt-4">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <div key={index}>
              <Link
                href={item.href}
                className={`block font-medium px-4 transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-cyan-100 hover:text-cyan-200"
                }`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
        <div className="px-4"></div>
      </div>
    </div>
  );
}
