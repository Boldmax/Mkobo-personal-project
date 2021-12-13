import React from 'react';
import { Header2, Body, Footer, ButtonBar } from "./form.styled";
import logo from "../LandingPage/Images/logo.png";


export default function EmailConfirm({show, close}) {
    return (
        <div className="EmailConfirm"
        style={{
            opacity: show ? '1' : '0'
        }}
        >
            <Header2>
                <img style={{ width: '6rem', height: '4.5rem', display: 'block', margin: 'auto', paddingTop: '1rem' }} src={logo} alt="" />
            </Header2>
            <Body>
                <h5>Verify Your Email Address</h5>
                <p>
                    Hi { }, you're almost ready to begin investing. Click below to verify your email address to begin investing.
             </p>
                <ButtonBar onClick={close}>
                    <span>Verify email address</span>
                </ButtonBar>
            </Body>
            <Footer>
                <h6>
                    Mkobo Microfinance Bank Ltd. 13 Hughes Avenue, Alagomeji, Yaba, Lagos.<br />
                    2021 Mkobo Microfinance Bank. All right reserved
                </h6>
            </Footer>
        </div>
    )
}
