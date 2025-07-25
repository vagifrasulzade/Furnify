interface CartHeaderProps {
  totalItems: number;
}

export default function CartHeader({ totalItems }: CartHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
      <p className="text-gray-600 mt-2">
        {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
      </p>
    </div>
  );
}
