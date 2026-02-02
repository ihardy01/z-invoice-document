import {
  Home,
  Code,
  FileText,
  AlertCircle,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

export interface MenuItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  items?: MenuItem[];
}

// 2. Cấu hình danh sách Menu
export const MENU_ITEMS: MenuItem[] = [
  {
    title: "Giới thiệu",
    url: "/",
    icon: Home,
  },
  {
    title: "API Reference",
    url: "#",
    icon: Code,
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
        items: [
          {
            title: "Thêm hóa đơn chờ ký",
            url: "#",
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
        items: [
          { title: "Thay thế hóa đơn", url: "/thay-the-hoa-don" },
          {
            title: "Điều chỉnh hóa đơn",
            url: "#",
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
    items: [
      { title: "Danh sách mã lỗi", url: "/danh-sach-ma-loi" },
      { title: "Trạng thái hóa đơn", url: "/trang-thai-hoa-don" },
    ],
  },
  {
    title: "Validation",
    url: "/validation",
    icon: CheckCircle,
    items: [
      { title: "Mã số thuế", url: "/ma-so-thue" },
      {
        title: "Căn cước công dân",
        url: "/can-cuoc-cong-dan",
      },
    ],
  },
];
