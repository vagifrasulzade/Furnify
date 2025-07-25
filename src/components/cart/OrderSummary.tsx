import ShippingOptions from './ShippingOptions';
import ShippingPromotion from './ShippingPromotion';

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  description: string;
  estimatedDays: string;
}

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingOptions: ShippingOption[];
  selectedShipping: string;
  onShippingSelect: (shippingId: string) => void;
  freeShippingThreshold: number;
  amountForFreeShipping: number;
  currentUser: any;
  onCheckout: () => void;
}

export default function OrderSummary({
  subtotal,
  shipping,
  tax,
  total,
  shippingOptions,
  selectedShipping,
  onShippingSelect,
  freeShippingThreshold,
  amountForFreeShipping,
  currentUser,
  onCheckout
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        {/* Shipping Options */}
        <ShippingOptions
          shippingOptions={shippingOptions}
          selectedShipping={selectedShipping}
          onShippingSelect={onShippingSelect}
          subtotal={subtotal}
          freeShippingThreshold={freeShippingThreshold}
        />
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className={`font-medium ${shipping === 0 ? 'text-green-600' : 'text-gray-900'}`}>
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        {/* Free shipping promotion message */}
        <ShippingPromotion 
          shipping={shipping}
          amountForFreeShipping={amountForFreeShipping}
        />
        
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="w-full mt-6 bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
      >
        {currentUser ? 'Proceed to Checkout' : 'Login to Buy'}
      </button>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">Secure checkout with SSL encryption</p>
      </div>

      {/* Security Icons */}
      <div className="flex justify-center items-center space-x-4 mt-4 pt-4 border-t">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-gray-500">SSL Secured</span>
        </div>
      </div>
    </div>
  );
}
