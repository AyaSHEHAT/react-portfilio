import React from 'react'
import logo from '../images/logo-blue.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#"><img className='logo' src={logo} alt='logo....'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={ { color:"#fff" } } />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about me</a>
        </li>
       
        <li className="nav-item">
        <a className="nav-link" href="#">services</a>  

        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">how it work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contacts</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default NavBar