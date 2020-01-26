import React from "react";
import { connect } from "react-redux";
import { clearCartItem } from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearCartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">{quantity}</span>
      <div className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearCartItem: item => dispatch(clearCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
