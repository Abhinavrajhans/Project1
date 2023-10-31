import React from 'react'
import "./Nav.css"
import img1 from "../images/electronics-banner-1.jpg";
import img2 from "../images/mens-banner.jpg";
import img3 from "../images/womens-banner.jpg";
import img4 from "../images/electronics-banner-2.jpg"
import { Outlet, Link } from "react-router-dom";
import { useState ,useEffect } from 'react';
import Cart from './Cart';
import axios from 'axios';
function Nav({setopenCart,openCart}) {


  useEffect(() => {
    axios.get("http://localhost:8000/product").then((response) => {
      setprodlen(response.data.length);
  });
  }, []);
  
  const [prodlen,setprodlen]=useState(0);
  return (
    <div>
        
        <div className="header-main">

<div className="container">

  <Link className="flex" to="/"><h1>Multicart</h1></Link>

  <div className="header-search-container">

    <input 
    type="search" 
    name="search" 
    className="search-field" 
    placeholder="Enter your product name..."
    />

    <button className="search-btn">
      <ion-icon name="search-outline"></ion-icon>
    </button>

  </div>

  <div className="header-user-actions">

    <button className="action-btn">
      <ion-icon name="person-outline"></ion-icon>
    </button>



    <button className="action-btn" onClick={()=>setopenCart(!openCart)}>
      <ion-icon name="bag-handle-outline"></ion-icon>
      <span className="count">{prodlen}</span>
    </button>
    

  </div>

</div>

</div>
<nav className="desktop-navigation-menu">

<div className="container">

  <ul className="desktop-menu-category-list">

    <li className="menu-category">
      <Link className="menu-title" to="/">Home</Link>
    </li>

    <li className="menu-category">
      <Link className="menu-title" to="/">Categories</Link>

      <div className="dropdown-panel">

        <ul className="dropdown-panel-list">

          <li className="menu-title">
           
            <Link to="/category/electronics">Electronics</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Desktop</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Laptop</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Camera</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Tablet</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Headphone</Link>
          </li>

          <li className="panel-list-item">
             <Link to="/">
              <img src={img1} alt="headphone collection" width="250"
                height="119"/>
            </Link>
          </li>

        </ul>

        <ul className="dropdown-panel-list">

          <li className="menu-title">
            <Link to="/">Grocery</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Spices</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Vegetables</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Fruits</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Pulses</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Wheat/Rice</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">
              <img src={img2} alt="men's fashion" width="250" height="119"/>
            </Link>
          </li>

        </ul>

        <ul className="dropdown-panel-list">

          <li className="menu-title">
            <Link  to="/category/women's clothing">Fashion</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Formal</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Casual</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Jeans</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Hoddies</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Shoes</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">
              <img src={img3} alt="women's fashion" width="250" height="119"/>
            </Link>
          </li>

        </ul>

        <ul className="dropdown-panel-list">

          <li className="menu-title">
          <Link to="/category/electronics">Electronics</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Smart Watch</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Smart TV</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Keyboard</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Mouse</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">Microphone</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/">
              <img src={img4} alt="mouse collection" width="250" height="119"/>
            </Link>
          </li>

        </ul>

      </div>
    </li>

    <li className="menu-category">
      <Link to="/" className="menu-title">Grocery</Link>

      <ul className="dropdown-list">

        <li className="dropdown-item">
          <Link to="/">Vegetables</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/">Fruits</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/">Pulses</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/">Grains</Link>
        </li>

      </ul>
    </li>

    <li className="menu-category">
    <Link to="/category/electronics" className="menu-title">Electronics</Link>

      <ul className="dropdown-list">

        <li className="dropdown-item">
          <Link to="/">Smart Watch</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/">Smart TV</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/">Tablets</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/">Headphones</Link>
        </li>

      </ul>
    </li>

    <li className="menu-category">
    <Link to="/category/men's clothing" className="menu-title">Fashion</Link>

      <ul className="dropdown-list">

        <li className="dropdown-item">
          <Link to="/">Formal</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/">Casual</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/">Jeans</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/">Hoddies</Link>
        </li>

      </ul>
    </li>

   
  </ul>

</div>

</nav>

{openCart && <Cart openCart={openCart} setprodlen={setprodlen}  setopenCart={setopenCart}/>}
        
    </div>
  )
}

export default Nav