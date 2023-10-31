import React from 'react'
import './Nav.css';
import { Outlet, Link } from "react-router-dom";
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import NewProductCard from './NewProductCard';
import './CategoryPage.css'

function CategoryPage() {
  const [prod,setprod] =useState();
  const category = useParams().category;
  var baseURL;
 console.log(category)
  if(category==='beauty products')
  {
    console.log("hey suman")
    baseURL="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  }
  else{
     baseURL=`https://fakestoreapi.com/products/category/${category}`
  }
  
   useEffect(() => {
       axios.get(baseURL).then((response) => {
          setprod(response.data);
          console.log(response.data)
      });
    }, []);

  return (
    <div className="CatergorypageContainer">

   
    <div className="product-main">

    <h2 className="title">Category : {category}</h2>


    <div className="product-grid">

     {category == 'beauty products' ?  
     
     
     
               prod?
               prod.map(item => (
                <Link to={`/product/${item.brand}/${item.id}`}>
                       <NewProductCard 
                       img1={item.api_featured_image}
                       img2={item.api_featured_image}
                       salepercent={15} 
                       brand={item.brand}
                       name = {item.name}
                       price={Math.ceil(item.price)}
                       id={item.id}
                       key={item.id} />
                </Link>
               )) 
               :<h1>...Loading</h1>  


                :
    
            prod?
            prod.map(item => (
             
              <Link to={`/category/${category}/${item.id}`}>
                    <NewProductCard 
                    img1={item.image}
                    img2={item.image}
                    salepercent={15} 
                    brand={item.category}
                    name = {item.title}
                    price={Math.ceil(item.price)}
                    id={item.id}
                    key={item.id} />
              </Link>
            ))
                
            :<h1>...Loading</h1>
    
  }
  

    </div>

  </div>
  </div>
  )
}

export default CategoryPage

