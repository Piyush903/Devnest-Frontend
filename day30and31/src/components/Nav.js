import React from 'react'
import { Link } from 'react-router-dom'
import { BiCart } from "react-icons/bi";
import { useSelector } from 'react-redux';

const Nav = () => {
  const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <div className="navbar">
            <div className="container">
             <div className="nav_container">
             <div className="nav_left">
                  <Link to ="/"><img src="/images/dressatre Logo.gif" alt="uploading" /></Link>
                </div>
                <div className="nav_right">
                  <Link to="/cart">
                      <div className="basket">
                        <BiCart className="cart-icon"/>
                        <span>{totalQuantities}</span>
                      </div>
                  </Link>
                </div>
             </div>
            </div>
            
        </div>
    )
}

export default Nav
