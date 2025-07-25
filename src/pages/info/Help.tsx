
export default function HelpCenter() {
    return (
            <div  className="py-16 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-7">Help Center</h1>
                    <p className="text-xl text-gray-600 mb-6">
                        Welcome to our Help Center. Here you can find answers to frequently asked questions,<br />
                        guides on how to use our services, and troubleshooting tips.
                    </p>
                    <div className="text-left  max-w-2xl mx-auto">
                        
                        <h2 className="ext-2xl font-semibold mb-4 text-gray-900">
                            Popular Topics
                        </h2>
                        <ul className="list-disc ml-6 mb-10 text-base text-gray-700 space-y-2">
                            <li className="text-gray-500">How to place an order</li>
                            <li className="text-gray-500">Shipping and delivery information</li>
                            <li className="text-gray-500">Returns and refunds</li>
                            <li className="text-gray-500">Account management</li>
                            <li className="text-gray-500">Product care guides</li>
                        </ul>
                        <p className="text-gray-700 text-base">
                            If you can't find what you're looking for, please don't hesitate to contact our customer service team.
                        </p>
                    </div>
                    

                </div>
            </div>

        </div>
        
        
    );
}
