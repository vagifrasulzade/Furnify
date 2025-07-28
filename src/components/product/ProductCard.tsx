import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';
import type { Product } from '@/data/products';
import { Heart, Plus, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import StarRating from '@/components/product/StarRating';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  showAdminButtons?: boolean;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isLiked = isFavorite(String(product.id));

  const allImages = product.images || [product.image];
  const hasMultipleImages = allImages.length > 1;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

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
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border group relative">
      <div className="relative overflow-hidden">
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 left-3 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110"
          title={isLiked ? "Remove from Favorites" : "Add to Favorites"}
        >
          <Heart 
            className={`w-5 h-5 transition-all duration-200 ${
              isLiked ? 'text-red-500 fill-red-500 scale-110' : 'text-gray-400 hover:text-red-400'
            }`}
            fill={isLiked ? 'currentColor' : 'none'}
          />
        </button>

       


        <div className="aspect-square overflow-hidden bg-gray-100 relative group/image">
          <img
            src={allImages[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
            onClick={handleQuickView}
            loading="lazy"
          />
          
          {hasMultipleImages && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-200 hover:bg-white hover:scale-110 z-10"
                title="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-200 hover:bg-white hover:scale-110 z-10"
                title="Next image"
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
            </>
          )}

          {hasMultipleImages && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}
          
          {(product.images && product.images.length > 1) || product.video ? (
            <div className="absolute top-3 right-3 flex gap-1 z-10">
              {product.images && product.images.length > 1 && (
                <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  {product.images.length} photos
                </div>
              )}
              {product.video && (
                <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  VIDEO
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
      <div className="p-6 bg-gradient-to-b from-white to-gray-50">
        <div className="mb-3">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{product.category.replace('-', ' ')}</p>
          <h3 className="text-lg font-bold text-gray-900 mt-1 line-clamp-2 hover:text-orange-600 transition-colors cursor-pointer" onClick={handleQuickView}>{product.name}</h3>
        </div>
        
        <div className="mb-4">
          <StarRating rating={product.rating || 0} size="sm" />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            <span className="text-xs text-gray-500">Free shipping</span>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isAdding || !product.stock || product.stock <= 0}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-sm ${
              !product.stock || product.stock <= 0
                ? 'bg-gray-400 text-white cursor-not-allowed transform-none hover:scale-100 hover:shadow-lg'
                : isAdding 
                  ? 'bg-green-500 text-white scale-105 shadow-green-200' 
                  : 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-200'
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
  );
}