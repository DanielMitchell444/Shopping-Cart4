import React from "react";
import Cards from "../Components/Cards";
import styles from '../App.module.css'
import CartItems from "../Components/CartItems";
function Cart({items, removeItem, quantity}){
 return(
 <div className= {styles.cartItems}>
    <h2 class = {styles.cartHeader}>My Cart</h2>
 <div className= {styles.cartContent}>
  {items.map(item => {
  return <CartItems
   key = {item.name}
   title = {item.title}
   price = {item.price}
   value = {item.value}
   image = {item.image}
   removeItem={() => removeItem(item)}
  />
  })}
 </div>
  <h1>total: ${items.reduce((accumulator, current) => accumulator + quantity * current.price, 0 )}</h1>
 </div>
 )
}

export default Cart;