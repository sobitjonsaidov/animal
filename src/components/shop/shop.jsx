import React from 'react'
import Button from '../button/button'
import { totalPrice } from '../total/total-prise'

const Shop = ({ cartItems }) => {
  return (
    <div>
      <p>Umumiy narx: {totalPrice(cartItems)} So'm</p>
      <Button title={`${cartItems.length === 0 ? "Buyurtma" : "To'lov"}`}
        type={'checkout'}
        disable={cartItems.length === 0 ? true : false}
      />
    </div>
  )
}

export default Shop