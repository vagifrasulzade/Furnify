import { ArrowLeft } from "lucide-react";

interface EmptyCartProps {
  onContinueShopping: () => void;
}

export default function EmptyCart({ onContinueShopping }: EmptyCartProps) {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-16 h-16 text-gray-400 mx-auto mb-4"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>

        <h3 className="mb-2 text-2xl font-bold text-gray-900">Your cart is empty</h3>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any items to your cart yet.
        </p>
        <button
          onClick={onContinueShopping}
          className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center mx-auto font-bold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
