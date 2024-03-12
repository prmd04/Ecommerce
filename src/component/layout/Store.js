import React from 'react'
import Card from './Card';

const Store = ({data}) => {
  console.log(data);
  return (
    <Card data={data}></Card>
  )
}

export default Store