import "./Navbarr.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
import Logo from '../Images/logo.png';
import styled from 'styled-components';


const Nav = styled.nav`
@media (max-width: 768px) {
position: absolute;
display: block;
top: 100%;
width: 100%;
height: 100vh;
background: #fff;
right: ${(props) => props.nav ? "0" : "-120%"};
transition: 0.4s;
}
`

const Navbar = ({ popUp }) => {

  const [nav, setNav] = useState(false);

  // responsive navbar
  const navShow = () => {
    setNav(!nav)
  };

  const showForm = () => {
    if (nav) {
      return navShow() & popUp()

    } else {
      return popUp()
    }
  }

  return (
    <div className="header">

      <Link to="/" className="logo">
        <img src={Logo} alt="banner" />
      </Link>

      <Nav nav={nav} >
        <a href="#about" onClick={navShow}>about</a>
        <a href="#menu" onClick={navShow}>FAQs</a>
        <a href="#products" onClick={navShow}>blogs</a>
      </Nav>

      <div className="icons">
        <div className="fas fa-shopping-cart" id="cart-btn" onClick={showForm}><BsFillPersonFill /></div>
        <div id="menu-btn" onClick={navShow}><AiFillAppstore /></div>
      </div>

    </div>
  )
}

export default Navbar;