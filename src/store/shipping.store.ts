/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ShippingInfoState {
  address: string
  phoneNumber: string
  setShippingInfo: (data: { address: string; phoneNumber: string }) => void
}

export const useShippingInfoStore = create<ShippingInfoState>()(
  persist(
    (set) => ({
      address: '',
      phoneNumber: '',
      setShippingInfo: (data) =>
        set({
          address: data.address,
          phoneNumber: data.phoneNumber
        })
    }),
    {
      name: 'shipping-info-storage'
    }
  )
)
