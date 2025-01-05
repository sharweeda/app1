import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar custom-navbar fixed-top navbar-expand-lg  fw-bold ">
  <div className="container">
    <NavLink className="navbar-brand text-white fs-2 " to="">Start Framework </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active  text-uppercase  text-white  " aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-5 text-uppercase text-white " to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase text-white " to="contact">Contact</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
