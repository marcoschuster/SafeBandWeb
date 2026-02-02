// Product Types
export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  images: string[]
  features: string[]
  inStock: boolean
  category: 'classic' | 'pro' | 'ultra'
  specs: ProductSpecs
}

export interface ProductSpecs {
  battery: string
  waterproof: string
  weight: string
  dimensions: string
  connectivity: string[]
}

// Cart Types
export interface CartItem {
  productId: string
  quantity: number
  price: number
}

export interface Cart {
  items: CartItem[]
  total: number
}

// User Types
export interface User {
  id: string
  email: string
  name: string
  phone?: string
  emergencyContacts: EmergencyContact[]
}

export interface EmergencyContact {
  id: string
  name: string
  phone: string
  relationship: string
}

// Order Types
export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: OrderStatus
  createdAt: Date
  shippingAddress: Address
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

// Stripe Types
export interface StripeCheckoutSession {
  sessionId: string
  url: string
}

// Analytics Types
export interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
}
