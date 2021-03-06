import React from 'react';
import './cart.style.scss';

import { createStructuredSelector } from 'reselect';
import { addCartItem } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import { cartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as CartLogo } from '../../assets/bag.svg';

const ShoppingCart = ({ cartHidden, itemQuantity }) => (
  <div className="cart" onClick={cartHidden}>
    <CartLogo className="shopping-icon" />
    <span className="item-count">{itemQuantity}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  cartHidden: () => dispatch(cartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemQuantity: addCartItem
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
