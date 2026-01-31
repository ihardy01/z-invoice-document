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

// Định nghĩa danh sách mã lỗi đầy đủ
const errorCodes = [
  {
    code: "02",
    message: "Lỗi không xác định",
    description: "Lỗi không xác định",
    type: "error",
  },
  {
    code: "88",
    message: "Trùng key tích hợp",
    description: "Trùng key tích hợp",
    type: "error",
  },
  {
    code: "111",
    message: "Dữ liệu sản phẩm không hợp lệ",
    description: "Dữ liệu sản phẩm không hợp lệ",
    type: "error",
  },
  {
    code: "296",
    message: "Không thể tạo hóa đơn trước ngày hóa đơn lớn nhất",
    description: "Không thể tạo hóa đơn trước ngày hóa đơn lớn nhất",
    type: "error",
  },
  {
    code: "11404",
    message: "Không tìm thấy sản phẩm, vui lòng kiểm tra lại",
    description: "Không tìm thấy sản phẩm, vui lòng kiểm tra lại",
    type: "error",
  },
  {
    code: "11409",
    message: "Mã hàng hóa, dịch vụ đã tồn tại",
    description: "Mã hàng hóa, dịch vụ đã tồn tại",
    type: "error",
  },
  {
    code: "11432",
    message: "Hàng hóa, dịch vụ đã được sử dụng",
    description: "Hàng hóa, dịch vụ đã được sử dụng",
    type: "error",
  },
  {
    code: "11433",
    message: "Dữ liệu excel sản phẩm không hợp lệ",
    description: "Dữ liệu excel sản phẩm không hợp lệ",
    type: "error",
  },
  {
    code: "12404",
    message: "Khách hàng không tồn tại",
    description: "Khách hàng không tồn tại",
    type: "error",
  },
  {
    code: "12409",
    message: "Mã khách hàng đã tồn tại",
    description: "Mã khách hàng đã tồn tại",
    type: "error",
  },
  {
    code: "151",
    message: "Dữ liệu không hợp lệ",
    description: "Dữ liệu không hợp lệ",
    type: "error",
  },
  {
    code: "15409",
    message: "Mã đơn vị tính đã tồn tại",
    description: "Mã đơn vị tính đã tồn tại",
    type: "error",
  },
  {
    code: "15432",
    message: "Mã đơn vị tính đã được sử dụng",
    description: "Mã đơn vị tính đã được sử dụng",
    type: "error",
  },
  {
    code: "19400",
    message: "Dữ liệu không hợp lệ vui lòng kiểm tra lại",
    description: "Dữ liệu không hợp lệ vui lòng kiểm tra lại",
    type: "error",
  },
  {
    code: "19409",
    message: "Trùng bộ mẫu số ký hiệu",
    description: "Trùng bộ mẫu số ký hiệu",
    type: "error",
  },
  {
    code: "19432",
    message: "Mẫu hóa đơn đã được sử dụng, không được sửa,xóa",
    description: "Mẫu hóa đơn đã được sử dụng, không được sửa,xóa",
    type: "error",
  },
  {
    code: "20404",
    message: "Không tìm thấy mẫu hóa đơn",
    description: "Không tìm thấy mẫu hóa đơn",
    type: "error",
  },
  {
    code: "21404",
    message: "Không tìm thấy loại hóa đơn",
    description: "Không tìm thấy loại hóa đơn",
    type: "error",
  },
  {
    code: "23404",
    message: "Không tìm thấy cấu hình mẫu hóa đơn",
    description: "Không tìm thấy cấu hình mẫu hóa đơn",
    type: "error",
  },
  {
    code: "25404",
    message: "Không tìm thấy đơn vị theo tiêu chí tìm kiếm",
    description: "Không tìm thấy đơn vị theo tiêu chí tìm kiếm",
    type: "error",
  },
  {
    code: "291",
    message: "Dữ liệu hóa đơn không hợp lệ",
    description: "Dữ liệu hóa đơn không hợp lệ",
    type: "error",
  },
  {
    code: "294",
    message: "Ngày hóa đơn không hợp lệ",
    description: "Ngày hóa đơn không hợp lệ",
    type: "error",
  },
  {
    code: "29404",
    message: "Không tìm thấy hóa đơn cần xem",
    description: "Không tìm thấy hóa đơn cần xem",
    type: "error",
  },
  {
    code: "29405",
    message:
      "Không thể điều chỉnh, thay thế hóa đơn đối với hóa đơn chưa gửi cơ quan thuế",
    description:
      "Không thể điều chỉnh, thay thế hóa đơn đối với hóa đơn chưa gửi cơ quan thuế",
    type: "error",
  },
  {
    code: "29435",
    message: "Không tìm thấy file theo yêu cầu",
    description: "Không tìm thấy file theo yêu cầu",
    type: "error",
  },
  {
    code: "29439",
    message: "Trùng bộ mẫu số ký hiệu",
    description: "Trùng bộ mẫu số ký hiệu",
    type: "error",
  },
  {
    code: "29440",
    message:
      "Đơn vị đang upload dữ liệu excel hóa đơn, vui lòng đợi hết tiến trình",
    description:
      "Đơn vị đang upload dữ liệu excel hóa đơn, vui lòng đợi hết tiến trình",
    type: "error",
  },
  {
    code: "29441",
    message: "Chỉ có thể hủy hóa đơn ở trạng thái cấp mã thành công",
    description: "Chỉ có thể hủy hóa đơn ở trạng thái cấp mã thành công",
    type: "error",
  },
  {
    code: "29442",
    message: "Chỉ được phép xóa dữ liệu ở trạng thái nháp,hủy",
    description: "Chỉ được phép xóa dữ liệu ở trạng thái nháp,hủy",
    type: "error",
  },
  {
    code: "29443",
    message: "Chỉ có thể phê duyệt dữ liệu trong khi chờ phê duyệt",
    description: "Chỉ có thể phê duyệt dữ liệu trong khi chờ phê duyệt",
    type: "error",
  },
  {
    code: "29444",
    message: "Chỉ có thể từ chối dữ liệu trong khi chờ phê duyệt",
    description: "Chỉ có thể từ chối dữ liệu trong khi chờ phê duyệt",
    type: "error",
  },
  {
    code: "29451",
    message: "Không thế xóa hóa đơn có số hóa đơn không tuần tự",
    description: "Không thế xóa hóa đơn có số hóa đơn không tuần tự",
    type: "error",
  },
  {
    code: "295",
    message: "Ngày hóa đơn không được phép lớn hơn ngày hiện tại",
    description: "Ngày hóa đơn không được phép lớn hơn ngày hiện tại",
    type: "error",
  },
  {
    code: "29501",
    message:
      "Vượt quá số lượng hóa đơn đăng ký vui lòng liên hệ nhà cung cấp dịch vụ",
    description:
      "Vượt quá số lượng hóa đơn đăng ký vui lòng liên hệ nhà cung cấp dịch vụ",
    type: "error",
  },
  {
    code: "29503",
    message:
      "Vui lòng lập tờ khai đăng ký và nộp cơ quan thuế trước khi tạo hóa đơn",
    description:
      "Vui lòng lập tờ khai đăng ký và nộp cơ quan thuế trước khi tạo hóa đơn",
    type: "error",
  },
  {
    code: "29504",
    message:
      "Ngày hóa đơn không được nhỏ hơn ngày của tờ khai. Vui lòng kiểm tra lại",
    description:
      "Ngày hóa đơn không được nhỏ hơn ngày của tờ khai. Vui lòng kiểm tra lại",
    type: "error",
  },
  {
    code: "29505",
    message:
      "Năm của hóa đơn không được lớn hơn năm của ký hiệu. Vui lòng kiểm tra lại.",
    description:
      "Năm của hóa đơn không được lớn hơn năm của ký hiệu. Vui lòng kiểm tra lại.",
    type: "error",
  },
  {
    code: "29507",
    message: "Chỉ được điều chỉnh hóa đơn Gốc hoặc Bị điều chỉnh",
    description: "Chỉ được điều chỉnh hóa đơn Gốc hoặc Bị điều chỉnh",
    type: "error",
  },
  {
    code: "29508",
    message:
      "Không thể thay thế hóa đơn do trạng thái hóa đơn gốc không ở trạng thái Gốc, Thay thế",
    description:
      "Không thể thay thế hóa đơn do trạng thái hóa đơn gốc không ở trạng thái Gốc, Thay thế",
    type: "error",
  },
  {
    code: "296",
    message: "Ngày hóa đơn lớn hơn hoặc nhỏ hơn ngày hóa đơn trước, sau",
    description: "Ngày hóa đơn lớn hơn hoặc nhỏ hơn ngày hóa đơn trước, sau",
    type: "error",
  },
  {
    code: "301",
    message: "Dữ liệu cấp bản quyền không hợp lệ",
    description: "Dữ liệu cấp bản quyền không hợp lệ",
    type: "error",
  },
  {
    code: "30404",
    message: "Không tìm thấy mã số thuế cần tìm",
    description: "Không tìm thấy mã số thuế cần tìm",
    type: "error",
  },
  {
    code: "30405",
    message:
      "Không thể điều chỉnh hoặc thay thế vì hóa đơn gốc không ở trạng thái [đã ký, thành công]",
    description:
      "Không thể điều chỉnh hoặc thay thế vì hóa đơn gốc không ở trạng thái [đã ký, thành công]",
    type: "error",
  },
  {
    code: "330",
    message: "Lỗi không xác định",
    description: "Lỗi không xác định",
    type: "error",
  },
  {
    code: "331",
    message: "Dữ liệu không hợp lệ",
    description: "Dữ liệu không hợp lệ",
    type: "error",
  },
  {
    code: "33404",
    message: "Không tìm thấy tờ khai theo yêu cầu",
    description: "Không tìm thấy tờ khai theo yêu cầu",
    type: "error",
  },
  {
    code: "33435",
    message: "Không tìm thấy file tờ khai",
    description: "Không tìm thấy file tờ khai",
    type: "error",
  },
  {
    code: "33441",
    message: "Trạng thái tờ khai không cho phép chỉnh sửa",
    description: "Trạng thái tờ khai không cho phép chỉnh sửa",
    type: "error",
  },
  {
    code: "33442",
    message: "Trạng thái tờ khai không cho phép xóa bỏ",
    description: "Trạng thái tờ khai không cho phép xóa bỏ",
    type: "error",
  },
  {
    code: "33445",
    message: "Trạng thái tờ khai không cho phép ký số",
    description: "Trạng thái tờ khai không cho phép ký số",
    type: "error",
  },
  {
    code: "33502",
    message: "Định dạng file không hợp lệ",
    description: "Định dạng file không hợp lệ",
    type: "error",
  },
  {
    code: "371",
    message: "Ký hiệu …. không tồn tại trên phần mềm",
    description: "Ký hiệu …. không tồn tại trên phần mềm",
    type: "error",
  },
  {
    code: "381",
    message: "Dữ liệu tờ khai không hợp lệ",
    description: "Dữ liệu tờ khai không hợp lệ",
    type: "error",
  },
  {
    code: "38404",
    message: "Không tìm thấy tờ khai",
    description: "Không tìm thấy tờ khai",
    type: "error",
  },
  {
    code: "38435",
    message: "Không tìm thấy file xml cần ký",
    description: "Không tìm thấy file xml cần ký",
    type: "error",
  },
  {
    code: "38442",
    message: "Chỉ có thể xóa dữ liệu ở trạng thái chưa gửi",
    description: "Chỉ có thể xóa dữ liệu ở trạng thái chưa gửi",
    type: "error",
  },
  {
    code: "38444",
    message: "Chỉ có thể cập nhật dữ liệu ở trạng thái chưa gửi",
    description: "Chỉ có thể cập nhật dữ liệu ở trạng thái chưa gửi",
    type: "error",
  },
  {
    code: "38445",
    message: "Không thể ký tờ khai với trạng thái khác trạng thái chờ ký",
    description: "Không thể ký tờ khai với trạng thái khác trạng thái chờ ký",
    type: "error",
  },
  {
    code: "391",
    message: "Dữ liệu cấu hình không hợp lệ",
    description: "Dữ liệu cấu hình không hợp lệ",
    type: "error",
  },
  {
    code: "39435",
    message: "Không tìm thấy file cấu hình",
    description: "Không tìm thấy file cấu hình",
    type: "error",
  },
  {
    code: "404",
    message: "Không tìm thấy file cấu hình",
    description: "Không tìm thấy file cấu hình",
    type: "error",
  },
  {
    code: "41404",
    message: "Không tìm thấy email của đơn vị",
    description: "Không tìm thấy email của đơn vị",
    type: "error",
  },
  {
    code: "9001",
    message: "Mã lệnh không tồn tại",
    description: "Mã lệnh không tồn tại",
    type: "error",
  },
  {
    code: "9002",
    message: "Tải hóa đơn xml bị lỗi",
    description: "Tải hóa đơn xml bị lỗi",
    type: "error",
  },
  {
    code: "9003",
    message: "Không lấy được thời gian ký",
    description: "Không lấy được thời gian ký",
    type: "error",
  },
  {
    code: "9004",
    message: "Không upload được file Xml lên server",
    description: "Không upload được file Xml lên server",
    type: "error",
  },
  {
    code: "9005",
    message: "Không đăng ký được token",
    description: "Không đăng ký được token",
    type: "error",
  },
  {
    code: "9006",
    message: "Không tải được xml thông báo hóa đơn điện tử có sai sót(SS04)",
    description:
      "Không tải được xml thông báo hóa đơn điện tử có sai sót(SS04)",
    type: "error",
  },
  {
    code: "9007",
    message: "Không tải xml tờ khai đăng ký thay đổi",
    description: "Không tải xml tờ khai đăng ký thay đổi",
    type: "error",
  },
  {
    code: "9008",
    message: "Không đăng ký được token",
    description: "Không đăng ký được token",
    type: "error",
  },
  {
    code: "9009",
    message: "Token đã hết hạn hoặc chưa đến thời gian được phép sử dụng",
    description: "Token đã hết hạn hoặc chưa đến thời gian được phép sử dụng",
    type: "error",
  },
  {
    code: "9010",
    message: "Bạn chưa chọn token",
    description: "Bạn chưa chọn token",
    type: "error",
  },
  {
    code: "9011",
    message: "Dữ liệu không hợp lệ",
    description: "Dữ liệu không hợp lệ",
    type: "error",
  },
  {
    code: "9014",
    message: "Đăng nhập không thành công",
    description: "Đăng nhập không thành công",
    type: "error",
  },
  {
    code: "9015",
    message: "Không lấy được RequestVerificationToken",
    description: "Không lấy được RequestVerificationToken",
    type: "error",
  },
];

export default function ErrorCodesPage() {
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
              <BreadcrumbPage>Danh sách mã lỗi</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 2. Nội dung bài viết */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-4">Danh sách mã lỗi</h1>
          <p className="text-xl text-gray-600 mb-8">
            Bảng dưới đây liệt kê các mã lỗi (Response Code) được trả về trong
            trường <code>code</code> của JSON Response.
          </p>

          <h2 id="bang-ma-loi" className="text-2xl font-bold mt-8 mb-4">
            Bảng mã lỗi chi tiết
          </h2>

          <div className="overflow-hidden rounded-lg border border-gray-200 my-6 not-prose shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900 w-[100px]">
                    Mã (Code)
                  </th>
                  <th className="px-6 py-4 font-bold text-gray-900 w-[250px]">
                    Thông báo (Message)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {errorCodes.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-gray-50/50 hover:bg-gray-50"
                    }
                  >
                    <td className="px-6 py-4 font-mono font-bold">
                      <span className="px-2 py-1 rounded border bg-red-50 text-red-700 border-red-200">
                        {item.code}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-800 font-medium">
                      {item.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        {/* 3. Footer Navigation */}
        <FooterNav
          prev={{
            title: "Định nghĩa dữ liệu",
            href: "/docs/api/definitions",
          }}
          next={{ title: "Câu hỏi thường gặp", href: "/docs/faq" }}
        />
      </div>

      {/* --- PHẦN MỤC LỤC (CỘT PHẢI - STICKY) --- */}
      <TableOfContents>
        <TOCItem href="#bang-ma-loi">Bảng mã lỗi chi tiết</TOCItem>
      </TableOfContents>
    </div>
  );
}
