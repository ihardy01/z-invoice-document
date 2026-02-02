import React from "react";
import { TableOfContents, TOCItem } from "@/components/toc";
import { FooterNav } from "@/components/layout/footer-nav";
import { DynamicBreadcrumb } from "@/components/layout/dynamic-breadcrumb";
import { CodeBlock } from "@/components/ui/code-block";

export default function LookupPage() {
  const responseMstJson = `{
    "ma_so_thue": "0106026495",
    "masothue_id": "0106026495",
    "ten_cty": "CÔNG TY TNHH HÓA ĐƠN ĐIỆN TỬ M-INVOICE",
    "dia_chi": "Số nhà 16, ngõ 269/1, đường Giáp Bát, Phường Giáp Bát, Quận Hoàng Mai, Thành phố Hà Nội, Việt Nam",
    "cqthuecap_tinh": null,
    "cqthue_ql": "Chi cục thuế Quận Hoàng Mai",
    "nguoi_dai_dien": "Lê Thanh Dũng",
    "ngay_thanh_lap": "2012-11-02"
}`;

  const responseCccdJson = `{
    "ho_ten": "Trịnh Hoài Nhất",
    "ngay_cap": "xxxxxxxxx",
    "noi_cap": null,
    "trang_thai": "NNT đang hoạt động (đã được cấp GCN ĐKT)",
    "mst_tncn": "XXXXXXXXXX"
}`;

  return (
    <div className="flex max-w-screen-2xl mx-auto py-12 px-6">
      {/* --- PHẦN NỘI DUNG CHÍNH (CỘT TRÁI) --- */}
      <div className="flex-1 max-w-4xl min-w-0">
        {/* 1. Breadcrumb */}
        <DynamicBreadcrumb />

        {/* 2. Nội dung bài viết */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-4">Tra cứu MST và CCCD</h1>
          <p className="text-xl text-gray-600 mb-8">
            API này cung cấp chức năng tra cứu thông tin doanh nghiệp qua Mã số
            thuế hoặc thông tin cá nhân qua thẻ Căn cước công dân (CCCD).
          </p>

          {/* --- PHẦN 1: TRA CỨU MST --- */}
          <h2
            id="tra-cuu-mst"
            className="text-2xl font-bold mt-12 mb-4 border-b pb-2"
          >
            1. Tra cứu Mã số thuế
          </h2>
          <p>
            Dùng để lấy thông tin chi tiết của doanh nghiệp thông qua mã số
            thuế.
          </p>

          {/* Endpoint Info Block - MST */}
          <div className="flex flex-col gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg mb-8 not-prose">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold min-w-[100px] text-gray-700">
                Link API:
              </span>
              <code className="text-sm font-mono text-purple-700 bg-purple-50 px-2 py-1 rounded border border-purple-100">
                https://sb-invoice.zoffice.vn/api/v1/tra-cuu/mst
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

          <h3 id="params-mst" className="text-lg font-bold mt-4 mb-2">
            Parameters (Query)
          </h3>

          {/* Bảng mô tả trường - MST */}
          <div className="overflow-hidden rounded-lg border border-gray-200 my-4 not-prose">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    Tham số
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
                  <td className="px-4 py-3 font-mono text-purple-600">mst</td>
                  <td className="px-4 py-3 text-gray-500">string</td>
                  <td className="px-4 py-3 text-red-600 font-medium">Có</td>
                  <td className="px-4 py-3 text-gray-600">
                    Mã số thuế doanh nghiệp cần tra cứu
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 id="response-mst" className="text-lg font-bold mt-6 mb-2">
            Response (MST)
          </h3>
          <CodeBlock>{responseMstJson}</CodeBlock>

          {/* --- PHẦN 2: TRA CỨU CCCD --- */}
          <h2
            id="tra-cuu-cccd"
            className="text-2xl font-bold mt-12 mb-4 border-b pb-2"
          >
            2. Tra cứu CCCD
          </h2>
          <p>
            Dùng để tra cứu thông tin người nộp thuế thông qua số Căn cước công
            dân.
          </p>

          {/* Endpoint Info Block - CCCD */}
          <div className="flex flex-col gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg mb-8 not-prose">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold min-w-[100px] text-gray-700">
                Link API:
              </span>
              <code className="text-sm font-mono text-purple-700 bg-purple-50 px-2 py-1 rounded border border-purple-100">
                https://sb-invoice.zoffice.vn/api/v1/tra-cuu/cccd
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

          <h3 id="params-cccd" className="text-lg font-bold mt-4 mb-2">
            Parameters (Query)
          </h3>

          {/* Bảng mô tả trường - CCCD */}
          <div className="overflow-hidden rounded-lg border border-gray-200 my-4 not-prose">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    Tham số
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
                  <td className="px-4 py-3 font-mono text-purple-600">cccd</td>
                  <td className="px-4 py-3 text-gray-500">string</td>
                  <td className="px-4 py-3 text-red-600 font-medium">Có</td>
                  <td className="px-4 py-3 text-gray-600">
                    Số Căn cước công dân / CMND
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 id="response-cccd" className="text-lg font-bold mt-6 mb-2">
            Response (CCCD)
          </h3>
          <CodeBlock>{responseCccdJson}</CodeBlock>
        </article>

        {/* 3. Footer Navigation */}
        <FooterNav
          prev={{
            title: "Điều chỉnh hóa đơn",
            href: "/docs/api/invoice-adjust",
          }}
          next={{
            title: "Trạng thái hóa đơn",
            href: "/docs/api/invoice-status",
          }}
        />
      </div>

      {/* --- PHẦN MỤC LỤC (CỘT PHẢI - STICKY) --- */}
      <TableOfContents>
        <TOCItem href="#tra-cuu-mst">1. Tra cứu MST</TOCItem>
        <div className="pl-4 space-y-2 mt-2 border-l border-gray-100">
          <TOCItem href="#params-mst">Parameters</TOCItem>
          <TOCItem href="#response-mst">Response</TOCItem>
        </div>

        <TOCItem href="#tra-cuu-cccd">2. Tra cứu CCCD</TOCItem>
        <div className="pl-4 space-y-2 mt-2 border-l border-gray-100">
          <TOCItem href="#params-cccd">Parameters</TOCItem>
          <TOCItem href="#response-cccd">Response</TOCItem>
        </div>
      </TableOfContents>
    </div>
  );
}
