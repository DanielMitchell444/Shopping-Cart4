import React, { useState } from "react";
import styles from '../App.module.css'
import logo from '../Images/dogecoin-doge-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Nav = ({toggleSearch}) => {
 const [click, setClick] = useState(false);

 const setOpen = () => {
  setClick(true)
 }

 return(
    <nav className= {styles.nav}>
            <div class= {styles.logo}>
              <Link to = "/">
              <img src = {logo} />
            </Link>   
            </div>
            <div class =  {styles.toggleMenu}>
              <i class = "fa fa-bars" id = "bars"></i>
            </div>
            
            <ul className= {styles.menu}>
              <Link to = "/shopping" className= {styles.text}>Shopping</Link>
              <FontAwesomeIcon 
              icon={faMagnifyingGlass} 
              className= {styles.magnifyingGlass} 
              onClick={toggleSearch}
              />
              <Link to = "/cart"> 
              <FontAwesomeIcon icon = {faCartShopping} className= {styles.carts} />
              </Link>
            </ul>
          </nav>
 )
}

export default Nav;