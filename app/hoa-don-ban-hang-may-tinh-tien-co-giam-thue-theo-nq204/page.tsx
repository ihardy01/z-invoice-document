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
          <h1 className="text-4xl font-bold mb-4">
            Hóa đơn Bán hàng máy tính tiền (Có giảm thuế theo NQ 204)
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            API này hỗ trợ tạo hóa đơn áp dụng chính sách giảm thuế GTGT theo
            Nghị quyết 204/2025/QH15.
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
                <CodeBlock>
                  {`{
    "editmode": 1,
    "data": [
        {
            "inv_invoiceSeries": "2C25MTP",
            "inv_invoiceIssuedDate": "2025-11-27",
            "inv_currencyCode": "VND",
            "inv_exchangeRate": 1,
            "so_benh_an": "A123DE64",
            "inv_buyerDisplayName": "Nguyễn Văn A",
            "inv_buyerLegalName": "CÔNG TY M-INVOICE",
            "inv_buyerTaxCode": "0106026495-999",
            "inv_buyerAddressLine": "Giáp Bát, Hoàng Mai, Hà Nội",
            "inv_buyerEmail": "abc@gmail.com",
            "inv_buyerBankAccount": "100003131",
            "inv_buyerBankName": "Ngân hàng TMCP Á Châu - ACB",
            "inv_paymentMethodName": "TM/CK",
            "nonTaxZone": 1,
            "isDeductionNQ43": true, // Có Áp dụng giảm thuế cho HÓA ĐƠN BÁN HÀNG theo NQ không true: có, false: không
            "tlptdoanhthu20": 1,  //% Thuế GTGT theo Doanh thu
            "tgtck20": 1220, //Tổng tiền thuế GTGT được giảm
            "inv_discountAmount": 0,
            "inv_TotalAmount": 608780,
        //    "key_api": "ADEFH123HAKDH",
            "cccdan": "034090008484",
            "so_hchieu": "G1A2B3C4D",
            "mdvqhnsach_nmua": "2000005",
            "ma_ch": "CUAHANG001",
            "ten_ch": "Cửa hàng xăng dầu 001",
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
                            "inv_discountPercentage": 0,
                            "inv_discountAmount": 0,
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
                            "inv_discountPercentage": 0,
                            "inv_discountAmount": 0,
                            "inv_TotalAmountWithoutVat": 490000
                        }
                    ]
                }
            ]
        }
    ]
}`}
                </CodeBlock>
              </div>
              <p className="text-sm text-gray-500 mt-2 italic">
                * Lưu ý: <code>ma_thue: 8</code> đại diện cho mức thuế suất 8%
                theo NQ204.
              </p>
            </TabsContent>

            {/* TH2: GIẢM TRÊN TỪNG DÒNG HÀNG */}
            <TabsContent value="th2" className="mt-4">
              <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto max-h-[500px]">
                <CodeBlock>
                  {`{
  "editmode": 1,
  "data": [
  {
    "inv_invoiceSeries": "2C25MAC",
    "inv_invoiceIssuedDate": "2025-05-28",
    "inv_currencyCode": "VND",
    "inv_exchangeRate": 1,
    "so_benh_an": "A123DE64",
    "inv_buyerDisplayName": "Nguyễn Văn A",
    "inv_buyerLegalName": "CÔNG TY M-INVOICE",
    "inv_buyerTaxCode": "0106026495-999",
    "inv_buyerAddressLine": "Giáp Bát, Hoàng Mai, Hà Nội",
    "inv_buyerEmail": "abc@gmail.com",
    "inv_buyerBankAccount": "100003131",
    "inv_buyerBankName": "Ngân hàng TMCP Á Châu - ACB",
    "inv_paymentMethodName": "TM/CK",
    "nonTaxZone": 0,
    "tlptdoanhthu20": 5,
    "isDeductionNQ43": true,
    "inv_discountAmount": 0,
    "inv_TotalAmount": 606340,
    "key_api": "",
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
            "inv_discountPercentage": 0,
            "inv_discountAmount": 0,
            "inv_vatRateDeduction": 5,
            "inv_vatAmountDeduction": 1200,
            "inv_TotalAmountWithoutVat": 118800
          },
          {
            "tchat": 1,
            "stt_rec0": 2,
            "inv_itemCode": "HH002",
            "inv_itemName": "Hàng hóa 002",
            "inv_unitCode": "Phần",
            "inv_quantity": 2,
            "inv_unitPrice": 245000,
            "inv_discountPercentage": 0,
            "inv_discountAmount": 0,
            "inv_TotalAmountWithoutVat": 490000
          }
        ]
      }
    ]
  }
  ]
}`}
                </CodeBlock>
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
                <CodeBlock>
                  {`{
    "code": "00",
    "message": null,
    "ok": true,
    "data": {
        "key_api": "TICH_HOP",
        "inv_invoiceAuth_id": "3a1dd6e5-4001-aa95-3b7a-d03d2898709b",
        "inv_invoiceIssuedDate": "2025-11-27T00:00:00",
        "inv_invoiceSeries": "2C25MTP",
        "inv_originalId": "3a1dd6e5-4001-aa95-3b7a-d03d2898709b",
        "inv_invoiceNumber": 15,
        "so_benh_an": "A123DE64",
        "inv_currencyCode": "VND",
        "inv_exchangeRate": 1,
        "inv_paymentMethodName": "TM/CK",
        "inv_buyerDisplayName": "Nguyễn Văn A",
        "inv_buyerLegalName": "M-invoice kiểm thử HĐĐT có mã",
        "inv_buyerTaxCode": "0106026495-999",
        "inv_buyerAddressLine": "Hà Nội",
        "inv_buyerEmail": "abc@gmail.com",
        "inv_buyerBankAccount": "100003131",
        "inv_buyerBankName": "Ngân hàng TMCP Á Châu - ACB",
        "inv_TotalAmount": 608780,
        "inv_discountAmount": 0,
        "nonTaxZone": 1,
        "isDeductionNQ43": true,
        "tlptdoanhthu20": 1,
        "tgtck20": 1220,
        "ghi_chu": null,
        "tthai": "Chờ ký",
        "is_success": null,
        "is_tthdon": 0,
        "note_error": null,
        "sobaomat": "54B9B46E",
        "macqt": "M2-25-MBUT7-00000104663",
        "buyerTel": null,
        "shdon": 15,
        "ten": "M-invoice kiểm thử HĐĐT có mã",
        "tnmua": "Nguyễn Văn A",
        "mst": "0106026495-999",
        "email": "abc@gmail.com",
        "id": "3a1dd6e5-4001-aa95-3b7a-d03d2898709b",
        "trang_thai": 1,
        "trang_thai_hd": 0,
        "ma_dt": null,
        "hoadon68_id": "3a1dd6e5-4001-aa95-3b7a-d03d2898709b",
        "tgtthue": null,
        "tgtttbso": 608780,
        "bien_so_xe": null,
        "socialDeductionAmount": null,
        "ratioOrtherTax": null,
        "so_hchieu": "G1A2B3C4D",
        "mdvqhnsach_nmua": "2000005",
        "ten_ch": "Cửa hàng xăng dầu 001",
        "ma_ch": "CUAHANG001",
        "cccdan": "034090008484",
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
                    "inv_discountPercentage": 0,
                    "inv_discountAmount": 0,
                    "inv_TotalAmountWithoutVat": 120000,
                    "inv_tiencong": null,
                    "inv_vatAmountDeduction": null,
                    "inv_vatRateDeduction": null,
                    "inv_TotalAmount": null,
                    "inv_purity": null,
                    "inv_weight": null,
                    "inv_labourCost": null,
                    "skhung": null,
                    "smay": null,
                    "bien_sxe": null,
                    "ten_ngui": null,
                    "mst_ngui": null,
                    "sddanh_ngui": null,
                    "dchi_ngui": null
                },
                {
                    "tchat": 1,
                    "stt_rec0": "2",
                    "inv_itemCode": "HH002",
                    "inv_itemName": "Hàng hóa 002",
                    "inv_unitCode": "Phần",
                    "inv_quantity": 2,
                    "inv_unitPrice": 245000,
                    "inv_discountPercentage": 0,
                    "inv_discountAmount": 0,
                    "inv_TotalAmountWithoutVat": 490000,
                    "inv_tiencong": null,
                    "inv_vatAmountDeduction": null,
                    "inv_vatRateDeduction": null,
                    "inv_TotalAmount": null,
                    "inv_purity": null,
                    "inv_weight": null,
                    "inv_labourCost": null,
                    "skhung": null,
                    "smay": null,
                    "bien_sxe": null,
                    "ten_ngui": null,
                    "mst_ngui": null,
                    "sddanh_ngui": null,
                    "dchi_ngui": null
                }
            ]
        }
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
        "key_api": "TICH_HOP",
        "inv_invoiceAuth_id": "3a1dd6e5-4001-aa95-3b7a-d03d2898709b",
        "inv_invoiceIssuedDate": "2025-11-27T00:00:00",
        "inv_invoiceSeries": "2C25MTP",
        "inv_originalId": "3a1dd6e5-4001-aa95-3b7a-d03d2898709b",
        "inv_invoiceNumber": 15,
        "so_benh_an": "A123DE64",
        "inv_currencyCode": "VND",
        "inv_exchangeRate": 1,
        "inv_paymentMethodName": "TM/CK",
        "inv_buyerDisplayName": "Nguyễn Văn A",
        "inv_buyerLegalName": "M-invoice kiểm thử HĐĐT có mã",
        "inv_buyerTaxCode": "0106026495-999",
        "inv_buyerAddressLine": "Hà Nội",
        "inv_buyerEmail": "abc@gmail.com",
        "inv_buyerBankAccount": "100003131",
        "inv_buyerBankName": "Ngân hàng TMCP Á Châu - ACB",
        "inv_TotalAmount": 608780,
        "inv_discountAmount": 0,
        "nonTaxZone": 1,
        "isDeductionNQ43": true,
        "tlptdoanhthu20": 1,
        "tgtck20": 1220,
        "ghi_chu": null,
        "tthai": "Chờ ký",
        "is_success": null,
        "is_tthdon": 0,
        "note_error": null,
        "sobaomat": "54B9B46E",
        "macqt": "M2-25-MBUT7-00000104663",
        "buyerTel": null,
        "shdon": 15,
        "ten": "M-invoice kiểm thử HĐĐT có mã",
        "tnmua": "Nguyễn Văn A",
        "mst": "0106026495-999",
        "email": "abc@gmail.com",
        "id": "3a1dd6e5-4001-aa95-3b7a-d03d2898709b",
        "trang_thai": 1,
        "trang_thai_hd": 0,
        "ma_dt": null,
        "hoadon68_id": "3a1dd6e5-4001-aa95-3b7a-d03d2898709b",
        "tgtthue": null,
        "tgtttbso": 608780,
        "bien_so_xe": null,
        "socialDeductionAmount": null,
        "ratioOrtherTax": null,
        "so_hchieu": "G1A2B3C4D",
        "mdvqhnsach_nmua": "2000005",
        "ten_ch": "Cửa hàng xăng dầu 001",
        "ma_ch": "CUAHANG001",
        "cccdan": "034090008484",
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
                    "inv_discountPercentage": 0,
                    "inv_discountAmount": 0,
                    "inv_TotalAmountWithoutVat": 120000,
                    "inv_tiencong": null,
                    "inv_vatAmountDeduction": null,
                    "inv_vatRateDeduction": null,
                    "inv_TotalAmount": null,
                    "inv_purity": null,
                    "inv_weight": null,
                    "inv_labourCost": null,
                    "skhung": null,
                    "smay": null,
                    "bien_sxe": null,
                    "ten_ngui": null,
                    "mst_ngui": null,
                    "sddanh_ngui": null,
                    "dchi_ngui": null
                },
                {
                    "tchat": 1,
                    "stt_rec0": "2",
                    "inv_itemCode": "HH002",
                    "inv_itemName": "Hàng hóa 002",
                    "inv_unitCode": "Phần",
                    "inv_quantity": 2,
                    "inv_unitPrice": 245000,
                    "inv_discountPercentage": 0,
                    "inv_discountAmount": 0,
                    "inv_TotalAmountWithoutVat": 490000,
                    "inv_tiencong": null,
                    "inv_vatAmountDeduction": null,
                    "inv_vatRateDeduction": null,
                    "inv_TotalAmount": null,
                    "inv_purity": null,
                    "inv_weight": null,
                    "inv_labourCost": null,
                    "skhung": null,
                    "smay": null,
                    "bien_sxe": null,
                    "ten_ngui": null,
                    "mst_ngui": null,
                    "sddanh_ngui": null,
                    "dchi_ngui": null
                }
            ]
        }
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
