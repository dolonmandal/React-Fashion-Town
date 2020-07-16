import React from 'react';
import {  Link } from 'react-router-dom';

 const  Navbar = ()=>{
     return(
    
        <div className="Navbar">
        
        <nav >
          <ul className="nav-links">
        <p className="store">THE FASHION TOWN</p>
        <Link to="/Home">
        <li>HOME</li></Link>
        <Link to="/Cart">
        <li>CART</li></Link>
    
          </ul>
        </nav>
        
          
        </div>
        
     )
}
export default  Navbar;