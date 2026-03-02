// src/components/ProductGrid.tsx
import React from 'react';
import ProductCard from './ProductCard';
import Filter from './Filter'; // ✅ import default
import { products } from './data';

interface ProductGridProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const ProductGrid: React.FC<ProductGridProps> = ({ selected, setSelected }) => {
  const filteredProducts =
    selected === 'todo'
      ? products
      : products.filter(p => p.category === selected);

  return (
    <section className="product-grid-section">
      <Filter selected={selected} setSelected={setSelected} />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid; // ✅ export default