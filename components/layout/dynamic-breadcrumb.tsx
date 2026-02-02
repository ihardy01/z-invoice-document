"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MENU_ITEMS, MenuItem } from "@/lib/menu"; // Import menu đã tách

export function DynamicBreadcrumb() {
  const pathname = usePathname();

  // Hàm đệ quy tìm đường dẫn Breadcrumb
  const findBreadcrumbPath = (
    items: MenuItem[],
    targetUrl: string,
    currentPath: MenuItem[] = [],
  ): MenuItem[] | null => {
    for (const item of items) {
      // Nếu tìm thấy URL khớp
      if (item.url === targetUrl) {
        return [...currentPath, item];
      }

      // Nếu có con, tiếp tục tìm sâu hơn
      if (item.items) {
        const found = findBreadcrumbPath(item.items, targetUrl, [
          ...currentPath,
          item,
        ]);
        if (found) return found;
      }
    }
    return null;
  };

  // Tìm đường dẫn breadcrumb dựa trên pathname hiện tại
  const breadcrumbPath = findBreadcrumbPath(MENU_ITEMS, pathname) || [];

  // Nếu đang ở trang chủ thì không cần hiển thị hoặc hiển thị 1 icon Home
  if (pathname === "/") return null;

  return (
    <Breadcrumb className="mb-8">
      <BreadcrumbList>
        {/* Luôn bắt đầu bằng Home Icon */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-1">
            <Home className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Render các phần tử tìm được từ Menu */}
        {breadcrumbPath.map((item, index) => {
          const isLast = index === breadcrumbPath.length - 1;

          return (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                ) : (
                  // Nếu url là # thì render text thường, ngược lại render Link
                  <>
                    {item.url === "#" ? (
                      <span className="flex items-center gap-1">
                        {item.title}
                      </span>
                    ) : (
                      <BreadcrumbLink href={item.url}>
                        {item.title}
                      </BreadcrumbLink>
                    )}
                  </>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
