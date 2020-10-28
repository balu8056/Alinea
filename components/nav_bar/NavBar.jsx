import React from "react";
import NavImg from "../images/alilogo.png";
import "./NavBar.css";
import'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/#">
                    <img src={NavImg} className="navImg" alt="Alinea Invest" />
                </a>
            </div>
        </nav>
    );

};

export default NavBar;