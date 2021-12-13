import { useState } from 'react'
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Advantage from "./Advantages/Advantage";
import Testimonies from "./Testimonies/Testimonies";
import Footer from "./Footer/Footer";
//import "./landingPage.style.css";


function LandingPage() {

  const [toggle, setToggle] = useState(true);
  const [open, setOpen] = useState(true);
  const popUp = () => {
    setToggle(!toggle)
  };

  const volunt = () => {
    setOpen(!open)
  };

  return (
    <div className="Landing-page">
      <Navbar popUp={popUp} />
      <Header open={open} volunt={volunt} popUp={popUp} toggle={toggle} />
      <Advantage />
      <Testimonies />
      <Footer />
    </div>
  );
}

export default LandingPage;