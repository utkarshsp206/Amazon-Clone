import React from 'react'
import "./buynow.css"
import { Divider } from '@mui/material'
import Option from "./Option"
import Subtotal from './Subtotal'
import Right from './Right'

function Buynow() {
  return (
    <div className="buynow_section">
        <div className="buynow_container">
            <div className="left_buy">
                <h1>Shopping Cart</h1>
                <p>Select all Items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>

                <div className="item_containert">
                      <img src='https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70' alt="" />
                      <div className="item_details">
                        <h3>Molife Sense 500 Smartwatch (Black Strap, Freesize)</h3>
                        <h3>Smart Watches</h3>
                        <h3 className='differentprice'> ₹ 4049.00</h3>
                        <p className='unusuall'>Usually dispatched in 8 days.</p>
                        <p>Eligible for free Delivery</p>
              <img src="https://d2gtv76wnx4goc.cloudfront.net/uploads/amazonsafety/amazon-fulfillment-logo-color.png" alt="" />
                        <Option/>
                      </div>
                      <h3 className='item_price'>₹4049.00</h3>
                </div>
                <Divider/>
                <Subtotal/>
            </div>
            <Right/>
        </div>
    </div>
  )
}

export default Buynow