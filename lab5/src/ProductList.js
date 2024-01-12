import React from 'react';
import Product from './Product';

const ProductList = ({ products, onProductEdit }) => (
  <div id="products-container">
    {products.map((product) => (
      <Product key={product.id} product={product} onEdit={onProductEdit} />
    ))}
  </div>
);

export default ProductList;
