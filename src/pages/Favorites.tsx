import { useFavorites } from "@/context/FavoritesContext";
import ProductCard from "@/components/product/ProductCard";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Favorites() {
  const { favorites } = useFavorites();

  // Debug logging
  console.log('Favorites page - favorites count:', favorites.length);
  console.log('Favorites data:', favorites);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Favorites</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {favorites.length > 0
              ? `You have ${favorites.length} favorite ${favorites.length === 1 ? "item" : "items"}`
              : "You haven't added any favorites yet"
            }
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h3>
            <p className="text-gray-600 mb-6">
              Start browsing our products and click the heart icon to add items to your favorites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/products/bedroom" 
                className="inline-flex items-center justify-center h-12 bg-orange-500 hover:bg-orange-600 text-white border-transparent rounded-md px-6 py-3 transition-colors font-medium"
              >
                Browse Bedroom
              </Link>
              <Link 
                to="/products/living-room" 
                className="inline-flex items-center justify-center h-12 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-md px-6 py-3 transition-colors font-medium"
              >
                Browse Living Room
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}