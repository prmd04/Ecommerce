import React from 'react'
import ProductCard from './ProductCard'

const Card = ({data}) => {
  return (
    <>
      {data.map((item, index) => (
        <ProductCard key={index} title={item.title} price={item.price} imageUrl={item.imageUrl} />
      ))}
    </>
  )
}

export default Card