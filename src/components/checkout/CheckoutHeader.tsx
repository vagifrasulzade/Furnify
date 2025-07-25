import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CheckoutHeaderProps {
  totalItems: number;
  totalPrice: number;
}

export default function CheckoutHeader({ totalItems, totalPrice }: CheckoutHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <button
        onClick={() => navigate('/cart')}
        className="flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-4"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Cart
      </button>
      <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
      <p className="text-gray-600 mt-2">
        {totalItems} {totalItems === 1 ? 'item' : 'items'} • Total: ${totalPrice.toFixed(2)}
      </p>
    </div>
  );
}
