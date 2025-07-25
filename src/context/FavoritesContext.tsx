import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Product } from '@/data/products';

interface FavoritesContextType {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        const parsedFavorites = JSON.parse(savedFavorites);
        console.log('Loaded favorites from localStorage:', parsedFavorites.length);
        setFavorites(parsedFavorites);
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
      console.log('Saved favorites to localStorage:', favorites.length);
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [favorites]);

  const addToFavorites = (product: Product) => {
    console.log('Adding to favorites:', product.name, product.id);
    setFavorites(prev => {
      if (prev.find(item => item.id === product.id)) {
        console.log('Product already in favorites');
        return prev;
      }
      const newFavorites = [...prev, product];
      console.log('New favorites count:', newFavorites.length);
      return newFavorites;
    });
  };

  const removeFromFavorites = (productId: string) => {
    console.log('Removing from favorites:', productId);
    setFavorites(prev => {
      const newFavorites = prev.filter(item => String(item.id) !== String(productId));
      console.log('Favorites count after removal:', newFavorites.length);
      return newFavorites;
    });
  };

  const toggleFavorite = (product: Product) => {
    console.log('Toggling favorite for:', product.name, product.id);
    const isFav = favorites.find(item => item.id === product.id);
    console.log('Is currently favorite:', !!isFav);
    if (isFav) {
      removeFromFavorites(String(product.id));
    } else {
      addToFavorites(product);
    }
  };

  const isFavorite = (productId: string): boolean => {
    return favorites.some(item => String(item.id) === String(productId));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};