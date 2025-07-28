import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import {
  CheckoutHeader,
  ProgressSteps,
  ShippingStep,
  PaymentStep,
  ReviewStep,
  NewPaymentForm,
  NewAddressForm,
  OrderSummary,
  OrderComplete
} from '@/types/checkout';
import type { PaymentMethod, Address } from '@/types/checkout';

export default function CheckoutPageRefactored() {
  const { cartItems, getTotalPrice, getTotalItems, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/auth/login');
    }
  }, [currentUser, navigate]);

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [selectedBillingAddress, setSelectedBillingAddress] = useState<string>('');
  const [selectedShippingAddress, setSelectedShippingAddress] = useState<string>('');
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [showNewPaymentForm, setShowNewPaymentForm] = useState(false);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [addressType, setAddressType] = useState<'billing' | 'shipping'>('shipping');

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(() => {
    const saved = localStorage.getItem(`paymentMethods_${currentUser?.email}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [addresses, setAddresses] = useState<Address[]>(() => {
    const saved = localStorage.getItem(`addresses_${currentUser?.email}`);
    return saved ? JSON.parse(saved) : [];
  });

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 500 ? 0 : 25; // Free shipping over $500
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const savePaymentMethod = (payment: Omit<PaymentMethod, 'id'>) => {
    const newMethod: PaymentMethod = {
      ...payment,
      id: Date.now().toString(),
    };
    const updatedMethods = [...paymentMethods, newMethod];
    setPaymentMethods(updatedMethods);
    localStorage.setItem(`paymentMethods_${currentUser?.email}`, JSON.stringify(updatedMethods));
    return newMethod.id;
  };

  const saveAddress = (address: Omit<Address, 'id'>) => {
    const newAddr: Address = {
      ...address,
      id: Date.now().toString(),
    };
    const updatedAddresses = [...addresses, newAddr];
    setAddresses(updatedAddresses);
    localStorage.setItem(`addresses_${currentUser?.email}`, JSON.stringify(updatedAddresses));
    return newAddr.id;
  };

  const handleAddPaymentMethod = (paymentData: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardholderName: string;
    saveToProfile: boolean;
  }) => {
    const paymentId = savePaymentMethod({
      type: 'card',
      cardNumber: paymentData.cardNumber,
      expiryDate: paymentData.expiryDate,
      cvv: paymentData.cvv,
      cardholderName: paymentData.cardholderName,
      isDefault: paymentMethods.length === 0
    });

    setSelectedPaymentMethod(paymentId);
    setShowNewPaymentForm(false);
  };

  const handleAddAddress = (addressData: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    saveToProfile: boolean;
  }) => {
    const addressId = saveAddress({
      type: addressType,
      street: addressData.street,
      city: addressData.city,
      state: addressData.state,
      zipCode: addressData.zipCode,
      country: addressData.country,
      isDefault: addresses.filter(a => a.type === addressType).length === 0
    });

    if (addressType === 'shipping') {
      setSelectedShippingAddress(addressId);
    } else {
      setSelectedBillingAddress(addressId);
    }

    setShowNewAddressForm(false);
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearCart();
    setOrderComplete(true);
    setIsProcessing(false);
  };

  const handleContinueShopping = () => {
    navigate('/products/all');
  };

  if (orderComplete) {
    return <OrderComplete onContinueShopping={handleContinueShopping} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CheckoutHeader totalItems={getTotalItems()} totalPrice={total} />

        <ProgressSteps currentStep={currentStep} />

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <>
                <ShippingStep
                  addresses={addresses}
                  selectedShippingAddress={selectedShippingAddress}
                  onAddressSelect={setSelectedShippingAddress}
                  onAddNewAddress={() => {
                    setShowNewAddressForm(true);
                    setAddressType('shipping');
                  }}
                  onContinue={() => setCurrentStep(2)}
                />
                
                {showNewAddressForm && addressType === 'shipping' && (
                  <NewAddressForm
                    addressType="shipping"
                    onSave={handleAddAddress}
                    onCancel={() => setShowNewAddressForm(false)}
                  />
                )}
              </>
            )}

            {currentStep === 2 && (
              <>
                <PaymentStep
                  paymentMethods={paymentMethods}
                  selectedPaymentMethod={selectedPaymentMethod}
                  onPaymentSelect={setSelectedPaymentMethod}
                  onAddNewPayment={() => setShowNewPaymentForm(true)}
                  addresses={addresses}
                  selectedBillingAddress={selectedBillingAddress}
                  onBillingAddressSelect={setSelectedBillingAddress}
                  sameAsShipping={sameAsShipping}
                  onSameAsShippingChange={setSameAsShipping}
                  onAddNewBillingAddress={() => {
                    setShowNewAddressForm(true);
                    setAddressType('billing');
                  }}
                  onBack={() => setCurrentStep(1)}
                  onContinue={() => setCurrentStep(3)}
                />

                {showNewPaymentForm && (
                  <NewPaymentForm
                    onSave={handleAddPaymentMethod}
                    onCancel={() => setShowNewPaymentForm(false)}
                  />
                )}

                {showNewAddressForm && addressType === 'billing' && (
                  <NewAddressForm
                    addressType="billing"
                    onSave={handleAddAddress}
                    onCancel={() => setShowNewAddressForm(false)}
                  />
                )}
              </>
            )}

            {currentStep === 3 && (
              <ReviewStep
                cartItems={cartItems}
                addresses={addresses}
                paymentMethods={paymentMethods}
                selectedShippingAddress={selectedShippingAddress}
                selectedPaymentMethod={selectedPaymentMethod}
                isProcessing={isProcessing}
                onBack={() => setCurrentStep(2)}
                onPlaceOrder={handlePlaceOrder}
              />
            )}
          </div>

          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
