import React from 'react'
import "../newnavbaar/newnav.css";
import nav from '../newnavbaar/nav.jpg'


const Newnav = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p><i className="fas fa-shopping-cart"></i> All</p>
          <p>Mobiles</p>
          <p>Best Sellers</p>
          <p>Fashion</p>
          <p>Customer Service</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Today's Deals</p>
          <p>Amazon Pay</p>
        </div>
        <div className="right_data">
          <img src={nav} alt="navdata" />
        </div>
      </div>
    </div>
  )
}

export default Newnav