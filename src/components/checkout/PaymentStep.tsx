import { CreditCard, Plus } from 'lucide-react';

interface PaymentMethod {
  id: string;
  type: 'card';
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  isDefault: boolean;
}

interface Address {
  id: string;
  type: 'billing' | 'shipping';
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

interface PaymentStepProps {
  paymentMethods: PaymentMethod[];
  selectedPaymentMethod: string;
  onPaymentSelect: (paymentId: string) => void;
  onAddNewPayment: () => void;
  addresses: Address[];
  selectedBillingAddress: string;
  onBillingAddressSelect: (addressId: string) => void;
  sameAsShipping: boolean;
  onSameAsShippingChange: (same: boolean) => void;
  onAddNewBillingAddress: () => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function PaymentStep({
  paymentMethods,
  selectedPaymentMethod,
  onPaymentSelect,
  onAddNewPayment,
  addresses,
  selectedBillingAddress,
  onBillingAddressSelect,
  sameAsShipping,
  onSameAsShippingChange,
  onAddNewBillingAddress,
  onBack,
  onContinue
}: PaymentStepProps) {
  const billingAddresses = addresses.filter(addr => addr.type === 'billing');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <CreditCard className="w-5 h-5" />
        Payment Method
      </h2>

      {/* Saved Payment Methods */}
      <div className="space-y-4 mb-6">
        {paymentMethods.map((method) => (
          <label key={method.id} className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value={method.id}
              checked={selectedPaymentMethod === method.id}
              onChange={(e) => onPaymentSelect(e.target.value)}
              className="mt-1"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">
                    •••• •••• •••• {method.cardNumber.slice(-4)}
                  </p>
                  <p className="text-gray-600">{method.cardholderName}</p>
                  <p className="text-gray-600">Expires {method.expiryDate}</p>
                  {method.isDefault && (
                    <span className="inline-block px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded-full mt-1">
                      Default
                    </span>
                  )}
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Add New Payment Method Button */}
      <button
        onClick={onAddNewPayment}
        className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors mb-8"
      >
        <Plus className="w-4 h-4" />
        Add New Payment Method
      </button>

      {/* Billing Address */}
      <div className="pt-6 border-t">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Billing Address</h3>
        
        <label className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            checked={sameAsShipping}
            onChange={(e) => onSameAsShippingChange(e.target.checked)}
            className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
          />
          <span className="text-gray-700">Same as shipping address</span>
        </label>

        {!sameAsShipping && (
          <div className="space-y-4">
            {billingAddresses.map((address) => (
              <label key={address.id} className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="billingAddress"
                  value={address.id}
                  checked={selectedBillingAddress === address.id}
                  onChange={(e) => onBillingAddressSelect(e.target.value)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{address.street}</p>
                  <p className="text-gray-600">{address.city}, {address.state} {address.zipCode}</p>
                  <p className="text-gray-600">{address.country}</p>
                </div>
              </label>
            ))}

            <button
              onClick={onAddNewBillingAddress}
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add New Billing Address
            </button>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 pt-6 border-t flex space-x-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Back to Shipping
        </button>
        <button
          onClick={onContinue}
          disabled={!selectedPaymentMethod || (!sameAsShipping && !selectedBillingAddress)}
          className="flex-1 bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Review Order
        </button>
      </div>
    </div>
  );
}
