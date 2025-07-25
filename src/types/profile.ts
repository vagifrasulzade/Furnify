// Re-export all profile components for easy importing
export { default as ProfileHeader } from '../components/profile/ProfileHeader';
export { default as ProfileCompletion } from '../components/profile/ProfileCompletion';
export { default as AlertMessage } from '../components/profile/AlertMessage';
export { default as PersonalInfoSection } from '../components/profile/PersonalInfoSection';
export { default as SecuritySection } from '../components/profile/SecuritySection';
export { default as PaymentSection } from '../components/profile/PaymentSection';
export { default as AddressSection } from '../components/profile/AddressSection';
export { default as AccountActions } from '../components/profile/AccountActions';
export { default as DeleteConfirmModal } from '../components/profile/DeleteConfirmModal';

// Type exports for shared interfaces
export interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

export interface AddressInfo {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface User {
  name: string;
  email: string;
  password?: string;
}
