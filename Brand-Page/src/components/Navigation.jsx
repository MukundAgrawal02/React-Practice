// import React from 'react'
import logo from "../../public/images/brand_logo.png";
const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <ul>
          <li className="pointer nav-link" href="#">Menu</li>
          <li className="pointer nav-link" href="#">Location</li>
          <li className="pointer nav-link" href="#">About</li>
          <li className="pointer nav-link" href="#">Contact</li>
        </ul>
        <button className="pointer">login</button>
      </nav>
    </div>
  )
}

export default Navigation;
