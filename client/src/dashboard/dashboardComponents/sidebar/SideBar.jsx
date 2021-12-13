import "./SideBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { BiCreditCard, BiLineChart, BiPlus } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import { BsFillPersonFill, BsFillCaretDownFill } from "react-icons/bs";

const SideBar = ({ nav, navShow }) => {
    const [dropD1, setDropD1] = useState(false);
    const [dropD2, setDropD2] = useState(false);
    const [dropD3, setDropD3] = useState(false);

    let history = useHistory();

    const home = () => {
        return history.push('/')
    }

    let navbarClass = ["aside"];
    nav ? navbarClass.push("active") : navbarClass.join(" ")

    /// dropdown 1
    const show1 = () => {
        setDropD1(!dropD1)
    };

    let dropDown = ["dropDown"];
    dropD1 ? dropDown.push("invest") : dropDown.join(" ")

    /// dropdown 2
    const show2 = () => {
        setDropD2(!dropD2)
    };

    let dropDown2 = ["dropDown"];
    dropD2 ? dropDown2.push("invest") : dropDown2.join(" ")

    /// dropdown 3
    const show3 = () => {
        setDropD3(!dropD3)
    };

    let dropDown3 = ["dropDown"];
    dropD3 ? dropDown3.push("invest") : dropDown3.join(" ")


    return (
        <div className={navbarClass.join(" ")}>
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="banner" onClick={home} />
                    {/* <h2 >TRADE<span className="primary">PRO</span></h2> */}
                </div>
                <div className="close" id="close-btn" onClick={navShow}>
                    <span className="material-icons-sharp">Close</span>
                </div>
            </div>

            <div className="sidebar">
                <div onClick={show1} className="active" >
                    <span><BiLineChart /></span>
                    <h3>Investments <BsFillCaretDownFill className="drop_icon" /></h3>
                    <ul className={dropDown.join(" ")}>
                        <Link to="/dashboard"> <li onClick={navShow}>invest</li></Link>
                        <Link to="/dashboard">  <li>view investments</li></Link>
                        <Link to="/dashboard">  <li>liquidate investments</li></Link>
                        <Link to="/dashboard">  <li>withdraw investments</li></Link>
                    </ul>

                </div>
                <div className="active" onClick={show3}>
                    <span><BiCreditCard /></span>
                    <h3>Cards & Banks<BsFillCaretDownFill className="drop_icon" /></h3>
                    <ul className={dropDown3.join(" ")} id="bank">
                        <Link to="/dashboard/cardandbank/card"> <li onClick={navShow}>Cards</li></Link>
                        <Link to="/dashboard/cardandbank/bank">  <li>Bank</li></Link>
                        {/* <Link to="/dashboard/portfolio">  <li>liquidate investments</li></Link>
                        <Link to="/dashboard/portfolio">  <li>withdraw investments</li></Link> */}
                    </ul>
                </div>
                <div className="active" onClick={show2}>
                    <span><BsFillPersonFill /></span>
                    <h3>Accounts<BsFillCaretDownFill className="drop_icon" /></h3>
                    <ul className={dropDown2.join(" ")}>
                        <Link to="/dashboard/account/myprofile"> <li onClick={navShow}>Profile</li></Link>
                        <Link to="/dashboard/account/Nextofkin">  <li>Next of kin</li></Link>
                        <Link to="/dashboard/account/activeinvestment">  <li>Active investment</li></Link>
                    </ul>
                </div>
                <div className="active" onClick={navShow}>
                    <span><AiOutlineSetting /></span>
                    <h3>Settings</h3>
                    <ul className='dropDown'>
                        <Link to="/dashboard/settings"> <li onClick={navShow}>invest</li></Link>
                        <Link to="/dashboard/settings">  <li>view investments</li></Link>
                        <Link to="/dashboard/settings">  <li>liquidate investments</li></Link>
                        <Link to="/dashboard/settings">  <li>withdraw investments</li></Link>
                    </ul>
                </div>
                <a href="#" className="active" onClick={navShow}>
                    <span><BiPlus /></span>
                    <h3>New Investment</h3>
                </a>
                <a href="#">
                    <span><AiOutlineLogout /></span>
                    <h3>Logout</h3>
                </a>
            </div>
        </div>
    )
}

export default SideBar;
