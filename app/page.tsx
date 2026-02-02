import React from "react";
import Link from "next/link";
import { Check, Terminal } from "lucide-react";
import { TableOfContents, TOCItem } from "@/components/toc";
import { FooterNav } from "@/components/layout/footer-nav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex max-w-screen-2xl mx-auto py-12 px-6">
      {/* Cột nội dung chính */}
      <div className="flex-1 max-w-4xl min-w-0">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Giới thiệu</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Nội dung bài viết */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Z-Invoice Document API
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Cột Trái: Logo Lớn */}
            <div className="flex justify-center">
              {/* w-full kết hợp max-w để logo to nhưng không bị vỡ trên màn hình cực rộng */}
              <Image
                src="/logo.png"
                alt="M-Invoice Logo"
                width={200}
                height={100}
                className="object-contain drop-shadow-md"
              />
            </div>

            {/* Cột Phải: Nội dung văn bản */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                  Tài liệu hướng dẫn tích hợp hệ thống Z-Invoice
                </h2>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    Phiên bản: v1.0.0
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Các nút hành động chính */}

          {/* Section: Giới thiệu */}
          <h2
            id="gioi-thieu"
            className="text-2xl font-bold mt-10 mb-4 scroll-m-20 border-b pb-2 first:mt-0"
          >
            Giới thiệu
          </h2>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Tài liệu này mô tả chi tiết cách tích hợp hệ thống Z-Invoice qua
              các API RESTful.
            </li>
            <li>
              Hệ thống hỗ trợ việc tạo, quản lý, phát hành, tra cứu và tải hóa
              đơn điện tử thông qua các endpoint được cung cấp.
            </li>
          </ul>

          {/* Section: Tính năng (Feature Cards) */}
          <h2
            id="moi-truong-trien-khai"
            className="text-2xl font-bold mt-10 mb-4 scroll-m-20 border-b pb-2"
          >
            Môi trường triển khai
          </h2>
          <div className="my-6 w-full overflow-y-auto not-prose">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-4 py-2 text-left font-semibold">
                    Loại môi trường
                  </th>
                  <th className="border border-border px-4 py-2 text-left font-semibold">
                    Endpoint
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2 font-medium">
                    Production
                  </td>
                  <td className="border border-border px-4 py-2">
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono break-all">
                      https://invoice.zoffice.vn
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2 font-medium">
                    Sandbox
                  </td>
                  <td className="border border-border px-4 py-2">
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono break-all">
                      https://sb-invoice.zoffice.vn
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* FooterNav điều hướng */}
        <FooterNav
          next={{ title: "Đăng nhập lấy token", href: "/dang-nhap-lay-token" }}
        />
      </div>

      {/* Mục lục bên phải (Table of Contents) */}
      <TableOfContents>
        <TOCItem href="#gioi-thieu">Giới thiệu</TOCItem>
        <TOCItem href="#moi-truong-trien-khai">Môi trường triển khai</TOCItem>
      </TableOfContents>
    </div>
  );
}

// Component phụ hiển thị thẻ tính năng
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-lg p-4 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1 rounded-full bg-primary/10 text-primary">
          <Check size={16} />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
