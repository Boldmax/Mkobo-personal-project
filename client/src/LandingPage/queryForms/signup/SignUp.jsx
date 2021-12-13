import "./SignUp.css";
import logo from "../../Images/logo.png";
import { FaTimes } from "react-icons/fa";
import styled from 'styled-components';

// Styled Component
const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  background: var(--primary-ligtGrey);
  border-radius: 20px 20px 20px 1px;
  left: ${(props) => props.open ? "-100%" : "30%"};
  top: 18%;
  width: 35%;
  z-index: 100;
  transition: 0.4s;

  @media (max-width: 800px) {
    width: 50%;
    left: ${(props) => props.open ? "-100%" : "25%"};
}

  @media (max-width: 425px) {
    left: ${(props) => props.open ? "-100%" : "10%"};
    width: 80%;
    transition: 0.5s;
}
`

const Title = styled.h3`
  display: block;
  width: 95%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.4rem;
  text-transform: capitalize;
`

const Volunteer = ({ volunt, open, popUp }) => {

    const signin = () => {
        return popUp() & volunt()
    }


    return (
        <Section open={open} /* className={navbarClas.join(" ")} */>
            <div className="topbar">
                <img src={logo} alt="Logo" />
                <FaTimes className="times" onClick={volunt} />
            </div>

            <div className="signUp">
                <Title>Sign up</Title>
                <form>
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email Address" />
                    <input type="string" placeholder="Password" />
                    <input type="string" placeholder="Comfirm Password" />

                    <button onClick={signin}>Sign up</button>
                </form>
            </div>

            <div className="botomBar" onClick={signin}>Already have an account? <span> Login</span></div>
        </Section>
    )
}

export default Volunteer;