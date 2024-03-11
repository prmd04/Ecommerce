import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ctx } from '../Store/Context';

const ProductCard = ({ title, price, imageUrl }) => {
  const context = useContext(ctx);

  const addToCardButton = () => {
    const newItem = {
      title: title,
      price: price,
      imageUrl: imageUrl,
      quantity: 1,
    };
    context.dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  return (
    <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '10px' }}>
      <Card.Title>{title}</Card.Title>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Text>Price: ${price}</Card.Text>
      </Card.Body>
      <Button variant="primary" onClick={addToCardButton}>Add to Cart</Button>{' '}
    </Card>
  );
};

export default ProductCard;
