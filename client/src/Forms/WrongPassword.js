import React from 'react';
import { HeaderSmall, BodySmall, FooterSmall, ButtonBar } from "./form.styled";
import logo from "../LandingPage/Images/logo.png";

export default function WrongPassword({show, close}) {
    return (
        <div className="WrongPassword" 
        style={{
            opacity: show ? '1' : '0'
        }}
        >
            <HeaderSmall>
                <img style={{ width: '6rem', height: '4.5rem', display: 'block', margin: 'auto', paddingTop: '2rem' }} src={logo} alt='' />
            </HeaderSmall>
            <BodySmall>
                <h5>Hi,</h5>
                <p id="ptop">
                    Seems like you forgot the password to your Mkobo account. If this is true, click below to reset your password.
                </p>
                <ButtonBar onClick={close}>
                    <span id="reset">Reset password</span>
                </ButtonBar>
                <p id="pbottom">
                    If you did not forget your password, ignore this mail: your password will not change.
                </p>
            </BodySmall>
            <FooterSmall>
                <h6>
                    Mkobo Microfinance Bank Ltd. 13 Hughes Avenue, Alagomeji, Yaba, Lagos.<br />
                    2021 Mkobo Microfinance Bank. All right reserved
                </h6>
            </FooterSmall>
        </div>
    )
}
