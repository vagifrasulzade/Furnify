import React from 'react';
import StarRating from './StarRating';

interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  priceRange: [number, number];
  onPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minRating: number;
  onRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FiltersSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  minRating,
  onRatingChange,
  searchTerm,
  onSearch,
}: Props) {
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Rating changed to:', e.target.value, 'Parsed:', parseFloat(e.target.value));
    onRatingChange(e);
  };

  return (
    <div className="lg:w-1/4">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={onSearch}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-600">${priceRange[0]}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: `${(priceRange[1] / 2000) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">${priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={onPriceChange}
            className="w-full"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                value="all"
                checked={selectedCategory === 'all'}
                onChange={onCategoryChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">All</span>
            </label>
            {categories.map(category => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={onCategoryChange}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 capitalize">{category.replace('-', ' ')}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
          <div className="space-y-2">
            {[0, 1, 2, 3, 4, 4.5].map(rating => (
              <label key={rating} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={rating.toString()}
                  checked={minRating === rating}
                  onChange={handleRatingChange}
                  className="mr-2"
                />
                <div className="flex items-center">
                  {rating === 0 ? (
                    <span className="text-sm text-gray-700">All Ratings</span>
                  ) : (
                    <>
                      <StarRating rating={rating} size="sm" showRating={false} />
                      <span className="text-sm text-gray-700 ml-2">& up</span>
                    </>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
