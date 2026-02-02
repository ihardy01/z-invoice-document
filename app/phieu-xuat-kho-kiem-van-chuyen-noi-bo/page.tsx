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
import Link from "next/link";
import { DynamicBreadcrumb } from "@/components/layout/dynamic-breadcrumb";
import { CodeBlock } from "@/components/ui/code-block";

export default function InvoiceUnsignedPage() {
  return (
    <div className="flex max-w-screen-2xl mx-auto py-12 px-6">
      {/* --- PHẦN NỘI DUNG CHÍNH (CỘT TRÁI) --- */}
      <div className="flex-1 max-w-4xl min-w-0">
        {/* 1. Breadcrumb */}
        <DynamicBreadcrumb />

        {/* 2. Nội dung bài viết */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-4">
            Phiếu xuất kho kiêm vận chuyển nội bộ
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            API này dùng để tạo mới và phát hành phiếu xuất kho kiêm vận chuyển
            nội bộ.
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

          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-6">
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

          {/* Code mẫu Request */}
          <h3 className="text-lg font-bold mt-4 mb-2">Ví dụ Request JSON</h3>
          <CodeBlock>
            {`{
        "editmode": 1,
        "data": [
            {
                "inv_invoiceSeries": "6C23NYY",
                "inv_invoiceIssuedDate": "2023-10-05",
                "inv_currencyCode": "VND",
                "inv_exchangeRate": 1,
                "so_benh_an": "A123DE64",
                "inv_buyerDisplayName": "Tên người nhận hàng",
                "inv_buyerLegalName": "Tên đơn vị nhận hàng",
                "inv_buyerTaxCode": "0106026495-999",
                "inv_buyerEmail": "abc@gmail.com",
                "lddnbo": "01/ABC của Ban giám đốc",
                "tnvchuyen":"Tên người vận chuyển",
                "ptvchuyen": "Xe tải",
                "dckhoxuat": "Địa chỉ kho xuất",
                "dckhonhap": "Địa chỉ kho nhập",
                "sohopdong": "Số hợp đồng vận chuyển",
                "hvtnxhang": "Ho tên người xuất hàng",
                "inv_TotalAmount": 6100000,
                "key_api": "ADEFH823HMKDH",
                "details": [
                    {
                        "data": [
                            {
                                "tchat": 1,
                                "stt_rec0": 1,
                                "inv_itemCode": "HH001",
                                "inv_itemName": "Hàng hóa 001",
                                "inv_unitCode": "Phần",
                                "inv_quantity": 1,
                                "inv_unitPrice": 120000,
                                "inv_TotalAmountWithoutVat": 120000
                            },
                            {
                                "tchat": 1,
                                "stt_rec0": 2,
                                "inv_itemCode": "HH002",
                                "inv_itemName": "Hàng hóa 002",
                                "inv_unitCode": "Phần",
                                "inv_quantity": 2,
                                "inv_unitPrice": 245000,
                                "inv_TotalAmountWithoutVat": 490000
                            }
                        ]
                    }
                ]
            }
        ]
    }`}
          </CodeBlock>

          <h2 id="response" className="text-2xl font-bold mt-8 mb-4">
            Response
          </h2>

          <h3 className="text-lg font-bold mt-6 mb-2">Kết quả trả về</h3>
          <CodeBlock>
            {`{
        "code": "00",
        "message": null,
        "ok": true,
        "data": {
            "key_api": "ADEFH823HMKDH",
            "inv_invoiceAuth_id": "3a0e103a-0c33-2e9f-a152-b4e2b3c94b28",
            "inv_originalId": "3a0e103a-0c33-2e9f-a152-b4e2b3c94b28",
            "inv_invoiceIssuedDate": "2023-10-05T00:00:00",
            "inv_invoiceSeries": "6C23NYY",
            "inv_invoiceNumber": 35,
            "so_benh_an": "A123DE64",
            "inv_currencyCode": "VND",
            "inv_exchangeRate": 1,
            "inv_paymentMethodName": null,
            "inv_buyerDisplayName": "Tên người nhận hàng",
            "inv_buyerLegalName": "Tên đơn vị nhận hàng",
            "inv_buyerTaxCode": "0106026495-999",
            "inv_buyerAddressLine": "Hà Nội",
            "inv_buyerEmail": "abc@gmail.com",
            "inv_buyerBankAccount": null,
            "inv_buyerBankName": null,
            "inv_TotalAmount": 6100000,
            "lddnbo": "01/ABC của Ban giám đốc",
            "tnvchuyen": "Tên người vận chuyển",
            "ptvchuyen": "Xe tải",
            "dckhoxuat": "Địa chỉ kho xuất",
            "dckhonhap": "Địa chỉ kho nhập",
            "hdktso": null,
            "hdktngay": null,
            "sohopdong": "Số hợp đồng vận chuyển",
            "hvtnxhang": "Ho tên người xuất hàng",
            "trang_thai_hd": 0,
            "sobaomat": "FD4F078D",
            "macqt": null,
            "shdon": 35,
            "ten": "Tên đơn vị nhận hàng",
            "tnmua": "Tên người nhận hàng",
            "mst": "0106026495-999",
            "dchi": "Hà Nội",
            "buyerTel": null,
            "buyerIdentityCard": null,
            "email": "abc@gmail.com",
            "hoadon68_id": "3a0e103a-0c33-2e9f-a152-b4e2b3c94b28",
            "tgtcthue": null,
            "tgtthue": null,
            "tgtttbso": 6100000,
            "tthai": "Chờ ký",
            "is_success": null,
            "is_tthdon": "0",
            "note_error": null,
            "details": {
                "data": [
                    {
                        "tchat": 1,
                        "stt_rec0": "1",
                        "inv_itemCode": "HH001",
                        "inv_itemName": "Hàng hóa 001",
                        "inv_unitCode": "Phần",
                        "inv_quantity": 1,
                        "inv_unitPrice": 120000,
                        "inv_TotalAmountWithoutVat": 120000,
                        "inv_TotalAmount": null
                    },
                    {
                        "tchat": 1,
                        "stt_rec0": "2",
                        "inv_itemCode": "HH002",
                        "inv_itemName": "Hàng hóa 002",
                        "inv_unitCode": "Phần",
                        "inv_quantity": 2,
                        "inv_unitPrice": 245000,
                        "inv_TotalAmountWithoutVat": 490000,
                        "inv_TotalAmount": null
                    }
                ]
            }
        }
    }`}
          </CodeBlock>
        </article>

        {/* 3. Footer Navigation */}
        <FooterNav
          prev={{
            title: "Lấy danh sách ký hiệu",
            href: "/docs/api/invoice-symbols/list",
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
