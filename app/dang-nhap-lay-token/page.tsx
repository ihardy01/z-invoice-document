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

export default function LoginPage() {
  return (
    <div className="flex max-w-screen-2xl mx-auto py-12 px-6">
      {/* --- PHẦN NỘI DUNG CHÍNH (CỘT TRÁI) --- */}
      <div className="flex-1 max-w-4xl min-w-0">
        {/* 1. Breadcrumb (Shadcn UI) */}
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
              <BreadcrumbLink href="/docs/api/authentication">
                Xác thực
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Đăng nhập lấy token</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 2. Nội dung bài viết */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-4">Đăng nhập lấy token</h1>
          <p className="text-xl text-gray-600 mb-8">
            API này dùng để xác thực người dùng và lấy <strong>Token</strong> để
            gọi các API nghiệp vụ khác.
          </p>

          <h2 id="overview" className="text-2xl font-bold mt-8 mb-4">
            API Endpoint Overview
          </h2>

          {/* Endpoint Info Block */}
          <div className="flex flex-col gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg mb-8 not-prose">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold min-w-[100px] text-gray-700">
                Link API:
              </span>
              <code className="text-sm font-mono text-purple-700 bg-purple-50 px-2 py-1 rounded border border-purple-100">
                https://sb-invoice.zoffice.vn/api/v1/auth/token
              </code>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold min-w-[100px] text-gray-700">
                Method:
              </span>
              <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded w-fit">
                POST
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold min-w-[100px] text-gray-700">
                Header:
              </span>
              <code className="text-sm font-mono text-gray-800">
                Content-Type: application/json
              </code>
            </div>
          </div>

          <h2 id="request-body" className="text-2xl font-bold mt-8 mb-4">
            Request
          </h2>
          <p>Thông tin đăng nhập được gửi trong body của request.</p>

          {/* Bảng mô tả trường */}
          <div className="overflow-hidden rounded-lg border border-gray-200 my-4 not-prose">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    Trường
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    Kiểu
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    Bắt buộc
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    Mô tả
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">
                    username
                  </td>
                  <td className="px-4 py-3 text-gray-500">string</td>
                  <td className="px-4 py-3 text-red-600 font-medium">Có</td>
                  <td className="px-4 py-3 text-gray-600">Tên đăng nhập</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">
                    password
                  </td>
                  <td className="px-4 py-3 text-gray-500">string</td>
                  <td className="px-4 py-3 text-red-600 font-medium">Có</td>
                  <td className="px-4 py-3 text-gray-600">Mật khẩu</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-purple-600">
                    tax_code
                  </td>
                  <td className="px-4 py-3 text-gray-500">string</td>
                  <td className="px-4 py-3 text-red-600 font-medium">Có</td>
                  <td className="px-4 py-3 text-gray-600">Mã số thuế</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Code mẫu Request */}
          <h3 className="text-lg font-bold mt-4 mb-2">Ví dụ Request JSON</h3>
          <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
            {`{
  "username": "user",
  "password": "password",
  "tax_code": "tax_code"
}`}
          </pre>

          <h2 id="response" className="text-2xl font-bold mt-8 mb-4">
            Response
          </h2>

          {/* Success Response */}
          <h3 id="response-success" className="text-lg font-bold mt-6 mb-2">
            Thành công
          </h3>
          <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
            {`{
    "code": "00",
    "message": "Thành công",
    "ok": true,
    "token": "O87316arj5+Od3FhthththzdBfIuPk73eKqpAzBSvv8sY="
}`}
          </pre>

          {/* Error Response */}
          <h3 id="response-error" className="text-lg font-bold mt-6 mb-2">
            Thất bại
          </h3>
          <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
            {`{
    "code": "99",
    "message": "Tên đăng nhập hoặc mật khẩu không đúng",
    "ok": false,
    "error": "Tên đăng nhập hoặc mật khẩu không đúng"
}`}
          </pre>
        </article>

        {/* 3. Footer Navigation */}
        <FooterNav
          prev={{ title: "Giới thiệu chung", href: "/docs/api" }}
          next={{
            title: "Lấy danh sách ký hiệu",
            href: "/docs/api/invoice-symbols/list",
          }}
        />
      </div>

      {/* --- PHẦN MỤC LỤC (CỘT PHẢI - STICKY) --- */}
      <TableOfContents>
        <TOCItem href="#overview">API Endpoint Overview</TOCItem>
        <TOCItem href="#request-body">Request</TOCItem>
        <TOCItem href="#response">Response</TOCItem>
        <div className="pl-4 space-y-2 mt-2 border-l border-gray-100">
          <TOCItem href="#response-success">Thành công</TOCItem>
          <TOCItem href="#response-error">Thất bại</TOCItem>
        </div>
      </TableOfContents>
    </div>
  );
}
