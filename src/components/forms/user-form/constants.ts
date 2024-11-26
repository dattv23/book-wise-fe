/* eslint-disable no-unused-vars */
const USER_FIELDS = [
  { name: 'name' as const, label: 'Tên người dùng', placeholder: 'Nhập tên người dùng', type: 'text' },
  { name: 'email' as const, label: 'Email', placeholder: 'Nhập email', type: 'text' },
  { name: 'password' as const, label: 'Password', placeholder: 'Nhập mật khẩu', type: 'password' }
] as const

enum PageTitle {
  edit = 'Chỉnh sửa thông tin người dùng',
  add = 'Thêm người dùng mới'
}

export { USER_FIELDS, PageTitle }
