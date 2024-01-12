import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';

const Zad4 = () => {
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        const initialProducts = data.products.slice(0, 30);
        setOriginalProducts(initialProducts);
      } catch (error) {
        console.error('Wystąpił błąd:', error);
      }
    };

    fetchData();
  }, []);

  const handleProductEdit = (editedProduct) => {
    const updatedProducts = originalProducts.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );

    setOriginalProducts(updatedProducts);
  };


  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };


  return (
    <div>
      <button onClick={goToHome}>Home</button>
      <ProductList products={originalProducts} onProductEdit={handleProductEdit} />
    </div>
  );
};

export default Zad4;
