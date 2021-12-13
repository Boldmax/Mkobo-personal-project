import './Settings.css';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Settings = ({ toggler, theme }) => {

    let themeClass1 = [" "];
    theme ? themeClass1.push("active") : themeClass1.join(" ")

    let themeClass2 = [" "];
    !theme ? themeClass2.push("active") : themeClass2.join(" ")

    return (
        <div className="settings">
            <div className="theme-toggler">
                <span className={themeClass1.join(" ")} onClick={toggler} ><BsFillSunFill /></span>
                <span className={themeClass2.join(" ")} onClick={toggler} ><BsFillMoonFill /></span>
            </div>
{/*             <div className="theme-toggler">
                <span> Other settings</span>
            </div> */}
        </div>
    )
}

export default Settings;
