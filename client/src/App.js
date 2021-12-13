import LandingPage from "./LandingPage/LandingPage";
/* import SignUpForm from "./Forms/SignUp/SignUpForm";
import SignInForm from "./Forms/SignIn/SignInForm"; */
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useMemo } from 'react'
import './App.css';
/* import EmailConfirm from "./Forms/EmailConfirm";
import WrongPassword from "./Forms/WrongPassword";
import PasswordReset from "./Forms/PasswordReset"; */
import { GlobalState } from "./GlobalState";

function App() {

  const [show, setShow] = useState(false);
  const [userId, setUserID] = useState(null)
  const value = useMemo(() => ({ userId, setUserID }), [ userId, setUserID ]);

  const closePageHandler = () => setShow(false)

  /// theme  control
  const [theme, setTheme] = useState();

  const toggler = () => {
    setTheme(!theme)
  };

  let themeClass = ["body"];
  theme ? themeClass.push("dark-theme-variables") : themeClass.join(" ")
  return (
    <Router>
      <div className={themeClass.join(" ")}>
        <Switch>
          <GlobalState.Provider value={value}>
            <Route path="/" exact component={LandingPage} />
            <Route path="/dashboard" component={() => <Dashboard toggler={toggler} theme={theme} />} />
          </GlobalState.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
