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
            Thêm hoá đơn, ký và gửi CQT
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            API này dùng để tạo mới, phát hành hoá đơn và gửi cho CQT.
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
                https://sb-invoice.zoffice.vn/api/v1/invoice-signed
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
                  TaxCode: {`<Mã số thuế>`}
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
            "inv_invoiceSeries": "1C25TYY", //hoá đơn GTGT thông thường
            "inv_invoiceIssuedDate": "2025-06-06",
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
            "inv_discountAmount": 0,
            "inv_TotalAmountWithoutVat": 610000,
            "inv_vatAmount": 48800,
            "inv_TotalAmount": 658800,
            "key_api": "ADEFP123HAJDH",
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
                            "inv_TotalAmountWithoutVat": 120000,
                            "ma_thue": 8,
                            "inv_vatAmount": 9600,
                            "inv_TotalAmount": 129600
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
                            "inv_TotalAmountWithoutVat": 490000,
                            "ma_thue": 8,
                            "inv_vatAmount": 39200,
                            "inv_TotalAmount": 529200
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

          <h3 id="response-success" className="text-lg font-bold mt-6 mb-2">
            Thành công
          </h3>
          <CodeBlock>
            {`{
    "code": "00",
    "message": null,
    "ok": true,
    "data": {
        "key_api": "12312312312",
        "hoadon68_id": "3a1a564b-60ae-20a2-4ea3-39d818a8b090",
        "tdlap": "2025-06-06T00:00:00",
        "khieu": "1C25TYY",
        "shdon": 8072,
        "sdhang": "A123DE64",
        "dvtte": "VND",
        "tgia": 1,
        "htttoan": "TM/CK",
        "tnmua": "Nguyễn Văn A",
        "ten": "M-invoice kiểm thử hóa đơn có mã",
        "mst": "0106026495-999",
        "dchi": "Hà Nội",
        "email": "abc@gmail.com",
        "stknmua": "100003131",
        "nganhang_ngmua": "Ngân hàng TMCP Á Châu - ACB",
        "tgtttbso": 658800,
        "ttcktmai": 0,
        "tgtthue": 48800,
        "macqt": null,
        "tgtcthue": 610000,
        "inv_invoiceAuth_id": "3a1a564b-60ae-20a2-4ea3-39d818a8b090",
        "inv_originalId": "3a1a564b-60ae-20a2-4ea3-39d818a8b090",
        "inv_invoiceIssuedDate": "2025-06-06T00:00:00",
        "inv_invoiceSeries": "1C25TYY",
        "inv_invoiceNumber": 8072,
        "so_benh_an": "A123DE64",
        "inv_currencyCode": "VND",
        "inv_exchangeRate": 1,
        "inv_paymentMethodName": "TM/CK",
        "inv_buyerDisplayName": "Nguyễn Văn A",
        "inv_buyerLegalName": "M-invoice kiểm thử hóa đơn có mã",
        "inv_buyerTaxCode": "0106026495-999",
        "inv_buyerAddressLine": "Hà Nội",
        "inv_buyerEmail": "abc@gmail.com",
        "inv_buyerBankAccount": "100003131",
        "inv_buyerBankName": "Ngân hàng TMCP Á Châu - ACB",
        "OrtherTax": null,
        "environmentalProtectionFee": null,
        "connectorMaintenanceFee": null,
        "drainageFee": null,
        "serviceCharge": null,
        "deductionAmount": null,
        "ortherFee": null,
        "deductionVatamount": null,
        "inv_TotalAmount": 658800,
        "inv_discountAmount": 0,
        "inv_vatAmount": 48800,
        "inv_TotalAmountWithoutVat": 610000,
        "trang_thai": 3,
        "trang_thai_hd": 0,
        "sobaomat": "615FD568",
        "buyerTel": null,
        "buyerIdentityCard": "034090008484",
        "is_tthdon": "0",
        "tthai": "Đã gửi",
        "ghi_chu": null,
        "is_success": null,
        "note_error": "",
        "id": "3a1a564b-60ae-20a2-4ea3-39d818a8b090",
        "phong": null,
        "doan": null,
        "ngayden": null,
        "ngaydi": null,
        "phidv": 0,
        "nonTaxZone": null,
        "so_phong": null,
        "so_folio": null,
        "inv_arrivalDate": null,
        "inv_departureDate": null,
        "tencuahang": "Cửa hàng xăng dầu 001",
        "dchicuahang": null,
        "macuahang": "CUAHANG001",
        "ma_dt": null,
        "ma_voi_bom": null,
        "bien_so_xe": null,
        "inv_productCode": null,
        "inv_productName": null,
        "socialDeductionAmount": null,
        "ratioOrtherTax": null,
        "so_hchieu": "G1A2B3C4D",
        "mdvqhnsach_nmua": "2000005",
        "ten_ch": "Cửa hàng xăng dầu 001",
        "ma_ch": "CUAHANG001",
        "cccd": "034090008484",
        "cccdan": "034090008484",
        "pt_thuettdb": null,
        "tongthue_ttdb": null,
        "tongphi_dichvu": 0,
        "pt_phidichvu": null,
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
                    "phidichvu": null,
                    "inv_discountPercentage": 0,
                    "inv_discountAmount": 0,
                    "inv_TotalAmountWithoutVat": 120000,
                    "ma_thue": "8",
                    "inv_vatAmount": 9600,
                    "inv_TotalAmount": 129600,
                    "skhung": null,
                    "smay": null,
                    "bien_sxe": null,
                    "ten_ngui": null,
                    "mst_ngui": null,
                    "sddanh_ngui": null,
                    "pt_phidv": null,
                    "phidv": null,
                    "ptthuettdb": null,
                    "tthuettdb": null,
                    "stt": "1",
                    "ma": "HH001",
                    "ten": "Hàng hóa 001",
                    "dvtinh": "Phần",
                    "sluong": 1,
                    "dgia": 120000,
                    "tlckhau": 0,
                    "stckhau": 0,
                    "thtien": 120000,
                    "tsuat": "8",
                    "tthue": 9600,
                    "tgtien": 129600
                },
                {
                    "tchat": 1,
                    "stt_rec0": "2",
                    "inv_itemCode": "HH002",
                    "inv_itemName": "Hàng hóa 002",
                    "inv_unitCode": "Phần",
                    "inv_quantity": 2,
                    "inv_unitPrice": 245000,
                    "phidichvu": null,
                    "inv_discountPercentage": 0,
                    "inv_discountAmount": 0,
                    "inv_TotalAmountWithoutVat": 490000,
                    "ma_thue": "8",
                    "inv_vatAmount": 39200,
                    "inv_TotalAmount": 529200,
                    "skhung": null,
                    "smay": null,
                    "bien_sxe": null,
                    "ten_ngui": null,
                    "mst_ngui": null,
                    "sddanh_ngui": null,
                    "pt_phidv": null,
                    "phidv": null,
                    "ptthuettdb": null,
                    "tthuettdb": null,
                    "stt": "2",
                    "ma": "HH002",
                    "ten": "Hàng hóa 002",
                    "dvtinh": "Phần",
                    "sluong": 2,
                    "dgia": 245000,
                    "tlckhau": 0,
                    "stckhau": 0,
                    "thtien": 490000,
                    "tsuat": "8",
                    "tthue": 39200,
                    "tgtien": 529200
                }
            ]
        }
    }
}`}
          </CodeBlock>

          {/* Error Response */}
          <h3 id="response-error" className="text-lg font-bold mt-6 mb-2">
            Thất bại
          </h3>
          <CodeBlock>
            {`{
  "code": "xx",
  "message": "....................................."
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
