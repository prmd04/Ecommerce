import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ title, price, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '10px' }}>
      <Card.Title>{title}</Card.Title>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Text>Price: ${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
