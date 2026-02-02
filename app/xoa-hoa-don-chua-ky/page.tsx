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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { DynamicBreadcrumb } from "@/components/layout/dynamic-breadcrumb";
import { CodeBlock } from "@/components/ui/code-block";

export default function InvoiceTaxReductionPage() {
  return (
    <div className="flex max-w-screen-2xl mx-auto py-12 px-6">
      {/* --- PHẦN NỘI DUNG CHÍNH (CỘT TRÁI) --- */}
      <div className="flex-1 max-w-4xl min-w-0">
        {/* 1. Breadcrumb */}
        <DynamicBreadcrumb />

        {/* 2. Nội dung bài viết */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-4">Xoá hoá đơn chờ ký</h1>
          <p className="text-xl text-gray-600 mb-8">
            API này hỗ trợ xoá hoá đơn chờ ký.
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
                https://sb-invoice.zoffice.vn/api/v1/invoice-unsigned
              </code>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold min-w-[100px] text-gray-700">
                Method:
              </span>
              <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded w-fit">
                DELETE
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2">
              <span className="font-semibold min-w-[100px] text-gray-700 mt-1">
                Header:
              </span>
              <div className="flex flex-col gap-1">
                <code className="text-sm font-mono text-gray-800">
                  Authorization: Bearer Token
                </code>
                <code className="text-sm font-mono text-gray-800">
                  Content-Type: application/json
                </code>
              </div>
            </div>
          </div>

          <h2 id="request-body" className="text-2xl font-bold mt-8 mb-4">
            Request
          </h2>

          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-6 not-prose">
            <p className="text-blue-800 m-0">
              Chi tiết về các trường dữ liệu, vui lòng xem tại:{" "}
              <Link
                href="/dinh-nghia-truong-du-lieu"
                className="font-semibold underline hover:text-blue-600"
              >
                Định nghĩa các trường dữ liệu
              </Link>
            </p>
          </div>

          <p className="mb-4">
            Dưới đây là ví dụ JSON cho 2 trường hợp áp dụng giảm thuế:
          </p>

          <Tabs defaultValue="th1" className="not-prose">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent space-x-6">
              <TabsTrigger
                value="th1"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                TH1: Đã có sẵn ký hiệu và số hoá đơn
              </TabsTrigger>
              <TabsTrigger
                value="th2"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                TH2: Chưa có số hoá đơn
              </TabsTrigger>
            </TabsList>

            {/* TH1: GIẢM THUẾ TRÊN CẢ HOÁ ĐƠN */}
            <TabsContent value="th1" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <CodeBlock>
                  {`{
    "editmode": 3,
    "data": [
        {
            "inv_invoiceSeries": "1C22TMX",
            "inv_invoiceNumber": 6
        }
    ]
}`}
                </CodeBlock>
              </div>
            </TabsContent>

            {/* TH2: GIẢM TRÊN TỪNG DÒNG HÀNG */}
            <TabsContent value="th2" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <CodeBlock>
                  {`{
    "editmode": 3,
    "data": [
        {
            "inv_invoiceSeries":"6C23NAB",
            "inv_invoiceAuth_Id": "3a0aaa84-3eb7-7fd7-5079-4f7e8f685a64"
        }
    ]
}`}
                </CodeBlock>
              </div>
            </TabsContent>
          </Tabs>

          <h2 id="response" className="text-2xl font-bold mt-8 mb-4">
            Response
          </h2>

          <Tabs defaultValue="th1" className="not-prose">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent space-x-6">
              <TabsTrigger
                value="th1"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                TH1: Kết quả (Đã có sẵn ký hiệu và số hóa đơn)
              </TabsTrigger>
              <TabsTrigger
                value="th2"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                TH2: Kết quả (Chưa có số hóa đơn)
              </TabsTrigger>
            </TabsList>

            {/* RESPONSE TH1 */}
            <TabsContent value="th1" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <CodeBlock>
                  {`{
    "code": "00",
    "message": "Thành công",
    "data": {
        "inv_invoiceSeries": "1C22TMX",
        "inv_invoiceNumber": 6,
        "inv_discountAmount": "0"
    }
}`}
                </CodeBlock>
              </div>
            </TabsContent>

            {/* RESPONSE TH2 */}
            <TabsContent value="th2" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <CodeBlock>
                  {`{
    "code": "00",
    "message": null,
    "ok": true,
    "data": {
        "inv_invoiceSeries": "6C23NAB",
        "inv_invoiceAuth_Id": "3a0aaa84-3eb7-7fd7-5079-4f7e8f685a64",
        "key_api": "TICH_HOP"
    }
}`}
                </CodeBlock>
              </div>
            </TabsContent>
          </Tabs>
        </article>

        {/* 3. Footer Navigation */}
        <FooterNav
          prev={{
            title: "Hóa đơn GTGT, thông thường",
            href: "/docs/api/invoice-unsigned",
          }}
          next={{
            title: "Điều chỉnh hóa đơn",
            href: "/docs/api/invoice-adjust",
          }}
        />
      </div>

      {/* --- PHẦN MỤC LỤC (CỘT PHẢI - STICKY) --- */}
      <TableOfContents>
        <TOCItem href="#overview">API Endpoint Overview</TOCItem>
        <TOCItem href="#request-body">Request</TOCItem>
        <TOCItem href="#response">Response</TOCItem>
      </TableOfContents>
    </div>
  );
}
