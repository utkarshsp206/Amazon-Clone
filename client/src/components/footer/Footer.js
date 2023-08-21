import React from 'react'
import "./footr.css"
import logo from "../footer/amazon_PNG25.png"

function Footer() {

    const year = new Date().getFullYear();
    console.log(year);

  return (
    
    <footer>
        <div className="footer_container">
            <div className="footr_details_one">
                <h3>Get to know Us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cares</p>
            </div>
            <div className="footr_details_one ">
                <h3>Connect With Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="footr_details_one forres">
                <h3>Make Money with Us</h3>
                  <p>Facebook</p>
                  <p>Twitter</p>
                  <p>Instagram</p>
            </div>
              <div className="footr_details_one forres">
                  <h3>Make Money with Us</h3>
                  <p>Facebook</p>
                  <p>Twitter</p>
                  <p>Instagram</p>
              </div>
        </div>
          <div className="lastdetails">
              <img src={logo} alt="logo" />
              <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
          </div>
    </footer>
  )
}

export default Footer