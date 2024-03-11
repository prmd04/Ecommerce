import React from 'react'
import ProductCard from './ProductCard'

const Card = ({data}) => {
  return (
    <div style={{display:'flex', justifyContent:"space-around"}}>
      {data.map((item, index) => (
        <ProductCard key={index} title={item.title} price={item.price} imageUrl={item.imageUrl} />
      ))}
    </div>
  )
}

export default Card