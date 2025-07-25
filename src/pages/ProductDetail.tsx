import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';
import { products } from '@/data/products';
import { Heart, Plus, Check, ArrowLeft, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import StarRating from '@/components/product/StarRating';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isAdding, setIsAdding] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products/all')}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const isLiked = isFavorite(String(product.id));

  const handleAddToCart = async () => {
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

  // Use product images or fallback to single image
  const images = product.images || [product.image];
  const totalMedia = images.length + (product.video ? 1 : 0);

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? totalMedia - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === totalMedia - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [totalMedia]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images & Video */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative group">
            {product.video && selectedImage === images.length ? (
              <video
                src={product.video}
                controls
                className="w-full h-full object-cover"
                poster={images[0]}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Arrow Navigation Controls */}
            {totalMedia > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-110 shadow-lg z-10"
                  title="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-110 shadow-lg z-10"
                  title="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {totalMedia > 1 && (
              <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                {selectedImage + 1} / {totalMedia}
              </div>
            )}
          </div>
          
          {/* Thumbnail Images & Video */}
          <div className="flex gap-4 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
            {product.video && (
              <button
                onClick={() => setSelectedImage(images.length)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors bg-gray-900 flex items-center justify-center ${
                  selectedImage === images.length ? 'border-orange-500' : 'border-gray-200'
                }`}
              >
                <span className="text-white text-xs font-semibold">VIDEO</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">{product.category.replace('-', ' ')}</p>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <StarRating rating={product.rating || 0} size="md" />
            <span className="text-sm text-gray-600">({product.rating || 0} stars)</span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-gray-900">
            ${product.price}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${product.stock && product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-600">
              {product.stock && product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
            </span>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500" />
                High-quality materials
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500" />
                Modern design
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500" />
                Easy assembly
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500" />
                1-year warranty
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={handleToggleFavorite}
              className={`px-6 py-3 rounded-lg border-2 flex items-center gap-2 transition-all duration-200 ${
                isLiked 
                  ? 'border-red-500 text-red-500 bg-red-50' 
                  : 'border-gray-300 text-gray-700 hover:border-red-300 hover:text-red-500'
              }`}
            >
              <Heart 
                className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`}
              />
              {isLiked ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>

            <button
              onClick={handleAddToCart}
              disabled={isAdding || !product.stock || product.stock === 0}
              className={`flex-1 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-semibold ${
                isAdding 
                  ? 'bg-green-500 text-white' 
                  : product.stock && product.stock > 0
                    ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isAdding ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Cart!
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  {product.stock && product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
