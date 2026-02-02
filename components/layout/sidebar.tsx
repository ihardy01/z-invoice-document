"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Home,
  Code,
  FileText,
  AlertCircle,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENU_ITEMS, MenuItem } from "@/lib/menu";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      <aside
        className={`
          fixed lg:static top-16 left-0 bottom-0 w-72 bg-white border-r border-gray-200
          transition-transform duration-300 z-50 flex-none
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          h-[calc(100vh-4rem)] overflow-y-auto pb-10
        `}
      >
        <div className="p-6">
          {/* Version Selector */}
          <div className="mb-6">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
              Phiên bản API
            </label>
            <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black">
              <option>v1.0.0</option>
            </select>
          </div>

          {/* Navigation Tree */}
          <nav className="space-y-1">
            {MENU_ITEMS.map((item, index) => (
              <SidebarMenuItem key={index} item={item} />
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden top-16"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

// Helper: Kiểm tra xem item con có đang active không
function isItemActive(item: MenuItem, currentPath: string): boolean {
  if (item.url === currentPath) return true;
  if (item.items) {
    return item.items.some((child) => isItemActive(child, currentPath));
  }
  return false;
}

// 3. Component đệ quy hiển thị Menu
function SidebarMenuItem({ item }: { item: MenuItem }) {
  const pathname = usePathname();
  const isActive = item.url === pathname;
  // Kiểm tra có con nào active không để mở accordion mặc định
  const hasActiveChild = item.items
    ? item.items.some((child) => isItemActive(child, pathname))
    : false;

  const [isOpen, setIsOpen] = useState(hasActiveChild);
  const hasChildren = item.items && item.items.length > 0;

  // Cập nhật trạng thái mở khi path thay đổi (nếu user click link con)
  useEffect(() => {
    if (hasActiveChild) setIsOpen(true);
  }, [hasActiveChild]);

  if (hasChildren) {
    return (
      <div className="mb-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-between w-full px-2 py-1.5 text-sm rounded-lg transition-colors
            ${
              hasActiveChild || isOpen
                ? "text-black font-medium"
                : "text-gray-700 hover:bg-gray-50 hover:text-black"
            }
          `}
        >
          <div className="flex items-center gap-2">
            {item.icon && <item.icon size={16} className="text-gray-500" />}
            <span>{item.title}</span>
          </div>
          <ChevronRight
            size={14}
            className={`text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>

        {/* Render danh sách con đệ quy */}
        {isOpen && (
          <div className="mt-1 ml-2 space-y-1 border-l border-gray-200 pl-3">
            {item.items!.map((subItem, index) => (
              <SidebarMenuItem key={index} item={subItem} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Trường hợp Link đơn thuần
  return (
    <Link href={item.url} className="block">
      <div
        className={`
          flex items-center gap-2 px-2 py-1.5 text-sm rounded-lg transition-colors
          ${
            isActive
              ? "bg-gray-100 text-black font-bold"
              : "text-gray-600 hover:bg-gray-50 hover:text-black"
          }
        `}
      >
        {item.icon && <item.icon size={16} className="text-gray-500" />}
        <span>{item.title}</span>
      </div>
    </Link>
  );
}
