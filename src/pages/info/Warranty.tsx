export default function WarrantyInformation() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Warranty Information</h1>
          <p className="text-lg text-gray-600 mb-10">
            Furnity stands behind the quality of our products. This Warranty Information outlines the coverage provided for items purchased from our website.
          </p>
        </div>
        <div className="text-gray-800 text-base leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Manufacturer&apos;s Warranty</h2>
            <p>
              Most products sold on Furnity come with a 2-year manufacturer&apos;s warranty against defects in materials and workmanship, unless otherwise specified on the product page. This warranty begins from the date of delivery.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">What is Covered</h2>
            <p>
              This warranty covers manufacturing defects and structural integrity issues under normal household use. It includes defects in the frame, springs, and cushioning.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">What is Not Covered</h2>
            <p className="mb-2">This warranty does not cover:</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Normal wear and tear</li>
              <li>Damage resulting from misuse, abuse, or accidents</li>
              <li>Fading or discoloration of fabrics due to sunlight exposure</li>
              <li>Damage caused by improper cleaning or maintenance</li>
              <li>Products sold &quot;as-is&quot; or clearance items</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Making a Warranty Claim</h2>
            <p>
              To make a warranty claim, please contact our customer service team at <a href="mailto:support@furnity.com" className="underline text-primary">support@furnity.com</a> with your order number, a description of the issue, and supporting photographs. Our team will review your claim and guide you through the process.
            </p>
            <p className="mt-4">
              Furnity reserves the right to repair or replace the defective product at its discretion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
