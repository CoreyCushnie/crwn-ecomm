import React from 'react';
import './cart-item.style.scss';

const CartItem = ({ name, imageUrl, price, quantity }) => (
  <div className="cart-container">
    <div className="image-container">
      <img className="cart-image" src={imageUrl} alt="img" />
    </div>
    <div className="description">
      <span className="title"> {name} </span>
      <span className="subtitle">
        {' '}
        {quantity} x ${price}{' '}
      </span>
    </div>
  </div>
);

export default CartItem;
