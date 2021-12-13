import growth from "../Images/HeaderImage.png";
import emblem from "../Images/emblem.png";
import SignUp from '../queryForms/signup/SignUp';
import SignIn from '../queryForms/signin/SignIn';
import ndic from "../Images/ndic_small_logo.png";
import './Header.css';

export default function Header({ open, volunt, popUp, toggle }) {

    return (
        <>
            <SignUp open={open} volunt={volunt} popUp={popUp} />
            <SignIn volunt={volunt} popUp={popUp} toggle={toggle} />
            <div className="containe" >
                <div className="header-subBody">
                    <div className="header-card1">
                        <h1>GROW YOUR WEALTH WITH MKOBO</h1>
                        <p>Earn fantastic return of up to <span>15%</span> per annum with the<span> High Yield Premiun Account</span>
                    (HYPA). HYPA is designed for investors looking to put their money to work in a safe and secure investment.</p>
                        <button style={{ fontSize: "1rem" }} type="button" className="btn btn-outline-none">Start Investing</button>
                        <h4>NDIC Insured and CBN Approved</h4>
                        <div id="approval">
                            <img id="img1" src={ndic} alt="" />
                            <img id="img2" src={emblem} alt="" />
                        </div>
                    </div>

                    <div className="header-card2">
                        <img src={growth} alt="background" />
                    </div>
                </div>
            </div>
        </>
    )
}
