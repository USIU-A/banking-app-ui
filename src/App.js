import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Confirmation from './components/transaction-confirm';
import Transactions from './components/transactions';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>USIU Bank</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/register"}>Register</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to={"/transaction"}>Transactions</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/transaction-confirm"}>Confirmation</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>


        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/transaction" component={Transactions}/>
              <Route path="/verify" component={Confirmation}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
