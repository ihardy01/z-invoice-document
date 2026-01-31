import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TableOfContents, TOCItem } from "@/components/toc";
import { FooterNav } from "@/components/layout/footer-nav";

// Dữ liệu Trạng thái hóa đơn
const invoiceStatuses = [
  { code: 0, name: "Gốc", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { code: 1, name: "Hủy", color: "bg-red-50 text-red-700 border-red-200" },
  {
    code: 2,
    name: "Điều chỉnh",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    code: 3,
    name: "Thay thế",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    code: 4,
    name: "Giải trình",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    code: 5,
    name: "Bị thay thế",
    color: "bg-gray-100 text-gray-600 border-gray-200",
  },
  {
    code: 6,
    name: "Bị điều chỉnh",
    color: "bg-gray-100 text-gray-600 border-gray-200",
  },
];

// Dữ liệu Trạng thái gửi CQT
const cqtStatuses = [
  {
    code: 0,
    name: "Chờ duyệt",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    code: 1,
    name: "Chờ ký",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    code: 2,
    name: "Đã ký",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    code: 3,
    name: "Đã gửi",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    code: 4,
    name: "Thành công",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  { code: 5, name: "Có lỗi", color: "bg-red-50 text-red-700 border-red-200" },
  {
    code: 6,
    name: "Đang ký",
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
];

export default function InvoiceStatusPage() {
  return (
    <div className="flex max-w-screen-2xl mx-auto py-12 px-6">
      {/* --- PHẦN NỘI DUNG CHÍNH (CỘT TRÁI) --- */}
      <div className="flex-1 max-w-4xl min-w-0">
        {/* 1. Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/api">API Reference</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Danh sách trạng thái</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 2. Nội dung bài viết */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-4">Danh sách trạng thái</h1>
          <p className="text-xl text-gray-600 mb-8">
            Tổng hợp các mã trạng thái của hóa đơn (Invoice Status) và trạng
            thái truyền nhận với Cơ quan thuế (CQT Status).
          </p>

          {/* SECTION 1: TRẠNG THÁI HÓA ĐƠN */}
          <h2 id="trang-thai-hoa-don" className="text-2xl font-bold mt-8 mb-4">
            1. Trạng thái hóa đơn
          </h2>
          <p>
            Trạng thái này thể hiện tình trạng nghiệp vụ của hóa đơn trong hệ
            thống.
          </p>

          <div className="overflow-hidden rounded-lg border border-gray-200 my-6 not-prose shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900 w-[150px]">
                    Mã (Value)
                  </th>
                  <th className="px-6 py-4 font-bold text-gray-900">
                    Tên trạng thái
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {invoiceStatuses.map((item) => (
                  <tr key={item.code} className="hover:bg-gray-50 bg-white">
                    <td className="px-6 py-3 font-mono font-semibold text-gray-700">
                      {item.code}
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-2.5 py-1 rounded-md border text-xs font-medium ${item.color}`}
                      >
                        {item.name}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SECTION 2: TRẠNG THÁI GỬI CQT */}
          <h2 id="trang-thai-cqt" className="text-2xl font-bold mt-12 mb-4">
            2. Trạng thái gửi CQT
          </h2>
          <p>
            Trạng thái này thể hiện quá trình cấp mã và phản hồi từ Cơ quan
            thuế.
          </p>

          <div className="overflow-hidden rounded-lg border border-gray-200 my-6 not-prose shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900 w-[150px]">
                    Mã (Value)
                  </th>
                  <th className="px-6 py-4 font-bold text-gray-900">
                    Tên trạng thái
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {cqtStatuses.map((item) => (
                  <tr key={item.code} className="hover:bg-gray-50 bg-white">
                    <td className="px-6 py-3 font-mono font-semibold text-gray-700">
                      {item.code}
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-2.5 py-1 rounded-md border text-xs font-medium ${item.color}`}
                      >
                        {item.name}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        {/* 3. Footer Navigation */}
        <FooterNav
          prev={{
            title: "Danh sách mã lỗi",
            href: "/docs/api/error-codes",
          }}
          next={{
            title: "Định nghĩa dữ liệu",
            href: "/dinh-nghia-truong-du-lieu",
          }}
        />
      </div>

      {/* --- PHẦN MỤC LỤC (CỘT PHẢI - STICKY) --- */}
      <TableOfContents>
        <TOCItem href="#trang-thai-hoa-don">1. Trạng thái hóa đơn</TOCItem>
        <TOCItem href="#trang-thai-cqt">2. Trạng thái gửi CQT</TOCItem>
      </TableOfContents>
    </div>
  );
}
