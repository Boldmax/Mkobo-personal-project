import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import RightBar from './dashboardComponents/rightBar/RightBar';
import SideBar from './dashboardComponents/sidebar/SideBar';
import Account from './dashboardComponents/account/Account';
import Portfolio from './dashboardComponents/portfolio/Portfolio';
import Main from './dashboardComponents/main/Main';
import CardandBank from './dashboardComponents/cards&banks/CardsAndBank';
import Settings from "./dashboardComponents/settings/Settings";
import './Dashboard.css';

const Dashboard = ({ toggler, theme }) => {
    const [nav, setNav] = useState(false);

    // responsive navbar
    const navShow = () => {
        setNav(!nav)
    };

    return (
        <div className="container">
            <Router>
                <SideBar nav={nav} navShow={navShow} />
                <Switch>
                    <Route path="/dashboard/" exact component={Main} />
                    <Route path="/dashboard/cardandbank" exact component={CardandBank} />
                    <Route path="/dashboard/account" component={Account} />
                    <Route path="/dashboard/portfolio" component={Portfolio} />
                    <Route path="/dashboard/settings" exact component={() => <Settings toggler={toggler} theme={theme} />} />
                </Switch>
                <RightBar toggler={toggler} theme={theme} navShow={navShow} />
            </Router>
        </div>
    )
}

export default Dashboard;