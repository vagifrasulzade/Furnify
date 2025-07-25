import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import {
  CartHeader,
  EmptyCart,
  CartItemsList,
  OrderSummary
} from '@/types/cart';
import type { ShippingOption } from '@/types/cart';

export default function CartPageRefactored() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  // Shipping options
  const shippingOptions: ShippingOption[] = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      price: 25,
      description: 'Regular delivery',
      estimatedDays: '5-7 business days'
    },
    {
      id: 'express',
      name: 'Express Shipping',
      price: 45,
      description: 'Faster delivery',
      estimatedDays: '2-3 business days'
    },
    {
      id: 'overnight',
      name: 'Overnight Shipping',
      price: 85,
      description: 'Next day delivery',
      estimatedDays: '1 business day'
    }
  ];
  
  const [selectedShipping, setSelectedShipping] = useState<string>('standard');

  const handleCheckout = () => {
    if (!currentUser) {
      navigate("/auth/login");
    } else {
      navigate("/checkout");
    }
  };

  const handleContinueShopping = () => {
    navigate("/products/all");
  };

  // Calculate subtotal, tax, and total
  const subtotal = getTotalPrice();
  
  // Get selected shipping option
  const selectedShippingOption = shippingOptions.find(option => option.id === selectedShipping);
  
  // Shipping calculation
  const freeShippingThreshold = 500; // Free shipping over $500
  const baseShippingCost = selectedShippingOption?.price || 25;
  const shipping = subtotal >= freeShippingThreshold ? 0 : baseShippingCost;
  
  const taxRate = 0.08; // 8% tax
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  // Amount needed for free shipping
  const amountForFreeShipping = freeShippingThreshold - subtotal;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CartHeader totalItems={getTotalItems()} />

        {cartItems.length === 0 ? (
          <EmptyCart onContinueShopping={handleContinueShopping} />
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <CartItemsList
                cartItems={cartItems}
                onContinueShopping={handleContinueShopping}
                onRemoveItem={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
                shippingOptions={shippingOptions}
                selectedShipping={selectedShipping}
                onShippingSelect={setSelectedShipping}
                freeShippingThreshold={freeShippingThreshold}
                amountForFreeShipping={amountForFreeShipping}
                currentUser={currentUser}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
