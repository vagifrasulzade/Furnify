// Cart component exports
export { default as CartHeader } from '../components/cart/CartHeader';
export { default as EmptyCart } from '../components/cart/EmptyCart';
export { default as CartItemsList } from '../components/cart/CartItemsList';
export { default as ShippingOptions } from '../components/cart/ShippingOptions';
export { default as ShippingPromotion } from '../components/cart/ShippingPromotion';
export { default as OrderSummary } from '../components/cart/OrderSummary';

// Shared TypeScript interfaces for cart components
export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface ShippingOption {
  id: string;
  name: string;
  price: number;
  description: string;
  estimatedDays: string;
}

export interface CartTotals {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export interface CartSettings {
  freeShippingThreshold: number;
  taxRate: number;
}
