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
  onDownloadCV: () => void;
}

export default function MobileNav({
  isMenuOpen,
  navItems,
  pathname,
  onClose,
  onDownloadCV,
}: MobileNavProps) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
        isMenuOpen
          ? "max-h-96 opacity-100"
          : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-1 py-4 mt-4 border-t border-slate-800/50">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "text-white bg-cyan-400/10"
                  : "text-cyan-300/70 hover:text-white hover:bg-cyan-400/10"
              } ${isMenuOpen ? "fade-in-up" : ""}`}
              onClick={onClose}
              style={{
                animationDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {item.label}
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-cyan-400 rounded-r-full"></span>
              )}
            </Link>
          );
        })}
        <div className="px-4 pt-3 mt-2 border-t border-slate-800/50">
          <button
            onClick={() => {
              onDownloadCV();
              onClose();
            }}
            className="h-11 rounded-md flex items-center justify-center relative bg-transparent border-2 border-cyan-400/80 text-white hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-500/70 hover:border-cyan-400 px-5 py-5 text-lg font-semibold group transition-all duration-500  backdrop-blur-sm hover:scale-105 active:scale-95 overflow-hidden"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
