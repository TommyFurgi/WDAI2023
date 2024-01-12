import React, { useState } from 'react';

const Product = ({ product, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(product.title);
    const [editedDescription, setEditedDescription] = useState(product.description);
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      const saveEditedProduct = () => {
        const updatedProduct = {
          ...product,
          title: editedTitle,
          description: editedDescription,
        };
  
        setIsEditing(false);
  
        if (onEdit && typeof onEdit === 'function') {
          onEdit(updatedProduct);
        }
      };
  
      saveEditedProduct();
    };
  
    const handleCancelClick = () => {
      setEditedTitle(product.title);
      setEditedDescription(product.description);
      setIsEditing(false);
    };

    return (
        <div className="product" style={{ border: '1px solid #000', padding: '10px', margin: '10px', display: 'flex' }}>
        <img src={product.thumbnail} alt={product.title} style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
        <div>
            {isEditing ? (
            <>
                <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                style={{ height: '80px', width: '150px', margin: '10px'}}
                />
                <button onClick={handleSaveClick}>Zapisz</button>
                <button onClick={handleCancelClick}>Anuluj</button>
            </>
            ) : (
            <>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <button onClick={handleEditClick}>Edytuj</button>
            </>
            ) }
        </div>
        </div>
    );
};

export default Product;
