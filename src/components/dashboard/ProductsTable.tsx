import React from 'react';
import { MoreVertical, Trash2, Edit, X, Save } from 'lucide-react';
import { products as furnitureProducts } from '@/data/products';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: 'Active' | 'Inactive';
}
export default function ProductsTable() {
  // Convert furniture products to table format and take first 6 items
  const initialProducts: Product[] = furnitureProducts.slice(0, 6).map(product => ({
    id: product.id,
    name: product.name.length > 40 ? product.name.substring(0, 40) + '...' : product.name,
    category: product.category.charAt(0).toUpperCase() + product.category.slice(1),
    price: `$${product.price.toLocaleString()}`,
    stock: product.stock || 0,
    status: (product.stock || 0) > 5 ? 'Active' : 'Inactive'
  }));

  const [products, setProducts] = React.useState<Product[]>(initialProducts);
  const [editingId, setEditingId] = React.useState<number | null>(null);
  const [editForm, setEditForm] = React.useState<Product | null>(null);

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setEditForm({ ...product });
  };

  const handleSave = () => {
    if (editForm) {
      setProducts(products.map(p => p.id === editForm.id ? editForm : p));
      setEditingId(null);
      setEditForm(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleInputChange = (field: keyof Product, value: string | number) => {
    if (editForm) {
      setEditForm({ ...editForm, [field]: value });
    }
  };

  return (
    <div className="bg-white rounded-xl border border-orange-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-orange-100">
        <h3 className="text-lg font-semibold text-gray-900">Products</h3>
        <p className="text-sm text-gray-600">Manage your product inventory</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-orange-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-orange-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-orange-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingId === product.id ? (
                    <input
                      type="text"
                      value={editForm?.name || ''}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-2 py-1 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  ) : (
                    <div className="font-medium text-gray-900">{product.name}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {editingId === product.id ? (
                    <select
                      value={editForm?.category || ''}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-2 py-1 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="Bedroom">Bedroom</option>
                      <option value="Living-room">Living Room</option>
                      <option value="Dining-room">Dining Room</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Office">Office</option>
                      <option value="Sofa">Sofa</option>
                    </select>
                  ) : (
                    product.category
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {editingId === product.id ? (
                    <input
                      type="text"
                      value={editForm?.price || ''}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="w-full px-2 py-1 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  ) : (
                    product.price
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {editingId === product.id ? (
                    <input
                      type="number"
                      value={editForm?.stock || 0}
                      onChange={(e) => handleInputChange('stock', parseInt(e.target.value))}
                      className="w-full px-2 py-1 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  ) : (
                    product.stock
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingId === product.id ? (
                    <select
                      value={editForm?.status || 'Active'}
                      onChange={(e) => handleInputChange('status', e.target.value as 'Active' | 'Inactive')}
                      className="px-2 py-1 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  ) : (
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      product.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {editingId === product.id ? (
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={handleSave}
                        className="p-1 hover:bg-green-100 rounded transition-colors"
                        title="Save"
                      >
                        <Save className="w-4 h-4 text-green-600" />
                      </button>
                      <button 
                        onClick={handleCancel}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                        title="Cancel"
                      >
                        <X className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleEdit(product)}
                        className="p-1 hover:bg-orange-100 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-orange-600" />
                      </button>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className="p-1 hover:bg-red-100 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

