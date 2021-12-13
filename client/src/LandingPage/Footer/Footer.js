import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'
import logo from "../Images/WhiteLogo.png";
/* import "bootstrap-icons/font/bootstrap-icons.css"; */
import './Footer.styled.css';
/* import { Link } from "react-router-dom"; */

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="Pcontainer">
                <div className="main-box">

                    <div className="box1">
                        <div className="sub-box1">
                            <a href="#">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className="emptydiv"></div>
                        <div className="sub-box2">
                            <a href="http://www.instagram.com" /* className="bi bi-instagram" */ ><AiFillInstagram /></a>
                            <a href="http://www.facebook.com" /* className="bi bi-facebook" */ ><AiFillFacebook /></a>
                            <a href="http://www.twitter.com" /* className="bi bi-twitter" */ ><AiFillTwitterSquare /></a>
                        </div>
                    </div>

                    <div className=" box2">
                        <a style={{ marginLeft: "0", paddingLeft: "0" }} href="#">Privacy policy</a>
                        <a style={{ marginLeft: "2rem", paddingLeft: "0" }} href="#">Terms and Conditions</a>
                        <a style={{ marginLeft: "2rem", paddingLeft: "0" }} href="#">Community</a>
                        <a style={{ marginLeft: "2rem", paddingLeft: "0" }} href="#">Blog</a>
                        <a style={{ marginLeft: "2rem", paddingLeft: "0" }} href="#">Careers</a>
                    </div>

                    <div className=" box3">
                        <p>MKOBO Microfinance Bank [No. RC1234231] is authorised and regulated by Central Bank Of Nigeria (CBN) under registration number 51188.
                        All deposits are insured by Nigerian Deposit Insurance Cooperation (NDIC). "Mkobo", "Mkobobank", "Payflow", "Mkolo" are trademark of
                        Mkobo Microfinance Bank Ltd 13 Hughes Avenue, Alagomeji, Yaba Lagos.
                        </p>
                        <p>By using this website, you understand that the services and products offered on this website ("Services and Products") are for information
                        purposes only. No persons gaining access to this website in any jurisdictions may treat any materials or information provided on this
                        website as constituting an invitation to them to subscribe for the services, nor should they in any event use such Services, unless in
                        the relevant jurisdiction, the Services could lawfully be made to them. Accordingly, nothing contained in this website shall constitute
                        an offer or solicitation by anyone in any jurisdiction in which such offer or solicitation is not lawful. It is the responsibility of any
                        person to inform themselves and to observe all applicable laws and regulations of any relevant jurisdiction before they subscribe for the
                               services. MKOBO shall have the final determination of eligibility to subscribe for any of the Services.</p>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2021. Mkobo Microfinance Bank. All right Reserved</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
