import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';
import type { Product } from '@/data/products';
import { Heart, Plus, Check, Eye, MoreVertical } from 'lucide-react';
import StarRating from '@/components/product/StarRating';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductListItemProps {
  product: Product;
  showAdminButtons?: boolean;
}

export default function ProductListItem({ product }: ProductListItemProps) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const isLiked = isFavorite(String(product.id));

  const handleAddToCart = async () => {
    if (!product.stock || product.stock <= 0) {
      return;
    }
    
    setIsAdding(true);
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
  };

  const handleQuickView = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border">
      <div className="flex">
        <div className="relative w-48 h-48 flex-shrink-0">
          <button
            onClick={handleToggleFavorite}
            className="absolute top-3 left-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110"
            title={isLiked ? "Remove from Favorites" : "Add to Favorites"}
          >
            <Heart 
              className={`w-4 h-4 transition-all duration-200 ${
                isLiked ? 'text-red-500 fill-red-500 scale-110' : 'text-gray-400 hover:text-red-400'
              }`}
              fill={isLiked ? 'currentColor' : 'none'}
            />
          </button>
          
          <div className="absolute top-3 right-3 z-10">
            <button
              onClick={() => setShowActions(!showActions)}
              className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg"
              title="More Actions"
            >
              <MoreVertical className="w-4 h-4 text-gray-600" />
            </button>
            
            {showActions && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border py-2 z-20">
                <button
                  onClick={handleQuickView}
                  className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  Quick View
                </button>
              </div>
            )}
          </div>

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-2 capitalize">{product.category.replace('-', ' ')}</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            
            <div className="mb-4">
              <StarRating rating={product.rating || 0} size="md" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            <div className="flex items-center gap-3">
              {/* <button
                onClick={handleQuickView}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-colors"
                title="Quick View"
              >
                <Eye className="w-4 h-4" />
                <span className="text-sm">View</span>
              </button> */}
              <button
                onClick={handleAddToCart}
                disabled={isAdding || !product.stock || product.stock <= 0}
                className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 ${
                  !product.stock || product.stock <= 0
                    ? 'bg-gray-400 text-white cursor-not-allowed transform-none hover:scale-100 hover:shadow-md'
                    : isAdding 
                      ? 'bg-green-500 text-white' 
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
                title={
                  !product.stock || product.stock <= 0 
                    ? "Out of Stock" 
                    : isAdding 
                      ? "Added to Cart!" 
                      : "Add to Cart"
                }
              >
                {!product.stock || product.stock <= 0 ? (
                  <>
                    <span>Out of Stock</span>
                  </>
                ) : isAdding ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}