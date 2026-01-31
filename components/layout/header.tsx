import React from "react";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
}

export function Header({
  sidebarOpen,
  setSidebarOpen,
  setSearchOpen,
}: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex-none z-50">
      <div className="h-full px-4 flex items-center justify-between max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-6">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo.png" alt="Logo" width={70} height={52} />
          </Link>

          {/* Navigation */}
          {/*<nav className="hidden md:flex items-center gap-1">
            <NavLink href="/showcase">Showcase</NavLink>
            <NavLink href="/docs" active>
              Docs
            </NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/templates">Templates</NavLink>
          </nav>*/}
        </div>

        {/* Search */}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm text-gray-600"
        >
          <Search size={16} />
          <span className="hidden sm:inline">Search documentation...</span>
          <kbd className="hidden sm:inline-block px-2 py-0.5 bg-white border border-gray-300 rounded text-xs">
            ⌘K
          </kbd>
        </button>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href?: string;
  children?: React.ReactNode;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-gray-100 text-black"
          : "text-gray-600 hover:bg-gray-50 hover:text-black"
      }`}
    >
      {children}
    </a>
  );
}
