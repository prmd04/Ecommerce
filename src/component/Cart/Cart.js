import React from 'react';
import CartItem from './CartItem';

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = () => {
  // Calculate the total amount
  const totalAmount = cartElements.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
      {cartElements.map((item, index) => (
        <CartItem
          key={index}
          price={item.price}
          imageUrl={item.imageUrl}
          quantity={item.quantity}
        />
      ))}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>Total Amount = <span style={{color:"red"}}>${totalAmount}</span></span>
      </div>
    </div>
  );
};

export default Cart;
