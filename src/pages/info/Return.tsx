export default function Return() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns Policy</h1>
          <p className="text-xl text-gray-600 mb-10">
            We want you to be completely satisfied with your purchase from Furnity. If for any reason you are not, we offer a straightforward return policy.
          </p>
        </div>
        <div className="text-gray-800 text-base leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">30-Day Return Window</h2>
            <p>
              You have 30 days from the date of delivery to return most items purchased from Furnity. Items must be in their original condition, unused, and in their original packaging.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">How to Initiate a Return</h2>
            <ol className="list-decimal ml-5 space-y-2">
              <li>
                Contact our customer service team at <a href="mailto:support@furnity.com" className="underline text-primary">support@furnity.com</a> or call us at +1 (234) 567-890.
              </li>
              <li>
                Provide your order number and the reason for the return.
              </li>
              <li>
                Our team will guide you through the return process, including providing a return shipping label if applicable.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Refunds</h2>
            <p>
              Once your return is received and inspected, we will process your refund to the original method of payment within 7-10 business days. Shipping charges are non-refundable unless the return is due to our error.
            </p>
          </div>
          <p className="text-gray-600 pt-4">
            For more detailed information, please refer to our full Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
