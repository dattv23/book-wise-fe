/* eslint-disable no-unused-vars */
export type Order = {
  items: {
    bookId: string
    quantity: number
  }[]
  orderId: string
  userId: string
  subTotal: number
  total: number
  address: string
  phoneNumber: string
  shippingCost: number
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  status: OrderStatus
}

export enum PaymentStatus {
  PENDING,
  COMPLETED,
  FAILED,
  REFUNDED
}

export enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  COMPLETED,
  CANCELED
}

export enum PaymentMethod {
  COD,
  VN_PAY
}
