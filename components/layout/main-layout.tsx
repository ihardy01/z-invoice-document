"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setSearchOpen={setSearchOpen}
      />

      {/* Body Wrapper */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        {/* Main Content Container - Nơi chứa nội dung của từng page */}
        <main className="flex-1 overflow-y-auto min-w-0 bg-white">
          {children}
        </main>
      </div>

      {/* Search Modal (Global) */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
          <div
            className="bg-white p-4 rounded cursor-pointer"
            onClick={() => setSearchOpen(false)}
          >
            Close Search (Placeholder)
          </div>
        </div>
      )}
    </div>
  );
}
