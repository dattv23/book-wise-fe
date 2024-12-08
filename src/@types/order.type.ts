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
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED'
}

export enum OrderStatus {
  PENDING = 'PENDING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED'
}

export enum PaymentMethod {
  COD = 'COD',
  VN_PAY = 'VN_PAY'
}
