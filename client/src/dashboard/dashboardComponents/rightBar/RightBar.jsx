import "./RightBar.css";
import { BsBagDashFill, BsFillCartFill, BsFillPersonFill, BsFillGridFill } from "react-icons/bs";
import avatar from "../images/profile-1.jpg";
import profile1 from "../images/profile-2.jpg"
import profile2 from "../images/profile-3.jpg"
import profile3 from "../images/profile-4.jpg"
import { BiPlus } from "react-icons/bi";

const RightBar = ({ navShow }) => {

    return (
        <div className="right">
            <div className="top">
                <button id="menu-btn">
                    <span onClick={navShow} ><BsFillGridFill /></span>
                </button>

                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Daniel</b></p>
                        <small className="text-muted">Admin</small>
                    </div>
                    <div className="profile-photo">
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
            </div>
            {/* ----- END OF TOP ---- */}
            <div className="recent-updates">
                <h2>Recent Updates</h2>
                <div className="updates">
                    <div className="update">
                        <div className="profile-photo">
                            <img src={profile1} alt="profile" />
                        </div>
                        <div className="message">
                            <p>
                                <b>Mike Tyson</b> received his order of Night lion tech GPS
                  drone.
                </p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src={profile2} alt="profile" />
                        </div>
                        <div className="message">
                            <p>
                                <b>Mike Tyson</b> received his order of Night lion tech GPS
                  drone.
                </p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src={profile3} alt="profile" />
                        </div>
                        <div className="message">
                            <p>
                                <b>Mike Tyson</b> received his order of Night lion tech GPS
                  drone.
                </p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- END OF RECENT UPDATES -------------------- */}
            <div className="sales-analytics">
                <h2>Sales Analytics</h2>
                <div className="item online">
                    <div className="icon">
                        <span ><BsFillCartFill /></span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>ONLINE ORDERS</h3>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 className="success">+39%</h5>
                        <h3>3849</h3>
                    </div>
                </div>
                <div className="item offline">
                    <div className="icon">
                        <span ><BsBagDashFill /></span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>OFFLINE ORDERS</h3>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 className="danger">-17%</h5>
                        <h3>1100</h3>
                    </div>
                </div>
                <div className="item customers">
                    <div className="icon">
                        <span ><BsFillPersonFill /></span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>NEW CUSTOMERS</h3>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 className="success">+25%</h5>
                        <h3>849</h3>
                    </div>
                </div>
                <div className="item add-product">
                    <div>
                        <span ><BiPlus /></span>
                        <h3>New Investment</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar;
