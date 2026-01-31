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

export default function InvoiceTaxReductionPage() {
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
              <BreadcrumbLink href="/docs/api/invoices">Hóa đơn</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Giảm thuế NQ204</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 2. Nội dung bài viết */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-4">
            Hóa đơn bán hàng có giảm thuế theo NQ204
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            API này hỗ trợ tạo hóa đơn áp dụng chính sách giảm thuế GTGT theo
            Nghị quyết 204/2025/QH15 (giảm thuế suất từ 10% xuống 8% hoặc giảm
            20% mức tỷ lệ %).
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
              <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded w-fit">
                POST
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
                href="/docs/api/definitions"
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
                TH1: Giảm thuế cả hóa đơn
              </TabsTrigger>
              <TabsTrigger
                value="th2"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                TH2: Giảm từng dòng hàng
              </TabsTrigger>
            </TabsList>

            {/* TH1: GIẢM THUẾ TRÊN CẢ HOÁ ĐƠN */}
            <TabsContent value="th1" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <pre>{`{
    "editmode": 1,
    "data": [
        {
            "inv_invoiceSeries": "1C26TYY",
            "inv_invoiceIssuedDate": "2026-07-15",
            "inv_currencyCode": "VND",
            "inv_exchangeRate": 1,
            "inv_buyerDisplayName": "Nguyễn Văn A",
            "inv_buyerLegalName": "CÔNG TY TNHH ABC",
            "inv_buyerTaxCode": "0101234567",
            "inv_buyerAddressLine": "Ba Đình, Hà Nội",
            "inv_paymentMethodName": "TM/CK",
            "inv_TotalAmountWithoutVat": 1000000,
            "inv_vatAmount": 80000,
            "inv_TotalAmount": 1080000,
            "key_api": "ADEFP123dHAJDH",
            "details": [
                {
                    "data": [
                        {
                            "tchat": 1,
                            "stt_rec0": 1,
                            "inv_itemCode": "SP01",
                            "inv_itemName": "Sản phẩm A (Được giảm thuế)",
                            "inv_unitCode": "Cái",
                            "inv_quantity": 10,
                            "inv_unitPrice": 100000,
                            "inv_TotalAmountWithoutVat": 1000000,
                            "ma_thue": 8,
                            "inv_vatAmount": 80000,
                            "inv_TotalAmount": 1080000
                        }
                    ]
                }
            ]
        }
    ]
}`}</pre>
              </div>
              <p className="text-sm text-gray-500 mt-2 italic">
                * Lưu ý: <code>ma_thue: 8</code> đại diện cho mức thuế suất 8%
                theo NQ204.
              </p>
            </TabsContent>

            {/* TH2: GIẢM TRÊN TỪNG DÒNG HÀNG */}
            <TabsContent value="th2" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <pre>{`{
    "editmode": 1,
    "data": [
        {
            "inv_invoiceSeries": "1C26TYY",
            "inv_invoiceIssuedDate": "2026-07-15",
            "inv_currencyCode": "VND",
            "inv_exchangeRate": 1,
            "inv_buyerDisplayName": "Nguyễn Văn B",
            "inv_buyerLegalName": "CÔNG TY XYZ",
            "inv_buyerTaxCode": "0109876543",
            "inv_buyerAddressLine": "Cầu Giấy, Hà Nội",
            "inv_paymentMethodName": "TM/CK",
            "inv_TotalAmountWithoutVat": 2000000,
            "inv_vatAmount": 180000,
            "inv_TotalAmount": 2180000,
            "key_api": "ADEFP123dHAJDH",
            "details": [
                {
                    "data": [
                        {
                            "tchat": 1,
                            "stt_rec0": 1,
                            "inv_itemCode": "SP01",
                            "inv_itemName": "Sản phẩm A (Được giảm thuế 8%)",
                            "inv_unitCode": "Cái",
                            "inv_quantity": 10,
                            "inv_unitPrice": 100000,
                            "inv_TotalAmountWithoutVat": 1000000,
                            "ma_thue": 8,
                            "inv_vatAmount": 80000,
                            "inv_TotalAmount": 1080000
                        },
                        {
                            "tchat": 1,
                            "stt_rec0": 2,
                            "inv_itemCode": "SP02",
                            "inv_itemName": "Sản phẩm B (Không giảm, 10%)",
                            "inv_unitCode": "Cái",
                            "inv_quantity": 5,
                            "inv_unitPrice": 200000,
                            "inv_TotalAmountWithoutVat": 1000000,
                            "ma_thue": 10,
                            "inv_vatAmount": 100000,
                            "inv_TotalAmount": 1100000
                        }
                    ]
                }
            ]
        }
    ]
}`}</pre>
              </div>
              <p className="text-sm text-gray-500 mt-2 italic">
                * Lưu ý: Hóa đơn bao gồm cả mặt hàng chịu thuế 8% (giảm) và 10%
                (không giảm).
              </p>
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
                TH1: Kết quả (Giảm toàn bộ)
              </TabsTrigger>
              <TabsTrigger
                value="th2"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                TH2: Kết quả (Giảm từng dòng)
              </TabsTrigger>
            </TabsList>

            {/* RESPONSE TH1 */}
            <TabsContent value="th1" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <pre>{`{
    "code": "00",
    "message": null,
    "ok": true,
    "data": {
        "id": "e7b1a2c3-d4e5-4f6a-8b9c-123456789abc",
        "inv_invoiceSeries": "1C26TYY",
        "inv_invoiceNumber": 15,
        "inv_invoiceIssuedDate": "2026-07-15T00:00:00",
        "inv_TotalAmountWithoutVat": 1000000,
        "inv_vatAmount": 80000,
        "inv_TotalAmount": 1080000,
        "details": {
            "data": [
                {
                    "stt_rec0": "1",
                    "inv_itemCode": "SP01",
                    "inv_itemName": "Sản phẩm A (Được giảm thuế)",
                    "inv_unitPrice": 100000,
                    "inv_quantity": 10,
                    "ma_thue": "8",
                    "inv_vatAmount": 80000,
                    "inv_TotalAmount": 1080000
                }
            ]
        }
    }
}`}</pre>
              </div>
            </TabsContent>

            {/* RESPONSE TH2 */}
            <TabsContent value="th2" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <pre>{`{
    "code": "00",
    "message": null,
    "ok": true,
    "data": {
        "id": "f8c2b3d4-e5f6-4a7b-9c0d-987654321xyz",
        "inv_invoiceSeries": "1C26TYY",
        "inv_invoiceNumber": 16,
        "inv_invoiceIssuedDate": "2026-07-15T00:00:00",
        "inv_TotalAmountWithoutVat": 2000000,
        "inv_vatAmount": 180000,
        "inv_TotalAmount": 2180000,
        "details": {
            "data": [
                {
                    "stt_rec0": "1",
                    "inv_itemCode": "SP01",
                    "inv_itemName": "Sản phẩm A (Được giảm thuế 8%)",
                    "ma_thue": "8",
                    "inv_vatAmount": 80000,
                    "inv_TotalAmount": 1080000
                },
                {
                    "stt_rec0": "2",
                    "inv_itemCode": "SP02",
                    "inv_itemName": "Sản phẩm B (Không giảm, 10%)",
                    "ma_thue": "10",
                    "inv_vatAmount": 100000,
                    "inv_TotalAmount": 1100000
                }
            ]
        }
    }
}`}</pre>
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
