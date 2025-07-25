interface ShippingOption {
  id: string;
  name: string;
  price: number;
  description: string;
  estimatedDays: string;
}

interface ShippingOptionsProps {
  shippingOptions: ShippingOption[];
  selectedShipping: string;
  onShippingSelect: (shippingId: string) => void;
  subtotal: number;
  freeShippingThreshold: number;
}

export default function ShippingOptions({
  shippingOptions,
  selectedShipping,
  onShippingSelect,
  subtotal,
  freeShippingThreshold
}: ShippingOptionsProps) {
  return (
    <div className="border-t border-b py-4">
      <h3 className="text-sm font-medium text-gray-900 mb-3">Shipping Options</h3>
      <div className="space-y-2">
        {shippingOptions.map((option) => (
          <label key={option.id} className="flex items-start cursor-pointer">
            <input
              type="radio"
              name="shipping"
              value={option.id}
              checked={selectedShipping === option.id}
              onChange={(e) => onShippingSelect(e.target.value)}
              className="mt-1 mr-3"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-900">{option.name}</p>
                  <p className="text-xs text-gray-500">{option.estimatedDays}</p>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {subtotal >= freeShippingThreshold ? 'Free' : `$${option.price}`}
                </span>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
