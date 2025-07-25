import { useState, useMemo } from 'react';
import { products } from '../../data/products';
import FiltersSidebar from '../../components/product/FiltersSidebar';
import ProductGrid from '../../components/product/ProductGrid';
import { Grid, List, SortAsc } from 'lucide-react';

type SortOption = 'name' | 'price-low' | 'price-high' | 'high-rating';
type ViewMode = 'grid' | 'list';

export default function Office() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('office');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
    const [sortBy, setSortBy] = useState<SortOption>('name');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [minRating, setMinRating] = useState<number>(0);
    
    
    // Get all categories for the filter
    const categories = [...new Set(products.map(product => product.category))];

    // Show all categories but filter products based on selected category
    const allCategories = categories; // Show all available categories
     

    const filteredProducts = useMemo(() => {
        // For Office page, only show office products or all products based on filter
        let baseProducts = selectedCategory === 'all' ? products : 
                          products.filter(product => product.category === selectedCategory);
        
        let filtered = baseProducts.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesRating = (product.rating || 0) >= minRating;
            
            return matchesSearch && matchesPrice && matchesRating;
        });

        // Sort products
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'high-rating':
                    return (b.rating || 0) - (a.rating || 0);
                case 'name':
                default:
                    return a.name.localeCompare(b.name);
            }
        });

        return filtered;
    }, [searchTerm, priceRange, sortBy, minRating, selectedCategory]);

    return (
        <div className='py-16 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h1 className='text-4xl font-bold text-gray-900 mb-4'>Office Furniture</h1>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                        Create a productive workspace with our professional office furniture collection
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row gap-8'>
                    <FiltersSidebar
                        categories={allCategories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={e => setSelectedCategory(e.target.value)}
                        priceRange={priceRange}
                        onPriceChange={e => setPriceRange([0, parseInt(e.target.value)])}
                        minRating={minRating}
                        onRatingChange={e => setMinRating(parseFloat(e.target.value))}
                        searchTerm={searchTerm}
                        onSearch={e => setSearchTerm(e.target.value)}
                    />
                    
                    <div className="flex-1">
                        {/* Controls Bar */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-600 font-medium">
                                    {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                                </span>
                                
                                {/* Sort Dropdown */}
                                <div className="flex items-center gap-2">
                                    <SortAsc className="w-4 h-4 text-gray-500" />
                                    <select
                                        value={sortBy}
                                        onChange={e => setSortBy(e.target.value as SortOption)}
                                        className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    >
                                        <option value="name">Name A-Z</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="high-rating">Highest Rated</option>
                                    </select>
                                </div>
                            </div>
                            
                            {/* View Mode Toggle */}
                            <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-gray-300">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-md transition-colors ${
                                        viewMode === 'grid'
                                            ? 'bg-orange-500 text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                    title="Grid View"
                                >
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-colors ${
                                        viewMode === 'list'
                                            ? 'bg-orange-500 text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                    title="List View"
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <ProductGrid
                            products={filteredProducts}
                            viewMode={viewMode}
                            onViewModeChange={setViewMode}
                        />
                    </div>
                </div>
                


            </div>
        </div>      
    );
}
