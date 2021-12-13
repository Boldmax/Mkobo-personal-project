import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
/* import DropDown from '../../dropDown/DropDown'; */
/* import SearchBar from '../../searchBar/SearchBar'; */
/* import { useSelector } from "react-redux"; */
import Logo from '../images/logo.png';

const Navbar = ({ popUp }) => {

    /*  const [toggle, setToggle] = useState(false);
     const [show, setShow] = useState(false); */
    const [nav, setNav] = useState(false);

    // responsive navbar
    const navShow = () => {
        setNav(!nav)
    };

    let navbarClass = ["navbar"];
    nav ? navbarClass.push("active") : navbarClass.join(" ")


    /*    const click = () => {
           setToggle(!toggle)
       };
   
       const open = () => {
           setShow(!show)
       }; */
    const showForm = () => {
        if (nav) {
            return navShow() & popUp()

        } else {
            return popUp()
        }
    }

    return (
        <div className="header" id="header">
            <Link to="/" className="logo">
                {/* <span className="logo-text">trendy</span> */}
                {/* <img src={Logo} alt="Logo" /> */}
                <img src={Logo} alt="banner" />
                <h2 >TRADE<span className="primary">PRO</span></h2>
            </Link>

            <nav className={navbarClass.join(" ")}>
                <a href="#home" onClick={navShow}>home</a>
                <a href="#about" onClick={navShow}>about</a>
                <a href="#menu" onClick={navShow}>menu</a>
                <a href="#products" onClick={navShow}>products</a>
                <a href="#review" onClick={navShow}>dashboard</a>
                <a href="#contact" onClick={navShow}>contact</a>
            </nav>

            <div className="icons">
                <div className="fas fa-shopping-cart" id="cart-btn" onClick={showForm}><BsFillPersonFill /></div>
                <div id="menu-btn" onClick={navShow}><AiFillAppstore /></div>
            </div>
        </div>
    )
}

export default Navbar;
