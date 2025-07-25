import { Lock } from 'lucide-react';

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

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

interface ReviewStepProps {
  cartItems: CartItem[];
  addresses: Address[];
  paymentMethods: PaymentMethod[];
  selectedShippingAddress: string;
  selectedPaymentMethod: string;
  isProcessing: boolean;
  onBack: () => void;
  onPlaceOrder: () => void;
}

export default function ReviewStep({
  cartItems,
  addresses,
  paymentMethods,
  selectedShippingAddress,
  selectedPaymentMethod,
  isProcessing,
  onBack,
  onPlaceOrder
}: ReviewStepProps) {
  const shippingAddress = addresses.find(a => a.id === selectedShippingAddress);
  const paymentMethod = paymentMethods.find(p => p.id === selectedPaymentMethod);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <Lock className="w-5 h-5" />
        Review Your Order
      </h2>

      {/* Order Items */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-4">Order Items</h3>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-100">
              <img
                src={item.image || '/placeholder.jpg'}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{item.name}</h4>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Addresses and Payment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Shipping Address</h3>
          {shippingAddress && (
            <div className="text-gray-600">
              <p>{shippingAddress.street}</p>
              <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
              <p>{shippingAddress.country}</p>
            </div>
          )}
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-2">Payment Method</h3>
          {paymentMethod && (
            <div className="text-gray-600">
              <p>•••• •••• •••• {paymentMethod.cardNumber.slice(-4)}</p>
              <p>{paymentMethod.cardholderName}</p>
              <p>Expires {paymentMethod.expiryDate}</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 pt-6 border-t flex space-x-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Back to Payment
        </button>
        <button
          onClick={onPlaceOrder}
          disabled={isProcessing}
          className="flex-1 bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isProcessing ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
}
