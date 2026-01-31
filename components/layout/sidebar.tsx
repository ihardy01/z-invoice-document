import React, { useState } from "react";
import {
  ChevronRight,
  Home,
  BookOpen,
  Code,
  FileText,
  AlertCircle,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

// 1. Định nghĩa kiểu dữ liệu cho Menu Item
interface MenuItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: MenuItem[];
}

// 2. Cấu hình danh sách Menu từ dữ liệu bạn cung cấp
const MENU_ITEMS: MenuItem[] = [
  {
    title: "Giới thiệu",
    url: "/",
    icon: Home,
  },
  {
    title: "API Reference",
    url: "#",
    icon: Code,
    isActive: true, // Mặc định mở tab này
    items: [
      {
        title: "Xác thực",
        url: "#",
        items: [
          {
            title: "Đăng nhập lấy token",
            url: "/dang-nhap-lay-token",
          },
        ],
      },
      {
        title: "Ký hiệu hóa đơn",
        url: "#",
        isActive: true,
        items: [
          {
            title: "Lấy danh sách ký hiệu",
            url: "/lay-danh-sach-ky-hieu",
          },
        ],
      },
      {
        title: "Quản lý hóa đơn",
        url: "#",
        isActive: true,
        items: [
          {
            title: "Thêm hóa đơn chờ ký",
            url: "#",
            isActive: true,
            items: [
              {
                title: "Hóa đơn GTGT thông thường, tem vé",
                url: "/hoa-don-gtgt-thong-thuong-tem-ve",
              },
              {
                title: "Hóa đơn GTGT, tem vé máy tính tiền",
                url: "/hoa-don-gtgt-tem-ve-may-tinh-tien",
              },
              {
                title: "Hóa đơn Bán hàng (Có giảm thuế theo NQ 204)",
                url: "/hoa-don-bang-hang-co-giam-thue-theo-nq204",
              },
              {
                title: "Hóa đơn bán hàng máy tính tiền",
                url: "/hoa-don-ban-hang-may-tinh-tien",
              },
              {
                title:
                  "Hóa đơn Bán hàng máy tính tiền (Có giảm thuế theo NQ 204)",
                url: "/hoa-don-ban-hang-may-tinh-tien-co-giam-thue-theo-nq204",
              },
              {
                title: "Phiếu xuất kho kiêm vận chuyển nội bộ",
                url: "/phieu-xuat-kho-kiem-van-chuyen-noi-bo",
              },
              {
                title: "Phiếu xuất kho hàng gửi bán đại lý",
                url: "/phieu-xuat-kho-hang-gui-ban-dai-ly",
              },
            ],
          },
          { title: "Sửa hóa đơn chờ ký", url: "/sua-hoa-don-chua-ky" },
          { title: "Xóa hóa đơn chờ ký", url: "/xoa-hoa-don-chua-ky" },
          { title: "Ký và gửi CQT", url: "/ky-va-gui-cqt" },
          {
            title: "Thêm hoá đơn, ký và gửi CQT",
            url: "/them-hoa-don-ky-va-gui-cqt",
          },
        ],
      },
      {
        title: "Thay thế & Điều chỉnh",
        url: "#",
        isActive: true,
        items: [
          { title: "Thay thế hóa đơn", url: "/thay-the-hoa-don" },
          {
            title: "Điều chỉnh hóa đơn",
            url: "#",
            isActive: true,
            items: [
              {
                title: "Tăng đơn giá hàng hoá",
                url: "/tang-don-gia-hang-hoa",
              },
              {
                title: "Tăng số lượng hàng hoá",
                url: "/tang-so-luong-hang-hoa",
              },
              {
                title: "Tăng thành tiền",
                url: "/tang-thanh-tien",
              },
              {
                title: "Giảm đơn giá hàng hoá",
                url: "/giam-don-gia-hang-hoa",
              },
              {
                title: "Giảm số lượng hàng hoá",
                url: "/giam-so-luong-hang-hoa",
              },
              {
                title: "Giảm thành tiền",
                url: "/giam-thanh-tien",
              },
              {
                title: "Sửa tên hàng hóa",
                url: "/sua-ten-hang-hoa",
              },
              {
                title: "Sửa đơn vị tính",
                url: "/sua-don-vi-tinh",
              },
              {
                title: "Sửa mã số thuế",
                url: "/sua-ma-so-thue",
              },
              {
                title: "Điều chỉnh về 0",
                url: "/dieu-chinh-ve-0",
              },
            ],
          },
          {
            title: "Thay thế hoá đơn trên hệ thống khác",
            url: "/thay-the-hoa-don-tren-he-thong-khac",
          },
          {
            title: "Điều chỉnh hoá đơn trên hệ thống khác",
            url: "/dieu-chinh-hoa-don-tren-he-thong-khac",
          },
        ],
      },
      {
        title: "Tra cứu & Truy vấn",
        url: "#",
        isActive: true,
        items: [
          {
            title: "Tra cứu mã số thuế và căn cước công dân",
            url: "/tra-cuu-mst-va-cccd",
          },
          {
            title: "Lấy thông tin qua Ký hiệu & Số hoá đơn",
            url: "/lay-thong-tin-qua-ky-hieu-va-so-hoa-don",
          },
          {
            title:
              "Lấy thông tin hoá đơn thông qua ID hóa đơn hoặc keyApi tích hợp từ đối tác",
            url: "/lay-thong-tin-hoa-don-thong-qua-id-hoa-don-hoac-keyapi-tich-hop-tu-doi-tac",
          },
          {
            title: "Lấy thông tin theo khoảng thời gian",
            url: "/lay-thong-tin-theo-khoang-thoi-gian",
          },
          { title: "Xem in hóa đơn", url: "/xem-in-hoa-don" },
          { title: "Lấy file XML", url: "/lay-file-xml" },
        ],
      },
    ],
  },
  {
    title: "Định nghĩa trường dữ liệu",
    url: "/dinh-nghia-truong-du-lieu",
    icon: FileText,
  },
  {
    title: "Mã lỗi & Trạng thái",
    url: "/ma-loi-va-trang-thai",
    icon: AlertCircle,
    isActive: true,
    items: [
      { title: "Danh sách mã lỗi", url: "/danh-sach-ma-loi" },
      { title: "Trạng thái hóa đơn", url: "/trang-thai-hoa-don" },
    ],
  },
  {
    title: "Validation",
    url: "/validation",
    icon: CheckCircle,
    isActive: true,
    items: [
      { title: "Mã số thuế", url: "/ma-so-thue" },
      {
        title: "Căn cước công dân",
        url: "/can-cuoc-cong-dan",
      },
    ],
  },
];

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
          transition-transform duration-300 z-40 flex-none
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          h-full overflow-y-auto
        `}
      >
        <div className="p-6">
          {/* Version Selector (Giữ nguyên) */}
          <div className="mb-6">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
              Phiên bản API
            </label>
            <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black">
              <option>v1.0.0</option>
            </select>
          </div>

          {/* Navigation Tree - Sử dụng dữ liệu mới */}
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
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

// 3. Component đệ quy để hiển thị Menu đa cấp
function SidebarMenuItem({ item }: { item: MenuItem }) {
  // Mặc định mở nếu có prop isActive, hoặc user click mở
  const [isOpen, setIsOpen] = useState(item.isActive || false);
  const hasChildren = item.items && item.items.length > 0;

  if (hasChildren) {
    return (
      <div className="mb-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-between w-full px-2 py-1.5 text-sm rounded-lg transition-colors
            text-gray-700 hover:bg-gray-50 hover:text-black
            ${isOpen ? "font-medium text-black" : ""}
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

  // Trường hợp không có con (Link đơn thuần)
  return (
    <Link href={item.url} className="block">
      <div
        className={`
          flex items-center gap-2 px-2 py-1.5 text-sm rounded-lg transition-colors
          text-gray-600 hover:bg-gray-50 hover:text-black
          ${item.isActive ? "bg-gray-100 text-black font-medium" : ""}
        `}
      >
        {item.icon && <item.icon size={16} className="text-gray-500" />}
        <span>{item.title}</span>
      </div>
    </Link>
  );
}
