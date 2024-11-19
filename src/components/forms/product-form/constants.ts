/* eslint-disable no-unused-vars */
const INFO_FIELDS = [
  { name: 'info.title' as const, label: 'Tiêu đề sách', placeholder: 'Nhập tiêu đề sách', type: 'text' },
  { name: 'info.author' as const, label: 'Tác giả', placeholder: 'Nhập tên tác giả', type: 'text' },
  { name: 'info.originalPrice' as const, label: 'Giá gốc', placeholder: 'Nhập giá gốc', type: 'number' },
  { name: 'info.currentPrice' as const, label: 'Giá bán', placeholder: 'Nhập giá bán', type: 'number' }
] as const

const DETAILS_FIELDS = [
  {
    name: 'details.publisher' as const,
    label: 'Công ty phát hành',
    placeholder: 'Nhập công ty phát hành',
    type: 'text'
  },
  { name: 'details.coverType' as const, label: 'Loại bìa', placeholder: 'Nhập loại bìa', type: 'text' },
  { name: 'details.pageCount' as const, label: 'Số trang', placeholder: 'Nhập số trang sách', type: 'number' },
  { name: 'details.publishingHouse' as const, label: 'Nhà xuất bản', placeholder: 'Nhập nhà xuất bản', type: 'text' },
  { name: 'details.bookVersion' as const, label: 'Phiên bản sách', placeholder: 'Nhập phiên bản sách', type: 'text' },
  { name: 'details.translator' as const, label: 'Người dịch', placeholder: 'Nhập tên người dịch', type: 'text' }
] as const

enum PageTitle {
  edit = 'Chỉnh sửa thông tin sách',
  add = 'Thêm sách mới'
}

export { INFO_FIELDS, DETAILS_FIELDS, PageTitle }
