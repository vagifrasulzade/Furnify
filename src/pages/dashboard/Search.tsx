import  { useState, useEffect } from 'react';
import { Search as SearchIcon, Filter, X } from 'lucide-react';
import { products as productData, type Product as BaseProduct } from '@/data/products';
import type { Order } from '@/types/user';

// Extended Product interface for admin functionality
interface AdminProduct extends BaseProduct {
  status: 'Active' | 'Inactive';
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [results, setResults] = useState<{
    products: AdminProduct[];
    orders: Order[];
  }>({ products: [], orders: [] });

  // Transform product data to include status and format for admin use
  const allProducts: AdminProduct[] = productData.map(product => ({
    ...product,
    status: (product.stock && product.stock > 0) ? 'Active' : 'Inactive' as 'Active' | 'Inactive'
  }));

  const allOrders: Order[] = [
    { id: 'ORD-001', customer: 'John Smith', product: 'Wireless Headphones', amount: '$99.99', status: 'Delivered', date: '2024-01-15' },
    { id: 'ORD-002', customer: 'Sarah Johnson', product: 'Smart Watch', amount: '$299.99', status: 'Shipped', date: '2024-01-14' },
    { id: 'ORD-003', customer: 'Mike Davis', product: 'Coffee Maker', amount: '$159.99', status: 'Processing', date: '2024-01-13' },
    { id: 'ORD-004', customer: 'Emily Brown', product: 'Desk Lamp', amount: '$49.99', status: 'Pending', date: '2024-01-12' },
  ];

  useEffect(() => {
    if (query.trim() === '') {
      setResults({ products: [], orders: [] });
      return;
    }

    const searchTerm = query.toLowerCase();
    
    const filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );

    const filteredOrders = allOrders.filter(order =>
      order.id.toLowerCase().includes(searchTerm) ||
      order.customer.toLowerCase().includes(searchTerm) ||
      order.product.toLowerCase().includes(searchTerm)
    );

    setResults({ products: filteredProducts, orders: filteredOrders });
  }, [query]);

  const clearSearch = () => {
    setQuery('');
    setResults({ products: [], orders: [] });
  };

  const getFilteredResults = () => {
    switch (activeFilter) {
      case 'products':
        return { products: results.products, orders: [] };
      case 'orders':
        return { products: [], orders: results.orders };
      default:
        return results;
    }
  };

  const filteredResults = getFilteredResults();
  const totalResults = filteredResults.products.length + filteredResults.orders.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Search</h1>
        <p className="text-gray-600">Find products, orders, and more</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl border border-orange-100 p-6">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for furniture, orders, customers..."
            className="w-full pl-12 pr-12 py-4 text-lg border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            autoFocus
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4 mt-4">
          <Filter className="w-4 h-4 text-gray-400" />
          <div className="flex space-x-2">
            {['all', 'products', 'orders'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {query && (
        <div className="bg-white rounded-xl border border-orange-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Search Results
            </h3>
            <span className="text-sm text-gray-600">
              {totalResults} result{totalResults !== 1 ? 's' : ''} found
            </span>
          </div>

          {totalResults === 0 ? (
            <div className="text-center py-12">
              <SearchIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No results found for "{query}"</p>
              <p className="text-sm text-gray-400 mt-1">Try adjusting your search terms</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Products Results */}
              {filteredResults.products.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Products ({filteredResults.products.length})</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredResults.products.map((product) => (
                      <div key={product.id} className="border border-orange-100 rounded-lg p-4 hover:bg-orange-50 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-medium text-gray-900">{product.name}</h5>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            product.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {product.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('-', ' ')}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">${product.price}</span>
                          <span className="text-sm text-gray-600">Stock: {product.stock || 0}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Orders Results */}
              {filteredResults.orders.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Orders ({filteredResults.orders.length})</h4>
                  <div className="space-y-3">
                    {filteredResults.orders.map((order) => (
                      <div key={order.id} className="border border-orange-100 rounded-lg p-4 hover:bg-orange-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4">
                              <span className="font-medium text-gray-900">{order.id}</span>
                              <span className="text-gray-600">{order.customer}</span>
                              <span className="text-sm text-gray-500">{order.product}</span>
                            </div>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="font-semibold text-gray-900">{order.amount}</span>
                              <span className="text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                            order.status === 'Pending' ? 'bg-gray-100 text-gray-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Search Tips */}
      {!query && (
        <div className="bg-white rounded-xl border border-orange-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Products</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Search by furniture name</li>
                <li>• Filter by room (bedroom, living-room, dining-room, office)</li>
                <li>• Find by price range</li>
                <li>• Search by brand or material</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Orders</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Search by order ID</li>
                <li>• Find by customer name</li>
                <li>• Filter by status</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

