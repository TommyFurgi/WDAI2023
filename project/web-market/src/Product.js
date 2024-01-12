import React, { useState } from 'react';
import './Product.css';

const Product = ({ product, onEdit, username, role, handleDeleteClick, handleAddToCartClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(product.title);
  const [editedDescription, setEditedDescription] = useState(product.description);
  const [editedPrice, setEditedPrice] = useState(product.price);
  const [editedCategory, setEditedCategory] = useState(product.category);
  const [error, setError] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const validateFields = () => {
    if (!editedTitle || !editedDescription || !editedPrice || !editedCategory) {
      setError('Wszystkie pola muszą być wypełnione');
      return false;
    }
    if (editedPrice <= 0) {
      setError('Cene musi być większa od 0');
      return false;
    }
    setError('');
    return true;
  };

  const handleSaveClick = () => {
    if (validateFields()) {
      const updatedProduct = {
        ...product,
        title: editedTitle,
        description: editedDescription,
        price: editedPrice,
        category: editedCategory,
      };

      setIsEditing(false);

      if (onEdit && typeof onEdit === 'function') {
        onEdit(updatedProduct);
        setEditedTitle(updatedProduct.title);
        setEditedDescription(updatedProduct.description);
        setEditedPrice(updatedProduct.price);
        setEditedCategory(updatedProduct.category);
      }
    }
  };

  const handleCancelClick = () => {
    setEditedTitle(product.title);
    setEditedDescription(product.description);
    setEditedPrice(product.price);
    setEditedCategory(product.category);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (handleDeleteClick && typeof handleDeleteClick === 'function') {
      handleDeleteClick(product.id);
    }
  };

  const handleAddToCart = () => {
    if (handleAddToCartClick && typeof handleAddToCartClick === 'function') {
      handleAddToCartClick(product.id);
    }
  }
  

  return (
    <div className="product-container">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <div>
        {isEditing ? (
          <>
            <div className="form">
              <div className="form-desc">
                <label>Title:</label>
                <br />
                <br />
                <br />
                <label>Owner:</label>
                <br />
                <br />
                <br />
                <label>Description:</label>
                <br />
                <br />
                <br />
                <label>Category:</label>
                <br />
                <br />
                <br />
                <label>Price:</label>
                <br />
              </div>
              <div>
                <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                <p>{product.owner}</p>
                <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                <br />
                <select name="category" value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)}>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Food">Food</option>
                  <option value="Other">Other</option>
                </select>
                <br />
                <input type="number" value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} />
              </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <h3>{product.title}</h3>
            <p>Owner: {product.owner}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price} zł</p>
            {(role === 'admin' || username === product.owner) ? (
              <>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
              </>
            ) : username !== null ? (
              <>
                <button onClick={handleAddToCart}>Add to cart</button>

              </>
            ):(<></>)}
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
