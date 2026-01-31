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

export default function InvoiceReplacementPage() {
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
              <BreadcrumbPage>Thay thế hóa đơn</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 2. Nội dung bài viết */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-4">Thay thế hóa đơn</h1>
          <p className="text-xl text-gray-600 mb-8">
            API này dùng để thay thế cho hóa đơn đã phát hành nhưng bị sai sót
            (sai MST, sai tiền,...) mà không thể điều chỉnh. Hóa đơn mới sẽ thay
            thế hoàn toàn cho hóa đơn cũ.
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
                https://sb-invoice.zoffice.vn/api/v1/invoice-replacement
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

          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-6">
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

          <Tabs defaultValue="gtgt" className="not-prose">
            <TabsList className="w-full flex-wrap justify-start border-b rounded-none h-auto p-0 bg-transparent gap-2">
              <TabsTrigger
                value="gtgt"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                Hóa đơn GTGT
              </TabsTrigger>
              <TabsTrigger
                value="banhang"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                Hóa đơn Bán hàng
              </TabsTrigger>
              <TabsTrigger
                value="pxk"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                Hóa đơn PXK
              </TabsTrigger>
            </TabsList>

            {/* TH1: Hóa đơn GTGT */}
            <TabsContent value="gtgt" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <pre>{`{
    "type": "replacement",
    "originalInvoiceId": "old-invoice-uuid-123",
    "data": [
        {
            "inv_invoiceSeries": "1C26TYY",
            "inv_invoiceIssuedDate": "2026-08-01",
            "inv_currencyCode": "VND",
            "inv_buyerLegalName": "CÔNG TY GTGT MỚI",
            "inv_buyerTaxCode": "0100100100",
            "inv_paymentMethodName": "TM/CK",
            "inv_TotalAmountWithoutVat": 1000000,
            "inv_vatAmount": 100000,
            "inv_TotalAmount": 1100000,
            "details": [
                {
                    "data": [
                        {
                            "inv_itemName": "Dịch vụ phần mềm",
                            "inv_quantity": 1,
                            "inv_unitPrice": 1000000,
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
            </TabsContent>

            {/* TH2: Hóa đơn Bán hàng */}
            <TabsContent value="banhang" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <pre>{`{
    "type": "replacement",
    "originalInvoiceId": "old-invoice-uuid-456",
    "data": [
        {
            "inv_invoiceSeries": "2C26TYY",
            "inv_invoiceIssuedDate": "2026-08-01",
            "inv_currencyCode": "VND",
            "inv_buyerDisplayName": "Nguyễn Văn Mua Lẻ",
            "inv_buyerAddressLine": "Hà Nội",
            "inv_paymentMethodName": "TM",
            "inv_TotalAmount": 550000,
            "details": [
                {
                    "data": [
                        {
                            "inv_itemName": "Quần áo (Trực tiếp)",
                            "inv_quantity": 2,
                            "inv_unitPrice": 275000,
                            "ma_thue": -1,
                            "inv_TotalAmount": 550000
                        }
                    ]
                }
            ]
        }
    ]
}`}</pre>
              </div>
            </TabsContent>

            {/* TH3: Hóa đơn PXK */}
            <TabsContent value="pxk" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <pre>{`{
    "type": "replacement",
    "originalInvoiceId": "old-invoice-uuid-789",
    "data": [
        {
            "inv_invoiceSeries": "3C26TYY",
            "inv_invoiceIssuedDate": "2026-08-01",
            "inv_buyerLegalName": "Chi nhánh Miền Nam",
            "inv_buyerTaxCode": "0100100100-001",
            "internal_command_no": "LDD002",
            "nguoi_van_chuyen": "Nguyễn Văn Tải",
            "phuong_tien": "Xe tải 29C-123.45",
            "kho_xuat": "Kho Tổng Hà Nội",
            "kho_nhap": "Kho CN HCM",
            "details": [
                {
                    "data": [
                        {
                            "inv_itemCode": "SP-A",
                            "inv_itemName": "Sản phẩm A chuyển kho",
                            "inv_unitCode": "Cái",
                            "inv_quantity": 1000,
                            "inv_unitPrice": 0,
                            "inv_TotalAmount": 0
                        }
                    ]
                }
            ]
        }
    ]
}`}</pre>
              </div>
            </TabsContent>
          </Tabs>

          <h2 id="response" className="text-2xl font-bold mt-8 mb-4">
            Response
          </h2>

          <Tabs defaultValue="gtgt" className="not-prose">
            <TabsList className="w-full flex-wrap justify-start border-b rounded-none h-auto p-0 bg-transparent gap-2">
              <TabsTrigger
                value="gtgt"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                Kết quả GTGT
              </TabsTrigger>
              <TabsTrigger
                value="banhang"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                Kết quả Bán hàng
              </TabsTrigger>
              <TabsTrigger
                value="pxk"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3"
              >
                Kết quả PXK
              </TabsTrigger>
            </TabsList>

            {/* RESPONSE GTGT */}
            <TabsContent value="gtgt" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <pre>{`{
    "code": "00",
    "ok": true,
    "message": "Thay thế thành công",
    "data": {
        "id": "new-uuid-gtgt-001",
        "inv_invoiceSeries": "1C26TYY",
        "inv_invoiceNumber": 101,
        "is_replacement": true,
        "replaced_invoice_id": "old-invoice-uuid-123",
        "inv_TotalAmount": 1100000
    }
}`}</pre>
              </div>
            </TabsContent>

            {/* RESPONSE Bán hàng */}
            <TabsContent value="banhang" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <pre>{`{
    "code": "00",
    "ok": true,
    "message": "Thay thế thành công",
    "data": {
        "id": "new-uuid-bh-002",
        "inv_invoiceSeries": "2C26TYY",
        "inv_invoiceNumber": 205,
        "is_replacement": true,
        "replaced_invoice_id": "old-invoice-uuid-456",
        "inv_TotalAmount": 550000
    }
}`}</pre>
              </div>
            </TabsContent>

            {/* RESPONSE PXK */}
            <TabsContent value="pxk" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <pre>{`{
    "code": "00",
    "ok": true,
    "message": "Thay thế phiếu xuất kho thành công",
    "data": {
        "id": "new-uuid-pxk-003",
        "inv_invoiceSeries": "3C26TYY",
        "inv_invoiceNumber": 50,
        "is_replacement": true,
        "replaced_invoice_id": "old-invoice-uuid-789",
        "internal_command_no": "LDD002"
    }
}`}</pre>
              </div>
            </TabsContent>
          </Tabs>
        </article>

        {/* 3. Footer Navigation */}
        <FooterNav
          prev={{
            title: "Giảm thuế NQ204",
            href: "/docs/api/invoice-tax-reduction",
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
