import React, { useState } from 'react';

const Card = ({ user, onDelete }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <h3>{user.name}</h3>
      </div>
      <div className="card-body">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
      <div className="card-footer">
        <button className={`button like-button ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
          <i className="fas fa-heart"></i> Like
        </button>
        <button className="button delete-button" onClick={handleDelete}>
          <i className="fas fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
