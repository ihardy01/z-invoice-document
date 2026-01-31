import React from "react";

interface TOCItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export function TableOfContents({ children }: { children: React.ReactNode }) {
  return (
    <aside className="hidden xl:block w-64 sticky top-6 h-fit pl-6 border-l border-gray-200 ml-6">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
        Nội dung
      </h3>
      <nav className="space-y-3">{children}</nav>
    </aside>
  );
}

export function TOCItem({ href, children, active }: TOCItemProps) {
  return (
    <a
      href={href}
      className={`block text-sm transition-colors ${
        active ? "text-black font-medium" : "text-gray-600 hover:text-black"
      }`}
    >
      {children}
    </a>
  );
}
