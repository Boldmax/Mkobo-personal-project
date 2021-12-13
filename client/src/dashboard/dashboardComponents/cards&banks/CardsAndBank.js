import Cards from './cards/Cards';
import Banks from './banks/Banks';
/* import CardsAndBanksNav from './CardAndBanksNav'; */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './cardsAndBank.css';


export default function CardsAndBank() {
    return (
        <div className="containerCB">
            <Router>
                {/*  < CardsAndBanksNav /> */}
                <Cards />
                <Switch>
                    <Route path="/dashboard/cardandbank/card" component={() => <Cards />} />
                    <Route path="/dashboard/cardandbank/bank" component={() => <Banks />} />
                </Switch>
            </Router>
        </div>
    )
}