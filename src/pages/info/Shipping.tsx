export default function ShippingPolicy() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Shipping Policy</h1>
          <p className="text-lg text-gray-600 mb-10">
            At Furnity, we strive to ensure your furniture arrives safely and efficiently. This Shipping Policy outlines our shipping procedures and expectations.
          </p>
        </div>
        <div className="text-gray-800 text-base leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Shipping Zones</h2>
            <p>
              We currently ship to all addresses within the contiguous United States. For shipping to Alaska, Hawaii, or international destinations, please contact us for a custom quote.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Shipping Costs</h2>
            <p>
              Shipping costs are calculated at checkout based on the size, weight, and destination of your order. We offer free standard shipping on all orders over $500.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Delivery Times</h2>
            <p>
              Standard delivery typically takes 7-14 business days from the date of order confirmation. Larger items or custom orders may take longer. You will receive a tracking number once your order has shipped.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Damaged or Lost Items</h2>
            <p>
                Please inspect your order upon arrival. If you notice any damage, please make a note of it with the delivery carrier and contact us immediately. For lost packages, please contact us within 7 days of the expected delivery date.
            </p>

            <p className="mt-8">
                For any shipping-related questions, please contact our customer service team.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
