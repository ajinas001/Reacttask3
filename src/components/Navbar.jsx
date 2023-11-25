import React, { useEffect } from 'react'
import './nav.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Navbar() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
   
       
      
  return (
    <>
       <nav>
            <div className="navbar-container">
              <div className="navbarss-logo fs-1"data-aos="zoom-in-right">Your Logo</div>
              <ul className="navbar-links"data-aos="zoom-in-left">
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
          </nav>
      
    </>
  )
}

export default Navbar
