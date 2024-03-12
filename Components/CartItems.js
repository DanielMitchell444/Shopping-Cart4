import React from "react";
import styles from '../App.module.css'
const CartItems = ({key, name, price, title, image, removeItem}) => {
 return(
 <div className= {styles.content}>
  <div className= {styles.card}>
    <img src = {image} className= {styles.image} />
     <h2>{title}</h2>
     <p>{price}</p>
     <p>{key}</p>
     <button
     onClick={removeItem}
     data-value = {key}
     >Remove Item</button>
  </div>
 </div>
 )
}

export default CartItems
