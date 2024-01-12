import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';

const Zad2 = () => {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        const initialProducts = data.products.slice(0, 30);
        setOriginalProducts(initialProducts);
        setFilteredProducts([...initialProducts])
        setSortedProducts([...initialProducts]);

        const categories = [...new Set(initialProducts.map(product => product.category))];
        setUniqueCategories(categories);
      } catch (error) {
        console.error('Wystąpił błąd:', error);
      }
    };

    fetchData();
  }, []);


  const resetFilters = () => {
    setFilteredProducts([...originalProducts]);
    setSortedProducts([...originalProducts]);
    setSearchInput('');
    setCategoryFilter('');
  };

  
  const filter = (type) => {
    let filtered;
    if (type === 'Apple') {
      filtered = originalProducts.filter((product) => product.brand === 'Apple');
    } else if (type === 'smartphones') {
      filtered = originalProducts.filter((product) => product.category === 'smartphones');
    }
    setFilteredProducts(filtered);
    setSortedProducts(filtered);
  };

  const filterByCategory = (categoryFilterValue) => {
    setCategoryFilter(categoryFilterValue);
    const filtered = originalProducts.filter(
      (product) =>
        (categoryFilterValue === '' || product.category.toLowerCase() === categoryFilterValue.toLowerCase()) &&
        product.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredProducts(filtered);
    setSortedProducts(filtered);
  };

  const sortByName = (order) => {
    let sorted = [...filteredProducts];

    if (order === 'asc') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'desc') {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }

    setSortedProducts(sorted);
  };

  const handleProductEdit = (editedProduct) => {
    const updatedProducts = originalProducts.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
  
    const updatedFilteredProducts = filteredProducts.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
  
    const updatedSortedProducts = sortedProducts.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
  
    setOriginalProducts(updatedProducts);
    setFilteredProducts(updatedFilteredProducts);
    setSortedProducts(updatedSortedProducts);
  };


  const handleSearch = (input) => {
    const filtered = originalProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(input.toLowerCase()) &&
        (categoryFilter === '' || product.category.toLowerCase() === categoryFilter.toLowerCase())
    );
  
    setFilteredProducts(filtered);
    setSortedProducts(filtered);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    handleSearch(input);
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };
  
  return (
    <div>
      <button onClick={goToHome}>Home</button>

      <input
        type="text"
        id="searchInput"
        value={searchInput}
        onChange={handleChange}
        placeholder="Szukaj"
      />


      <select id="categoryFilter" value={categoryFilter} onChange={(e) => filterByCategory(e.target.value)}>
        <option value="">Wybierz kategorię</option>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button onClick={() => filter('Apple')}>Filtruj Apple</button>
      <button onClick={() => filter('smartphones')}>Filtruj Smartfony</button>
      <button onClick={() => sortByName('asc')}>Sortuj nazwa Alfabetycznie</button>
      <button onClick={() => sortByName('desc')}>Sortuj nazwa Odwrotnie</button>
      <button onClick={() => sortByName('')}>Usun sortowanie</button>
      <button onClick={resetFilters}>Usun filtr i sortowanie</button>


      {sortedProducts.length > 0 ? (
        <ProductList products={sortedProducts} onProductEdit={handleProductEdit} />
      ) : (
        <p>No products to display</p>
      )}    
    </div>
  );
};

export default Zad2;
