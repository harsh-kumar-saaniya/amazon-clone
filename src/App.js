import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51HyPDxLZ3nWO85aLwL7EDa5IA7mlJeiWNA6EiHjnF9l1j6Pv7PC3ehL8JuLpl2WaD5gou6KQIuOMuVGZAVbZugmd00vsXO3U3R");


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // this will only run when the app components loads
    auth.onAuthStateChanged(authUser => {
      // console.log("this is user which has logined", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })


  }, [])

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
