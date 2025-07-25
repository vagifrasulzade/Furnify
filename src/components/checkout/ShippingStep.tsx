import { MapPin, Plus } from 'lucide-react';

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

interface ShippingStepProps {
  addresses: Address[];
  selectedShippingAddress: string;
  onAddressSelect: (addressId: string) => void;
  onAddNewAddress: () => void;
  onContinue: () => void;
}

export default function ShippingStep({
  addresses,
  selectedShippingAddress,
  onAddressSelect,
  onAddNewAddress,
  onContinue
}: ShippingStepProps) {
  const shippingAddresses = addresses.filter(addr => addr.type === 'shipping');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <MapPin className="w-5 h-5" />
        Shipping Address
      </h2>

      {/* Saved Addresses */}
      <div className="space-y-4 mb-6">
        {shippingAddresses.map((address) => (
          <label key={address.id} className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="shippingAddress"
              value={address.id}
              checked={selectedShippingAddress === address.id}
              onChange={(e) => onAddressSelect(e.target.value)}
              className="mt-1"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">{address.street}</p>
                  <p className="text-gray-600">{address.city}, {address.state} {address.zipCode}</p>
                  <p className="text-gray-600">{address.country}</p>
                  {address.isDefault && (
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

      {/* Add New Address Button */}
      <button
        onClick={onAddNewAddress}
        className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors mb-6"
      >
        <Plus className="w-4 h-4" />
        Add New Shipping Address
      </button>

      {/* Continue Button */}
      <div className="mt-6 pt-6 border-t">
        <button
          onClick={onContinue}
          disabled={!selectedShippingAddress}
          className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}
