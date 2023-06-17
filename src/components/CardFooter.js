import React from 'react';
import './CardFooter.css'
const CardFooter = () => {
  return (
    <div className="card-footer">
      <div className="button like-button">
        <i className="fas fa-heart">🤍</i>
      </div>
      <div className="button edit-button">
        <i className="fas fa-edit"></i>✏️
      </div>
      <div className="button delete-button">
        <i className="fas fa-trash">🗑️</i>
      </div>
    </div>
  );
};

export default CardFooter;
