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

// --- DỮ LIỆU ĐỊNH NGHĨA ---

const inputModeFields = [
  {
    name: "editmode",
    type: "String",
    len: "1",
    req: "Có",
    desc: "1: Thêm mới\n2: Sửa\n3: Xóa",
  },
];

const headerFields = [
  {
    name: "inv_invoiceIssuedDate",
    type: "Datetime",
    len: "-",
    req: "Có",
    desc: "Ngày hóa đơn định dạng yyyy-MM-dd",
  },
  {
    name: "inv_invoiceSeries",
    type: "String",
    len: "7",
    req: "Có",
    desc: "Ký hiệu hóa đơn. Ví dụ: 1C21TYY",
  },
  {
    name: "inv_invoiceNumber",
    type: "Number",
    len: "(8,0)",
    req: "Tùy chọn",
    desc: "Số hoá đơn. Bắt buộc nếu là sửa hoá đơn",
  },
  {
    name: "so_benh_an",
    type: "String",
    len: "50",
    req: "Không",
    desc: "Số đơn hàng",
  },
  {
    name: "inv_currencyCode",
    type: "String",
    len: "3",
    req: "Có",
    desc: "Đơn vị tiền tệ: VND, USD...",
  },
  {
    name: "inv_exchangeRate",
    type: "Decimal",
    len: "7,2",
    req: "Có*",
    desc: "Tỷ giá (Bắt buộc nếu tiền tệ khác VND)",
  },
  {
    name: "inv_paymentMethodName",
    type: "String",
    len: "50",
    req: "Có",
    desc: "Hình thức thanh toán:\n- TM/CK\n- Tiền mặt\n- Chuyển khoản",
  },
  {
    name: "inv_buyerDisplayName",
    type: "String",
    len: "100",
    req: "Có*",
    desc: "Tên người mua (Bắt buộc nếu là khách lẻ/cá nhân)",
  },
  {
    name: "ma_dt",
    type: "String",
    len: "50",
    req: "Không",
    desc: "Mã khách hàng",
  },
  {
    name: "inv_buyerLegalName",
    type: "String",
    len: "400",
    req: "Có*",
    desc: "Tên đơn vị mua (Bắt buộc nếu là tổ chức/công ty)",
  },
  {
    name: "inv_buyerTaxCode",
    type: "String",
    len: "14",
    req: "Có*",
    desc: "Mã số thuế (Bắt buộc nếu là tổ chức/công ty)",
  },
  {
    name: "inv_buyerAddressLine",
    type: "String",
    len: "400",
    req: "Có*",
    desc: "Địa chỉ (Bắt buộc nếu là tổ chức/công ty)",
  },
  {
    name: "inv_buyerEmail",
    type: "String",
    len: "50",
    req: "Không",
    desc: "Email người mua",
  },
  {
    name: "buyerIdentityCard",
    type: "String",
    len: "20",
    req: "Tùy chọn",
    desc: "CCCD (Dùng cho HĐ khởi tạo từ máy tính tiền)",
  },
  {
    name: "buyerTel",
    type: "String",
    len: "20",
    req: "Tùy chọn",
    desc: "SĐT (Dùng cho HĐ khởi tạo từ máy tính tiền)",
  },
  {
    name: "sobaomat",
    type: "String",
    len: "16",
    req: "Không",
    desc: "Mã tra cứu hóa đơn. Mặc định hệ thống tự sinh nếu không truyền.",
  },
  {
    name: "inv_buyerBankAccount",
    type: "String",
    len: "30",
    req: "Không",
    desc: "Số tài khoản người mua",
  },
  {
    name: "inv_buyerBankName",
    type: "String",
    len: "400",
    req: "Không",
    desc: "Ngân hàng người mua",
  },
  {
    name: "amount_to_word",
    type: "String",
    len: "250",
    req: "Không",
    desc: "Tổng tiền bằng chữ",
  },
  {
    name: "inv_TotalAmount",
    type: "Decimal",
    len: "21,6",
    req: "Có",
    desc: "Tổng tiền thanh toán (bằng số)",
  },
  {
    name: "inv_discountAmount",
    type: "Decimal",
    len: "21,6",
    req: "Không",
    desc: "Tổng tiền chiết khấu (nếu có)",
  },
  {
    name: "inv_vatAmount",
    type: "Decimal",
    len: "21,6",
    req: "Có",
    desc: "Tổng tiền thuế GTGT",
  },
  {
    name: "inv_TotalAmountWithoutVat",
    type: "Decimal",
    len: "21,6",
    req: "Có",
    desc: "Tổng tiền trước thuế GTGT",
  },
  {
    name: "inv_Amount",
    type: "Decimal",
    len: "21,6",
    req: "Không",
    desc: "Tổng tiền hàng",
  },
  {
    name: "key_api",
    type: "String",
    len: "100",
    req: "Không",
    desc: "Key duy nhất để check trùng đơn hàng từ PMBH",
  },
  {
    name: "tlptdoanhthu20",
    type: "Int",
    len: "-",
    req: "Không",
    desc: "Tỷ lệ % thuế GTGT trên doanh thu (NQ101/NQ204).\nGiá trị: 1, 2, 3, 5",
  },
  {
    name: "tgtck20",
    type: "Decimal",
    len: "21,6",
    req: "Không",
    desc: "Tổng tiền thuế GTGT được giảm (NQ101/NQ204)",
  },
  {
    name: "isDeductionNQ43",
    type: "Boolean",
    len: "-",
    req: "Không",
    desc: "Có áp dụng giảm thuế NQ101/NQ204 không?\n- true: có\n- false: không",
  },
];

const nd70Fields = [
  {
    name: "ma_ch",
    type: "String",
    len: "250",
    req: "Không",
    desc: "Mã cửa hàng",
  },
  {
    name: "ten_ch",
    type: "String",
    len: "250",
    req: "Không",
    desc: "Tên cửa hàng",
  },
  {
    name: "dchicuahang",
    type: "String",
    len: "250",
    req: "Không",
    desc: "Địa chỉ cửa hàng",
  },
  {
    name: "mdvqhnsach_nmua",
    type: "String",
    len: "7",
    req: "Có*",
    desc: "Mã đơn vị Quan hệ Ngân sách (Nếu có)",
  },
  {
    name: "so_hchieu",
    type: "String",
    len: "20",
    req: "Không",
    desc: "Số hộ chiếu người mua",
  },
  {
    name: "cccdan",
    type: "String",
    len: "20",
    req: "Không",
    desc: "Căn cước công dân người mua",
  },
  {
    name: "socialDeductionAmount",
    type: "Decimal",
    len: "21,6",
    req: "Không",
    desc: "Phí vận chuyển (Cần cấu hình thêm)",
  },
  {
    name: "ratioOrtherTax",
    type: "Decimal",
    len: "21,6",
    req: "Không",
    desc: "Thuế suất Tiêu thụ đặc biệt (Cần cấu hình thêm)",
  },
  {
    name: "ortherFee",
    type: "Decimal",
    len: "21,6",
    req: "Không",
    desc: "Tiền thuế Tiêu thụ đặc biệt (Cần cấu hình thêm)",
  },
  {
    name: "mdvqhnsach_nban",
    type: "String",
    len: "7",
    req: "Có*",
    desc: "Mã ĐVQHNS bán (Chỉ dùng cho HĐ bán tài sản công)",
  },
  {
    name: "so_qdinh",
    type: "String",
    len: "50",
    req: "Không",
    desc: "Số quyết định bán (Chỉ dùng cho HĐ bán tài sản công)",
  },
  {
    name: "ngay_qdinh",
    type: "Date",
    len: "-",
    req: "Không",
    desc: "Ngày quyết định (Chỉ dùng cho HĐ bán tài sản công)",
  },
  {
    name: "cqbhanh_qdinh",
    type: "String",
    len: "200",
    req: "Không",
    desc: "Cơ quan ban hành (Chỉ dùng cho HĐ bán tài sản công)",
  },
  {
    name: "hthuc_ban",
    type: "String",
    len: "200",
    req: "Không",
    desc: "Hình thức bán (Chỉ dùng cho HĐ bán tài sản công)",
  },
  {
    name: "dd_vchuyen",
    type: "String",
    len: "400",
    req: "Không",
    desc: "Địa điểm vận chuyển đến (Chỉ dùng cho HĐ bán tài sản công)",
  },
  {
    name: "tg_vchuyen",
    type: "Date",
    len: "-",
    req: "Không",
    desc: "Ngày bắt đầu vận chuyển (Chỉ dùng cho HĐ bán tài sản công)",
  },
  {
    name: "tg_vchuyen_den",
    type: "Date",
    len: "-",
    req: "Không",
    desc: "Ngày vận chuyển đến (Chỉ dùng cho HĐ bán tài sản công)",
  },
];

const pxkFields = [
  {
    name: "lddnbo",
    type: "String",
    len: "255",
    req: "Có",
    desc: "Lệnh điều động nội bộ",
  },
  {
    name: "tnvchuyen",
    type: "String",
    len: "100",
    req: "Có",
    desc: "Tên người vận chuyển",
  },
  {
    name: "ptvchuyen",
    type: "String",
    len: "50",
    req: "Có",
    desc: "Phương tiện vận chuyển",
  },
  {
    name: "dckhoxuat",
    type: "String",
    len: "400",
    req: "Có",
    desc: "Địa chỉ kho xuất",
  },
  {
    name: "dckhonhap",
    type: "String",
    len: "400",
    req: "Có",
    desc: "Địa chỉ kho nhập",
  },
  {
    name: "sohopdong",
    type: "String",
    len: "255",
    req: "Có",
    desc: "Hợp đồng vận chuyển",
  },
  {
    name: "hvtnxhang",
    type: "String",
    len: "100",
    req: "Không",
    desc: "Tên người xuất hàng",
  },
  {
    name: "hdktso",
    type: "String",
    len: "100",
    req: "Có*",
    desc: "Hợp đồng kinh tế số (Bắt buộc với PXK gửi bán đại lý)",
  },
  {
    name: "hdktngay",
    type: "Date",
    len: "-",
    req: "Có*",
    desc: "Hợp đồng kinh tế ngày (Bắt buộc với PXK gửi bán đại lý)",
  },
];

const detailFields = [
  {
    name: "tchat",
    type: "Int",
    len: "1",
    req: "Có",
    desc: "Tính chất hàng hóa:\n1: Hàng hóa dịch vụ\n2: Khuyến mại\n3: Chiết khấu thương mại\n4: Ghi chú/diễn giải\n5: Hàng hóa đặc trưng",
  },
  {
    name: "stt_rec0",
    type: "String",
    len: "4",
    req: "Có",
    desc: "Số thứ tự dòng hàng: 0001, 0002...",
  },
  {
    name: "inv_itemCode",
    type: "String",
    len: "50",
    req: "Có*",
    desc: "Mã hàng hóa (Bắt buộc nếu có)",
  },
  {
    name: "inv_itemName",
    type: "String",
    len: "500",
    req: "Có",
    desc: "Tên hàng hóa, dịch vụ",
  },
  {
    name: "inv_unitCode",
    type: "String",
    len: "50",
    req: "Có*",
    desc: "Đơn vị tính (Bắt buộc nếu có)",
  },
  {
    name: "inv_quantity",
    type: "Decimal",
    len: "21,6",
    req: "Có*",
    desc: "Số lượng (Bắt buộc nếu có)",
  },
  {
    name: "inv_unitPrice",
    type: "Decimal",
    len: "21,6",
    req: "Có*",
    desc: "Đơn giá (Bắt buộc nếu có)",
  },
  {
    name: "inv_discountPercentage",
    type: "Decimal",
    len: "6,4",
    req: "Có",
    desc: "Tỷ lệ chiết khấu",
  },
  {
    name: "inv_discountAmount",
    type: "Decimal",
    len: "21,6",
    req: "Có",
    desc: "Số tiền chiết khấu",
  },
  {
    name: "inv_Amount",
    type: "Decimal",
    len: "21,6",
    req: "Không",
    desc: "Cộng tiền hàng",
  },
  {
    name: "inv_TotalAmountWithoutVat",
    type: "Decimal",
    len: "21,6",
    req: "Có",
    desc: "Thành tiền trước thuế GTGT (sau khi trừ CK)",
  },
  {
    name: "ma_thue",
    type: "String",
    len: "-",
    req: "Có*",
    desc: "Thuế suất:\n10: 10%\n8: 8%\n5: 5%\n0: 0%\n-1: Không chịu thuế\n-2: Không kê khai\n(Bắt buộc nếu tchat = 1,2,3)",
  },
  {
    name: "inv_vatAmount",
    type: "Decimal",
    len: "21,6",
    req: "Có",
    desc: "Tiền thuế GTGT",
  },
  {
    name: "inv_TotalAmount",
    type: "Decimal",
    len: "21,6",
    req: "Có",
    desc: "Thành tiền sau thuế GTGT",
  },
  {
    name: "inv_vatRateDeduction",
    type: "Int",
    len: "-",
    req: "Không",
    desc: "Tỷ lệ % thuế GTGT trên doanh thu (NQ101/204). Giá trị: 1, 2, 3, 5",
  },
  {
    name: "inv_vatAmountDeduction",
    type: "Decimal",
    len: "21,6",
    req: "Không",
    desc: "Tổng số tiền thuế GTGT được giảm",
  },
  {
    name: "inv_purity",
    type: "String",
    len: "30",
    req: "Không",
    desc: "Tuổi vàng (Ví dụ: 24K). Dành cho bán vàng.",
  },
  {
    name: "inv_weight",
    type: "Decimal",
    len: "21,6",
    req: "Không",
    desc: "Trọng lượng vàng. Dành cho bán vàng.",
  },
  {
    name: "inv_labourCost",
    type: "Decimal",
    len: "21,6",
    req: "Không",
    desc: "Tiền công chế tác. Dành cho bán vàng.",
  },
];

const detailND70Fields = [
  {
    name: "skhung",
    type: "String",
    len: "200",
    req: "Có*",
    desc: "Số khung (Bắt buộc với HĐ đặc trưng bán xe - tchat=5)",
  },
  {
    name: "smay",
    type: "String",
    len: "200",
    req: "Có*",
    desc: "Số máy (Bắt buộc với HĐ đặc trưng bán xe - tchat=5)",
  },
  {
    name: "bien_sxe",
    type: "String",
    len: "200",
    req: "Có*",
    desc: "Biển số (Bắt buộc với HĐ đặc trưng bán xe - tchat=5)",
  },
  {
    name: "ten_ngui",
    type: "String",
    len: "200",
    req: "Có*",
    desc: "Tên người gửi (Bắt buộc với HĐ Vận chuyển/TMĐT)",
  },
  {
    name: "dc_ngui",
    type: "String",
    len: "200",
    req: "Có*",
    desc: "Địa chỉ người gửi (Bắt buộc với HĐ Vận chuyển/TMĐT)",
  },
  {
    name: "mst_ngui",
    type: "String",
    len: "200",
    req: "Có*",
    desc: "MST người gửi (Bắt buộc với HĐ Vận chuyển/TMĐT)",
  },
  {
    name: "sddanh_ngui",
    type: "String",
    len: "200",
    req: "Có*",
    desc: "CCCD người gửi (Bắt buộc với HĐ Vận chuyển/TMĐT)",
  },
];

// Helper Render Table
const FieldTable = ({ data }: { data: any[] }) => (
  <div className="overflow-hidden rounded-lg border border-gray-200 my-4 not-prose shadow-sm">
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-100 border-b border-gray-200">
        <tr>
          <th className="px-4 py-3 font-bold text-gray-900 w-[25%]">
            Tên trường
          </th>
          <th className="px-4 py-3 font-bold text-gray-900 w-[15%]">Kiểu</th>
          <th className="px-4 py-3 font-bold text-gray-900 w-[10%]">Độ dài</th>
          <th className="px-4 py-3 font-bold text-gray-900 w-[15%]">
            Bắt buộc
          </th>
          <th className="px-4 py-3 font-bold text-gray-900">Mô tả</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {data.map((item, idx) => (
          <tr key={idx} className="bg-white hover:bg-gray-50">
            <td className="px-4 py-3 font-mono font-medium text-purple-700">
              {item.name}
            </td>
            <td className="px-4 py-3 text-gray-600">{item.type}</td>
            <td className="px-4 py-3 text-gray-600">{item.len}</td>
            <td className="px-4 py-3">
              <span
                className={`px-2 py-0.5 rounded text-xs font-semibold ${
                  item.req.includes("Có")
                    ? "bg-red-50 text-red-600 border border-red-100"
                    : "bg-gray-100 text-gray-500 border border-gray-200"
                }`}
              >
                {item.req}
              </span>
            </td>
            <td className="px-4 py-3 text-gray-700 whitespace-pre-line">
              {item.desc}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function DefinitionsPage() {
  return (
    <div className="flex max-w-screen-2xl mx-auto py-12 px-6">
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
              <BreadcrumbPage>Định nghĩa dữ liệu</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 2. Nội dung */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-4">Định nghĩa trường dữ liệu</h1>
          <p className="text-xl text-gray-600 mb-8">
            Chi tiết về tên trường, kiểu dữ liệu và quy định bắt buộc cho từng
            trường thông tin trong API Hóa đơn.
          </p>

          <h2 id="input-mode" className="text-2xl font-bold mt-8 mb-4">
            1. Định nghĩa Input Mode
          </h2>
          <p>Quy định chế độ thao tác dữ liệu.</p>
          <FieldTable data={inputModeFields} />

          <h2 id="invoice-header" className="text-2xl font-bold mt-12 mb-4">
            2. Thông tin chung hóa đơn (Header)
          </h2>
          <p>Các trường dữ liệu ở cấp độ phiếu (Master data) của hóa đơn.</p>
          <FieldTable data={headerFields} />

          <h2 id="nd70-header" className="text-2xl font-bold mt-12 mb-4">
            3. Bổ sung theo NĐ 70 (Header)
          </h2>
          <p>
            Các trường dữ liệu bổ sung áp dụng từ ngày 01/06/2025 theo Nghị định
            70.
          </p>
          <FieldTable data={nd70Fields} />

          <h2 id="pxk-header" className="text-2xl font-bold mt-12 mb-4">
            4. Phiếu xuất kho (Header)
          </h2>
          <p>
            Các trường bổ sung dành riêng cho Phiếu xuất kho kiêm vận chuyển nội
            bộ / Gửi bán đại lý.
          </p>
          <FieldTable data={pxkFields} />

          <h2 id="invoice-detail" className="text-2xl font-bold mt-12 mb-4">
            5. Chi tiết hóa đơn (Detail)
          </h2>
          <p>
            Dữ liệu danh sách hàng hóa bên trong mảng <code>details</code>.
          </p>
          <FieldTable data={detailFields} />

          <h2 id="nd70-detail" className="text-2xl font-bold mt-12 mb-4">
            6. Bổ sung theo NĐ 70 (Detail)
          </h2>
          <p>
            Các trường chi tiết áp dụng cho các hóa đơn đặc thù (Xe cộ, Vận
            chuyển, TMĐT).
          </p>
          <FieldTable data={detailND70Fields} />
        </article>

        <FooterNav
          prev={{ title: "Trạng thái hóa đơn", href: "/docs/api/status-list" }}
          next={{ title: "Danh sách mã lỗi", href: "/docs/api/error-codes" }}
        />
      </div>

      {/* --- MỤC LỤC --- */}
      <TableOfContents>
        <TOCItem href="#input-mode">1. Input Mode</TOCItem>
        <TOCItem href="#invoice-header">2. Thông tin chung (Header)</TOCItem>
        <TOCItem href="#nd70-header">3. Bổ sung NĐ 70 (Header)</TOCItem>
        <TOCItem href="#pxk-header">4. Phiếu xuất kho</TOCItem>
        <TOCItem href="#invoice-detail">5. Chi tiết hóa đơn</TOCItem>
        <TOCItem href="#nd70-detail">6. Bổ sung NĐ 70 (Detail)</TOCItem>
      </TableOfContents>
    </div>
  );
}
