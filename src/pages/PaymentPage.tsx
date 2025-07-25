import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function PaymentPage() {
  const navigate = useNavigate();
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">Your order has been processed and you'll receive a confirmation email shortly.</p>
          <button
            onClick={() => navigate('/products/all')}
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto px-4">
        <button
          onClick={() => navigate('/checkout')}
          className="flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Checkout
        </button>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Payment Processing</h1>
          <p className="text-gray-600 mb-6">Please wait while we process your payment...</p>
          
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
          
          {/* Simulate payment processing */}
          <div className="mt-6">
            <button
              onClick={() => setOrderConfirmed(true)}
              className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              Complete Payment (Demo)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
