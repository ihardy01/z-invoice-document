"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

// 1. Tạo Context: Giúp truyền activeId xuống tận sâu các item con (nested items)
const TOCContext = createContext<string>("");

interface TOCProps {
  children: React.ReactNode;
}

interface TOCItemProps {
  href: string;
  children: React.ReactNode;
}

export function TableOfContents({ children }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Chọn tất cả các thẻ heading cần theo dõi (h2, h3, h4)
    const elements = document.querySelectorAll("h2, h3, h4");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // rootMargin quan trọng:
        // "0px 0px -80% 0px" tạo ra một vùng active chỉ nằm ở 20% phía trên màn hình.
        // Điều này giúp active đúng mục đang đọc thay vì mục vừa mới ló lên ở chân trang.
        rootMargin: "0px 0px -80% 0px",
        threshold: 0,
      },
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  return (
    // Sử dụng Provider để bao bọc
    <TOCContext.Provider value={activeId}>
      <aside className="hidden xl:block w-64 sticky top-6 h-fit pl-6 border-l border-gray-200 ml-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Nội dung
        </h3>
        <nav className="space-y-3">{children}</nav>
      </aside>
    </TOCContext.Provider>
  );
}

export function TOCItem({ href, children }: TOCItemProps) {
  // 2. Sử dụng useContext để lấy activeId trực tiếp, bất chấp độ sâu của component
  const activeId = useContext(TOCContext);

  const idFromHref = href.replace("#", "");
  const isActive = activeId === idFromHref;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(idFromHref);
    if (element) {
      // Tính toán vị trí cuộn có trừ hao chiều cao Header (khoảng 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Cập nhật URL hash thủ công
      window.history.pushState(null, "", href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`block text-sm transition-all duration-200 ${
        isActive
          ? "text-black font-bold border-l-2 border-black -ml-[25px] pl-[23px]" // Hiệu ứng active
          : "text-gray-600 hover:text-black"
      }`}
    >
      {children}
    </a>
  );
}
