import "./SignIn.css";
import logo from "../../Images/logo.png";
import { FaTimes } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';


const Section = styled.section`

  display: flex;
  flex-direction: column;
  position: fixed;
  background: var(--primary-ligtGrey);
  border-radius: 20px 20px 20px 1px;
  left: 30%;
  top: ${(props) => props.toggle ? "-100%" : "15%"};
  width: 28%;
  z-index: 100;
  transition: 0.4s;

  @media (max-width: 800px) {
    width: 50%;
    left: 25%;
}

@media (max-width: 768px) {
    /* left: 10%; */
    /* top: 15%; */
    transition: 0.5s;
} 

@media (max-width: 425px) {
    left: 10%;
    /* top: 15%; */
    width: 80%;
    transition: 0.5s;
}
`

const Donation = ({ toggle, popUp, volunt }) => {
    let history = useHistory();

    /* let navbarClas = ["donation"];
    toggle ? navbarClas.push("active") : navbarClas.join(" ") */

    const donate = () => { history.push('/dashboard') }

    const signUp = () => {
        return popUp() & volunt()
    }


    return (
        <Section toggle={toggle} /* className={navbarClas.join(" ")} */>
            <div className="topbar">
                <img src={logo} alt="Logo" />
                <FaTimes className="times" onClick={popUp} />
            </div>

            <div className="donation-box">
                <h2>Log In To Aceess Dashboard</h2>
                <form>
                    <input type="text" placeholder="Email" />

                    <input type="text" placeholder="Password" />

                    <button onClick={donate}>Log In</button>
                </form>

            </div>

            <div className="botomBar">Don't have an account?
                <span onClick={signUp} > Sign Up</span>
            </div>
        </Section>
    )
}

export default Donation;