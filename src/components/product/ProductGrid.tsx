import type { Product } from '@/data/products';
import ProductCard from './ProductCard';
import ProductListItem from './ProductListItem';

interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  showControls?: boolean;
}

export default function ProductGrid({
  products,
  viewMode,
}: ProductGridProps) {
  return (
    <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
      {products.length === 0 ? (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500">No products found.</p>
        </div>
      ) : viewMode === 'grid' ? (
        products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      ) : (
        products.map(product => (
          <ProductListItem
            key={product.id}
            product={product}
          />
        ))
      )}
    </div>
  );
}