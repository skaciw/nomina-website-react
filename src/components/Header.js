import "../css/Header.css"
import React from "react";
import {Link} from "react-router-dom";
const Header=()=>{

    const handleClick = (x) =>{
        const nav = document.querySelectorAll('.nav-link');
        for (let i = 0 ; i < nav.length; i++){
            nav[i].classList.remove('active');
        }   
        x.currentTarget.classList.add('active');
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg custom-navbar">
        <a className="navbar-brand" href="/#">
            <div>
                <img src="images/logo.png" alt="Nomina" />
            </div>
        </a>
        <button className=" custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navmenu">
            <span className="custom-toggler navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse " id="navmenu" >
            <ul className="navbar-nav ml-auto " id="top-menu">
                <li className="nav-item">
                    <Link onClick={handleClick} to='/' exact className="nav-link  active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={handleClick} to='/aboutus' className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={handleClick} to="/contactus" className="nav-link">Contact Us</Link>
                </li>
            </ul>
        </div>
    </nav>

    );
}
// Header.PropTypes = {};
export default Header