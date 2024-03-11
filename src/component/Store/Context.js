import React, { useReducer } from 'react'
import CartReducer from './CartReducer'

const initialState = {
  items:[],
  totalAmount:0
}

export const ctx = React.createContext({
  item:[],
  totalAmount:0,
  addItem:()=>{},
})



const Context = ({children}) => {

  const[state,dispatch] = useReducer(CartReducer,initialState);

  return (
    <ctx.Provider value={{state,dispatch}} >
      {children}
    </ctx.Provider>

  )
}

export default Context