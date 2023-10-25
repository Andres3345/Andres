import React from 'react'
import logo2 from "../img/logo2.png";
import "../bottom.css";


const Header = () => {
  return (
    <div>
    <div className='header-div'>
    <div className="container-xl mb-5 mt-2 text-bg-danger rounded p-3">
       <nav class="navbar bg-body-tertiary d-flex p-2 rounded">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={logo2} alt="Logo" width="115" height="94" class=" ms-2"/>
            </a>
        </div>
        </nav>
    </div> 
    </div>
    </div>
  )
}

export default Header