import React from 'react';
import { LargeHeader, ButtonBar, LargeBody } from "./form.styled";
import logo from "../LandingPage/Images/logo.png";

export default function PasswordReset() {
    return (
        <div className="PasswordReset">
            <LargeHeader>
            <img style={{ width: '6rem', height: '3.5rem', display: 'block', margin: 'auto', paddingTop: '1rem' }} src={logo} alt="" />
            </LargeHeader>
            <LargeBody>
            <h3>We've sent you a verification email.</h3>
            <h5>A verification email has been sent to johndoe@gmail.com {}</h5>
             <ButtonBar>
                 Go home
             </ButtonBar>
            </LargeBody>
        </div>
    )
}
