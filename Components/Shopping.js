import React from "react";
import Data from "./Data";
import Cards from "./Cards";
import styles from '../App.module.css'
const Shopping = ({addItem, data}) => {
 return(
  <div className= {styles.cardContainer}>
   <h1></h1>
  {data.map(datas => {
  return <Cards 
  key = {datas.id}
  title = {datas.title}
  price = {datas.price}
  image = {datas.image}
  value = {data.value}
  onClick = {() => addItem(datas)}
  />

  })}

  </div>
 )
}

export default Shopping