import React, { useState } from "react";
import styles from '../App.module.css'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({onClose, data, setFilteredData}) => {
    
    const [filteredUser, setFilteredUser] = useState("");
    const [setQuery, setSearchQuery] = useState("")
    
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
      }
    
      const handleSearchSubmit = (e) => {
        e.preventDefault();
        const filterData = data.filter((doge => {
          return doge.name.toLowerCase().includes(setQuery.toLowerCase())
        }))
        setFilteredData(filterData)
      }
 return(
 <form
 className= {styles.searchBarContainer}
 onSubmit={handleSearchSubmit}
 >
 <FontAwesomeIcon icon = {faXmark} 
 className= {styles.x}
 onClick={onClose}
 
 />
 <div className="search-bar">
 <input className= {styles.input} 
 type = "text" 
 placeholder="Search Product"
 onChange={handleSearchInputChange}
 
 />
 </div>

 </form>
 )
}

export default SearchBar;