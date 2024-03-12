import logo from './logo.svg';
import styles from '../src/App.module.css'
import Nav from './Components/Nav';
import Home from './Components/Home';
import data from './Components/Data';
import Cards from './Components/Cards'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route, useNavigate } from "react-router-dom"
import Shopping from './Components/Shopping';
import SearchBar from './Components/SearchBar';
import Cart from './Pages/Cart';
import CartItems from './Components/CartItems';
import Data from './Components/Data';
import { useEffect } from 'react';
function App() {

  const [search, setSearch] = useState("");
  const [filtered, setFilteredUser] = useState("")
  const [searchBar, setSearchBarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
     try{
      const response = await fetch('https://fakestoreapi.com/products?limit=5');
      const data = await response.json();
      setData(data);
  
     } catch(error) {
      console.log(error);
     }
     }
     fetchData();
     }, [])
  



const addItemToCart = (product) => {
  const cart = data.filter(datas => datas.id === product);
  setProducts([...products, product]);
  setQuantity(quantity + 1);
}

const removeItem = (product) => {
setProducts(products.filter(datas => datas.id !== product.id));
setQuantity(quantity - 1);
}

  const toggleSearchbar = () => {
      setIsSearchBarOpen((isSearchBarOpen) => !isSearchBarOpen)
  }

  const closeModal = () => {

  }
  return (
    <div className="App">
    <Nav 
     toggleSearch = {toggleSearchbar}
    />
    {isSearchBarOpen &&
    <SearchBar 
    onClose = {toggleSearchbar}
    data = {Data}
    />
    }
    <Routes>
      <Route exact path = "/" element = {<Home 
      />} />
      <Route path = "/shopping" element = {<Shopping 
      addItem = {addItemToCart}
      data = {data}
      />} />
      <Route exact path = "/cartitem" element = {<CartItems 
       removeItem = {removeItem}
       items = {products}
       quantity = {quantity}
      />}
      />
      <Route exact path = "/cart" element = {<Cart
      items = {products}
      removeItem = {removeItem}
      quantity = {quantity}
      />} />
    </Routes>
    </div>
  );
}

export default App;
