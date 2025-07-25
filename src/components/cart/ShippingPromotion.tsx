interface ShippingPromotionProps {
  shipping: number;
  amountForFreeShipping: number;
}

export default function ShippingPromotion({ shipping, amountForFreeShipping }: ShippingPromotionProps) {
  if (shipping === 0) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
        <p className="text-green-800 text-sm font-medium">
          🎉 You qualify for free shipping!
        </p>
      </div>
    );
  }

  if (shipping > 0 && amountForFreeShipping > 0) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-blue-800 text-sm">
          Add <span className="font-semibold">${amountForFreeShipping.toFixed(2)}</span> more to get free shipping!
        </p>
      </div>
    );
  }

  return null;
}
