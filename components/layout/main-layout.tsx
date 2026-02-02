"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    // Sử dụng h-[100dvh] để fix lỗi chiều cao trên trình duyệt mobile
    <div className="h-screen h-[100dvh] flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setSearchOpen={setSearchOpen}
      />

      {/* Body Wrapper */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        {/* Main Content Container */}
        <main className="flex-1 overflow-y-auto min-w-0 bg-white scroll-smooth">
          {children}
        </main>
      </div>

      {/* Search Modal (Global) */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-start justify-center pt-20">
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
