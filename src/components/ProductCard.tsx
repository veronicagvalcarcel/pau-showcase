import React from 'react';
import './ProductGrid.css';
import type { Product } from './data'; // <-- aquí el cambio

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <a
      href={product.image}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card"
    >
      <div className="product-image">
        <img src={product.image} alt={product.alt} />
      </div>
      <p className="product-title">{product.title}</p>
    </a>
  );
};

export default ProductCard;