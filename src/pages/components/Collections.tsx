import { useState } from 'react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useFavorites } from '@/context/FavoritesContext'
import { Heart, Plus, Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import StarRating from '@/components/product/StarRating'

import type { Product } from '@/data/products';
export default function Collections(){
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const { addToCart } = useCart();
    const { toggleFavorite, isFavorite } = useFavorites();
    const navigate = useNavigate();
    const [addingProducts, setAddingProducts] = useState<{[key: number]: boolean}>({});
    const [showActions, setShowActions] = useState<{[key: number]: boolean}>({});

    const filteredProducts: Product[] = activeCategory === 'all'
    ? products
    : products.filter((product: Product) => product.category === activeCategory);

    const handleAddToCart = async (product: Product) => {
      if (addingProducts[product.id]) return; // Prevent double clicks
      
      setAddingProducts(prev => ({ ...prev, [product.id]: true }));
      
      try {
        addToCart({ 
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image
        });
        
        // Show success state for 1.5 seconds
        setTimeout(() => {
          setAddingProducts(prev => ({ ...prev, [product.id]: false }));
        }, 1500);
      } catch (error) {
        console.error('Failed to add product to cart:', error);
        setAddingProducts(prev => ({ ...prev, [product.id]: false }));
      }
    };

    const handleQuickView = (productId: number) => {
      navigate(`/product/${productId}`);
    };


    // Close all action menus when clicking outside
    const handleCloseActions = () => {
      setShowActions({});
    };

    return(
    <section className="py-16 bg-white" onClick={handleCloseActions}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Various collections of furniture<br />
                to fill your interior
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a variety of goods with the best quality for you to find the 
                right one to meet your interior needs
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-secondary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => {
                const isLiked = isFavorite(String(product.id));
                const isAdding = addingProducts[product.id] || false;

                return (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border group relative">
                    <div className="relative overflow-hidden">
                      {/* Favorite Heart Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(product);
                        }}
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

                     

                      <div className="aspect-square overflow-hidden bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                          onClick={() => handleQuickView(product.id)}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{product.category.replace('-', ' ')}</p>
                        <h3 className="text-lg font-bold text-gray-900 mt-1 line-clamp-2 hover:text-orange-600 transition-colors cursor-pointer" onClick={() => handleQuickView(product.id)}>{product.name}</h3>
                      </div>
                      
                      {/* Star Rating */}
                      <div className="mb-4">
                        <StarRating rating={product.rating || 0} size="sm" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                          <span className="text-xs text-gray-500">Free shipping</span>
                        </div>
                        {/* <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          disabled={isAdding}
                          className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-sm ${
                            isAdding 
                              ? 'bg-green-500 text-white scale-105 shadow-green-200' 
                              : 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-200'
                          }`}
                          title={isAdding ? "Added to Cart!" : "Add to Cart"}
                        >
                          {isAdding ? (
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
                        </button> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
    </section>
    );
}

