export { default as CheckoutHeader } from '../components/checkout/CheckoutHeader';
export { default as ProgressSteps } from '../components/checkout/ProgressSteps';
export { default as ShippingStep } from '../components/checkout/ShippingStep';
export { default as PaymentStep } from '../components/checkout/PaymentStep';
export { default as ReviewStep } from '../components/checkout/ReviewStep';
export { default as NewPaymentForm } from '../components/checkout/NewPaymentForm';
export { default as NewAddressForm } from '../components/checkout/NewAddressForm';
export { default as OrderSummary } from '../components/checkout/OrderSummary';
export { default as OrderComplete } from '../components/checkout/OrderComplete';

export interface PaymentMethod {
  id: string;
  type: 'card';
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  isDefault: boolean;
}

export interface Address {
  id: string;
  type: 'billing' | 'shipping';
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CheckoutFormData {
  paymentMethod: PaymentMethod | null;
  shippingAddress: Address | null;
  billingAddress: Address | null;
  sameAsShipping: boolean;
}

export interface OrderSummaryData {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}
