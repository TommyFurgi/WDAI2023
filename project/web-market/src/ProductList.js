import React from 'react';
import Product from './Product';
import './Product.css'

const ProductList = ({ products, onProductEdit, username, role, handleProductDelete, handleAddToCart }) => (
  <div className='product-list'>
    {products.map((product) => (
      <Product key={product.id} product={product} onEdit={onProductEdit} username={username} role={role} handleDeleteClick={handleProductDelete} handleAddToCartClick={handleAddToCart} />

    ))}
  </div>
);

export default ProductList;
