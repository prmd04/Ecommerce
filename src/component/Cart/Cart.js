import React, { useContext } from 'react';
import CartItem from './CartItem';
import { ctx } from '../Store/Context';

const Cart = () => {
  const { state } = useContext(ctx);
  const { items } = state;

  // Calculate the total amount
  const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
      {items.map((item, index) => (
        <CartItem
          key={index}
          price={item.price}
          imageUrl={item.imageUrl}
          quantity={item.quantity}
        />
      ))}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>
          Total Amount = <span style={{ color: "red" }}>${totalAmount}</span>
        </span>
      </div>
    </div>
  );
};

export default Cart;
