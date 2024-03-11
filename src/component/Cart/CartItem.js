import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const CartItem = ({ price, imageUrl, quantity}) => {
  //const totalAmount = price * quantity;

  // Call calculateTotal function to update the total amount of all items
  // calculateTotal(totalAmount);

  return (
    <Card style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
      <div style={{ flex: '1' }}>
        <Card.Body style={{ padding: '0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px' }}>
            <Card.Img src={imageUrl} style={{ width: '15%', height: 'auto' }} />
            <div style={{ fontSize: "30px" }}>Price: <span style={{ color: "red" }}>${price}</span></div>
            <div><span style={{ fontSize: '20px' }}>Quantity:</span> <Badge style={{ fontSize: '25px' }}>{quantity}</Badge></div>
            <Button variant="danger">Remove</Button>
          </div>
        </Card.Body>
      </div>
     
    </Card>
  );
};

export default CartItem;
