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

export default function InvoiceSeriesPage() {
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
              <BreadcrumbLink href="/docs/api/invoice-symbols">
                Danh mục
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Lấy danh sách ký hiệu</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 2. Nội dung bài viết */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-4">Lấy danh sách ký hiệu</h1>
          <p className="text-xl text-gray-600 mb-8">
            API này cho phép lấy danh sách các ký hiệu hóa đơn (Series) đang có
            hiệu lực của hệ thống.
          </p>

          {/* --- API Endpoint Overview --- */}
          <h2 id="overview" className="text-2xl font-bold mt-8 mb-4">
            API Endpoint Overview
          </h2>

          <div className="flex flex-col gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg mb-8 not-prose">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold min-w-[100px] text-gray-700">
                Link API:
              </span>
              <code className="text-sm font-mono text-purple-700 bg-purple-50 px-2 py-1 rounded border border-purple-100 break-all">
                https://sb-invoice.zoffice.vn/api/v1/invoice-series
              </code>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold min-w-[100px] text-gray-700">
                Method:
              </span>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded w-fit">
                GET
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold min-w-[100px] text-gray-700">
                Header:
              </span>
              <code className="text-sm font-mono text-gray-800">
                Authorization: Bearer Token
              </code>
            </div>
          </div>

          {/* --- Request --- */}
          <h2 id="request" className="text-2xl font-bold mt-8 mb-4">
            Request
          </h2>
          <p>
            API hỗ trợ lọc theo loại hóa đơn thông qua tham số <code>type</code>{" "}
            trên URL (Query Parameter).
          </p>

          <div className="overflow-hidden rounded-lg border border-gray-200 my-4 not-prose">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900 w-1/4">
                    Tham số (Type)
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    Ý nghĩa
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">1</td>
                  <td className="px-4 py-3 text-gray-600">
                    Hóa đơn giá trị gia tăng
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">2</td>
                  <td className="px-4 py-3 text-gray-600">Hóa đơn bán hàng</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">3</td>
                  <td className="px-4 py-3 text-gray-600">
                    Hóa đơn bán tài sản công
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">4</td>
                  <td className="px-4 py-3 text-gray-600">
                    Hóa đơn bán hàng dự trữ quốc gia
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">5</td>
                  <td className="px-4 py-3 text-gray-600">Tem vé thẻ</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">6</td>
                  <td className="px-4 py-3 text-gray-600">
                    Phiếu xuất kho (Kiêm vận chuyển nội bộ, gửi bán đại lý)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* --- Response --- */}
          <h2 id="response" className="text-2xl font-bold mt-8 mb-4">
            Response
          </h2>

          <h3 id="response-success" className="text-lg font-bold mt-6 mb-2">
            Thành công (Code 00)
          </h3>
          <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
            {`{
  "code": "00",
  "message": "Thành công",
  "ok": true,
  "data": [
    {
      "id": "3a08d649-2284-2577-7b7d-91a284f25eb3",
      "quanlykyhieu68_id": "6252b95a-b64e-4ccf-b76b-ac812ae1efc0",
      "khhdon": "6C23NYY",
      "value": "6C23NYY",
      "invoiceForm": "6",
      "invoiceYear": 23,
      "number": null,
      "orders": null,
      "invoiceTypeName": "Phiếu xuất kho kiêm vận chuyển nội bộ"
    },
    {
      "id": "3a08d64c-0484-e9eb-3a4b-89258c82ee14",
      "quanlykyhieu68_id": "6252b95a-b64e-4ccf-b76b-ac812ae1efc0",
      "khhdon": "5C23TYY",
      "value": "5C23TYY",
      "invoiceForm": "5",
      "invoiceYear": 23,
      "number": null,
      "orders": null,
      "invoiceTypeName": "Tém vé thẻ điện tử"
    },
    {
      "id": "3a08d64c-ef81-e29a-963b-55d8d06df81e",
      "quanlykyhieu68_id": "6252b95a-b64e-4ccf-b76b-ac812ae1efc0",
      "khhdon": "2C23MYY",
      "value": "2C23MYY",
      "invoiceForm": "2",
      "invoiceYear": 23,
      "number": null,
      "orders": null,
      "invoiceTypeName": "Hóa đơn bán hàng"
    }
  ]
}`}
          </pre>

          <h3 id="response-error" className="text-lg font-bold mt-6 mb-2">
            Thất bại (Code khác 00)
          </h3>
          <p className="text-gray-600 mb-2">
            Trường hợp token không hợp lệ hoặc lỗi hệ thống.
          </p>
          <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
            {`{
  "code": "99",
  "message": "Lỗi hệ thống hoặc Token không hợp lệ",
  "ok": false,
  "data": null
}`}
          </pre>

          {/* --- Định nghĩa Output --- */}
          <h2 id="output-definitions" className="text-2xl font-bold mt-8 mb-4">
            Định nghĩa các trường trong Output
          </h2>
          <div className="overflow-hidden rounded-lg border border-gray-200 my-4 not-prose">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    Thông tin
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    Kiểu dữ liệu
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    Độ dài
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    Mô tả
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">code</td>
                  <td className="px-4 py-3 text-gray-500">String</td>
                  <td className="px-4 py-3 text-gray-500">-</td>
                  <td className="px-4 py-3 text-gray-600">
                    Mã lỗi. Mã 00 là thành công. Khác 00 lỗi mô tả ở node
                    message.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">
                    message
                  </td>
                  <td className="px-4 py-3 text-gray-500">String</td>
                  <td className="px-4 py-3 text-gray-500">-</td>
                  <td className="px-4 py-3 text-gray-600">
                    Mô tả lỗi nếu code khác 00.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">ok</td>
                  <td className="px-4 py-3 text-gray-500">boolean</td>
                  <td className="px-4 py-3 text-gray-500">-</td>
                  <td className="px-4 py-3 text-gray-600">
                    Trạng thái thành công: true
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">data</td>
                  <td className="px-4 py-3 text-gray-500">JArray</td>
                  <td className="px-4 py-3 text-gray-500">-</td>
                  <td className="px-4 py-3 text-gray-600">
                    Mảng dữ liệu ký hiệu hóa đơn.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">id</td>
                  <td className="px-4 py-3 text-gray-500">GUID</td>
                  <td className="px-4 py-3 text-gray-500">36</td>
                  <td className="px-4 py-3 text-gray-600">
                    ID của ký hiệu hóa đơn
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">value</td>
                  <td className="px-4 py-3 text-gray-500">string</td>
                  <td className="px-4 py-3 text-gray-500">7</td>
                  <td className="px-4 py-3 text-gray-600">
                    Ký hiệu hóa đơn (dùng để truyền vào khi tạo hóa đơn)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">
                    quanlykyhieu68_id
                  </td>
                  <td className="px-4 py-3 text-gray-500">GUID</td>
                  <td className="px-4 py-3 text-gray-500">36</td>
                  <td className="px-4 py-3 text-gray-600">
                    ID quản lý ký hiệu
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">
                    khhdon
                  </td>
                  <td className="px-4 py-3 text-gray-500">string</td>
                  <td className="px-4 py-3 text-gray-500">8</td>
                  <td className="px-4 py-3 text-gray-600">
                    Ký hiệu hóa đơn (Hiển thị)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">
                    invoiceForm
                  </td>
                  <td className="px-4 py-3 text-gray-500">string</td>
                  <td className="px-4 py-3 text-gray-500">1</td>
                  <td className="px-4 py-3 text-gray-600">
                    Loại hóa đơn (Mã số)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">
                    invoiceYear
                  </td>
                  <td className="px-4 py-3 text-gray-500">string</td>
                  <td className="px-4 py-3 text-gray-500">2</td>
                  <td className="px-4 py-3 text-gray-600">
                    Năm của ký hiệu hóa đơn
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">
                    invoiceTypeName
                  </td>
                  <td className="px-4 py-3 text-gray-500">string</td>
                  <td className="px-4 py-3 text-gray-500">250</td>
                  <td className="px-4 py-3 text-gray-600">Tên loại hóa đơn</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* 3. Footer Navigation */}
        <FooterNav
          prev={{ title: "Đăng nhập lấy token", href: "/dang-nhap-lay-token" }}
          next={{ title: "Tạo hóa đơn mới", href: "#" }}
        />
      </div>

      {/* --- PHẦN MỤC LỤC (CỘT PHẢI - STICKY) --- */}
      <TableOfContents>
        <TOCItem href="#overview">API Endpoint Overview</TOCItem>
        <TOCItem href="#request">Request</TOCItem>
        <TOCItem href="#response">Response</TOCItem>
        <div className="pl-4 space-y-2 mt-2 border-l border-gray-100">
          <TOCItem href="#response-success">Thành công</TOCItem>
          <TOCItem href="#response-error">Thất bại</TOCItem>
        </div>
        <TOCItem href="#output-definitions">Định nghĩa Output</TOCItem>
      </TableOfContents>
    </div>
  );
}
